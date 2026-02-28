import { motion } from 'motion/react';
import { Play, CheckCircle, Database, BarChart3, Shield } from 'lucide-react';
import { Button } from './ui/button';

interface InteractiveDemoSectionProps {
  onRequestDemo: () => void;
}

export function InteractiveDemoSection({ onRequestDemo }: InteractiveDemoSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            <Play className="w-4 h-4" />
            Interactive Demo Platform
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience the Platform
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Live & Interactive
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This isn't just a mockup. Try our fully functional demo with real backend integration, 
            live data storage, and interactive features.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Database,
              title: "Real Data Storage",
              description: "Demo requests saved to Supabase backend",
              color: "emerald"
            },
            {
              icon: BarChart3,
              title: "Admin Dashboard",
              description: "View all submissions in real-time",
              color: "blue"
            },
            {
              icon: Shield,
              title: "Production Ready",
              description: "Enterprise-grade security & validation",
              color: "purple"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-${feature.color}-500/10 mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to See It in Action?</h3>
              <p className="text-gray-300">
                Submit a demo request and check the admin dashboard to see your data stored in real-time
              </p>
              <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Instant submission</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Live backend</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Real-time updates</span>
                </div>
              </div>
            </div>
            <Button
              onClick={onRequestDemo}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-6 text-lg whitespace-nowrap"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Live Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
