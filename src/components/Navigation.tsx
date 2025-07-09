import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

const Navigation: React.FC<Props> = ({ onOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate there first
      if (!window.location.pathname.endsWith('/')) {
        // Store the hash in session storage to scroll after page load
        sessionStorage.setItem('scrollToSection', href);
        window.location.href = '/';
        return;
      }
      
      // If we're already on the home page, scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/why-you-can-cancel' || href === '/faq' || href === '/about-us' || href === '/case-studies' || href === '/resources' || href === '/') {
      // Handle navigation to dedicated pages
      window.location.href = href;
    }
  };

  const handleModalOpen = () => {
    setIsMobileMenuOpen(false);
    // Don't pass any parameters - let modal start fresh
    onOpenModal();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('/')}
              className="flex items-center focus:outline-none"
              aria-label="Go to home page"
            >
              <Shield className="h-8 w-8 text-slate-700 mr-3" />
              <span className="text-2xl font-bold text-slate-700 tracking-tight">ClearPath</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => handleNavClick('#how-it-works')}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium text-base"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavClick('/why-you-can-cancel')}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium text-base"
              >
                Why You Can Cancel
              </button>
              <button 
                onClick={() => handleNavClick('/case-studies')}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium text-base"
              >
                Case Studies
              </button>
              <button 
                onClick={() => handleNavClick('/resources')}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium text-base"
              >
                Resources
              </button>
              <button 
                onClick={() => handleNavClick('/faq')}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium text-base"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavClick('/about-us')}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium text-base"
              >
                About Us
              </button>
            </div>
            
            {/* Desktop CTA Button */}
            <button 
              onClick={onOpenModal}
              className="hidden lg:block bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-sm"
            >
              Get My Free Analysis
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <button 
                  onClick={() => handleNavClick('/')}
                  className="flex items-center focus:outline-none"
                  aria-label="Go to home page"
                >
                  <Shield className="h-6 w-6 text-teal-400 mr-2" />
                  <span className="text-xl font-bold text-white tracking-tight">ClearPath</span>
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-6">
                  <button
                    onClick={() => handleNavClick('/')}
                    className="block w-full text-left text-xl font-semibold text-white hover:text-teal-300 transition-colors py-3 border-b border-slate-700"
                  >
                    Home
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('#how-it-works')}
                    className="block w-full text-left text-xl font-semibold text-white hover:text-teal-300 transition-colors py-3 border-b border-slate-700"
                  >
                    How It Works
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('/why-you-can-cancel')}
                    className="block w-full text-left text-xl font-semibold text-white hover:text-teal-300 transition-colors py-3 border-b border-slate-700"
                  >
                    Why You Can Cancel
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('/case-studies')}
                    className="block w-full text-left text-xl font-semibold text-white hover:text-teal-300 transition-colors py-3 border-b border-slate-700"
                  >
                    Case Studies
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('/resources')}
                    className="block w-full text-left text-xl font-semibold text-white hover:text-teal-300 transition-colors py-3 border-b border-slate-700"
                  >
                    Resources
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('/faq')}
                    className="block w-full text-left text-xl font-semibold text-white hover:text-teal-300 transition-colors py-3 border-b border-slate-700"
                  >
                    FAQ
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('/about-us')}
                    className="block w-full text-left text-xl font-semibold text-white hover:text-teal-300 transition-colors py-3 border-b border-slate-700"
                  >
                    About Us
                  </button>
                </nav>
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-slate-700">
                <button
                  onClick={handleModalOpen}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  Get My Free Analysis
                </button>
                
                <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-slate-400">
                  <span className="flex items-center">
                    <span className="text-teal-400 mr-1">✓</span>
                    No obligation
                  </span>
                  <span className="flex items-center">
                    <span className="text-teal-400 mr-1">✓</span>
                    100% confidential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;