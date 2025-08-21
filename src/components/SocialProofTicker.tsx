import React from 'react';

const SocialProofTicker: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 px-4">Trusted by Homeowners Across Canada</h2>
        
        {/* Scroller container with a gradient mask for a fade-in/fade-out effect */}
        <div 
          className="scroller relative w-full overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* Wrapper for seamless looping. */}
          <div className="flex scrolling-wrapper">
            {/* Set 1 of Testimonials */}
            <div className="flex flex-shrink-0 items-center gap-8 px-4">
              {/* Profile Pill 1 - Sarah with real photo */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/sarah.jpg" 
                  alt="Happy customer Sarah J."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"Saved me from a $22,000 debt."</p>
                  <p className="text-gray-500 text-sm text-left">- Sarah J., Richmond Hill</p>
                </div>
              </div>
              
              {/* Profile Pill 2 - Mark with real photo */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/mark.jpg" 
                  alt="Happy customer Mark T."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"Finally have peace of mind."</p>
                  <p className="text-gray-500 text-sm text-left">- Mark T., Hamilton</p>
                </div>
              </div>
              
              {/* Profile Pill 3 */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/linda.jpg" 
                  alt="Happy customer Linda P."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"They got the lien off my house!"</p>
                  <p className="text-gray-500 text-sm text-left">- Linda P., Ottawa</p>
                </div>
              </div>
              
              {/* Profile Pill 4 */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/david.jpg" 
                  alt="Happy customer David L."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"So glad I found them."</p>
                  <p className="text-gray-500 text-sm text-left">- David L., Mississauga</p>
                </div>
              </div>
            </div>
            
            {/* Set 2 of Testimonials (Identical duplicate for seamless loop) */}
            <div className="flex flex-shrink-0 items-center gap-8 px-4">
              {/* Profile Pill 1 - Sarah with real photo */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/sarah.jpg" 
                  alt="Happy customer Sarah J."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"Saved me from a $22,000 debt."</p>
                  <p className="text-gray-500 text-sm text-left">- Sarah J., Richmond Hill</p>
                </div>
              </div>
              
              {/* Profile Pill 2 - Mark with real photo */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/mark.jpg" 
                  alt="Happy customer Mark T."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"Finally have peace of mind."</p>
                  <p className="text-gray-500 text-sm text-left">- Mark T., Hamilton</p>
                </div>
              </div>
              
              {/* Profile Pill 3 */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/linda.jpg" 
                  alt="Happy customer Linda P."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"They got the lien off my house!"</p>
                  <p className="text-gray-500 text-sm text-left">- Linda P., Ottawa</p>
                </div>
              </div>
              
              {/* Profile Pill 4 */}
              <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-full shadow-sm">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="/img/testimonials/david.jpg" 
                  alt="Happy customer David L."
                />
                <div>
                  <p className="text-gray-700 font-semibold text-left">"So glad I found them."</p>
                  <p className="text-gray-500 text-sm text-left">- David L., Mississauga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofTicker;