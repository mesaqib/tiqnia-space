'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Palette, 
  Monitor, 
  Code2, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Globe, 
  Database, 
  Cloud, 
  Cpu,
  Brush,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Services animation
    if (servicesRef.current?.children) {
      gsap.fromTo(servicesRef.current.children,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Process animation
    if (processRef.current?.children) {
      gsap.fromTo(processRef.current.children,
        { y: 60, opacity: 0, rotationY: 45 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Tech stack animation
    if (techRef.current?.children) {
      gsap.fromTo(techRef.current.children,
        { scale: 0, opacity: 0, rotation: 180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Transform your ideas into stunning, user-friendly designs that captivate and convert. We create intuitive interfaces that users love.',
      features: [
        'User Experience Research',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Interactive Design',
        'Design Systems',
        'Usability Testing'
      ],
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      stats: { projects: '50+', satisfaction: '98%' }
    },
    {
      title: 'Custom Web Design',
      description: 'Unique, responsive websites tailored to your brand identity and business objectives. We craft digital experiences that drive results.',
      features: [
        'Responsive Design',
        'Brand Integration',
        'SEO Optimization',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Content Management Systems'
      ],
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      stats: { projects: '75+', satisfaction: '99%' }
    },
    {
      title: 'Web Application Development',
      description: 'Powerful, scalable web applications built with cutting-edge technologies and best practices. From concept to deployment.',
      features: [
        'Frontend Development',
        'Backend Development',
        'Database Design',
        'API Integration',
        'Cloud Deployment',
        'Maintenance & Support'
      ],
      icon: Code2,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      stats: { projects: '40+', satisfaction: '97%' }
    },
    {
      title: '3D Web Applications',
      description: 'Create immersive 3D experiences that engage users and set your brand apart. Next-generation web experiences with WebGL and Three.js.',
      features: [
        '3D Modeling & Animation',
        'WebGL Integration',
        'Interactive 3D Experiences',
        'Performance Optimization',
        'VR/AR Ready Solutions',
        'Real-time Rendering'
      ],
      icon: Layers,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      stats: { projects: '25+', satisfaction: '100%' }
    },
    {
      title: 'Social Media Management',
      description: 'Grow and engage your audience with consistent, on-brand content, community management, and data-driven optimization across platforms.',
      features: [
        'Content Calendar & Publishing',
        'Community Management',
        'Brand Voice & Visuals',
        'Reels/Shorts Editing',
        'Hashtag & Trend Research',
        'Monthly Performance Reports'
      ],
      icon: Users,
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      stats: { projects: '30+', satisfaction: '98%' }
    },
    {
      title: 'Digital Marketing',
      description: 'Full‑funnel campaigns combining SEO, paid ads, and conversion optimization to drive qualified traffic and measurable ROI.',
      features: [
        'SEO Audits & On‑Page SEO',
        'Google & Meta Ads',
        'Landing Pages & CRO',
        'Email & Automation',
        'Analytics & Attribution',
        'A/B Testing'
      ],
      icon: TrendingUp,
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      stats: { projects: '45+', satisfaction: '97%' }
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We start by understanding your business, goals, target audience, and competitive landscape.',
      icon: Target,
      color: 'from-[#2831BC] to-[#3d47e8]'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy tailored to your specific needs and objectives.',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description: 'We create beautiful, functional designs and interactive prototypes that align with your brand.',
      icon: Brush,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build your solution using the latest technologies, frameworks, and best practices.',
      icon: Code2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: 'Testing & QA',
      description: 'We rigorously test everything to ensure quality, performance, and user experience.',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '06',
      title: 'Launch & Deploy',
      description: 'We deploy your solution and ensure everything runs smoothly in production.',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      step: '07',
      title: 'Support & Maintenance',
      description: 'We provide ongoing support, maintenance, and updates for your peace of mind.',
      icon: Clock,
      color: 'from-teal-500 to-blue-500'
    },
    {
      step: '08',
      title: 'Growth & Optimization',
      description: 'We help you scale, optimize, and grow your digital presence over time.',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', icon: Cpu },
    { name: 'Next.js', category: 'Framework', icon: Zap },
    { name: 'TypeScript', category: 'Language', icon: Code2 },
    { name: 'Three.js', category: '3D', icon: Layers },
    { name: 'WebGL', category: '3D', icon: Globe },
    { name: 'Node.js', category: 'Backend', icon: Database },
    { name: 'Python', category: 'Language', icon: Code2 },
    { name: 'PostgreSQL', category: 'Database', icon: Database },
    { name: 'MongoDB', category: 'Database', icon: Database },
    { name: 'AWS', category: 'Cloud', icon: Cloud },
    { name: 'Docker', category: 'DevOps', icon: Cpu },
    { name: 'Figma', category: 'Design', icon: Palette }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#2831BC]/10 to-[#3d47e8]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-gray-900 mb-8 leading-tight">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            From startup to enterprise, grow your business with fast and creative designs! 
            We deliver comprehensive digital solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://cal.com/tiqniaspace/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2831BC] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#1a1f8a] transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect flex items-center justify-center space-x-3 magnetic-hover"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#2831BC] text-[#2831BC] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#2831BC] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 magnetic-hover"
            >
              <span>Get Quote</span>
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group overflow-hidden relative`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">{service.title}</h2>
                        <div className="flex space-x-4 text-sm text-gray-600">
                          <span>{service.stats.projects} Projects</span>
                          <span>•</span>
                          <span>{service.stats.satisfaction} Satisfaction</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">What we offer:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#2831BC] flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 magnetic-hover`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project&apos;s success from start to finish
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="text-center group hover:scale-105 transition-all duration-300 perspective-1000"
                >
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-lg font-display font-bold text-gray-900 shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay current with the latest technologies to deliver cutting-edge solutions
            </p>
          </div>

          <div ref={techRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2831BC] to-[#3d47e8] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-display font-bold text-gray-900 mb-1">{tech.name}</div>
                  <div className="text-sm text-gray-500">{tech.category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#2831BC] to-[#3d47e8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can help bring your vision to life with cutting-edge technology and innovative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://cal.com/tiqniaspace/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2831BC] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block magnetic-hover"
            >
              Start Your Project
            </Link>
            <Link
              href="mailto:saqib@tiqniaspace.com"
              className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2831BC] transition-all duration-300 hover:scale-105 inline-block magnetic-hover"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
