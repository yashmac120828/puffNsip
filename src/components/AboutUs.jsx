import React, { useState, useEffect, useRef } from 'react';
import animatedVideo from '../assets/animated-video.mp4';

function AboutUs() {
    const [isVisible, setIsVisible] = useState({});
    const sectionRefs = useRef({});

    useEffect(() => {
        const observers = {};
        
        Object.keys(sectionRefs.current).forEach(key => {
            if (sectionRefs.current[key]) {
                observers[key] = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setIsVisible(prev => ({ ...prev, [key]: true }));
                        }
                    },
                    { threshold: 0.1 }
                );
                observers[key].observe(sectionRefs.current[key]);
            }
        });

        return () => {
            Object.values(observers).forEach(observer => observer.disconnect());
        };
    }, []);

    const setRef = (key) => (el) => {
        sectionRefs.current[key] = el;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-almond to-white">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-almond via-almond to-twine/20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-russet rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-28 h-28 bg-leather rounded-full animate-bounce"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold text-russet font-serif mb-6">
                        About Us                  </h1>
                    <div className="w-32 h-1 bg-twine mx-auto mb-8"></div>
                    <p className="text-2xl md:text-3xl text-leather max-w-4xl mx-auto leading-relaxed">
                        Discover the heart and soul behind every cup and every bite
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section 
                ref={setRef('story')} 
                className={`py-16 md:py-24 transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-russet font-serif mb-8">
                                Our Story
                            </h2>
                            <div className="space-y-6 text-lg text-leather leading-relaxed">
                                <p>
                                    It all began in a small kitchen with a dream to create the perfect puff pastry. 
                                    Our founder, inspired by traditional European bakeries and the warmth of community cafés, 
                                    envisioned a place where exceptional food meets premium coffee in a cozy, welcoming atmosphere.
                                </p>
                                <p>
                                    What makes Puff & Sip unique is our commitment to handcrafted excellence. Every morning, 
                                    our bakers arrive before dawn to roll, fold, and bake each puff pastry to golden perfection. 
                                    Our coffee beans are carefully sourced from sustainable farms and roasted in small batches 
                                    to preserve their distinct flavors.
                                </p>
                                <p>
                                    We're not just a café – we're a community hub where friends meet, ideas brew, and 
                                    every customer becomes part of our extended family.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-white to-almond/50 p-8 rounded-2xl shadow-xl">
                            <video autoPlay loop muted className="w-full h-full object-cover rounded-xl">
                                <source src={animatedVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section 
                ref={setRef('mission')} 
                className={`py-16 md:py-24 bg-gradient-to-r from-russet/5 to-twine/5 transition-all duration-1000 delay-300 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-russet font-serif mb-12">
                        Our Mission & Values
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-russet rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl text-almond">🌱</span>
                            </div>
                            <h3 className="text-2xl font-bold text-russet mb-4">Sustainability</h3>
                            <p className="text-leather">
                                We use eco-friendly cups, support local farmers, and source ingredients responsibly 
                                to minimize our environmental impact.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-twine rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl text-white">💝</span>
                            </div>
                            <h3 className="text-2xl font-bold text-russet mb-4">Quality First</h3>
                            <p className="text-leather">
                                Every ingredient is carefully selected, every recipe perfected, and every cup brewed 
                                with precision to ensure exceptional taste.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-leather rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl text-almond">🤝</span>
                            </div>
                            <h3 className="text-2xl font-bold text-russet mb-4">Community</h3>
                            <p className="text-leather">
                                We believe in building connections, supporting local businesses, and creating a 
                                space where everyone feels welcome and valued.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section 
                ref={setRef('experience')} 
                className={`py-16 md:py-24 transition-all duration-1000 delay-500 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-russet font-serif mb-6">
                            The Puff & Sip Experience
                        </h2>
                        <p className="text-xl text-leather max-w-3xl mx-auto">
                            Step into our world of warmth, comfort, and exceptional flavors
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-russet rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-almond text-xl">🏠</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-russet mb-2">Cozy Atmosphere</h3>
                                    <p className="text-leather">
                                        Our retro-modern interior combines vintage charm with contemporary comfort, 
                                        featuring warm lighting, comfortable seating, and carefully curated décor.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-twine rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xl">👥</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-russet mb-2">Friendly Service</h3>
                                    <p className="text-leather">
                                        Our passionate team knows every regular's favorite order and welcomes 
                                        newcomers with genuine warmth and expert recommendations.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-leather rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-almond text-xl">✨</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-russet mb-2">Unique Experience</h3>
                                    <p className="text-leather">
                                        From watching latte art being created to the aroma of fresh-baked pastries, 
                                        every visit engages your senses and creates lasting memories.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-almond to-twine/30 h-48 rounded-xl flex items-center justify-center">
                                    <span className="text-6xl">☕</span>
                                </div>
                                <div className="bg-gradient-to-br from-russet/20 to-leather/30 h-32 rounded-xl flex items-center justify-center">
                                    <span className="text-4xl">🥐</span>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="bg-gradient-to-br from-twine/30 to-russet/20 h-32 rounded-xl flex items-center justify-center">
                                    <span className="text-4xl">🍞</span>
                                </div>
                                <div className="bg-gradient-to-br from-leather/30 to-almond h-48 rounded-xl flex items-center justify-center">
                                    <span className="text-6xl">😊</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section 
                ref={setRef('team')} 
                className={`py-16 md:py-24 bg-gradient-to-r from-russet/5 to-twine/5 transition-all duration-1000 delay-700 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-russet font-serif mb-12">
                        Meet Our Team
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/80 p-8 rounded-2xl shadow-lg">
                            <div className="w-24 h-24 bg-gradient-to-br from-russet to-leather rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-4xl text-almond">👨‍🍳</span>
                            </div>
                            <h3 className="text-xl font-bold text-russet mb-2">Head Baker</h3>
                            <p className="text-leather">
                                Master of puff pastries with 15+ years of experience in European-style baking.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-8 rounded-2xl shadow-lg">
                            <div className="w-24 h-24 bg-gradient-to-br from-twine to-russet rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-4xl text-white">☕</span>
                            </div>
                            <h3 className="text-xl font-bold text-russet mb-2">Coffee Expert</h3>
                            <p className="text-leather">
                                Certified barista specializing in single-origin beans and signature blends.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-8 rounded-2xl shadow-lg">
                            <div className="w-24 h-24 bg-gradient-to-br from-leather to-twine rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-4xl text-almond">👥</span>
                            </div>
                            <h3 className="text-xl font-bold text-russet mb-2">Customer Care Team</h3>
                            <p className="text-leather">
                                Friendly faces dedicated to making every visit memorable and welcoming.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Offerings */}
            <section 
                ref={setRef('offerings')} 
                className={`py-16 md:py-24 transition-all duration-1000 delay-900 ${isVisible.offerings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-russet font-serif mb-6">
                            Signature Offerings
                        </h2>
                        <p className="text-xl text-leather max-w-3xl mx-auto">
                            Our bestsellers that keep customers coming back for more
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">🥐</div>
                            <h3 className="text-xl font-bold text-russet text-center mb-3">Classic Puff</h3>
                            <p className="text-leather text-center text-sm">
                                Our signature flaky pastry with layers of buttery goodness, available in sweet and savory varieties.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">☕</div>
                            <h3 className="text-xl font-bold text-russet text-center mb-3">House Blend</h3>
                            <p className="text-leather text-center text-sm">
                                Our carefully crafted coffee blend with notes of chocolate and caramel, perfect for any time of day.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">🍞</div>
                            <h3 className="text-xl font-bold text-russet text-center mb-3">Artisan Toast</h3>
                            <p className="text-leather text-center text-sm">
                                Thick-cut sourdough toast topped with seasonal ingredients and creative combinations.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                            <h3 className="text-xl font-bold text-russet text-center mb-3">Seasonal Special</h3>
                            <p className="text-leather text-center text-sm">
                                Limited-time creations featuring the finest seasonal ingredients and innovative flavor combinations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-russet to-leather">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-almond font-serif mb-6">
                        Ready to Experience Puff & Sip?
                    </h2>
                    <p className="text-xl text-almond/90 mb-12 max-w-2xl mx-auto">
                        Come taste the difference that passion and quality make. We can't wait to welcome you!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a 
                            href="#menu" 
                            className="bg-almond text-russet px-10 py-4 rounded-full text-lg font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            See Our Full Menu
                        </a>
                        <a 
                            href="#contact" 
                            className="border-2 border-almond text-almond px-10 py-4 rounded-full text-lg font-semibold hover:bg-almond hover:text-russet transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Visit Us Today
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;