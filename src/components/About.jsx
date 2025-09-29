import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import animatedVideo from '../assets/animated-video.mp4';

// About Shimmer Loading Component
const AboutShimmer = () => (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Video Section Shimmer */}
        <div className="order-1 lg:order-1">
            <div className="bg-gradient-to-br from-white to-almond/50 p-8 rounded-2xl shadow-xl border border-twine/20">
                <div className="aspect-square bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded-xl animate-shimmer">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                </div>
            </div>
        </div>

        {/* Content Section Shimmer */}
        <div className="order-2 lg:order-2">
            <div className="space-y-6">
                <div className="h-10 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                
                <div className="space-y-4">
                    <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                    <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded w-5/6 animate-shimmer"></div>
                    <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded w-4/6 animate-shimmer"></div>
                </div>
                
                <div className="space-y-4">
                    <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                    <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded w-3/4 animate-shimmer"></div>
                    <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded w-5/6 animate-shimmer"></div>
                </div>

                <div className="pt-6">
                    <div className="h-12 w-48 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded-full animate-shimmer"></div>
                </div>
            </div>
        </div>
    </div>
);

// Stats Shimmer Component
const StatsShimmer = () => (
    <div className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                    <div className="h-12 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded mb-2 animate-shimmer"></div>
                    <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                </div>
            ))}
        </div>
    </div>
);

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const aboutRef = useRef(null);

    useEffect(() => {
        // Simulate loading for shimmer effect
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            clearTimeout(loadingTimer);
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-almond to-white relative overflow-hidden" ref={aboutRef}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-20 h-20 bg-twine rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-16 h-16 bg-leather rounded-full animate-bounce"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-russet font-serif mb-6">
                        About Puff & Sip
                    </h2>
                    <div className="w-24 h-1 bg-twine mx-auto mb-6"></div>
                </div>

                {isLoading ? (
                    <>
                        <AboutShimmer />
                        <StatsShimmer />
                    </>
                ) : (
                    <>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Animated Video Section */}
                    <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-white to-almond/50 p-8 rounded-2xl shadow-xl border border-twine/20">
                            <div className="aspect-square bg-gradient-to-br from-almond to-twine/30 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <video autoPlay loop muted className="w-full h-full object-cover rounded-xl">
                                    <source src={animatedVideo} type="video/mp4" />
                                </video>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 w-3 h-3 bg-russet rounded-full animate-ping"></div>
                                <div className="absolute top-4 right-4 w-2 h-2 bg-twine rounded-full animate-pulse"></div>
                                <div className="absolute bottom-4 left-4 w-2 h-2 bg-leather rounded-full animate-bounce"></div>
                                <div className="absolute bottom-4 right-4 w-3 h-3 bg-russet/50 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-russet font-serif">
                                Where Stories Brew
                            </h3>
                            
                            <p className="text-lg text-leather leading-relaxed">
                                At Puff & Sip, we craft more than just exceptional coffee and pastries – we create moments 
                                that matter. Our cozy café combines traditional baking techniques with premium coffee culture 
                                to deliver an unforgettable experience.
                            </p>
                            
                            <p className="text-lg text-leather leading-relaxed">
                                Every puff pastry is hand-rolled to perfection, our artisan breads are baked fresh daily, 
                                and our coffee beans are carefully selected to bring out their unique flavors. 
                                We believe great food brings people together.
                            </p>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <Link 
                                    to="/about-us" 
                                    className="inline-flex items-center bg-russet text-almond px-8 py-3 rounded-full font-semibold hover:bg-leather transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Read Our Full Story
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className={`mt-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-bold text-russet mb-2 group-hover:scale-110 transition-transform duration-300">
                                500+
                            </div>
                            <div className="text-leather font-medium">Happy Customers</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-bold text-russet mb-2 group-hover:scale-110 transition-transform duration-300">
                                50+
                            </div>
                            <div className="text-leather font-medium">Menu Items</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-bold text-russet mb-2 group-hover:scale-110 transition-transform duration-300">
                                5
                            </div>
                            <div className="text-leather font-medium">Years Experience</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-bold text-russet mb-2 group-hover:scale-110 transition-transform duration-300">
                                100%
                            </div>
                            <div className="text-leather font-medium">Fresh Daily</div>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default About;