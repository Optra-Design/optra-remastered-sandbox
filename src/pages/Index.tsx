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
      icon: <Eye className="w-7 h-7" />,
      title: "Visual Identity",
      description: "Comprehensive brand systems that capture essence and drive market recognition through strategic design."
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Digital Products",
      description: "User-centered interfaces and interactions that convert visitors into customers through thoughtful UX."
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Creative Strategy",
      description: "Data-driven creative direction that aligns design decisions with measurable business outcomes."
    }
  ];

  return (
    <div className="min-h-screen relative bg-zinc-950 overflow-hidden">
      <Navigation />
      <SecretSudoButton />
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sophisticated gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-900/50 via-transparent to-zinc-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(233,30,99,0.02),transparent_70%)]" />
        
        {/* Refined grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        {/* Elegant floating elements */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-orange-400/20 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}} />
        <div className="absolute top-64 right-32 w-1 h-1 bg-pink-400/30 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}} />
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '5s'}} />
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <AnimatedHeroText />
        
        {/* Premium accent line */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-zinc-600 via-zinc-500 to-transparent" />
        </div>
      </section>

      {/* Capabilities Section - Enhanced */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500/60 via-pink-500/40 to-transparent" />
              <span className="text-sm font-medium text-zinc-400 tracking-[0.2em] uppercase">Capabilities</span>
              <Sparkles className="w-4 h-4 text-orange-400/60" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-8 max-w-4xl tracking-tight">
              Precision-crafted solutions that bridge the gap between 
              <span className="font-medium italic text-zinc-300 block mt-2"> vision and reality</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Every project is an opportunity to create something extraordinary that drives meaningful results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/5 to-zinc-900/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-gradient-to-br from-zinc-800/80 to-zinc-900/60 border border-zinc-700/50 rounded-xl group-hover:border-orange-500/20 transition-all duration-500 backdrop-blur-sm">
                      <div className="text-zinc-300 group-hover:text-orange-400 transition-colors duration-500">
                        {capability.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-orange-100 transition-colors duration-500 tracking-tight">
                        {capability.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-zinc-700/50 via-zinc-600/30 to-transparent group-hover:from-orange-500/30 group-hover:via-pink-500/20 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Preview Section - Enhanced */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-px bg-gradient-to-r from-cyan-500/60 via-blue-500/40 to-transparent" />
                <span className="text-sm font-medium text-zinc-400 tracking-[0.2em] uppercase">Recent Work</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-[1.1] mb-10 tracking-tight">
                Projects that demonstrate our commitment to 
                <span className="font-medium italic text-zinc-300 block mt-2"> exceptional craft</span>
              </h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center mt-1 group-hover:border-orange-500/40 transition-all duration-500">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-medium mb-2 group-hover:text-orange-100 transition-colors duration-300">Shriniketana School</h4>
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Complete brand identity and digital presence for educational institution</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center mt-1 group-hover:border-blue-500/40 transition-all duration-500">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" style={{animationDelay: '1s'}} />
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-medium mb-2 group-hover:text-blue-100 transition-colors duration-300">Nyve Design</h4>
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      Social media marketing strategy - 
                      <a href="https://www.nyvedesign.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors ml-1 underline decoration-blue-400/30 hover:decoration-blue-300/60">
                        www.nyvedesign.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center mt-1 group-hover:border-purple-500/40 transition-all duration-500">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{animationDelay: '2s'}} />
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-medium mb-2 group-hover:text-purple-100 transition-colors duration-300">Enterprise Rebrand</h4>
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Complete visual identity overhaul resulting in 40% increase in brand recognition</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-pink-500/5 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60" />
              <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/60 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-orange-500/20 transition-all duration-700">
                <img 
                  src="/lovable-uploads/67b4cc52-5a7d-48bb-a24d-a7ff5c22d39d.png"
                  alt="Nyve Design Website Screenshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-40 px-6 relative border-t border-zinc-800/60 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            <span className="text-sm font-medium text-zinc-400 tracking-[0.2em] uppercase">Get Started</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white leading-[1.1] mb-10 tracking-tight">
            Ready to elevate your brand?
          </h2>
          <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can transform your vision into a compelling digital presence that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 text-lg"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-5 border border-zinc-700 text-zinc-300 font-medium rounded-full transition-all duration-300 hover:border-orange-500/50 hover:text-white hover:bg-orange-500/5 hover:scale-105 text-lg backdrop-blur-sm"
            >
              View Services
            </Link>
          </div>

          <div className="mt-20 pt-10 border-t border-zinc-800/40">
            <p className="text-zinc-500 tracking-wider">
              <span className="font-medium text-zinc-400">Aniketh</span> • 
              <span className="mx-3">Bangalore</span> • 
              <span className="font-medium">Response within 24 hours</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
