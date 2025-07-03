
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactDetails = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          If you require any kind of technical support for our services, reach out to us 
          through one of the methods listed below:
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Mail className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">
              <a 
                href="mailto:sales@adspyder.io" 
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                sales@adspyder.io
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Phone className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">
              <a 
                href="tel:+918792375409" 
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
                (+91) 8792375409
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <MapPin className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
            <p className="text-gray-600 leading-relaxed">
              810, 4th FLOOR, 27th MAIN, 1ST SECTOR,<br />
              HSR LAYOUT, Bengaluru, Bengaluru Urban,<br />
              Karnataka, 560102
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
        <div className="text-gray-600 space-y-1">
          <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
          <p>Saturday: 10:00 AM - 4:00 PM (IST)</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};
