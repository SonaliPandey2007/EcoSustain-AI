import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export function HeroSection({ onRequestDemo }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625759882923-ef3ba987701b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMGluZHVzdHJpYWwlMjBuaWdodHxlbnwxfHx8fDE3NzIyOTQzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Oil refinery at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Powered by AI & Predictive Analytics
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            From Reactive Monitoring to
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Predictive Environmental Intelligence
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI-powered platform to predict pipeline failures, simulate environmental impact, 
            and optimize emissions in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              onClick={onRequestDemo}
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-6 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              View Demo
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-lg">
              Explore Solution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto"
          >
            {[
              { value: '70-80%', label: 'Spill Reduction' },
              { value: '15-20%', label: 'Emission Reduction' },
              { value: '24/7', label: 'Real-Time Monitoring' }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}