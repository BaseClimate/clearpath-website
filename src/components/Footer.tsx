import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-teal-400 mr-3" />
              <span className="text-2xl font-bold tracking-tight">ClearPath</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md font-medium">
              Expert advocates specializing in HVAC contract cancellation. We partner with licensed legal 
              professionals to help Ontario homeowners break free from predatory contracts.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-4" />
                <span className="font-medium">(289) 635-4889</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-4" />
                <span className="font-medium">info@clearpathcancellation.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-teal-400 mr-4" />
                <span className="font-medium">333 Bay Street, Suite 1400, Toronto, ON M5H 2R2</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors font-medium">How It Works</a></li>
              <li><a href="/why-you-can-cancel" className="hover:text-white transition-colors font-medium">Why You Can Cancel</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors font-medium">Case Studies</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors font-medium">Resources</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors font-medium">FAQ</a></li>
              <li><a href="/about-us" className="hover:text-white transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-tight">Legal</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Legal Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-16 pt-10">
          <div className="bg-slate-700 p-8 rounded-xl mb-8">
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              <strong className="text-white">Legal Disclaimer:</strong> ClearPath Contract Cancellation is not a law firm and does not provide legal advice. 
              We are a specialized advocacy and financial administration firm that partners with independent, 
              licensed legal experts to represent our clients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm font-medium">
              © 2024 ClearPath Contract Cancellation. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-2 sm:mt-0 font-medium">
              Serving homeowners across Ontario
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;