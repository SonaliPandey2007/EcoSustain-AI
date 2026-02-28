import { useState } from 'react';
import { Button } from './ui/button';
import { Database, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const sampleRequests = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@petrocorp.com",
    company: "PetroCorp Industries",
    message: "We're interested in implementing predictive analytics for our Gulf Coast pipeline network. Looking for a demo of the spill prevention features."
  },
  {
    name: "Michael Chen",
    email: "m.chen@esgcompliance.org",
    company: "Global ESG Compliance Board",
    message: "We need to evaluate your platform for regulatory compliance monitoring across multiple petroleum facilities."
  },
  {
    name: "David Rodriguez",
    email: "david.r@greenenergyinc.com",
    company: "Green Energy Inc.",
    message: "Interested in the eco-reward system and how it integrates with our sustainability initiatives."
  },
  {
    name: "Emma Williams",
    email: "emma@fueltransport.co",
    company: "National Fuel Transport",
    message: "Our fleet of 200+ fuel trucks needs better route optimization. Can you help?"
  },
  {
    name: "Robert Taylor",
    email: "r.taylor@oilrefinery.com",
    company: "Taylor Oil & Refinery",
    message: "We had 3 small spills last year. Your predictive system could save us millions. Let's talk."
  }
];

export function TestDataSeeder() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const seedTestData = async () => {
    setIsSeeding(true);
    setStatus('idle');
    setMessage('');

    try {
      let successCount = 0;
      
      for (const request of sampleRequests) {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-b84cc350/demo-request`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify(request)
          }
        );

        const data = await response.json();
        
        if (response.ok && data.success) {
          successCount++;
          console.log(`✓ Seeded: ${request.name}`);
        } else {
          console.error(`✗ Failed to seed: ${request.name}`, data.error);
        }

        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      setStatus('success');
      setMessage(`Successfully seeded ${successCount} of ${sampleRequests.length} demo requests!`);
    } catch (error) {
      console.error('Error seeding test data:', error);
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to seed test data');
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <Database className="w-5 h-5 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white mb-1">Test Data</h3>
            <p className="text-xs text-gray-400 mb-3">
              Add sample demo requests for testing
            </p>

            {status === 'success' && (
              <div className="mb-3 p-2 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-400">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-3 p-2 rounded bg-red-500/10 border border-red-500/20 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-400">{message}</p>
              </div>
            )}

            <Button
              size="sm"
              onClick={seedTestData}
              disabled={isSeeding}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white"
            >
              {isSeeding ? (
                <>
                  <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                  Seeding...
                </>
              ) : (
                <>
                  <Database className="w-3 h-3 mr-2" />
                  Seed Test Data
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
