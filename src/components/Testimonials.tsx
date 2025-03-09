
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Intelion implemented such a powerful platform that we had no break in service when our employees had to work from home due to the COVID-19 pandemic. We weren't concerned about how to shift to a remote working environment because Integris facilitated a seamless transition.",
    author: "Paulette Southon",
    title: "Director, PromptPerson Ecommerce Private Limited",
    company: "PromptPerson",
    avatar: "/lovable-uploads/dcf68493-4975-4b10-88d3-63f4e4be2ad5.png"
  },
  {
    id: 2,
    quote: "The team at Intelion has been instrumental in modernizing our entire IT infrastructure. Their proactive approach to security has saved us from numerous potential threats.",
    author: "Michael Richardson",
    title: "CTO, Global Innovations Inc.",
    company: "Global Innovations",
    avatar: "/lovable-uploads/e0ced67d-7b44-483c-9ecd-1412e32c176c.png"
  },
  {
    id: 3,
    quote: "Working with Intelion has been a game-changer for our business. Their cloud migration expertise helped us scale operations faster than we thought possible.",
    author: "Sarah Johnson",
    title: "Operations Manager, TechSolutions Ltd",
    company: "TechSolutions",
    avatar: "/lovable-uploads/2013ba40-03f5-4988-b9a4-0abbb69f04bd.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <div className="md:w-1/3">
              <img 
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].author}
                className="w-40 h-40 object-cover rounded-md shadow-md"
              />
              <div className="mt-6 flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div 
                className="relative transition-all duration-300 ease-in-out"
                style={{ opacity: 1, transform: 'translateY(0)' }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-purple-600"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl font-light text-gray-700 mb-6">
                  {testimonials[activeIndex].quote}
                </blockquote>
                
                <div>
                  <p className="font-medium text-lg">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].title}</p>
                </div>
                
                <div className="mt-8 flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <svg 
                        key={index}
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-orange-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">5.0/5.0</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <img src="/lovable-uploads/e46cf2bd-83c1-4916-ab9e-034a01a37b47.png" alt="Clutch" className="h-5" />
                </div>
                
                <div className="mt-4 flex space-x-4">
                  <img src="/lovable-uploads/d32c3a42-69cf-4fa3-be66-7d8f6fb8852f.png" alt="Google Reviews" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
