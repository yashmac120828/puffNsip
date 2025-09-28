import React, { useState, useEffect } from 'react';
import puffSipLogo from '../assets/Puff-and-Sip-Logo.png';

function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    
    const texts = [
        'Fresh Puffs',
        'Crispy Toasts', 
        'Artisan Breads',
        'Premium Coffee'
    ];

    useEffect(() => {
        const currentText = texts[currentTextIndex];
        
        if (currentIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 150);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentIndex(0);
                setCurrentTextIndex((currentTextIndex + 1) % texts.length);
                setDisplayText('');
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, currentTextIndex, texts]);

    return (
        <section id="hero" className="min-h-screen bg-gradient-to-br from-almond via-almond to-twine/20 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 bg-russet rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-leather rounded-full animate-bounce"></div>
                <div className="absolute bottom-32 left-32 w-20 h-20 bg-twine rounded-full animate-ping"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-russet/30 rounded-full animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Logo Animation */}
                <div className="mb-8 animate-fade-in-down">
                    <img 
                        src={puffSipLogo} 
                        alt="Puff and Sip Logo" 
                        className="mx-auto h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain animate-bounce-slow"
                    />
                </div>

                {/* Main Heading */}
                <div className="mb-6 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-russet font-serif mb-4 leading-tight">
                        Welcome to
                        <span className="block text-leather animate-pulse">
                            Puff & Sip
                        </span>
                    </h1>
                </div>

                {/* Typing Effect Subheading */}
                <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-twine mb-4 h-16 md:h-20 flex items-center justify-center">
                        Serving Delicious{' '}
                        <span className="ml-3 text-russet border-r-2 border-russet animate-pulse min-w-fit">
                            {displayText}
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <div className="mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
                    <p className="text-lg md:text-xl lg:text-2xl text-leather max-w-4xl mx-auto leading-relaxed px-4">
                        Experience the perfect blend of freshly baked puffs, golden toasts, artisan breads, 
                        and premium coffee. Every bite and sip crafted with love and finest ingredients to 
                        brighten your day.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                    <button className="bg-russet text-almond px-8 py-4 rounded-full text-lg font-semibold hover:bg-leather transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-48" >
                        Explore Menu
                    </button>
                    <button className="border-2 border-russet text-russet px-8 py-4 rounded-full text-lg font-semibold hover:bg-russet hover:text-almond transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-48">
                        Visit Us
                    </button>
                </div>

                
            </div>

           
        </section>
    );
}

export default Hero;