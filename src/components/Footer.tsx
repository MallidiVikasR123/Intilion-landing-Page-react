import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/digital-strategy" className="text-gray-400 hover:text-white transition-colors">Digital Strategy & Design</Link></li>
              <li><Link to="/solutions/application-development" className="text-gray-400 hover:text-white transition-colors">Application Development and Management</Link></li>
              <li><Link to="/solutions/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud & Infrastructure</Link></li>
              <li><Link to="/solutions/software" className="text-gray-400 hover:text-white transition-colors">Software-as-a-Service</Link></li>
              <li><Link to="/solutions/digital-marketing" className="text-gray-400 hover:text-white transition-colors">Digital & Brand Marketing</Link></li>
              <li><Link to="/solutions/ai" className="text-gray-400 hover:text-white transition-colors">Cognitive AI & Business Intelligence</Link></li>
              <li><Link to="/solutions/hybrid" className="text-gray-400 hover:text-white transition-colors">Hybrid Connectivity</Link></li>
              <li><Link to="/solutions/erp" className="text-gray-400 hover:text-white transition-colors">ERP Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/company/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/company/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/company/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/company/why-us" className="text-gray-400 hover:text-white transition-colors">Why us</Link></li>
              <li><Link to="/company/team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/company/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/company/partners" className="text-gray-400 hover:text-white transition-colors">Partners & Certifications</Link></li>
              <li><Link to="/company/awards" className="text-gray-400 hover:text-white transition-colors">Reviews & Awards</Link></li>
              <li><Link to="/company/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Don't miss out updates</h3>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 bg-gray-900 border border-gray-800 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <Button type="submit" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md flex items-center">
                  Send
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
            
            <div>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="flex items-center space-x-1 mr-4">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <svg 
                      key={index}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="text-orange-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400">5.0 / 5.0 REVIEWS</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                <p className="text-sm text-gray-400">527 Google Reviews</p>
                <p className="text-sm text-gray-400">Trusted worldwide</p>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <p className="text-sm text-gray-400">(+91) 7310-260-071</p>
                <p className="text-sm text-gray-400">contact@intelion.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-bold mb-2">Intelion</div>
            <p className="text-sm text-gray-400">© 2023 - Intelion</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/refund" className="hover:text-white transition-colors">Refund and Cancellation Policy</Link>
            <Link to="/cookie" className="hover:text-white transition-colors">Cookie Notice</Link>
            <Link to="/events" className="hover:text-white transition-colors">Events</Link>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
        
        <div className="flex items-center justify-center md:justify-end space-x-6 mt-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
