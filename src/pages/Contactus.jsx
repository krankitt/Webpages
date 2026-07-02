import React from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contactus = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions about our courses? We'd love to hear from you. Fill
            out the form below and our team will get back to you as soon as
            possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl p-10 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-8">
              <div className="flex gap-5">
                <Mail className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <p className="text-white/80">support@birdling.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-xl">Phone</h3>
                  <p className="text-white/80">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-xl">Address</h3>
                  <p className="text-white/80">
                    Sector 62, Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-xl">Working Hours</h3>
                  <p className="text-white/80">Monday - Saturday</p>
                  <p className="text-white/80">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Send Message
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>

              <button className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition duration-300">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>

          <div className="h-[400px] rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
            Google Map Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
