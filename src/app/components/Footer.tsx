import { Cpu, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">EcoSentinel AI</h3>
                <p className="text-xs text-gray-400">Environmental Intelligence</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Transforming environmental monitoring with predictive AI. 
              Protecting ecosystems, optimizing operations, and building sustainable futures.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solution" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#impact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#eco-rewards" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Eco-Rewards
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/admin" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            © 2026 EcoSentinel AI. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}