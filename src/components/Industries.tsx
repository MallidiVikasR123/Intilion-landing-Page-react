   
import { Factory, Truck, Activity, Building2, Briefcase } from "lucide-react";

const IndustryCard = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => {
  return (
    <div className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-4 rounded-full cursor-pointer hover-scale">
      <div className="bg-white p-2 rounded-full shadow-sm">
        <Icon className="h-5 w-5 text-blue-900" />
      </div>
      <span className="font-medium">{title}</span>
    </div>
  );
};

const Industries = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Solving IT challenges in every industry, every day.
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <IndustryCard icon={Factory} title="Industry & Manufacturing" />
          <IndustryCard icon={Truck} title="Transportation & Logistics" />
          <IndustryCard icon={Activity} title="Healthcare" />
          <IndustryCard icon={Building2} title="Banks & Insurance" />
          <IndustryCard icon={Briefcase} title="Consulting Providers" />
          <IndustryCard icon={Activity} title="Non-Profit" />
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="inline-block text-sm font-medium border-b-2 border-red-600 pb-1 hover:border-red-800 transition-colors">
            View All Industries
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
