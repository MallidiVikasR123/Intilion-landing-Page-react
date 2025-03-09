
import { Button } from "@/components/ui/button";
import { Server, Users, ShieldCheck, Code, Smartphone, Cloud } from "lucide-react";

const SolutionCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm service-card border border-gray-100">
      <div className="mb-4 text-red-600">
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="link" className="p-0 text-red-600 hover:text-red-700 font-medium">
        Learn more
      </Button>
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <span className="text-gray-700 font-medium uppercase text-sm tracking-wider">HOW WE DO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-red-600">
            Solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SolutionCard 
            icon={Server} 
            title="Managed Services" 
            description="Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT."
          />
          
          <SolutionCard 
            icon={Users} 
            title="IT Consulting & Advisory" 
            description="The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth"
          />
          
          <SolutionCard 
            icon={ShieldCheck} 
            title="Cyber Security" 
            description="Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data."
          />
          
          <SolutionCard 
            icon={Code} 
            title="Web Development" 
            description="Our web development services can help you establish an impactful online presence and reach your target audience effectively."
          />
          
          <SolutionCard 
            icon={Smartphone} 
            title="Mobile Development" 
            description="We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms."
          />
          
          <SolutionCard 
            icon={Cloud} 
            title="Cloud Services" 
            description="With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals."
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-md">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
