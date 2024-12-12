import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import paymetGayewayImage from "../assets/payment-gateway.png";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Payment Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Information
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/exchange" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Exchange & Refund
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/loyalty" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Loyalty Program
                </Link>
              </li>
              <li>
                <Link to="/centers" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Display Centers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/ip" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Intellectual Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Payment Methods
            </h3>
            <div className="flex">
              {/* {['Visa', 'Mastercard', 'PayPal', 'Stripe', 'Bikash', 'Rocket'].map((method) => (
                <div
                  key={method}
                  className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-xs text-center"
                >
                  {method}
                </div>
              ))} */}
              <img src={paymetGayewayImage} alt={paymetGayewayImage}/>
            </div>
          </div>

          {/* Service Center */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Service Center
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone size={16} className="mr-2" />
                23843753587
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-2" />
                demo@example.com
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} ModernShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}