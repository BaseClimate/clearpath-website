import React from 'react';
import { Quote, Star, DollarSign } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

const Testimonials: React.FC<Props> = ({ onOpenModal }) => {
  const testimonials = [
    {
      name: "David L.",
      location: "Mississauga, ON",
      quote: "As a business owner, I was furious when I realized I'd been tricked into a $9,000 contract for a simple HEPA air filter. The frustration was immense. ClearPath's model is brilliant—they saved me over $4,500, handled the entire legal process, and made fighting back on principle not only possible, but simple.",
      totalSaved: "Over $4,500"
    },
    {
      name: "Sarah J.",
      location: "Richmond Hill, ON",
      quote: "I felt so foolish for signing. When I discovered the total buyout for our new tankless water heater was over $22,000, I felt sick. ClearPath was a lifeline. They cut my total debt by over $11,000, and my new monthly payment is even a little lower and finally includes maintenance. A massive weight has been lifted.",
      totalSaved: "Over $11,000"
    },
    {
      name: "Mark T.",
      location: "Hamilton, ON",
      quote: "My elderly father was pressured into a shocking $45,000 contract for a furnace and tankless water heater he didn't need. He felt completely trapped. ClearPath saved him over $22,500, got the lien cancelled, and gave him his peace of mind back. I can't recommend them enough.",
      totalSaved: "Over $22,500"
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
              
              {/* Prominent Total Savings Highlight */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-xl mb-8 text-center shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-8 w-8 mr-2" />
                  <span className="text-sm font-medium uppercase tracking-wide">Total Saved</span>
                </div>
                <div className="text-3xl font-bold">
                  {testimonial.totalSaved}
                </div>
              </div>
              
              <Quote className="h-10 w-10 text-slate-300 mb-6" />
              
              <blockquote className="text-slate-600 leading-relaxed mb-6 italic font-medium text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Additional Benefits Line */}
              <div className="bg-teal-50 p-4 rounded-lg mb-6 border border-teal-100 text-center">
                <p className="text-sm text-teal-700 font-medium">
                  Plus, a lower monthly payment with maintenance included
                </p>
              </div>
              
              <footer className="border-t border-slate-200 pt-6">
                <div className="font-bold text-slate-800 text-lg">{testimonial.name}</div>
                <div className="text-slate-600 font-medium">{testimonial.location}</div>
              </footer>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={onOpenModal}
            className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg"
          >
            Get My Free Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;