import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Mail, Building2, Calendar, Loader2, RefreshCw, CheckCircle, Clock, X, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { TestDataSeeder } from './TestDataSeeder';

interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  timestamp: string;
  status: string;
}

export function AdminDashboard() {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);

  const fetchRequests = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b84cc350/demo-requests`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setRequests(data.requests || []);
        console.log('Fetched demo requests:', data.requests);
      } else {
        throw new Error(data.error || 'Failed to fetch demo requests');
      }
    } catch (err) {
      console.error('Error fetching demo requests:', err);
      setError(err instanceof Error ? err.message : 'Failed to load requests');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
              <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-400">View and manage demo requests</p>
            </div>
            <Button
              onClick={fetchRequests}
              disabled={isLoading}
              className="bg-emerald-500 hover:bg-emerald-600"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              Refresh
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-emerald-500/10">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{requests.length}</div>
                  <div className="text-sm text-gray-400">Total Requests</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {requests.filter(r => r.status === 'pending').length}
                  </div>
                  <div className="text-sm text-gray-400">Pending</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {requests.filter(r => r.status === 'completed').length}
                  </div>
                  <div className="text-sm text-gray-400">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-2">
            <X className="w-5 h-5" />
            {error}
          </div>
        )}

        {/* Welcome Message */}
        {showWelcome && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-blue-400 font-medium mb-1">Welcome to the Admin Dashboard!</p>
                <p className="text-sm text-blue-300/80">
                  {requests.length === 0 
                    ? "No requests yet. Use the 'Seed Test Data' button below to add sample demo requests."
                    : `You have ${requests.length} demo request${requests.length !== 1 ? 's' : ''}. Click on any request to view details.`
                  }
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowWelcome(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Requests List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
          </div>
        ) : requests.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No demo requests yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    {/* Name and Status */}
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">{request.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        request.status === 'pending' 
                          ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {request.status}
                      </span>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${request.email}`} className="hover:text-emerald-400 transition-colors">
                          {request.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Building2 className="w-4 h-4" />
                        {request.company}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {formatDate(request.timestamp)}
                      </div>
                    </div>

                    {/* Message */}
                    {request.message && (
                      <div className="mt-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
                        <p className="text-sm text-gray-300">{request.message}</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 text-white hover:bg-gray-800"
                      onClick={() => window.open(`mailto:${request.email}`, '_blank')}
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        <TestDataSeeder />
      </div>
    </div>
  );
}