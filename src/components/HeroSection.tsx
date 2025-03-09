
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-white py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              We manage your IT,<br /> so you can manage<br /> your business.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg animate-fade-in animate-delay-200">
              Take charge of your business continuity with innovative IT solutions
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animate-delay-300">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
                Schedule a Free Consultation
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-md">
                Services
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in-right">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/0fedf263-1980-4199-8338-58bb9787e0ae.png"
                alt="IT professionals in a meeting" 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
