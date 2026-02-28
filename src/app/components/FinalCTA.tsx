import { motion } from 'motion/react';
import { ArrowRight, Rocket, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FinalCTAProps {
  onRequestDemo: () => void;
}

export function FinalCTA({ onRequestDemo }: FinalCTAProps) {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763702426948-4888730bcda2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGdyZWVuJTIwZW5lcmd5JTIwcGxhbnR8ZW58MXx8fHwxNzcyMjk0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Sustainability"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/90 to-gray-950"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            <Rocket className="w-4 h-4" />
            Join the Environmental Intelligence Revolution
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Build the Future of
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Environmental Intelligence
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your environmental monitoring from reactive to predictive. 
            Reduce spills, cut emissions, and build stakeholder trust with AI-powered intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              onClick={onRequestDemo}
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-6 text-lg group"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onRequestDemo}
              className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Pilot Program
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400">Real-Time Monitoring</div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">72hrs</div>
              <div className="text-gray-400">Early Warning System</div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400">ESG Compliance</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}