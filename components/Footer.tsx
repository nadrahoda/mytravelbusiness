import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#f7f9f9] pt-16">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Get Updated The Latest <br /> Newsletter
        </h2>

        <div className="flex w-full md:w-auto items-center gap-3">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full md:w-[350px] px-5 py-3 rounded-full border outline-none"
          />
          <button className="flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition">
            Subscribe Now <FiSend />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-teal-600 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-800">
              Tourm
              <span className="block text-sm text-gray-500 font-normal">
                Explore World
              </span>
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Rapidiously myocardinate cross-platform intellectual capital model.
            Appropriately create interactive infrastructures
          </p>

          <div className="flex gap-3 text-teal-600">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Useful Link
          </h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:text-teal-600 cursor-pointer">Home</li>
            <li className="hover:text-teal-600 cursor-pointer">About Us</li>
            <li className="hover:text-teal-600 cursor-pointer">
              Our Services
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              Tour Booking Now
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Get In Touch
          </h4>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-600" />
              <div>
                <p>+01 234 567 890</p>
                <p>+09 876 543 210</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-600" />
              <div>
                <p>mailinfo00@realar.com</p>
                <p>support24@realar.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-teal-600 mt-1" />
              <p>
                789 Inner Lane, Holy park,
                <br />
                California, USA
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Grid */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Instagram Post
          </h4>

          <div className="grid grid-cols-3 gap-2">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  src={`https://source.unsplash.com/100x100/?travel,${i}`}
                  alt="insta"
                  className="rounded-md object-cover w-full h-full"
                />
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-teal-900 text-white text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>Copyright © 2024 Tourm. All rights reserved.</p>

        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <span>We Accept</span>
          <div className="flex gap-2">
            <div className="w-10 h-6 bg-white rounded"></div>
            <div className="w-10 h-6 bg-white rounded"></div>
            <div className="w-10 h-6 bg-white rounded"></div>
            <div className="w-10 h-6 bg-white rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;