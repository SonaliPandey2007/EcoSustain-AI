import { motion } from 'motion/react';
import { Rocket, Layers, Cloud } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Prototype',
    timeline: '3-4 Months',
    description: 'Build foundational ML models and proof-of-concept dashboard',
    deliverables: [
      'Python ML pipeline with simulated data',
      'Basic React dashboard with visualizations',
      'Risk prediction algorithm (v1.0)',
      'ESG scoring framework'
    ],
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    phase: 'Phase 2',
    title: 'MVP',
    timeline: '6-8 Months',
    description: 'Integrate real-time data streams and expand feature set',
    deliverables: [
      'IoT sensor API integrations',
      'Real-time monitoring dashboard',
      'Environmental impact simulator',
      'Automated alert system'
    ],
    icon: Layers,
    color: 'from-emerald-500 to-green-500'
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: '12+ Months',
    description: 'Deploy cloud infrastructure and expand to multiple locations',
    deliverables: [
      'Cloud-based architecture (AWS/Azure)',
      'Advanced ML with continuous learning',
      'Multi-location rollout',
      'SaaS platform with API access'
    ],
    icon: Cloud,
    color: 'from-purple-500 to-pink-500'
  }
];

export function ImplementationPlan() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Implementation Roadmap
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A phased approach to building and scaling the EcoSentinel AI platform.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="p-8 rounded-2xl bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${phase.color}`}>
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{phase.phase}</div>
                        <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
                      </div>
                      <div className="ml-auto text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                        {phase.timeline}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6">{phase.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-white mb-3">Key Deliverables:</div>
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                          <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.color}`}></div>
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gray-950 border-4 border-gray-900 relative z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${phase.color}`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
