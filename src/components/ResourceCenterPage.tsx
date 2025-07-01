import React, { useState } from 'react';
import { BookOpen, FileText, Scale, Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  onOpenModal: () => void;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  category: string;
  icon: React.ComponentType<any>;
}

const ResourceCenterPage: React.FC<Props> = ({ onOpenModal }) => {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "How to Read Your HVAC Contract: 9 Red Flags to Look For",
      excerpt: "Feeling like your contract is written in another language? You're not alone. Here are 9 common red flags hidden in the fine print that could mean your contract is predatory.",
      readTime: "12 min read",
      category: "Contract Analysis",
      icon: FileText,
      content: [
        "Predatory HVAC contracts are designed to be confusing. Companies use dense legal language and tricky clauses to hide the true cost of the agreement. Here are nine of the most common red flags you should look for.",
        
        "**1. The Hidden Term vs. Amortization**\n\nThe salesperson may tell you it's a \"5-year\" or \"10-year\" term, but the fine print reveals the payment schedule (amortization) is actually 15 or 20 years long. This is how a $5,000 furnace ends up costing you over $25,000 in payments. Always look for the amortization period—it reveals the true length of your debt.",
        
        "**2. The Lien Clause & Hidden Power of Attorney**\n\nBuried deep in the contract, there will be a clause that gives the company the right to register a Notice of Security Interest (NOSI), or lien, against your home's title. Worse yet, you may have unknowingly signed a Power of Attorney clause. This gives the company the legal authority to register this lien on your behalf, without any further notice to you. It effectively gives them the keys to hold your most valuable asset hostage.",
        
        "**3. Vague Maintenance Promises**\n\nThe contract will promise \"annual maintenance\" or \"service included,\" but the language is often vague. It may not specify what is covered, when it will be done, or how to schedule it. This often leads to homeowners being unable to get service when their equipment breaks down, despite paying for it every month.",
        
        "**4. Extreme Buyout Penalties**\n\nThe formula for calculating the buyout amount if you want to cancel early is often astronomical. It's not based on the equipment's value; it's based on all future payments, plus fees and penalties. This is the core of the trap—they make it financially impossible to leave.",
        
        "**5. The Annual Price Escalator**\n\nLook for a clause that states your monthly payment will increase automatically each year, often by 2-4%. This may seem small, but over a 15-year term, it significantly inflates the total amount you pay.",
        
        "**6. The 'Rental' Trap (You Never Own a Thing)**\n\nSome agreements, particularly from companies like CHICC, aren't financing plans at all—they are 10-year rental agreements. Think of it like renting a car from the airport; you make payments for years, but you will never own the car. It's the same for the equipment. At the end of the 10-year term, you own nothing and may even be pressured into a renewal. Shockingly, with these agreements, the buyout price often does not decrease as you make payments. You could be 8 years in and still owe the full, massive buyout.",
        
        "**7. The \"Guaranteed\" Energy Savings Myth**\n\nThis is one of the most common sales pitches. The salesperson will promise that your new, \"high-efficiency\" equipment will save you so much on your monthly energy bills that the savings will essentially cover the cost of your new payment. This is a classic bait-and-switch tactic. The promised savings are almost always exaggerated and rarely materialize, leaving you with a high monthly payment and no real reduction in your utility bills.",
        
        "**8. Misrepresentation of Government Programs**\n\nSalespeople often claim to be affiliated with government energy programs or rebates that don't exist, or grossly misrepresent the terms of legitimate programs. They may use official-sounding names or wear branded clothing to appear legitimate. Always verify any government program claims independently.",
        
        "**9. An Unconscionable Price**\n\nThis is one of the most fundamental violations. Is the total cost of borrowing or the final buyout price for the equipment many times greater than its actual retail value? If a $4,000 furnace will cost you $25,000 over the life of the contract, that is a strong indicator of a predatory agreement. The Consumer Protection Act contains provisions to void agreements that are so grossly overpriced and one-sided that they are deemed legally \"unconscionable.\"",
        
        "Think you've found these red flags in your contract? Don't panic. Identifying these issues is the first step to fighting back. At ClearPath, we offer a free, no-obligation contract review to confirm your eligibility for cancellation. Get your free analysis today."
      ]
    },
    {
      id: 2,
      title: "Your Rights Under the Homeowner Protection Act, 2024",
      excerpt: "A new law has changed the game for Ontario homeowners. Learn how the Homeowner Protection Act, 2024 makes it illegal for companies to place liens on your home for things like furnaces and water heaters.",
      readTime: "6 min read",
      category: "Legal Rights",
      icon: Scale,
      content: [
        "For years, the power dynamic in predatory contract disputes was tilted in favour of the HVAC companies, largely because of one powerful tool: the lien. That all changed in 2024 with the introduction of the Homeowner Protection Act.",
        
        "**What is a Lien (or NOSI)?**\n\nA lien, officially called a Notice of Security Interest (NOSI), is a legal claim placed on your property's title. It acts as security for a debt, preventing you from selling or refinancing your home without first paying the company that placed the lien. These companies used liens as the ultimate hammer to ensure you couldn't escape their contracts.",
        
        "**How the New Law Protects You**\n\nThe Homeowner Protection Act, 2024 is a game-changer. The Act explicitly bans the registration of NOSIs on the Land Registry for consumer goods. This includes items like furnaces, air conditioners, water heaters, and water filters.",
        
        "**Key Provisions of the Act:**\n\n• **Prohibition of New Liens**: Companies can no longer register NOSIs against your home for HVAC equipment\n• **Existing Lien Expiry**: Many existing NOSIs are deemed to have expired under the new legislation\n• **Enhanced Penalties**: Stronger consequences for companies that violate these rules\n• **Retroactive Application**: Some provisions apply to contracts signed before the Act came into effect",
        
        "**What This Means for You**\n\nIf you signed a contract after this law came into effect, any attempt to place a lien on your home for this equipment is illegal. More importantly, the Act also deems many existing NOSIs to have expired. This single piece of legislation can invalidate the primary tool these companies use to trap you. It gives you an incredibly powerful new angle to have both your contract and the lien against your home declared void.",
        
        "**The Broader Impact**\n\nThis legislation represents a fundamental shift in how Ontario protects homeowners from predatory practices. It acknowledges that the previous system allowed companies to essentially hold homes hostage over consumer goods, creating an unfair power imbalance.",
        
        "At ClearPath, our legal partners are experts in using this new legislation to defend homeowners. If you're worried about a lien on your home, find out how this new law can help you in a free case review."
      ]
    },
    {
      id: 3,
      title: "What to Do if a Lien is Placed on Your Home",
      excerpt: "Discovering a lien on your property can be terrifying. But don't panic—you have rights and options. Here's a step-by-step guide on what a lien is and how you can fight it.",
      readTime: "7 min read",
      category: "Action Guide",
      icon: Shield,
      content: [
        "Finding a Notice of Security Interest (NOSI), or lien, registered on your home's title is a deeply unsettling experience. It's designed to make you feel powerless. But it is crucial that you don't panic. Here's what you need to know.",
        
        "**Step 1: Understand What a Lien Is (and Isn't)**\n\nA lien does not mean you are going to lose your home tomorrow. It is a legal claim against your property, not an eviction notice. Its primary purpose is to prevent you from selling or refinancing your home without paying the claimant first. It's a tool of leverage.",
        
        "**Step 2: Don't Ignore It**\n\nWhile you shouldn't panic, you absolutely cannot ignore a lien. It is a serious legal matter that clouds your property's title and can lead to further complications if left unaddressed. The longer you wait, the more difficult it may become to resolve.",
        
        "**Step 3: Question the Source**\n\nA lien is only as valid as the contract it is based on. If the contract was sold using deceptive practices, misrepresentation, or in violation of the Consumer Protection Act, the entire agreement can be deemed void. If the agreement is void, the lien has no legal foundation and can be removed.",
        
        "**Common Grounds for Challenging a Lien:**\n\n• **Improper Sales Practices**: Door-to-door sales of HVAC equipment are prohibited\n• **Cooling-Off Period Violations**: Installation before the mandatory 10-day period\n• **Misrepresentation**: False claims about government programs or energy savings\n• **Inadequate Disclosure**: Failure to properly explain contract terms and costs\n• **Power of Attorney Abuse**: Unauthorized registration of the lien",
        
        "**Step 4: Gather Your Documentation**\n\nCollect all documents related to your contract and the sales process:\n• Original contract and any amendments\n• Sales materials or brochures provided\n• Records of the initial sales interaction\n• Payment history and statements\n• Any correspondence with the company\n• Photos or documentation of the equipment installed",
        
        "**Step 5: Seek Expert Help**\n\nThis is not a DIY project. Challenging a lien and a predatory contract requires specialized knowledge of consumer law. This is where ClearPath comes in. Our entire process is built to challenge the validity of these agreements and, as a result, remove the liens they generate. With the new Homeowner Protection Act, 2024 now in effect, the case for removing these liens is stronger than ever.",
        
        "**The ClearPath Advantage**\n\nOur legal partners have successfully challenged hundreds of liens using a proven framework that addresses:\n• Contract validity under consumer protection laws\n• Proper lien registration procedures\n• New protections under the Homeowner Protection Act, 2024\n• Negotiation strategies with finance companies",
        
        "**What NOT to Do**\n\n• Don't pay the full buyout amount without exploring your options\n• Don't ignore correspondence from the finance company\n• Don't attempt to negotiate directly without legal support\n• Don't assume the lien is valid just because it's registered",
        
        "A lien can feel like a lock on your financial future, but we know how to find the key. If a lien has been placed on your home, contact us immediately for a free, confidential review of your case."
      ]
    }
  ];

  const toggleArticle = (articleId: number) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  const formatContent = (content: string) => {
    // Handle bold text
    const boldFormatted = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle bullet points
    const bulletFormatted = boldFormatted.replace(/^• (.+)$/gm, '<li class="ml-4">$1</li>');
    
    return bulletFormatted;
  };

  return (
    <div className="min-h-screen font-sans">
      <Navigation onOpenModal={onOpenModal} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <BookOpen className="h-10 w-10 text-slate-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Resource Center: Your Guide to Homeowner Rights
          </h1>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6 leading-tight">
              Knowledge is Power
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
              The more you know, the better you can protect yourself. Our resource center is dedicated to providing clear, 
              easy-to-understand information about your rights as an Ontario homeowner. Browse our articles to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {articles.map((article) => (
              <div key={article.id} className="bg-slate-50 rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
                {/* Article Header */}
                <div className="p-8 border-b border-slate-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <article.icon className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {article.category}
                          </span>
                          <div className="text-sm text-slate-500 mt-1">{article.readTime}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight tracking-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                        {article.excerpt}
                      </p>
                      
                      <button
                        onClick={() => toggleArticle(article.id)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                      >
                        {expandedArticle === article.id ? 'Hide Article' : 'Read More'}
                        {expandedArticle === article.id ? (
                          <ChevronUp className="ml-2 h-5 w-5" />
                        ) : (
                          <ChevronDown className="ml-2 h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Article Content */}
                {expandedArticle === article.id && (
                  <div className="p-8 bg-white">
                    <div className="prose prose-lg max-w-none">
                      {article.content.map((paragraph, index) => (
                        <div key={index} className="mb-6">
                          {paragraph.includes('**') || paragraph.includes('•') ? (
                            <div 
                              className="text-slate-700 leading-relaxed font-medium"
                              dangerouslySetInnerHTML={{ __html: formatContent(paragraph) }}
                            />
                          ) : (
                            <p className="text-slate-700 leading-relaxed font-medium text-lg">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Article CTA */}
                    <div className="mt-10 p-8 bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl border border-teal-200 text-center">
                      <h4 className="text-2xl font-bold text-slate-800 mb-4">
                        Ready to Take Action?
                      </h4>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                        Get a free, personalized analysis of your contract to see if you qualify for cancellation.
                      </p>
                      <button 
                        onClick={onOpenModal}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                      >
                        Get My Free Contract Analysis
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 tracking-tight">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Explore more resources to understand your rights and options as an Ontario homeowner.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Government Resources */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Government Resources</h3>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://www.ontario.ca/page/consumer-protection-act"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800">Ontario Consumer Protection Act</h4>
                    <p className="text-sm text-slate-600">Official government information</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                </a>
                
                <a 
                  href="https://www.ontario.ca/page/homeowner-protection-act"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800">Homeowner Protection Act, 2024</h4>
                    <p className="text-sm text-slate-600">New legislation protecting homeowners</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Legal Resources */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Legal Information</h3>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://www.canlii.org/en/on/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800">CanLII Ontario Cases</h4>
                    <p className="text-sm text-slate-600">Legal precedents and case law</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                </a>
                
                <a 
                  href="https://www.legalaid.on.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800">Legal Aid Ontario</h4>
                    <p className="text-sm text-slate-600">Free legal information and services</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">
            Ready to Put Your Knowledge Into Action?
          </h2>
          <p className="text-xl text-slate-100 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
            Now that you understand your rights, let our experts analyze your specific contract 
            and show you exactly how to exercise those rights.
          </p>
          
          <button 
            onClick={onOpenModal}
            className="bg-white hover:bg-slate-50 text-slate-700 px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all mb-8"
          >
            Get My Free Contract Analysis
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-200">
            <span className="flex items-center font-medium">
              <BookOpen className="h-5 w-5 text-teal-300 mr-2" />
              Expert Analysis
            </span>
            <span className="flex items-center font-medium">
              <Shield className="h-5 w-5 text-teal-300 mr-2" />
              100% Confidential
            </span>
            <span className="flex items-center font-medium">
              <Scale className="h-5 w-5 text-teal-300 mr-2" />
              Know Your Rights
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceCenterPage;