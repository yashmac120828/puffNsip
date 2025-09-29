import React, { useState, useEffect, useRef } from 'react';

// Shimmer Loading Components
const ContactShimmer = () => (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Form Shimmer */}
        <div className="order-2 lg:order-1">
            <div className="bg-white/90 p-6 md:p-8 rounded-2xl shadow-xl border border-twine/20">
                <div className="space-y-6">
                    <div className="h-8 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                    <div className="h-4 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded w-3/4 animate-shimmer"></div>
                    
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i}>
                                <div className="h-4 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded w-1/4 mb-2 animate-shimmer"></div>
                                <div className="h-10 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="h-12 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                </div>
            </div>
        </div>
        
        {/* Contact Info Shimmer */}
        <div className="order-1 lg:order-2">
            <div className="space-y-8">
                <div className="h-8 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                
                <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/80 p-6 rounded-xl shadow-md border border-twine/10">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-6 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                                    <div className="h-4 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded w-3/4 animate-shimmer"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* QR Codes Shimmer */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white/80 p-6 rounded-xl shadow-md border border-twine/10 text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded mx-auto mb-4 animate-shimmer"></div>
                            <div className="h-5 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// SVG Icons Components
const LocationIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
    </svg>
);

const PhoneIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
    </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 20.312c-2.214 0-4.006-1.792-4.006-4.006V7.694c0-2.214 1.792-4.006 4.006-4.006h7.102c2.214 0 4.006 1.792 4.006 4.006v8.612c0 2.214-1.792 4.006-4.006 4.006H8.449z"/>
        <path d="M12.017 7.075a4.912 4.912 0 1 0 0 9.824 4.912 4.912 0 0 0 0-9.824zm0 8.104a3.192 3.192 0 1 1 0-6.384 3.192 3.192 0 0 1 0 6.384z"/>
        <circle cx="16.806" cy="7.207" r="1.078"/>
    </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
    </svg>
);

const CoffeeIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 21h20v2H2zM20 19c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H2C.9 4 0 4.9 0 6v11c0 1.1.9 2 2 2h18zM7 6h8v10c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V6z"/>
        <circle cx="6" cy="10" r="1"/>
        <circle cx="6" cy="14" r="1"/>
    </svg>
);

const QRCodeIcon = ({ className = "w-24 h-24", pattern = "default" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
        {/* Corner squares */}
        <rect x="5" y="5" width="25" height="25" fill="currentColor"/>
        <rect x="70" y="5" width="25" height="25" fill="currentColor"/>
        <rect x="5" y="70" width="25" height="25" fill="currentColor"/>
        
        {/* Inner corner squares */}
        <rect x="10" y="10" width="15" height="15" fill="white"/>
        <rect x="75" y="10" width="15" height="15" fill="white"/>
        <rect x="10" y="75" width="15" height="15" fill="white"/>
        
        {/* Center squares */}
        <rect x="15" y="15" width="5" height="5" fill="currentColor"/>
        <rect x="80" y="15" width="5" height="5" fill="currentColor"/>
        <rect x="15" y="80" width="5" height="5" fill="currentColor"/>
        
        {/* Random pattern for QR effect */}
        {pattern === "instagram" ? (
            <>
                <rect x="40" y="15" width="5" height="5" fill="currentColor"/>
                <rect x="50" y="15" width="5" height="5" fill="currentColor"/>
                <rect x="35" y="25" width="5" height="5" fill="currentColor"/>
                <rect x="45" y="25" width="5" height="5" fill="currentColor"/>
                <rect x="55" y="25" width="5" height="5" fill="currentColor"/>
                <rect x="40" y="35" width="15" height="15" fill="currentColor"/>
                <rect x="45" y="40" width="5" height="5" fill="white"/>
            </>
        ) : (
            <>
                <rect x="35" y="15" width="5" height="5" fill="currentColor"/>
                <rect x="45" y="15" width="5" height="5" fill="currentColor"/>
                <rect x="40" y="25" width="5" height="5" fill="currentColor"/>
                <rect x="50" y="25" width="5" height="5" fill="currentColor"/>
                <rect x="35" y="35" width="5" height="5" fill="currentColor"/>
                <rect x="45" y="35" width="5" height="5" fill="currentColor"/>
                <rect x="55" y="35" width="5" height="5" fill="currentColor"/>
            </>
        )}
        
        {/* Additional pattern elements */}
        <rect x="70" y="40" width="5" height="5" fill="currentColor"/>
        <rect x="80" y="40" width="5" height="5" fill="currentColor"/>
        <rect x="75" y="50" width="5" height="5" fill="currentColor"/>
        <rect x="40" y="70" width="5" height="5" fill="currentColor"/>
        <rect x="50" y="70" width="5" height="5" fill="currentColor"/>
        <rect x="60" y="70" width="5" height="5" fill="currentColor"/>
        <rect x="45" y="80" width="5" height="5" fill="currentColor"/>
        <rect x="55" y="80" width="5" height="5" fill="currentColor"/>
        <rect x="50" y="85" width="5" height="5" fill="currentColor"/>
    </svg>
);

// Coffee Bean Pattern Component
const CoffeeBeanPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute w-8 h-12 bg-russet rounded-full transform rotate-12"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                }}
            />
        ))}
    </div>
);

