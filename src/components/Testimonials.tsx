import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

const Testimonials: React.FC<Props> = ({ onOpenModal }) => {
  const testimonials = [
    {
      name: "David L.",
      location: "Mississauga, ON",
      quote: "As a business owner, I was furious when I realized I'd been tricked into a $9,000 contract for a simple HEPA air filter. The frustration was immense. ClearPath guided me through the legal process and made fighting back on principle not only possible, but simple.",
      image: "/img/testimonials/david.jpg",
      positionClass: 'object-top'
    },
    {
      name: "Sarah J.",
      location: "Richmond Hill, ON",
      quote: "I felt so foolish for signing. When I discovered the total buyout for our new tankless water heater was over $22,000, I felt sick. ClearPath was a lifeline. They explained my rights, coordinated with a legal professional, and made the process clear and manageable.",
      image: "/img/testimonials/sarah.jpg",
      positionClass: 'object-center'
    },
    {
      name: "Mark T.",
      location: "Hamilton, ON",
      quote: "My elderly father was pressured into a shocking contract for a furnace and tankless water heater he didn't need. He felt completely trapped. ClearPath helped us navigate the process, the lien was cancelled, and we got our peace of mind back. I can't recommend them enough.",
      image: "/img/testimonials/mark.jpg",
      positionClass: 'object-center'
    }
  ];
  
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-teal-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Hear From Homeowners We've Helped
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Neutral Outcome Highlight */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-xl mb-8 text-center shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-8 w-8 mr-2" />
                  <span className="text-sm font-medium uppercase tracking-wide">Outcome</span>
                </div>
                <div className="text-3xl font-bold">
                  Contract Cancelled
                </div>
              </div>
              
              <Quote className="h-10 w-10 text-slate-300 mb-6" />
              
              <blockquote className="text-slate-600 leading-relaxed mb-6 italic font-medium text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Additional Note */}
              <div className="bg-teal-50 p-4 rounded-lg mb-6 border border-teal-100 text-center">
                <p className="text-sm text-teal-700 font-medium">
                  Coordinated with licensed legal professionals where required
                </p>
              </div>
              
              <footer className="border-t border-slate-200 pt-6 flex items-center">
                <img 
                  src={testimonial.image} 
                  alt="Portrait"
                  className={`w-16 h-16 rounded-full object-cover mr-4 ${testimonial.positionClass}`}
                />
                <div>
                  <div className="font-bold text-slate-800 text-lg">{testimonial.name}</div>
                  <div className="text-slate-600 font-medium">{testimonial.location}</div>
                </div>
              </footer>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={onOpenModal}
            className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg"
          >
            Get a Free Case Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;