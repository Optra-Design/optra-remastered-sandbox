
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
    <div className="text-center space-y-16 max-w-8xl mx-auto relative z-10">
      <div className="space-y-12">
        {/* Premium badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-zinc-900/80 to-zinc-800/60 border border-zinc-700/40 rounded-full backdrop-blur-sm mb-8">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-zinc-300 tracking-[0.3em] uppercase">Exclusive Design Studio</span>
          <Sparkles className="w-3 h-3 text-orange-400/70" />
        </div>

        <div className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-extralight leading-[0.85] tracking-[-0.02em]">
          <div className="relative inline-block mb-6">
            <span 
              className={`bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-light transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-8 scale-95' : 'opacity-100 transform translate-y-0 scale-100'
              }`}
              style={{
                textShadow: '0 0 80px rgba(255, 107, 53, 0.3)',
                filter: 'drop-shadow(0 4px 20px rgba(255, 107, 53, 0.2))'
              }}
            >
              {descriptors[currentWordIndex]}
            </span>
          </div>
          <div className="text-white font-extralight tracking-[-0.04em] mb-4">
            Design
          </div>
          <div className="text-zinc-200 font-thin tracking-[-0.01em]">
            Solutions
          </div>
        </div>

        {/* Premium underline */}
        <div className="flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
        </div>
      </div>
      
      <div className="space-y-12">
        <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-300 max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
          Creating distinctive digital experiences and brand identities that drive measurable business growth through 
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text font-medium"> thoughtful design strategy</span>.
        </p>
        
        <div className="flex items-center justify-center gap-4 text-sm text-zinc-500 tracking-[0.2em] font-medium">
          <div className="flex items-center gap-3">
            <span>EST. 2024</span>
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full" />
          </div>
          <div className="flex items-center gap-3">
            <span>BANGALORE</span>
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
          </div>
          <div className="flex items-center gap-3">
            <span>INDEPENDENT STUDIO</span>
          </div>
        </div>
      </div>
      
      <div className="pt-20">
        <Link 
          to="/contact"
          className="group relative inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-semibold rounded-full text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(255, 107, 53, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 tracking-wide">Let's work together</span>
          <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
        </Link>
      </div>
    </div>
  );
};

export default AnimatedHeroText;