function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: ''
    });
    const contactRef = useRef(null);

    useEffect(() => {
        // Simulate loading for shimmer effect
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            clearTimeout(loadingTimer);
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', query: '' });
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-almond/20 relative overflow-hidden" ref={contactRef}>
            {/* Enhanced Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-24 h-24 bg-russet rounded-full animate-pulse"></div>
                <div className="absolute top-60 right-32 w-20 h-20 bg-twine rounded-full animate-bounce"></div>
                <div className="absolute bottom-40 left-32 w-16 h-16 bg-leather rounded-full animate-ping"></div>
            </div>
            
            {/* Coffee Bean Pattern */}
            <CoffeeBeanPattern />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-russet font-serif mb-6">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-twine mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-leather max-w-3xl mx-auto">
                        We'd love to hear from you! Drop us a message or visit our cozy café
                    </p>
                </div>

                {isLoading ? (
                    <ContactShimmer />
                ) : (
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Form */}
                    <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-white to-almond/30 p-8 rounded-2xl shadow-xl border border-twine/20 relative overflow-hidden">
                            {/* Coffee cup decoration */}
                            <div className="absolute top-4 right-4 opacity-10">
                                <CoffeeIcon className="w-16 h-16 text-russet" />
                            </div>
                            
                            <h3 className="text-3xl font-bold text-russet font-serif mb-6 text-center">
                                Send us an Enquiry
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-leather font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-twine/30 rounded-xl focus:border-russet focus:outline-none transition-colors duration-300 bg-white/80"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-leather font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-twine/30 rounded-xl focus:border-russet focus:outline-none transition-colors duration-300 bg-white/80"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-leather font-semibold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-twine/30 rounded-xl focus:border-russet focus:outline-none transition-colors duration-300 bg-white/80"
                                        placeholder="+91 9876543210"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="query" className="block text-leather font-semibold mb-2">
                                        Your Query *
                                    </label>
                                    <textarea
                                        id="query"
                                        name="query"
                                        value={formData.query}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border-2 border-twine/30 rounded-xl focus:border-russet focus:outline-none transition-colors duration-300 bg-white/80 resize-none"
                                        placeholder="Tell us about your enquiry, special requests, or feedback..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-russet text-almond px-8 py-4 rounded-xl text-lg font-semibold hover:bg-leather transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Send Enquiry
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className={`space-y-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        {/* Address Card */}
                        <div className="bg-gradient-to-br from-white to-almond/30 p-8 rounded-2xl shadow-xl border border-twine/20 relative overflow-hidden">
                            {/* Puff decoration */}
                            <div className="absolute top-4 right-4 opacity-10">
                                <div className="w-12 h-12 bg-russet rounded-full"></div>
                                <div className="w-8 h-8 bg-russet rounded-full absolute -top-2 -right-2"></div>
                                <div className="w-6 h-6 bg-russet rounded-full absolute -bottom-1 -left-1"></div>
                            </div>
                            
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-russet rounded-full flex items-center justify-center mr-4">
                                    <LocationIcon className="text-almond w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-russet font-serif">Visit Our Café</h3>
                            </div>
                            <div className="text-leather leading-relaxed">
                                <p className="font-semibold text-lg mb-2">Puff & Sip Café</p>
                                <p>123, Heritage Plaza, Brigade Road</p>
                                <p>MG Road Metro Station, Near Coffee Day</p>
                                <p>Bangalore, Karnataka - 560001</p>
                                <p className="mt-4">
                                    <span className="font-semibold">Hours:</span> Mon-Sun 7:00 AM - 10:00 PM
                                </p>
                                <p>
                                    <span className="font-semibold">Phone:</span> +91 80-1234-5678
                                </p>
                            </div>
                        </div>

                        {/* QR Codes */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Instagram QR */}
                            <div className="bg-gradient-to-br from-white to-almond/30 p-6 rounded-2xl shadow-xl border border-twine/20 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <InstagramIcon className="text-white w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-russet mb-3">Follow Us</h4>
                                <div className="flex justify-center mb-3">
                                    <QRCodeIcon className="w-24 h-24 text-russet" pattern="instagram" />
                                </div>
                                <p className="text-leather text-sm">@puffandsip_cafe</p>
                            </div>

                            {/* WhatsApp QR */}
                            <div className="bg-gradient-to-br from-white to-almond/30 p-6 rounded-2xl shadow-xl border border-twine/20 text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <WhatsAppIcon className="text-white w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-russet mb-3">Chat with Us</h4>
                                <div className="flex justify-center mb-3">
                                    <QRCodeIcon className="w-24 h-24 text-russet" pattern="whatsapp" />
                                </div>
                                <p className="text-leather text-sm">+91 9876543210</p>
                            </div>
                        </div>

                        {/* Quick Contact Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="tel:+918012345678"
                                className="flex-1 bg-russet t-white px-6 py-4 rounded-xl font-semibold hover:bg-russet  transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center group text-white"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300 text-white" />
                                Call Now
                            </a>
                            <a 
                                href="https://wa.me/91123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-russet text-white px-6 py-4 rounded-xl font-semibold hover:bg-russet transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center group"
                            >
                                <WhatsAppIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                                WhatsApp
                            </a>
                        </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-r from-russet to-leather p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                        {/* Coffee steam animation */}
                        <div className="absolute top-4 left-8 opacity-20">
                            <div className="w-2 h-8 bg-white rounded-full animate-pulse"></div>
                            <div className="w-1 h-6 bg-white rounded-full ml-1 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <div className="w-1 h-4 bg-white rounded-full ml-2 animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-almond font-serif mb-4">
                            Ready for a Delightful Experience?
                        </h3>
                        <p className="text-xl text-almond/90 mb-8 max-w-2xl mx-auto">
                            Visit us today for freshly baked puffs, artisan toasts, and premium coffee 
                            in a warm, welcoming atmosphere.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-almond text-russet px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Book a Table
                            </button>
                            <a 
                                href="/full-menu"
                                className="border-2 border-almond text-almond px-8 py-4 rounded-full text-lg font-semibold hover:bg-almond hover:text-russet transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                View Menu
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;