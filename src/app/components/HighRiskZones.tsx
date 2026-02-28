import { motion } from 'motion/react';
import { MapPin, AlertTriangle, Droplets, Truck, Radio } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const riskZones = [
  {
    icon: AlertTriangle,
    title: 'Aging Pipelines',
    description: 'Infrastructure over 30 years old with increased corrosion risk',
    risk: 'Critical',
    riskColor: 'text-red-400'
  },
  {
    icon: Droplets,
    title: 'High-Pressure Zones',
    description: 'Areas with pressure fluctuations exceeding safety thresholds',
    risk: 'High',
    riskColor: 'text-orange-400'
  },
  {
    icon: MapPin,
    title: 'Environmentally Sensitive Areas',
    description: 'Proximity to water bodies, protected ecosystems, and wildlife reserves',
    risk: 'Critical',
    riskColor: 'text-red-400'
  },
  {
    icon: Truck,
    title: 'Urban Transport Routes',
    description: 'High-traffic petroleum transport corridors through populated areas',
    risk: 'Medium',
    riskColor: 'text-yellow-400'
  },
  {
    icon: Radio,
    title: 'Remote Monitoring Zones',
    description: 'Areas with limited sensor coverage and delayed response capabilities',
    risk: 'High',
    riskColor: 'text-orange-400'
  }
];

export function HighRiskZones() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
            <MapPin className="w-4 h-4" />
            Risk Assessment
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Where This Solution Matters Most
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Identifying and monitoring critical zones that require predictive intelligence and rapid response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-gray-800"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1609868714484-2b2556006301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRlY2hub2xvZ3klMjBnbG9iYWx8ZW58MXx8fHwxNzcyMjk0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global risk map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>
            
            {/* Floating Risk Indicators */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg max-h-96">
                {/* Risk Pulse Markers */}
                {[
                  { top: '20%', left: '30%', color: 'red' },
                  { top: '40%', left: '60%', color: 'orange' },
                  { top: '65%', left: '25%', color: 'red' },
                  { top: '50%', left: '75%', color: 'yellow' },
                  { top: '75%', left: '50%', color: 'orange' }
                ].map((marker, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="absolute"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <div className="relative">
                      <div className={`w-4 h-4 rounded-full bg-${marker.color}-500`}></div>
                      <div className={`absolute inset-0 w-4 h-4 rounded-full bg-${marker.color}-500 animate-ping`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-gray-950/80 backdrop-blur-sm border border-gray-800">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-300">Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-300">High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-300">Medium</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Risk Zones List */}
          <div className="space-y-4">
            {riskZones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gray-900">
                    <zone.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {zone.title}
                      </h3>
                      <span className={`text-sm font-medium ${zone.riskColor}`}>
                        {zone.risk}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {zone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
