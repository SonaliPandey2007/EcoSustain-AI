import { motion } from 'motion/react';
import { AlertCircle, Droplet, Flame, TrendingUp } from 'lucide-react';

const problems = [
  {
    icon: Droplet,
    title: 'Invisible Fuel Vapor Loss',
    description: 'Up to 2% of gasoline evaporates during storage and transport, leading to significant economic losses and air pollution.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: AlertCircle,
    title: 'Undetected Pipeline Micro-Leaks',
    description: 'Small leaks go unnoticed for weeks or months, causing environmental contamination and long-term ecological damage.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Flame,
    title: 'High Road-Based Emissions',
    description: 'Road transport of petroleum products generates 40% more CO2 than rail or pipeline alternatives.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: TrendingUp,
    title: 'Fragmented Monitoring Systems',
    description: 'Disconnected sensors and manual reporting lead to delayed responses and incomplete environmental risk assessment.',
    color: 'from-purple-500 to-pink-500'
  }
];

export function ProblemStatement() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
            <AlertCircle className="w-4 h-4" />
            Critical Industry Challenges
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Critical Gaps in Petroleum Logistics
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The petroleum industry faces unprecedented environmental challenges that demand intelligent, predictive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity">
                <div className={`w-full h-full rounded-full blur-3xl bg-gradient-to-br ${problem.color}`}></div>
              </div>

              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${problem.color} mb-4`}>
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
