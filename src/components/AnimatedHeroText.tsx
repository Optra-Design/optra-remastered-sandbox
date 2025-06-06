
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const AnimatedHeroText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const descriptors = ['Strategic', 'Purposeful', 'Thoughtful', 'Precise', 'Intentional'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % descriptors.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-16 max-w-7xl mx-auto relative z-10 px-8">
      <div className="space-y-12">
        <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin leading-[0.85] tracking-[-0.03em] font-serif">
          <div className="relative inline-block mb-6">
            <span 
              className={`bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent font-extralight transition-all duration-700 ${
                isAnimating ? 'opacity-0 transform translate-y-6 scale-95' : 'opacity-100 transform translate-y-0 scale-100'
              }`}
              style={{ 
                textShadow: '0 0 60px rgba(255, 193, 7, 0.25)',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              {descriptors[currentWordIndex]}
            </span>
          </div>
          <div className="text-white font-thin tracking-[-0.02em] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Design
          </div>
          <div className="text-zinc-100 font-extralight tracking-[0.01em] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Solutions
          </div>
        </div>
      </div>
      
      <div className="space-y-12">
        <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
          Creating distinctive digital experiences and brand identities that drive measurable business growth through 
          <span className="text-amber-200 font-normal"> thoughtful design strategy</span>.
        </p>
        
        <div className="flex items-center justify-center gap-6 text-sm text-zinc-400 tracking-[0.3em] font-light">
          <span className="font-medium">EST. 2024</span>
          <div className="w-2 h-2 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full" />
          <span className="font-medium">BANGALORE</span>
          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" />
          <span className="font-medium">INDEPENDENT STUDIO</span>
        </div>
      </div>
      
      <div className="pt-20">
        <Link 
          to="/contact"
          className="group relative inline-flex items-center gap-5 px-14 py-7 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white font-light rounded-full text-lg transition-all duration-700 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 overflow-hidden backdrop-blur-sm border border-amber-300/30"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="relative z-10 tracking-wide font-light" style={{ fontFamily: "'Playfair Display', serif" }}>Let's work together</span>
          <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
          <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-100 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
        </Link>
      </div>
    </div>
  );
};

export default AnimatedHeroText;
