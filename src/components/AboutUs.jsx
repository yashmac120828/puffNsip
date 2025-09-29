import React, { useState, useEffect, useRef } from 'react';

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
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            {/* Hero Section */}
            <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-br from-amber-50 via-amber-100 to-orange-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-amber-600 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-14 h-14 sm:w-28 sm:h-28 bg-orange-700 rounded-full animate-bounce"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-amber-800 font-serif mb-4 sm:mb-6 animate-fade-in">
                        About Us
                    </h1>
                    <div className="w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-orange-600 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
                    <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-orange-800 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed px-2">
                        Discover the heart and soul behind every cup and every bite
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section 
                ref={setRef('story')} 
                className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 font-serif mb-4 sm:mb-6 md:mb-8">
                                Our Story
                            </h2>
                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-orange-800 leading-relaxed">
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
                        <div className="order-1 lg:order-2 bg-gradient-to-br from-white to-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Coffee being prepared by skilled barista" 
                                className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message Section */}
            <section 
                ref={setRef('director')} 
                className={`py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-r from-amber-50 to-orange-50 transition-all duration-1000 delay-300 ${isVisible.director ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 font-serif mb-6 sm:mb-8 md:mb-12">
                            A Message from Our Owner
                        </h2>
                        
                        <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl relative">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-amber-600 rounded-full flex items-center justify-center">
                                <span className="text-xl sm:text-2xl text-white">"</span>
                            </div>
                            
                            <div className="mb-6 sm:mb-8">
                                <img 
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" 
                                    alt="Owner of Puff & Sip" 
                                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover shadow-lg"
                                />
                                <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-2">Michael Thompson</h3>
                                <p className="text-sm sm:text-base text-orange-600 font-medium">Founder & Director</p>
                            </div>
                            
                            <blockquote className="text-sm sm:text-base md:text-lg text-orange-800 leading-relaxed italic mb-6 sm:mb-8">
                                "When I opened Puff & Sip five years ago, my vision was simple: create a space where quality meets community. 
                                Today, seeing familiar faces light up when they walk through our doors, watching new friendships form over 
                                shared tables, and knowing that our handcrafted pastries and carefully sourced coffee bring joy to people's 
                                daily routines – this is what makes every early morning and late night worth it. We're not just serving food 
                                and drinks; we're crafting experiences and building connections that last a lifetime."
                            </blockquote>
                            
                            <div className="text-right">
                                <img 
                                    src="https://plus.unsplash.com/premium_photo-1723888835240-abcd5c881a9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lnbmF0dXJlJTIwaWFtZ2V8ZW58MHx8MHx8fDA%3D" 
                                    alt="Owner signature" 
                                    className="w-20 sm:w-24 md:w-32 h-8 sm:h-10 md:h-12 object-contain ml-auto opacity-60"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section 
                ref={setRef('mission')} 
                className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-all duration-1000 delay-500 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 font-serif mb-6 sm:mb-8 md:mb-12">
                        Our Mission & Values
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
                        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                                    alt="Sustainable farming practices" 
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-800 mb-3 sm:mb-4">Sustainability</h3>
                            <p className="text-sm sm:text-base text-orange-800">
                                We use eco-friendly cups, support local farmers, and source ingredients responsibly 
                                to minimize our environmental impact.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                                    alt="Quality ingredients and preparation" 
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-800 mb-3 sm:mb-4">Quality First</h3>
                            <p className="text-sm sm:text-base text-orange-800">
                                Every ingredient is carefully selected, every recipe perfected, and every cup brewed 
                                with precision to ensure exceptional taste.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                            <div className="mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                                    alt="Community gathering at cafe" 
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-800 mb-3 sm:mb-4">Community</h3>
                            <p className="text-sm sm:text-base text-orange-800">
                                We believe in building connections, supporting local businesses, and creating a 
                                space where everyone feels welcome and valued.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section 
                ref={setRef('testimonials')} 
                className={`py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-r from-amber-50 to-orange-50 transition-all duration-1000 delay-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 font-serif mb-4 sm:mb-6">
                            What Our Customers Say
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-orange-800 max-w-3xl mx-auto">
                            Hear from the people who make our café a vibrant community
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                                    alt="Sarah Johnson customer" 
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                                />
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-amber-800">Sarah Johnson</h4>
                                    <p className="text-xs sm:text-sm text-orange-600">Regular Customer</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex text-yellow-400 text-sm sm:text-base">
                                    ★★★★★
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-orange-800 italic">
                                "The best coffee in town! I've been coming here for two years, and the quality never disappoints. 
                                The staff remembers my order, and the atmosphere is perfect for both work and catching up with friends."
                            </p>
                        </div>

                        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                                    alt="David Chen customer" 
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                                />
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-amber-800">David Chen</h4>
                                    <p className="text-xs sm:text-sm text-orange-600">Food Blogger</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex text-yellow-400 text-sm sm:text-base">
                                    ★★★★★
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-orange-800 italic">
                                "As a food blogger, I've visited countless cafés, but Puff & Sip stands out. Their puff pastries are 
                                authentically made, and you can taste the difference. It's become my go-to spot for content creation!"
                            </p>
                        </div>

                        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                                    alt="Emily Rodriguez customer" 
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                                />
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-amber-800">Emily Rodriguez</h4>
                                    <p className="text-xs sm:text-sm text-orange-600">Local Artist</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex text-yellow-400 text-sm sm:text-base">
                                    ★★★★★
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-orange-800 italic">
                                "This place has soul! The décor inspires my art, the coffee fuels my creativity, and the community 
                                here is incredible. I've made so many connections through the events they host."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section 
                ref={setRef('experience')} 
                className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-all duration-1000 delay-900 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 font-serif mb-4 sm:mb-6">
                            The Puff & Sip Experience
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-orange-800 max-w-3xl mx-auto">
                            Step into our world of warmth, comfort, and exceptional flavors
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img 
                                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                                        alt="Cozy cafe interior" 
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">Cozy Atmosphere</h3>
                                    <p className="text-sm sm:text-base text-orange-800">
                                        Our retro-modern interior combines vintage charm with contemporary comfort, 
                                        featuring warm lighting, comfortable seating, and carefully curated décor.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img 
                                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                                        alt="Friendly barista serving coffee" 
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">Friendly Service</h3>
                                    <p className="text-sm sm:text-base text-orange-800">
                                        Our passionate team knows every regular's favorite order and welcomes 
                                        newcomers with genuine warmth and expert recommendations.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img 
                                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                                        alt="Latte art being created" 
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">Unique Experience</h3>
                                    <p className="text-sm sm:text-base text-orange-800">
                                        From watching latte art being created to the aroma of fresh-baked pastries, 
                                        every visit engages your senses and creates lasting memories.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="h-32 sm:h-40 md:h-48 rounded-xl overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                        alt="Perfect coffee cup with latte art" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="h-24 sm:h-28 md:h-32 rounded-xl overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1634598604019-7fca68ad3b8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG9hc3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" 
                                        alt="Fresh baked croissant" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 md:mt-8">
                                <div className="h-24 sm:h-28 md:h-32 rounded-xl overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                        alt="Artisanal bread and pastries" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="h-32 sm:h-40 md:h-48 rounded-xl overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                        alt="Happy customers enjoying cafe experience" 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section 
                ref={setRef('team')} 
                className={`py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-r from-amber-50 to-orange-50 transition-all duration-1000 delay-1100 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 font-serif mb-6 sm:mb-8 md:mb-12">
                        Meet Our Team
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                                    alt="Head Baker in kitchen" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">Marcus Williams</h3>
                            <p className="text-sm sm:text-base text-orange-600 font-medium mb-3">Head Baker</p>
                            <p className="text-xs sm:text-sm text-orange-800">
                                Master of puff pastries with 15+ years of experience in European-style baking.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                                    alt="Coffee expert preparing specialty drink" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">Sofia Martinez</h3>
                            <p className="text-sm sm:text-base text-orange-600 font-medium mb-3">Coffee Expert</p>
                            <p className="text-xs sm:text-sm text-orange-800">
                                Certified barista specializing in single-origin beans and signature blends.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                            <div className="mb-4 sm:mb-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                                    alt="Customer service team member smiling" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2">Customer Care Team</h3>
                            <p className="text-sm sm:text-base text-orange-600 font-medium mb-3">Service Excellence</p>
                            <p className="text-xs sm:text-sm text-orange-800">
                                Friendly faces dedicated to making every visit memorable and welcoming.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Offerings */}
            <section 
                ref={setRef('offerings')} 
                className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-all duration-1000 delay-1300 ${isVisible.offerings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 font-serif mb-4 sm:mb-6">
                            Signature Offerings
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-orange-800 max-w-3xl mx-auto">
                            Our bestsellers that keep customers coming back for more
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1653550027228-e3202a24ccc1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                    alt="Classic puff pastry golden and flaky" 
                                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-amber-800 text-center mb-3">Classic Puff</h3>
                            <p className="text-orange-800 text-center text-xs sm:text-sm">
                                Our signature flaky pastry with layers of buttery goodness, available in sweet and savory varieties.
                            </p>
                        </div>
                        
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                    alt="House blend coffee with perfect foam art" 
                                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-amber-800 text-center mb-3">House Blend</h3>
                            <p className="text-orange-800 text-center text-xs sm:text-sm">
                                Our carefully crafted coffee blend with notes of chocolate and caramel, perfect for any time of day.
                            </p>
                        </div>
                        
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                    alt="Artisan toast with creative toppings" 
                                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-amber-800 text-center mb-3">Artisan Toast</h3>
                            <p className="text-orange-800 text-center text-xs sm:text-sm">
                                Thick-cut sourdough toast topped with seasonal ingredients and creative combinations.
                            </p>
                        </div>
                        
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
                            <div className="mb-4 overflow-hidden rounded-xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1572381628347-92199ba360c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vhc29uYWx8ZW58MHx8MHx8fDA%3D" 
                                    alt="Seasonal special pastry creation" 
                                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-amber-800 text-center mb-3">Seasonal Special</h3>
                            <p className="text-orange-800 text-center text-xs sm:text-sm">
                                Limited-time creations featuring the finest seasonal ingredients and innovative flavor combinations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-r from-amber-700 to-orange-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-50 font-serif mb-4 sm:mb-6">
                        Ready to Experience Puff & Sip?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-amber-100 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                        Come taste the difference that passion and quality make. We can't wait to welcome you!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                        <a 
                            href="/full-menu" 
                            className="bg-amber-50 text-amber-800 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            See Our Full Menu
                        </a>
                        <a 
                            href="#contact" 
                            className="border-2 border-amber-50 text-amber-50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-amber-50 hover:text-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Visit Us Today
                        </a>
                    </div>
                </div>
            </section>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                @media (max-width: 640px) {
                    .container {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }

                /* Smooth scrolling for better UX */
                html {
                    scroll-behavior: smooth;
                }

                /* Enhanced hover effects */
                .group:hover img {
                    filter: brightness(1.1);
                }

                /* Loading animation for images */
                img {
                    transition: all 0.3s ease;
                }

                img:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
}

export default AboutUs;