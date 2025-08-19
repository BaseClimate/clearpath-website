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
            ClearPath wasn't born in a boardroom. It was born from a shared frustration with a broken system and an unwavering commitment to justice for Canadian homeowners.
          </p>
        </div>
      </section>

      {/* A System Designed for Injustice */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
              A System Designed for Injustice
            </h2>
          </div>
          
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
                For years, a systemic problem has plagued homeowners across Canada. High-pressure sales teams have used deceptive tactics to lock families into predatory contracts for furnaces, water heaters, and other home systems. The result is always the same: crippling debt, illegal liens placed on homes, and the feeling of being trapped with nowhere to turn.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                The system was broken because the fight was designed to be too expensive. Predatory companies knew that the average family couldn't afford the tens of thousands of dollars in legal fees required to challenge them in court. This imbalance of power allowed them to operate with impunity. We knew there had to be a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution We Built */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
              Our Story: Building a Better Way
            </h2>
          </div>
          
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                ClearPath was founded by a team of consumer advocates, technology experts, and legal strategists who saw this injustice and refused to accept it. We became obsessed with a single question: How can we make justice affordable for everyone? Our founding was built on a deep analysis of thousands of these predatory contracts, where we mapped out the companies' tactics and identified their legal weaknesses. We then built a new system from the ground up—a streamlined, digitized process that combines modern efficiency with specialized legal expertise.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed font-medium mt-6">
                Our model makes fighting back possible and simple. That is the story of ClearPath: we didn't just join the fight; we changed how the fight is won.
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
                ClearPath was founded with a single, clear mission: To bring affordable justice to every Canadian homeowner trapped in a predatory contract.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                We are not a law firm. We are a dedicated team of advocates, case managers, and process experts who have created a digitized and streamlined system for contract cancellation. We partner with specialized, independent lawyers who use our proven platform to fight for you.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We have successfully helped families across Canada cancel their contracts.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Proven Process</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Hundreds of successful cancellations across Canada
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
                    Affordable justice for every Canadian homeowner trapped in predatory contracts
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
                We treat every client like family because we understand the immense stress this situation causes. You are not just a case number to us; you are a family we are committed to fighting for.
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
            Let us help you break free from your predatory contract, just like we've helped hundreds of Canadian families.
          </p>
          
          <button 
            onClick={onOpenModal}
            className="bg-white hover:bg-slate-50 text-slate-700 px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all mb-8"
          >
            Get a Free Case Review
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-200">
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              Coordinated with licensed legal professionals
            </span>
            <span className="flex items-center font-medium">
              <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
              Free, no-obligation review
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