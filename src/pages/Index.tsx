
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import AnimatedHeroText from '../components/AnimatedHeroText';
import SecretSudoButton from '../components/SecretSudoButton';
import { ArrowRight, Eye, Code2, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = 'Optra Design - Premium Design Studio by Aniketh | Brand Identity & Digital Experiences';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Optra Design is a premium design studio founded by Aniketh in Bangalore. We create distinctive brand identities, interactive digital experiences, and strategic creative direction that elevates your business.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Optra Design is a premium design studio founded by Aniketh in Bangalore. We create distinctive brand identities, interactive digital experiences, and strategic creative direction that elevates your business.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'design studio, brand identity, UI UX design, digital experiences, creative direction, Bangalore designer, Aniketh, Optra Design, web design, graphic design';
      document.head.appendChild(meta);
    }

    // Console message and window.optra setup
    console.log(`
    🎨 Welcome to Optra Design's console!
    
    ╔═══════════════════════════════════════╗
    ║           OPTRA DESIGN               ║
    ║        Shape. Style. Scale.          ║
    ║         Founded by Aniketh           ║
    ╚═══════════════════════════════════════╝
    
    Try typing:
    - optra.sudo() for hidden features
    - optra.magic() for something special
    - optra.contact() for quick contact
    
    Built with ❤️ by Aniketh in Bangalore
    `);

    (window as any).optra = {
      sudo: () => {
        document.dispatchEvent(new CustomEvent('sudo-mode-toggle'));
        console.log('🔓 Sudo mode toggled! Welcome to the admin zone, Aniketh!');
      },
      magic: () => {
        document.body.classList.add('glitch');
        setTimeout(() => document.body.classList.remove('glitch'), 2000);
        console.log('✨ Magic activated by the founder!');
      },
      contact: () => {
        window.location.href = 'mailto:aniketh@optra.me';
        console.log('📧 Opening contact to Aniketh...');
      }
    };
  }, []);

  const capabilities = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Identity",
      description: "Comprehensive brand systems that capture essence and drive market recognition through strategic design mastery."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Digital Products",
      description: "User-centered interfaces and interactions that convert visitors into customers through thoughtful UX excellence."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Creative Strategy",
      description: "Data-driven creative direction that aligns design decisions with measurable business outcomes and growth."
    }
  ];

  return (
    <div className="min-h-screen relative bg-zinc-950 overflow-hidden">
      <Navigation />
      <SecretSudoButton />
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sophisticated gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-900/60 via-transparent to-zinc-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.04),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.02),transparent_80%)]" />
        
        {/* Refined grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Elegant floating elements */}
        <div className="absolute top-40 left-32 w-3 h-3 bg-amber-400/25 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '6s'}} />
        <div className="absolute top-80 right-40 w-2 h-2 bg-orange-400/30 rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}} />
        <div className="absolute bottom-60 left-60 w-2.5 h-2.5 bg-rose-400/20 rounded-full animate-pulse" style={{animationDelay: '6s', animationDuration: '7s'}} />
        
        {/* Premium texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.008"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <AnimatedHeroText />
        
        {/* Premium accent line */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-32 bg-gradient-to-b from-amber-500/60 via-orange-500/40 to-transparent" />
        </div>
      </section>

      {/* Capabilities Section - Enhanced */}
      <section className="py-60 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-16 justify-center">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
              <span className="text-sm font-light text-zinc-300 tracking-[0.3em] uppercase">Capabilities</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.9] mb-12 max-w-6xl mx-auto tracking-[-0.02em] text-center">
              Precision-crafted solutions that bridge the gap between 
              <span className="font-light italic text-zinc-200 block mt-6"> vision and reality</span>
            </h2>
            <p className="text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed text-center font-light">
              Every project is an opportunity to create something extraordinary that drives meaningful results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-24 lg:gap-32">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/10 to-zinc-900/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-1000 ease-out backdrop-blur-sm" />
                <div className="relative z-10 p-12 text-center">
                  <div className="mb-12">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-zinc-800/90 to-zinc-900/70 border border-zinc-700/60 rounded-2xl group-hover:border-amber-500/30 transition-all duration-700 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-zinc-200 group-hover:text-amber-300 transition-colors duration-700">
                        {capability.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-light text-white mb-8 group-hover:text-amber-100 transition-colors duration-700 tracking-tight">
                      {capability.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-700 text-lg font-light">
                      {capability.description}
                    </p>
                  </div>
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent group-hover:from-transparent group-hover:via-amber-500/40 group-hover:to-transparent transition-all duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Preview Section - Enhanced */}
      <section className="py-60 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="flex items-center gap-6 mb-16">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
                <span className="text-sm font-light text-zinc-300 tracking-[0.3em] uppercase">Recent Work</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-extralight text-white leading-[0.9] mb-16 tracking-[-0.02em]">
                Projects that demonstrate our commitment to 
                <span className="font-light italic text-zinc-200 block mt-4"> exceptional craft</span>
              </h2>
              <div className="space-y-12 mb-16">
                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center mt-2 group-hover:border-amber-500/50 transition-all duration-700 backdrop-blur-sm">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white font-light mb-3 group-hover:text-amber-100 transition-colors duration-500">Shriniketana School</h4>
                    <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-500 text-lg font-light">Complete brand identity and digital presence for educational institution</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center mt-2 group-hover:border-blue-500/50 transition-all duration-700 backdrop-blur-sm">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" style={{animationDelay: '1s'}} />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white font-light mb-3 group-hover:text-blue-100 transition-colors duration-500">Nyve Design</h4>
                    <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-500 text-lg font-light">
                      Social media marketing strategy - 
                      <a href="https://www.nyvedesign.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors ml-1 underline decoration-blue-400/40 hover:decoration-blue-300/80">
                        www.nyvedesign.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center mt-2 group-hover:border-purple-500/50 transition-all duration-700 backdrop-blur-sm">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{animationDelay: '2s'}} />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white font-light mb-3 group-hover:text-purple-100 transition-colors duration-500">Enterprise Rebrand</h4>
                    <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-500 text-lg font-light">Complete visual identity overhaul resulting in 40% increase in brand recognition</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-rose-500/15 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000 opacity-70" />
              <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/80 rounded-3xl overflow-hidden backdrop-blur-sm group-hover:border-amber-500/30 transition-all duration-1000">
                <img 
                  src="/lovable-uploads/67b4cc52-5a7d-48bb-a24d-a7ff5c22d39d.png"
                  alt="Nyve Design Website Screenshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-60 px-8 relative border-t border-zinc-800/80 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-8 mb-20">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
            <span className="text-sm font-light text-zinc-300 tracking-[0.3em] uppercase">Get Started</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extralight text-white leading-[0.9] mb-16 tracking-[-0.02em]">
            Ready to elevate your brand?
          </h2>
          <p className="text-2xl text-zinc-200 mb-24 max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how we can transform your vision into a compelling digital presence that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-light rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 text-xl backdrop-blur-sm border border-amber-400/20"
            >
              Start a Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
            
            <Link 
              to="/services"
              className="inline-flex items-center gap-4 px-12 py-6 border border-zinc-600 text-zinc-200 font-light rounded-full transition-all duration-500 hover:border-amber-500/60 hover:text-white hover:bg-amber-500/10 hover:scale-105 text-xl backdrop-blur-sm"
            >
              View Services
            </Link>
          </div>

          <div className="mt-32 pt-16 border-t border-zinc-800/50">
            <p className="text-zinc-400 tracking-wider font-light text-lg">
              <span className="font-normal text-zinc-300">Aniketh</span> • 
              <span className="mx-4">Bangalore</span> • 
              <span className="font-normal">Response within 24 hours</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
