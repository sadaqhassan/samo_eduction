import React from 'react'

const Landing = () => {
return (
        <div className="min-h-screen  px-6 md:px-20 py-16">
      
      {/* 🔷 HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="about"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Samo Education
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Samo Education waa platform casri ah oo loogu talagalay in lagu
            maamulo iskuulada si fudud, degdeg ah, oo hufan. Waxaan ka caawinaa
            maamulka, macalimiinta iyo ardayda inay helaan nidaam isku xiran oo
            sahlan.
          </p>

          <button className="bg-[#2f4f4f] text-white px-6 py-3 rounded-lg hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>

      {/* 🔷 MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#2f4f4f]">
            🎯 Our Mission
          </h2>
          <p className="text-gray-600">
            Inaan fududeyno maamulka waxbarashada anagoo isticmaaleyna
            technology casri ah si loo gaaro waxbarasho tayo leh.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#2f4f4f]">
            🌍 Our Vision
          </h2>
          <p className="text-gray-600">
            Inaan noqono platform-ka ugu fiican ee lagu maamulo iskuulada Afrika
            iyo guud ahaan dunida.
          </p>
        </div>

      </div>

      {/* 🔷 FEATURES */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {[
            "Easy Student Management",
            "Teacher Dashboard",
            "Attendance Tracking",
            "Finance Management",
            "Reports & Analytics",
            "Secure System",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 font-medium">✅ {item}</p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔷 TEAM SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          {[1,2,3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow">
              <img
                src="https://i.pravatar.cc/150"
                alt="team"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Team Member</h3>
              <p className="text-gray-500 text-sm">Developer</p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="mt-20 bg-[#2f4f4f] text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to transform your school?
        </h2>
        <p className="mb-6">
          Start using Samo Education today and simplify your management system.
        </p>
        <button className="bg-white text-[#2f4f4f] px-6 py-3 rounded-lg font-medium">
          Get Started
        </button>
      </div>

    </div>

  )
}

export default Landing