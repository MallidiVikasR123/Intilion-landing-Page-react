
import { DollarSign, Lightbulb, BookOpen, ArrowUpRight } from "lucide-react";
    
const WhatWeDo = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <span className="text-yellow-500 font-medium uppercase text-sm tracking-wider">WHAT WE DO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Simplifying IT<br className="hidden md:block" /> for a complex world.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Card 1 */}
          <div className="animate-fade-in animate-delay-100">
            <div className="mb-4">
              <div className="inline-block p-3 rounded-full bg-transparent border border-red-500">
                <DollarSign className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Cost-effectiveness</h3>
            <p className="text-gray-400">
              We offer affordable IT solutions that help you reduce costs and improve your bottom line.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="animate-fade-in animate-delay-200">
            <div className="mb-4">
              <div className="inline-block p-3 rounded-full bg-transparent border border-red-500">
                <Lightbulb className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovative Technology</h3>
            <p className="text-gray-400">
              We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="animate-fade-in animate-delay-300">
            <div className="mb-4">
              <div className="inline-block p-3 rounded-full bg-transparent border border-red-500">
                <BookOpen className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
            <p className="text-gray-400">
              We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="animate-fade-in animate-delay-400">
            <div className="mb-4">
              <div className="inline-block p-3 rounded-full bg-transparent border border-red-500">
                <ArrowUpRight className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Scalability</h3>
            <p className="text-gray-400">
              Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
