
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
    <div className="text-center space-y-12 max-w-7xl mx-auto relative z-10">
      <div className="space-y-8">
        <div className="text-7xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight">
          <div className="relative inline-block mb-4">
            <span 
              className={`bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-medium transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-4 scale-95' : 'opacity-100 transform translate-y-0 scale-100'
              }`}
            >
              {descriptors[currentWordIndex]}
            </span>
          </div>
          <div className="text-white font-light tracking-tighter">
            Design
          </div>
          <div className="text-zinc-300 font-extralight tracking-wider">
            Solutions
          </div>
        </div>
      </div>
      
      <div className="space-y-10">
        <p className="text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
          Creating distinctive digital experiences and brand identities that drive measurable business growth through 
          <span className="text-orange-400 font-medium"> thoughtful design strategy</span>.
        </p>
        
        <div className="flex items-center justify-center gap-3 text-sm text-zinc-500 tracking-widest">
          <span className="font-medium">EST. 2024</span>
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-4" />
          <span className="font-medium">BANGALORE</span>
          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-4" />
          <span className="font-medium">INDEPENDENT STUDIO</span>
        </div>
      </div>
      
      <div className="pt-16">
        <Link 
          to="/contact"
          className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-semibold rounded-full text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 overflow-hidden"
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
