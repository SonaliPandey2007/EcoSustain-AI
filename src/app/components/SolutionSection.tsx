import { motion } from 'motion/react';
import { Brain, Globe2, Route, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const modules = [
  {
    icon: Brain,
    title: 'Predictive Risk Engine',
    description: 'ML-powered system that analyzes pressure, temperature, and flow patterns to predict pipeline failures 72 hours in advance.',
    features: ['Real-time anomaly detection', 'Failure probability scoring', 'Automated alert system'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe2,
    title: 'Environmental Impact Simulator',
    description: 'Advanced simulation engine that models contamination spread and environmental damage in various scenarios.',
    features: ['Spill impact modeling', 'Groundwater contamination analysis', 'Ecosystem risk assessment'],
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Route,
    title: 'Modal Shift Optimization',
    description: 'Intelligent routing system that recommends optimal transport methods to minimize emissions and environmental impact.',
    features: ['Multi-modal route optimization', 'Carbon footprint calculation', 'Cost-benefit analysis'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Dynamic ESG Risk Score',
    description: 'Real-time ESG scoring system (0-100) that quantifies environmental compliance and risk exposure.',
    features: ['Continuous compliance monitoring', 'Regulatory alignment tracking', 'Stakeholder reporting'],
    color: 'from-amber-500 to-orange-500'
  }
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
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
            <Brain className="w-4 h-4" />
            Intelligent Platform
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI-Powered Environmental Risk
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Intelligence Platform
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive suite of AI modules that transform environmental monitoring from reactive to predictive.
          </p>
        </motion.div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 rounded-2xl overflow-hidden border border-gray-800"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763110305836-17790330be78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBkaWdpdGFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzIyMDEyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI Technology Network"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className={`w-full h-full rounded-full blur-3xl bg-gradient-to-br ${module.color}`}></div>
              </div>

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${module.color} mb-6`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {module.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${module.color}`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
