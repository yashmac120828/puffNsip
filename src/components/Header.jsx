import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import puffSipLogo from '../assets/Puff-and-Sip-Logo.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-almond shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18 md:h-24 lg:h-28">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img 
                            src={puffSipLogo} 
                            alt="Puff and Sip Logo" 
                            className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
                        />
                        <h1 className="text-russet font-bold text-xl md:text-2xl lg:text-3xl font-serif">
                            Puff & Sip
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-russet hover:text-twine transition-colors duration-300 font-medium">
                            Home
                        </Link>
                        <Link to="/about-us" className="text-russet hover:text-twine transition-colors duration-300 font-medium">
                            About
                        </Link>
                        <a href="/full-menu" className="text-russet hover:text-twine transition-colors duration-300 font-medium">
                            Menu
                        </a>
                        <a href="#contact" className="text-russet hover:text-twine transition-colors duration-300 font-medium">
                            Contact
                        </a>
                        <button className="bg-russet text-almond px-6 py-2 rounded-full hover:bg-leather transition-colors duration-300 font-medium shadow-md">
                            Enquire
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-russet hover:text-twine focus:outline-none focus:text-twine transition-colors duration-300"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-almond border-t border-twine">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                                to="/" 
                                className="block px-3 py-2 text-russet hover:text-twine hover:bg-white/50 rounded-md transition-all duration-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/about-us" 
                                className="block px-3 py-2 text-russet hover:text-twine hover:bg-white/50 rounded-md transition-all duration-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <a 
                                href="#menu" 
                                className="block px-3 py-2 text-russet hover:text-twine hover:bg-white/50 rounded-md transition-all duration-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Menu
                            </a>
                            <a 
                                href="#contact" 
                                className="block px-3 py-2 text-russet hover:text-twine hover:bg-white/50 rounded-md transition-all duration-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <div className="px-3 py-2">
                                <button className="w-full bg-russet text-almond px-4 py-2 rounded-full hover:bg-leather transition-colors duration-300 font-medium shadow-md">
                                    Enquire
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;