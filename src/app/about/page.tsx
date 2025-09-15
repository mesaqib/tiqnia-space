'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const aboutRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    aboutRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to stay ahead of the curve.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'Every project undergoes rigorous testing and quality assurance processes.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success journey.',
      icon: '🤝'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback throughout the entire process.',
      icon: '🔍'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      description: 'Passionate about creating beautiful, functional designs that tell your story.',
      avatar: '👩‍🎨'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in modern web technologies.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      description: 'User experience specialist focused on creating intuitive digital experiences.',
      avatar: '👩‍💼'
    },
    {
      name: 'David Thompson',
      role: 'Project Manager',
      description: 'Ensures smooth project delivery and client satisfaction.',
      avatar: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            About <span className="text-gradient">TiqniaSpace</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of designers, developers, and digital strategists dedicated to helping businesses thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between creativity and technology, 
                  TiqniaSpace has been at the forefront of digital innovation since our inception.
                </p>
                <p>
                  We believe that every business deserves access to world-class digital solutions, 
                  regardless of size or industry. Our mission is to democratize technology and 
                  make it accessible to businesses of all scales.
                </p>
                <p>
                  What started as a small team of passionate individuals has grown into a 
                  comprehensive digital agency, but we&apos;ve never lost sight of our core values: 
                  innovation, quality, and client success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2831BC] to-[#3d47e8] rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold mb-4">🚀</div>
                  <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To empower businesses through innovative digital solutions that drive growth, 
                    enhance user experiences, and create lasting value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={(el) => { aboutRefs.current[index] = el; }}
                className="text-center opacity-0"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-[#2831BC] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                ref={(el) => { aboutRefs.current[index + 4] = el; }}
                className="text-center opacity-0 group hover:scale-105 transition-transform duration-300 bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#2831BC] to-[#3d47e8] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section removed as requested */}

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2831BC] to-[#3d47e8] rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold mb-4">🎯</div>
                  <h3 className="text-2xl font-display font-bold mb-4">Why Choose TiqniaSpace?</h3>
                  <ul className="text-left space-y-3 text-blue-100">
                    <li>• Proven track record of successful projects</li>
                    <li>• Cutting-edge technology and methodologies</li>
                    <li>• Dedicated support and maintenance</li>
                    <li>• Competitive pricing and flexible packages</li>
                    <li>• Client-focused approach</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Partner with Us
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  When you choose TiqniaSpace, you&apos;re not just hiring a service provider – 
                  you&apos;re gaining a strategic partner committed to your success.
                </p>
                <p>
                  We take the time to understand your business, your goals, and your challenges. 
                  Then we craft solutions that not only meet your immediate needs but also 
                  position you for long-term growth.
                </p>
                <p>
                  Our collaborative approach ensures that you&apos;re involved in every step of the 
                  process, from initial concept to final delivery and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2831BC] to-[#3d47e8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#2831BC] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
