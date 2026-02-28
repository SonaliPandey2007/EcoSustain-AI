import { motion } from 'motion/react';
import { Blocks, Cloud, Puzzle, Globe2, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: 'Modular System',
    description: 'Flexible architecture allows for customization and feature expansion based on specific needs.'
  },
  {
    icon: Cloud,
    title: 'Cloud-Based Infrastructure',
    description: 'Scalable cloud deployment ensures performance and availability across multiple locations.'
  },
  {
    icon: Puzzle,
    title: 'API Integrations',
    description: 'Seamless connectivity with existing IoT sensors, monitoring systems, and enterprise software.'
  },
  {
    icon: Globe2,
    title: 'Multi-Location Rollout',
    description: 'Designed to scale from single-site deployment to nationwide environmental intelligence networks.'
  },
  {
    icon: DollarSign,
    title: 'SaaS Business Model',
    description: 'Subscription-based pricing makes advanced environmental intelligence accessible to organizations of all sizes.'
  }
];

export function Scalability() {
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
            Built for Scale
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            EcoSentinel AI is designed to grow with your organization, from pilot programs to enterprise-wide deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-950 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-emerald-500/10 inline-flex mb-4">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="p-6 rounded-xl bg-gray-950 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-emerald-500/10 inline-flex mb-4">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Deployment Scale Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Deployment Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Pilot</h4>
              <p className="text-sm text-gray-400">Single facility deployment</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500"></div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Regional</h4>
              <p className="text-sm text-gray-400">Multi-site coverage</p>
            </div>
            <div className="text-center">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-purple-500"></div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise</h4>
              <p className="text-sm text-gray-400">Nationwide network</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
