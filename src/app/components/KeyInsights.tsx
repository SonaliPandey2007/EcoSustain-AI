import { motion } from 'motion/react';
import { TrendingDown, Clock, BarChart3, FileText } from 'lucide-react';

const insights = [
  {
    icon: TrendingDown,
    title: 'Fragmented Monitoring',
    description: 'Disconnected systems fail to provide a unified view of environmental risks.',
    stat: '60%',
    statLabel: 'Data Silos'
  },
  {
    icon: Clock,
    title: 'Reactive Systems',
    description: 'Current solutions only respond after damage has occurred, leading to costly cleanup.',
    stat: '48hrs',
    statLabel: 'Avg Response Time'
  },
  {
    icon: BarChart3,
    title: 'No Quantified Risk',
    description: 'Environmental impact is not measured in real-time or translated into actionable metrics.',
    stat: '0%',
    statLabel: 'Predictive Capability'
  },
  {
    icon: FileText,
    title: 'Retrospective ESG',
    description: 'Compliance reports are generated after the fact, missing opportunities for prevention.',
    stat: '12mo',
    statLabel: 'Reporting Lag'
  }
];

export function KeyInsights() {
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
            Key Industry Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Understanding the fundamental challenges that prevent effective environmental protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-gray-950 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <insight.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{insight.stat}</div>
                  <div className="text-xs text-gray-500">{insight.statLabel}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {insight.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {insight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
