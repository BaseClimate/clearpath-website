import React from 'react';
import { Shield, Heart, Users, Target, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  onOpenModal: () => void;
}

const AboutUsPage: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={onOpenModal} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            About Us: A Mission for Justice
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            ClearPath wasn't born in a boardroom. It was born out of love, frustration, and an unwavering commitment to justice for one family—a commitment that now extends to every family in Ontario.
          </p>
        </div>
      </section>

      {/* Founder's Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Tim's Professional Photo */}
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-slate-300 shadow-lg">
              <img 
                src="/Gemini_Generated_Image_xjv1hcxjv1hcxjv1.jpg" 
                alt="Tim Wells, Founder of ClearPath"
                className="w-full h-full object-cover"
              />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
              "When they trapped my grandmother in debt, they didn't count on her grandson being a tech founder who would build an entirely new system just to fight back."
            </blockquote>
            
            <cite className="text-xl text-slate-600 font-semibold">
              - Tim Wells, Founder of ClearPath
            </cite>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
              Our Story: Why We Exist
            </h2>
          </div>
          
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                ClearPath wasn't just an idea; it was a necessary invention born from a fight for my grandmother.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                In 2022, my grandma, who has lived in the same house for 50 years, became a target. A parade of door-to-door salespeople, misrepresenting themselves as partners in government 'Green' programs, pressured her into signing contracts for a new furnace, a tankless water heater, a HEPA filter, and more.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                They promised her savings. What they delivered was a mountain of debt totaling <strong className="text-red-600">just over $90,000</strong>, secured by liens against the home she had worked her whole life for.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                When our family discovered the scale of the scam, we were furious. But our anger quickly turned to frustration when we learned why these companies are so successful: the system is broken. Hiring a lawyer for a multi-year court battle would cost tens of thousands of dollars, with no guarantee of winning. The fight was designed to be too expensive for the average family.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                I couldn't accept that. With my background in technology and process optimization, I knew there had to be a better way. I became obsessed, diving into the legal precedents, digitizing the paperwork, and building a streamlined process from the ground up. I partnered with a small group of specialized consumer protection lawyers who believed in the mission.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed font-semibold">
                Together, we built the system that became ClearPath—and we got my grandmother's contracts and liens cancelled completely. We proved that when you combine legal expertise with modern efficiency, you can make justice affordable for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Target className="h-10 w-10 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
              Our Mission
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-teal-50 to-slate-50 p-10 rounded-2xl border border-teal-200">
              <p className="text-xl text-slate-700 leading-relaxed font-semibold mb-8">
                ClearPath was founded with a single, clear mission: To bring affordable justice to every Ontario homeowner trapped in a predatory contract.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                We are not a law firm. We are a dedicated team of advocates, case managers, and process experts who have created a digitized and streamlined system for contract cancellation. We partner with specialized, independent lawyers who use our proven platform to fight for you.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We have now successfully helped hundreds of families across Ontario cancel their contracts, saving them millions of dollars in fraudulent debt. We turned a personal fight into a powerful, proven path to freedom for everyone.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Proven Results</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Hundreds of successful cancellations, millions saved in fraudulent debt
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Team</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Specialized advocates partnered with independent legal experts
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Target className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Clear Mission</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Affordable justice for every Ontario homeowner trapped in predatory contracts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Commitment */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
              Our Commitment to You
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Every decision we make is guided by the values that founded this company: justice, transparency, and unwavering support for families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">100% Transparent</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                No hidden fees, no surprises. You know exactly what you're paying and what you're getting.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">Family-First</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We treat every client like family because we know what it's like to fight for someone you love.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">Results-Driven</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We don't get paid unless we succeed. Your victory is our victory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">
            Ready to Join Our Fight for Justice?
          </h2>
          <p className="text-xl text-slate-100 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
            Let us help you break free from your predatory contract, just like we helped Tim's grandmother and hundreds of other Ontario families.
          </p>
          
          <button 
            onClick={onOpenModal}
            className="bg-white hover:bg-slate-50 text-slate-700 px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all mb-8"
          >
            Get My Free Analysis
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-200">
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              100% Risk-Free Guarantee
            </span>
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              No Credit Check Required
            </span>
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              Personal Support Every Step
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;