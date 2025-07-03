import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Solutions',
    'Mern Stack development'
  ];

 const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shruti-maheshwari-a16961301/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Shrutimaheshwari70',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577V20.41c-3.338.726-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.239 1.84 1.239 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.305.762-1.604C6.07 16.218 3.27 15.188 3.27 10.59c0-1.31.468-2.38 1.236-3.219-.124-.303-.536-1.523.117-3.175 0 0 1.009-.322 3.302 1.23a11.52 11.52 0 0 1 6.003 0c2.292-1.552 3.301-1.23 3.301-1.23.653 1.652.241 2.872.118 3.175.77.839 1.235 1.909 1.235 3.219 0 4.609-2.807 5.625-5.479 5.922.43.371.823 1.101.823 2.221v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/shhh.ruti._?igsh=MXIzazlhYTQ3aHd6Mg==',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190.6c-41.8 0-75.6-33.8-75.6-75.6s33.8-75.6 75.6-75.6 75.6 33.8 75.6 75.6-33.8 75.6-75.6 75.6zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93-26.3-26.3-57.6-34.5-93-36.2C293.7 32 258.4 32 224 32s-69.7 0-93 .3c-35.3 1.7-66.7 9.9-93 36.2S3.7 112.7 2 148.1C1.6 171.1 1.6 202.4 1.6 224s0 52.9.3 75.9c1.7 35.3 9.9 66.7 36.2 93s57.6 34.5 93 36.2c23 .3 47.5.3 70.4.3s47.4 0 70.4-.3c35.3-1.7 66.7-9.9 93-36.2 26.3-26.3 34.5-57.6 36.2-93 .3-23 .3-47.5.3-70.4s0-47.4-.3-70.4z" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@shrutasticx?si=5PO5X4VqNkgaLtVn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512">
        <path d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.6-48.6C465.5 64 288 64 288 64S110.5 64 74.9 75.5c-23.7 6.3-42.4 24.9-48.6 48.6C16 160.6 16 256 16 256s0 95.4 10.3 131.9c6.3 23.7 24.9 42.4 48.6 48.6C110.5 448 288 448 288 448s177.5 0 213.1-11.5c23.7-6.3 42.4-24.9 48.6-48.6 10.3-36.5 10.3-131.9 10.3-131.9s0-95.4-10.3-131.9zM232 334V178l142 78-142 78z"/>
      </svg>
    )
  }
];


  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  CodeWithShruti
                </h3>
                <div className="w-12 h-1 bg-white mt-2 rounded"></div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Passionate Mern-stack developer crafting digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <span className="group-hover:text-white group-hover:scale-125 transition-all duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 relative">
                Quick Links
                <div className="w-8 h-0.5 bg-gray-300 mt-2 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 relative">
                Services
                <div className="w-8 h-0.5 bg-gray-300 mt-2 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-all duration-300"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 relative">
                Get In Touch
                <div className="w-8 h-0.5 bg-gray-300 mt-2 rounded-full"></div>
              </h4>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>Shrutimaheshwari221@Gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+91 70780 43230</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} CodeWithShruti. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right mt-4 md:mt-0">
              Made with <span className="text-red-500 animate-pulse">♥</span> in India
            </p>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    </footer>
  );
}

export default Footer;
