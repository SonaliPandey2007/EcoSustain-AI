import { motion } from 'motion/react';
import { Zap, TreePine, Users, Sparkles } from 'lucide-react';
import { ESGMeter } from './ESGMeter';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ecoActions = [
  {
    icon: TreePine,
    action: 'Plant Trees',
    points: 50,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    action: 'Carpool / Public Transit',
    points: 30,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    action: 'Report Hazards',
    points: 40,
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Sparkles,
    action: 'Clean-up Drives',
    points: 60,
    color: 'from-purple-500 to-pink-500'
  }
];

const leaderboard = [
  { rank: 1, name: 'GreenTech Industries', points: 8450, badge: '🏆' },
  { rank: 2, name: 'EcoLogistics Corp', points: 7230, badge: '🥈' },
  { rank: 3, name: 'Sustainable Solutions Ltd', points: 6890, badge: '🥉' },
  { rank: 4, name: 'CleanEnergy Partners', points: 5670, badge: '' },
  { rank: 5, name: 'EnviroGuard Systems', points: 4920, badge: '' }
];

export function EcoRewardSystem() {
  return (
    <section id="eco-rewards" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Innovative Feature
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            🌱 Eco-Reward System
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Gamified sustainability platform that makes environmental responsibility 
            <span className="text-emerald-400"> measurable, trackable, and rewarding</span>.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 rounded-2xl overflow-hidden border border-gray-800"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763856957026-a74ab4f05891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBoYW5kcyUyMG5hdHVyZXxlbnwxfHx8fDE3NzIyOTQzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tree planting"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Eco Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Earn Eco-Points</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ecoActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${action.color}`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {action.action}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-emerald-400">+{action.points}</span>
                        <span className="text-sm text-gray-400">points</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* User Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 mt-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold text-white">Your Dashboard</h4>
                <div className="text-sm text-gray-400">This Month</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-gray-950">
                  <div className="text-3xl font-bold text-emerald-400">2,450</div>
                  <div className="text-sm text-gray-400 mt-1">Total Points</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-950">
                  <div className="text-3xl font-bold text-blue-400">18</div>
                  <div className="text-sm text-gray-400 mt-1">Actions</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-950">
                  <div className="text-3xl font-bold text-purple-400">#47</div>
                  <div className="text-sm text-gray-400 mt-1">Rank</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ESG Integration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-gray-900 border border-gray-800"
          >
            <ESGMeter score={78} size={180} label="Company ESG Score" />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Eco-points contribute to your organization's ESG performance metrics
              </p>
            </div>
          </motion.div>
        </div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">🏆 Top Contributors</h3>
          <div className="space-y-3">
            {leaderboard.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  index < 3 ? 'bg-gray-950 border border-emerald-500/30' : 'bg-gray-950'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                    index < 3 ? 'bg-gradient-to-br from-emerald-500 to-blue-500' : 'bg-gray-800'
                  }`}>
                    <span className="text-lg font-bold text-white">
                      {entry.badge || entry.rank}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{entry.name}</div>
                    <div className="text-sm text-gray-400">{entry.points.toLocaleString()} points</div>
                  </div>
                </div>
                {index < 3 && (
                  <div className="text-2xl">{entry.badge}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
