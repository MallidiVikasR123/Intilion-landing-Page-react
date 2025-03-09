
import { Star } from "lucide-react";
   
const StatsSection = () => {
  return (
    <section className="border-t border-gray-200 py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-8 md:mb-0">
            <div className="mr-4">
              <p className="text-sm uppercase font-medium text-gray-500">REVIEWED ON</p>
              <div className="font-bold text-2xl">Clutch</div>
              <div className="text-sm text-gray-600">2K+ REVIEWS</div>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-current text-orange-500" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full md:w-auto">
            <div className="text-center md:border-r md:border-gray-200 pr-0 md:pr-12">
              <div className="text-3xl md:text-4xl font-bold text-navy-900">08</div>
              <div className="text-lg font-medium">Years</div>
              <div className="text-sm text-gray-600">Proven Track Record</div>
            </div>
            
            <div className="text-center md:border-r md:border-gray-200 pr-0 md:pr-12">
              <div className="text-3xl md:text-4xl font-bold text-navy-900">98<span className="text-2xl">%</span></div>
              <div className="text-lg font-medium">Customer</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            
            <div className="text-center md:border-r md:border-gray-200 pr-0 md:pr-12">
              <div className="text-3xl md:text-4xl font-bold text-navy-900">470<span className="text-2xl">+</span></div>
              <div className="text-lg font-medium">Projects</div>
              <div className="text-sm text-gray-600">We Have Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-navy-900">3</div>
              <div className="text-lg font-medium">Mins</div>
              <div className="text-sm text-gray-600">Average Answer Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
