import { motion } from 'motion/react';
import { TrendingDown, Clock, Leaf, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const impacts = [
  {
    icon: TrendingDown,
    category: 'Environmental',
    title: '70-80% Spill Reduction',
    description: 'Predictive analytics prevent pipeline failures before they occur',
    color: 'from-emerald-500 to-green-500',
    metrics: [
      'Early leak detection',
      'Contamination prevention',
      'Ecosystem protection'
    ]
  },
  {
    icon: Clock,
    category: 'Operational',
    title: 'Faster Detection',
    description: 'Real-time monitoring reduces response time from days to minutes',
    color: 'from-blue-500 to-cyan-500',
    metrics: [
      '99% uptime monitoring',
      'Instant alerts',
      'Automated responses'
    ]
  },
  {
    icon: Leaf,
    category: 'Emissions',
    title: '15-20% Emission Reduction',
    description: 'Modal shift optimization minimizes carbon footprint',
    color: 'from-purple-500 to-pink-500',
    metrics: [
      'Route optimization',
      'Mode selection',
      'Carbon tracking'
    ]
  },
  {
    icon: Heart,
    category: 'Social',
    title: 'Community Benefits',
    description: 'Protecting public health and building stakeholder trust',
    color: 'from-orange-500 to-amber-500',
    metrics: [
      'Water safety',
      'Public health',
      'Community trust'
    ]
  }
];

export function ExpectedImpact() {
  return (
    <section id="impact" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1562103078-64c78e034a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZvcmVzdCUyMHJpdmVyJTIwbmF0dXJlfGVufDF8fHx8MTc3MjI5NDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Clean nature"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
            <Leaf className="w-4 h-4" />
            Measurable Outcomes
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Expected Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quantifiable environmental, operational, and social benefits delivered by EcoSentinel AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className={`w-full h-full rounded-full blur-3xl bg-gradient-to-br ${impact.color}`}></div>
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${impact.color}`}>
                    <impact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {impact.category}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {impact.description}
                </p>

                <div className="space-y-2">
                  {impact.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${impact.color}`}></div>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2">
                70-80%
              </div>
              <div className="text-sm text-gray-400">Spill Prevention</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2">
                72hrs
              </div>
              <div className="text-sm text-gray-400">Early Warning</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2">
                15-20%
              </div>
              <div className="text-sm text-gray-400">Emission Cut</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-gray-400">Transparency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
