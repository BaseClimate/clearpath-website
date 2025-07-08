import React from 'react';
import { HelpCircle, Shield, CheckCircle, Scale, Clock, CreditCard, Home, DollarSign, Users, FileText, AlertTriangle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  onOpenModal: () => void;
}

const FAQPage: React.FC<Props> = ({ onOpenModal }) => {
  const faqs = [
    {
      question: "Why shouldn't I just use my own lawyer to cancel my contract?",
      answer: "You certainly can, but it's important to understand the challenges. The reason ClearPath was founded is that the high cost and complexity of litigation is exactly why these HVAC companies have gotten away with this for years. A local lawyer, even a great one, would be tackling this complex, multi-layered fraud for the first time. This involves significant time (and cost) for them to research the specific tactics, relevant case law, and procedural steps, with a greater risk of an unfavorable outcome.\n\nClearPath is different. We have a proven, digitized process built on the experience of thousands of successful cancellations. Our legal partners don't have a learning curve; they utilize our streamlined system and established arguments to resolve your case efficiently and effectively. We make fighting back simple and affordable.",
      icon: Scale
    },
    {
      question: "Is this legal? What happens if the HVAC company tries to sue me?",
      answer: "Yes, this is a 100% legal and established process. Contract cancellation is a remedy based on powerful legislation like the Consumer Protection Act and other provincial laws, which were created to protect consumers from exactly these types of predatory practices. While any company can threaten legal action, our process is designed to robustly defend your rights. The legal partner assigned to your case will manage all communication and required responses.",
      icon: Shield
    },
    {
      question: "Do I have to return the equipment if my contract is cancelled?",
      answer: "No, you do not. This is one of the most powerful protections consumers have. Under Canadian consumer protection laws, when an agreement is cancelled because of an unfair practice (like the high-pressure sales tactics these companies use), the consumer is legally entitled to retain the goods with no further obligation. You are guaranteed to keep your equipment. We ensure this right is fully enforced.",
      icon: Home
    },
    {
      question: "Will this affect my credit score?",
      answer: "No. Our approval process is based on the predatory nature of your existing contract, not your personal credit history. We do not perform a credit check for you to qualify for our payment plan. The finance companies may attempt to report missed payments to credit bureaus after you stop paying them, but part of the resolution process handled by your legal partner involves addressing and disputing these credit reporting claims.",
      icon: CreditCard
    },
    {
      question: "Am I guaranteed to be approved for your service?",
      answer: "Our approval is based on the details of your contract, not your credit score. If your contract involves the predatory sales tactics and violations of consumer protection laws that we specialize in, you are guaranteed to be approved for our services. The initial free case review will confirm your eligibility.",
      icon: CheckCircle
    },
    {
      question: "How can ClearPath be risk-free? What is your guarantee?",
      answer: "Our guarantee is simple: We succeed in canceling your contract, or you are refunded all payments you have made to ClearPath. We are so confident in our proven process that we are willing to take on all the financial risk of the legal and administrative costs. You have nothing to lose and thousands of dollars in debt to save.",
      icon: Shield
    },
    {
      question: "Are you a law firm?",
      answer: "No, ClearPath is not a law firm. We are a specialized advocacy and administration firm. We handle everything outside of the practice of law: case analysis, client support, process automation, and financing. We then connect you with and manage the relationship with an independent, licensed legal partner who specializes in consumer protection law and performs the specific legal work on your behalf. This model allows for maximum efficiency and affordability.",
      icon: HelpCircle
    },
    {
      question: "How long does the entire process take?",
      answer: "You stop paying your old finance company as soon as your assigned legal partner sends the official Notice of Cancellation, which is typically within two weeks of onboarding with us. The full legal termination of the contract and removal of any lien can take between 6-12 months, but during that time, we and our partners handle the entire process while you are already enjoying a lower monthly payment with us.",
      icon: Clock
    },
    {
      question: "How does ClearPath make money? What are the details of the new payment plan?",
      answer: "We believe in 100% transparency. Our model is built on saving you from a massive, unjust debt. Let's say your contract's total buyout is $20,000. Our goal is to cancel that contract and have you pay a fraction of that cost—for example, $10,000—for the true value of the equipment and all legal services.\n\nYou then pay that new, lower total cost to us over time through a manageable payment plan. Your new monthly payment will be about 10% lower than what you were paying before, and it now includes comprehensive maintenance. Our profit is earned from the difference between our efficient operational costs and the fair price you pay, a price that is still dramatically lower than what the HVAC company was demanding.",
      icon: DollarSign
    },
    {
      question: "Can I use my own lawyer instead of yours?",
      answer: "We have a network of independent, licensed Canadian lawyers who specialize specifically in consumer protection law and have a proven track record with these types of cases. We connect you with a partner from this vetted network.\n\nWhile you are always free to hire any lawyer you wish, the efficiency and affordability of our model comes from the deep integration between our digitized process and our legal partners who are already experts on our system. Using an outside lawyer would unfortunately mean you incur the high costs and learning curve that our system was designed to eliminate.",
      icon: Users
    },
    {
      question: "What happens if I need to sell my house while my case is still being resolved?",
      answer: "This is a critical question, and the answer is precisely why it's so important to act now.\n\nWhen you sell your home, the law requires you to provide a 'clear title' to the buyer. If the predatory lien is still on your property at the time of sale, your real estate lawyer will be forced to pay the HVAC company's full, outrageous buyout price from the proceeds of your sale before the title can be transferred. This means tens of thousands of dollars of your home's equity could be wiped out instantly at the closing table.\n\nOur entire service is designed to prevent this exact disaster. By starting the process with ClearPath today, you are taking proactive steps to legally challenge and remove the lien before you list your home. We resolve the issue now so that when you are ready to sell, your title is clear and you get to keep all of your hard-earned equity. Think of it as protecting your home's future value.",
      icon: AlertTriangle
    },
    {
      question: "What documents or information do I need to provide for my free case review?",
      answer: "Getting started is simple. Ideally, if you have a copy of your contract and a recent bill from the finance company, that's perfect. However, if you can't find your contract, don't worry. It's a common problem, and it won't stop us. Just tell us the name of the company and your approximate monthly payment. We know these agreements inside and out and can get started with just that information.",
      icon: FileText
    },
    {
      question: "How did ClearPath start?",
      answer: "ClearPath was founded by a team of consumer advocates, technology experts, and legal strategists who saw the injustice of predatory contracts and refused to accept the status quo. We built a digitized, streamlined process that makes justice affordable for everyone. Our system has successfully helped hundreds of Canadian families cancel their contracts and reclaim their financial freedom.",
      icon: HelpCircle
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={onOpenModal} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Have questions? We have answers. Here are some of the most common questions we receive 
            from homeowners just like you. Our goal is to be 100% transparent about our process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 p-10 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <faq.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 leading-tight tracking-tight">
                    {faq.question}
                  </h3>
                </div>
                
                <div className="ml-18">
                  {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-600 leading-relaxed font-medium text-lg mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Building Section */}
          <div className="mt-20 bg-gradient-to-r from-teal-50 to-slate-50 p-12 rounded-2xl border border-teal-200 text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">
              Still Have Questions?
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              Get personalized answers during your free, no-obligation contract analysis. 
              Our experts are here to help you understand your options.
            </p>
            
            <button 
              onClick={onOpenModal}
              className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all mb-8"
            >
              Get My Free Analysis
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-600">
              <span className="flex items-center font-medium">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                100% Risk-Free Guarantee
              </span>
              <span className="flex items-center font-medium">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                No Credit Check Required
              </span>
              <span className="flex items-center font-medium">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                Approval Based on Your Contract
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;