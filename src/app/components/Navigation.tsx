import { Cpu } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  onRequestDemo: () => void;
}

export function Navigation({ onRequestDemo }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-white">EcoSentinel AI</h1>
              <p className="text-xs text-gray-400">Environmental Intelligence</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm text-gray-300 hover:text-white transition-colors">
              Solution
            </a>
            <a href="#impact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Impact
            </a>
            <a href="#eco-rewards" className="text-sm text-gray-300 hover:text-white transition-colors">
              Eco-Rewards
            </a>
            <Button 
              size="sm" 
              onClick={onRequestDemo}
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}