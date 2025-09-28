import React from 'react';
import { Link } from 'react-router-dom';
import puffSipLogo from '../assets/Puff-and-Sip-Logo.png';

// SVG Icons Components
const InstagramIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 20.312c-2.214 0-4.006-1.792-4.006-4.006V7.694c0-2.214 1.792-4.006 4.006-4.006h7.102c2.214 0 4.006 1.792 4.006 4.006v8.612c0 2.214-1.792 4.006-4.006 4.006H8.449z"/>
        <path d="M12.017 7.075a4.912 4.912 0 1 0 0 9.824 4.912 4.912 0 0 0 0-9.824zm0 8.104a3.192 3.192 0 1 1 0-6.384 3.192 3.192 0 0 1 0 6.384z"/>
        <circle cx="16.806" cy="7.207" r="1.078"/>
    </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
    </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);

const EmailIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
    </svg>
);

const LocationIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
    </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
    </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
    </svg>
);

const ArrowUpIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd"/>
    </svg>
);

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-russet to-leather text-almond relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-almond rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-16 h-16 bg-twine rounded-full animate-bounce"></div>
                <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-almond/50 rounded-full animate-ping"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="pt-16 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <img 
                                    src={puffSipLogo} 
                                    alt="Puff and Sip Logo" 
                                    className="h-12 w-12 object-contain"
                                />
                                <h3 className="text-2xl font-bold font-serif">Puff & Sip</h3>
                            </div>
                            <p className="text-almond/90 leading-relaxed mb-6 max-w-md">
                                Where every bite tells a story and every sip warms your soul. 
                                Experience the perfect blend of freshly baked puffs, artisan toasts, 
                                and premium coffee in our cozy café.
                            </p>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://instagram.com/puffandsip_cafe" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-almond/20 hover:bg-almond hover:text-russet rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label="Follow us on Instagram"
                                >
                                    <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                                <a 
                                    href="https://wa.me/919876543210" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-almond/20 hover:bg-almond hover:text-russet rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label="Contact us on WhatsApp"
                                >
                                    <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                                <a 
                                    href="https://facebook.com/puffandsip" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-almond/20 hover:bg-almond hover:text-russet rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label="Follow us on Facebook"
                                >
                                    <FacebookIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                                <a 
                                    href="mailto:hello@puffandsip.com"
                                    className="w-12 h-12 bg-almond/20 hover:bg-almond hover:text-russet rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label="Send us an email"
                                >
                                    <EmailIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xl font-bold font-serif mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link 
                                        to="/" 
                                        className="text-almond/90 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/about-us" 
                                        className="text-almond/90 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/full-menu" 
                                        className="text-almond/90 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">Menu</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact" 
                                        className="text-almond/90 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-xl font-bold font-serif mb-6">Contact Info</h4>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <LocationIcon className="w-6 h-6 mt-1 flex-shrink-0 text-almond/80" />
                                    <div>
                                        <p className="text-almond/90 text-sm leading-relaxed">
                                            123, Heritage Plaza, Brigade Road<br />
                                            MG Road Metro Station<br />
                                            Bangalore, Karnataka - 560001
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <PhoneIcon className="w-6 h-6 flex-shrink-0 text-almond/80" />
                                    <a 
                                        href="tel:+918012345678" 
                                        className="text-almond/90 hover:text-white transition-colors duration-300"
                                    >
                                        +91 80-1234-5678
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <EmailIcon className="w-6 h-6 flex-shrink-0 text-almond/80" />
                                    <a 
                                        href="mailto:hello@puffandsip.com" 
                                        className="text-almond/90 hover:text-white transition-colors duration-300"
                                    >
                                        hello@puffandsip.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <ClockIcon className="w-6 h-6 flex-shrink-0 text-almond/80" />
                                    <p className="text-almond/90 text-sm">
                                        Mon-Sun: 7:00 AM - 10:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-almond/20 py-8">
                    <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold font-serif mb-4">Stay Updated</h4>
                        <p className="text-almond/90 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter for the latest menu updates, special offers, and café events.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full bg-almond/10 border-2 border-almond/30 text-almond placeholder-almond/70 focus:outline-none focus:border-almond transition-colors duration-300"
                            />
                            <button className="bg-almond text-russet px-8 py-3 rounded-full font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-almond/20 pt-8 pb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-almond/90 text-sm">
                                © {currentYear} Puff & Sip Café. All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                            <a href="#privacy" className="text-almond/90 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-almond/90 hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="text-almond/90 hover:text-white transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="text-center">
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-almond/20 hover:bg-almond hover:text-russet w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl mx-auto group"
                        aria-label="Back to top"
                    >
                        <ArrowUpIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;