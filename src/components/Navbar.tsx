
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary mr-2">Intelion</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-900 hover:text-primary transition-colors">Home</Link>
          
          <div className="relative group">
            <button className="flex items-center font-medium text-gray-900 hover:text-primary transition-colors">
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link to="/services/managed-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Managed Services</Link>
                <Link to="/services/it-consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Consulting</Link>
                <Link to="/services/cyber-security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cyber Security</Link>
              </div>
            </div>
          </div>
          
          <Link to="/industries" className="font-medium text-gray-900 hover:text-primary transition-colors">Industries</Link>
          
          <div className="relative group">
            <button className="flex items-center font-medium text-gray-900 hover:text-primary transition-colors">
              Market Research <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link to="/market-research/reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reports</Link>
                <Link to="/market-research/insights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Insights</Link>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center font-medium text-gray-900 hover:text-primary transition-colors">
              Company <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link to="/company/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                <Link to="/company/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</Link>
                <Link to="/company/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</Link>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center font-medium text-gray-900 hover:text-primary transition-colors">
              Brands <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link to="/brands/partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Partners</Link>
                <Link to="/brands/certifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Certifications</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <div className="mr-6 text-right">
            <div className="text-sm font-medium text-gray-500">Client Support →</div>
            <div className="text-lg font-semibold">0612-2500971</div>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white py-2 px-6 rounded-md">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium text-gray-900 hover:text-primary py-2 border-b border-gray-100">Home</Link>
            <div>
              <button className="flex items-center justify-between w-full font-medium text-gray-900 py-2 border-b border-gray-100">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/services/managed-services" className="block py-1 text-sm text-gray-700">Managed Services</Link>
                <Link to="/services/it-consulting" className="block py-1 text-sm text-gray-700">IT Consulting</Link>
                <Link to="/services/cyber-security" className="block py-1 text-sm text-gray-700">Cyber Security</Link>
              </div>
            </div>
            <Link to="/industries" className="font-medium text-gray-900 hover:text-primary py-2 border-b border-gray-100">Industries</Link>
            <Link to="/market-research" className="font-medium text-gray-900 hover:text-primary py-2 border-b border-gray-100">Market Research</Link>
            <Link to="/company" className="font-medium text-gray-900 hover:text-primary py-2 border-b border-gray-100">Company</Link>
            <Link to="/brands" className="font-medium text-gray-900 hover:text-primary py-2 border-b border-gray-100">Brands</Link>
            <div className="pt-4">
              <div className="text-sm font-medium text-gray-500">Client Support →</div>
              <div className="text-lg font-semibold">0612-2500971</div>
            </div>
            <Button className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
