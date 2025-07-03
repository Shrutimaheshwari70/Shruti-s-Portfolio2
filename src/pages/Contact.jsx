import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section className="bg-black text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project 
            and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Shrutimaheshwari1255@Gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-lg group-hover:text-gray-300 transition-colors duration-300">
                      +91 7078043230
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
{/* Social Links */}
<div>
  <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
  <div className="flex space-x-4">
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/shruti-maheshwari-a16961301/" target="_blank" rel="noopener noreferrer"
      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zm7.5 0h5v-8.4c0-2.24 2.84-2.43 2.84 0V24h5V14.28c0-5.34-6.11-5.13-7.89-2.51V7H7.5v17z"/>
      </svg>
    </a>

    {/* GitHub */}
    <a href="https://github.com/Shrutimaheshwari70" target="_blank" rel="noopener noreferrer"
      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.666-.305-5.467-1.334-5.467-5.932 0-1.311.468-2.381 1.236-3.221-.124-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.404c1.02.004 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.479 5.922.429.37.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/shhh.ruti._?igsh=MXIzazlhYTQ3aHd6Mg==" target="_blank" rel="noopener noreferrer"
      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190.6c-41.8 0-75.6-33.8-75.6-75.6s33.8-75.6 75.6-75.6 75.6 33.8 75.6 75.6-33.8 75.6-75.6 75.6zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93-26.3-26.3-57.6-34.5-93-36.2C293.7 32 258.4 32 224 32s-69.7 0-93 .3c-35.3 1.7-66.7 9.9-93 36.2S3.7 112.7 2 148.1C1.6 171.1 1.6 202.4 1.6 224s0 52.9.3 75.9c1.7 35.3 9.9 66.7 36.2 93s57.6 34.5 93 36.2c23 .3 47.5.3 70.4.3s47.4 0 70.4-.3c35.3-1.7 66.7-9.9 93-36.2 26.3-26.3 34.5-57.6 36.2-93 .3-23 .3-47.5.3-70.4s0-47.4-.3-70.4zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.4 9s-103 .6-132.4-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.4s-.6-103 9-132.4c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.4-9s103-.6 132.4 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.4s.6 103-9 132.4z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a href="https://youtube.com/@shrutasticx?si=5PO5X4VqNkgaLtVn" target="_blank" rel="noopener noreferrer"
      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
        <path d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.6-48.6C465.5 64 288 64 288 64S110.5 64 74.9 75.5c-23.7 6.3-42.4 24.9-48.6 48.6C16 160.6 16 256 16 256s0 95.4 10.3 131.9c6.3 23.7 24.9 42.4 48.6 48.6C110.5 448 288 448 288 448s177.5 0 213.1-11.5c23.7-6.3 42.4-24.9 48.6-48.6C560 351.4 560 256 560 256s0-95.4-10.3-131.9zM232 334V178l142 78-142 78z"/>
      </svg>
    </a>
  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 px-6 rounded-lg font-semibold hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-20">
          <blockquote className="text-2xl font-light text-gray-300 italic">
            "Great things happen when passionate minds collaborate."
          </blockquote>
          <p className="text-gray-500 mt-4">— CodeWithShruti</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;