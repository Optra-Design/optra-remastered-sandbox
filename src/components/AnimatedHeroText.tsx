
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
    <div className="text-center space-y-20 max-w-8xl mx-auto relative z-10 px-8">
      <div className="space-y-16">
        <div className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-extralight leading-[0.8] tracking-[-0.04em] font-mono">
          <div className="relative inline-block mb-8">
            <span 
              className={`bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent font-light transition-all duration-700 ${
                isAnimating ? 'opacity-0 transform translate-y-8 scale-95' : 'opacity-100 transform translate-y-0 scale-100'
              }`}
              style={{ textShadow: '0 0 80px rgba(255, 193, 7, 0.3)' }}
            >
              {descriptors[currentWordIndex]}
            </span>
          </div>
          <div className="text-white font-extralight tracking-[-0.02em] mb-4">
            Design
          </div>
          <div className="text-zinc-200 font-thin tracking-[0.02em] italic">
            Solutions
          </div>
        </div>
      </div>
      
      <div className="space-y-16">
        <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-200 max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
          Creating distinctive digital experiences and brand identities that drive measurable business growth through 
          <span className="text-amber-300 font-normal"> thoughtful design strategy</span>.
        </p>
        
        <div className="flex items-center justify-center gap-6 text-sm text-zinc-400 tracking-[0.3em] font-light">
          <span className="font-medium">EST. 2024</span>
          <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
          <span className="font-medium">BANGALORE</span>
          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full" />
          <span className="font-medium">INDEPENDENT STUDIO</span>
        </div>
      </div>
      
      <div className="pt-24">
        <Link 
          to="/contact"
          className="group relative inline-flex items-center gap-6 px-16 py-8 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-medium rounded-full text-xl transition-all duration-700 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 overflow-hidden backdrop-blur-sm border border-amber-400/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="relative z-10 tracking-wide font-light">Let's work together</span>
          <ArrowRight className="relative z-10 w-7 h-7 group-hover:translate-x-2 transition-transform duration-500" />
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-200 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
        </Link>
      </div>
    </div>
  );
};

export default AnimatedHeroText;
