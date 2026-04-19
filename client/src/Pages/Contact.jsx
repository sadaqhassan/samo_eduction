import React from "react";
import Nav from "../Components/Nav";
import { LocationEdit, Mail, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <div className="mx-50">
        <Nav/>
    
    <div className="min-h-screen px-6 md:px-20 py-16">

      {/* 🔷 HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Waxaan diyaar u nahay inaan kaa caawino. Nala soo xiriir wakhti kasta.
        </p>
      </div>

      {/* 🔷 MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* 📍 CONTACT INFO */}
        <div className="space-y-6">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2 flex space-x-3 gap-4"><LocationEdit/> Address</h3>
            <p className="text-gray-600">Mogadishu, Somalia</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2  flex space-x-3 gap-4"><PhoneCall/> Phone</h3>
            <p className="text-gray-600">+252 61 0000000</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2 flex space-x-3 gap-4"><Mail/> Email</h3>
            <p className="text-gray-600">support@samoeducation.com</p>
          </div>

        </div>

        {/* 📝 CONTACT FORM */}
        <form className="bg-white p-8 rounded-xl shadow space-y-6">

          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f4f4f]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f4f4f]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f4f4f]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f4f4f] text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>

      </div>

      {/* 🔷 MAP / CTA */}
      <div className="mt-20 bg-[#2f4f4f] text-white rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need quick help?
        </h2>
        <p className="mb-6">
          Contact our support team and we will respond as soon as possible.
        </p>
        <button className="bg-white text-[#2f4f4f] px-6 py-3 rounded-lg font-medium">
          Chat with Us
        </button>
      </div>

    </div>
    </div>
  );
};

export default Contact;