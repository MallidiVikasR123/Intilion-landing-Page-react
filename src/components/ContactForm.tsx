
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    source: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      source: "",
      message: ""
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Us for<br />Comprehensive IT
            </h2>
            <p className="text-white/80 mb-8">
              We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
            </p>
            
            <div className="mb-8">
              <p className="font-medium mb-2">Call us at: 0612-2500-971</p>
            </div>
            
            <div className="mb-8">
              <p className="font-medium mb-4">Your benefits:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-red-500 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Customized</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-red-500 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Independent</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-red-500 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Compliant</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-red-500 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Results-driven</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-red-500 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Problem-solving</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-red-500 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Transparent</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium mb-4">What happens next?</p>
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-medium">1</div>
                <div>
                  <p className="font-medium">We schedule a call</p>
                  <p className="text-white/80 text-sm">at your convenience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-medium">2</div>
                <div>
                  <p className="font-medium">We do a discovery and consulting meeting</p>
                  <p className="text-white/80 text-sm">to understand your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-medium">3</div>
                <div>
                  <p className="font-medium">We prepare a proposal</p>
                  <p className="text-white/80 text-sm">tailored to your requirements</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 md:p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center">Schedule a Free Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Contact email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">How Did You Hear About Us?</label>
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Option</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Referral</option>
                  <option value="social_media">Social Media</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="To better assist you, please describe how we can help..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
