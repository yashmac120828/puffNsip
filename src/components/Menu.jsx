import React, { useState, useEffect, useRef } from 'react';

function Menu() {
    const [activeTab, setActiveTab] = useState('coffee');
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (menuRef.current) {
            observer.observe(menuRef.current);
        }

        return () => {
            if (menuRef.current) {
                observer.unobserve(menuRef.current);
            }
        };
    }, []);

    const menuItems = {
        coffee: {
            title: 'Premium Coffee',
            emoji: '☕',
            description: 'Expertly crafted beverages made from the finest beans',
            items: [
                { name: 'House Blend Espresso', price: '$3.50', description: 'Rich and bold with chocolate notes' },
                { name: 'Cappuccino Supreme', price: '$4.25', description: 'Creamy foam art perfection' },
                { name: 'Caramel Macchiato', price: '$4.75', description: 'Sweet caramel with espresso layers' },
                { name: 'Cold Brew Special', price: '$4.00', description: 'Smooth and refreshing cold extraction' },
                { name: 'Seasonal Latte', price: '$4.50', description: 'Featured flavor of the month' },
                { name: 'Americano Classic', price: '$3.25', description: 'Pure espresso with hot water' }
            ]
        },
        toast: {
            title: 'Artisan Toasts',
            emoji: '🍞',
            description: 'Thick-cut sourdough with creative gourmet toppings',
            items: [
                { name: 'Avocado Delight', price: '$8.50', description: 'Fresh avocado, tomatoes, and herbs' },
                { name: 'Classic French Toast', price: '$7.25', description: 'Golden brioche with maple syrup' },
                { name: 'Smoked Salmon Toast', price: '$12.75', description: 'Premium salmon with cream cheese' },
                { name: 'Nutella Banana', price: '$6.50', description: 'Creamy nutella with fresh banana slices' },
                { name: 'Mediterranean Veggie', price: '$9.00', description: 'Roasted vegetables and feta cheese' },
                { name: 'Honey Ricotta', price: '$7.75', description: 'Sweet ricotta drizzled with local honey' }
            ]
        },
        puffs: {
            title: 'Fresh Puffs',
            emoji: '🥐',
            description: 'Hand-rolled puff pastries baked to golden perfection',
            items: [
                { name: 'Classic Butter Puff', price: '$3.25', description: 'Traditional flaky layers with butter' },
                { name: 'Cheese & Herb Puff', price: '$4.50', description: 'Savory blend of cheese and fresh herbs' },
                { name: 'Sweet Cinnamon Puff', price: '$3.75', description: 'Warm cinnamon sugar coating' },
                { name: 'Spinach Feta Puff', price: '$4.25', description: 'Mediterranean inspired savory filling' },
                { name: 'Chocolate Croissant', price: '$4.00', description: 'Rich dark chocolate filling' },
                { name: 'Ham & Swiss Puff', price: '$5.25', description: 'Premium ham with melted swiss cheese' }
            ]
        }
    };

    return (
        <section id="menu" className="py-16 md:py-24 bg-gradient-to-b from-white to-almond/30 relative overflow-hidden" ref={menuRef}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-32 left-20 w-24 h-24 bg-russet rounded-full animate-pulse"></div>
                <div className="absolute top-60 right-32 w-20 h-20 bg-twine rounded-full animate-bounce"></div>
                <div className="absolute bottom-40 left-32 w-16 h-16 bg-leather rounded-full animate-ping"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-russet font-serif mb-6">
                        Our Menu Highlights
                    </h2>
                    <div className="w-24 h-1 bg-twine mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-leather max-w-3xl mx-auto">
                        Discover our signature creations made with love and finest ingredients
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-white/80 p-2 rounded-full shadow-lg border border-twine/20">
                        {Object.keys(menuItems).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 mx-1 ${
                                    activeTab === tab
                                        ? 'bg-russet text-almond shadow-lg transform scale-105'
                                        : 'text-russet hover:bg-russet/10 hover:text-russet'
                                }`}
                            >
                                <span className="mr-2">{menuItems[tab].emoji}</span>
                                {menuItems[tab].title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Featured Image/Visual */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-white to-almond/50 p-8 rounded-2xl shadow-xl border border-twine/20">
                                <div className="aspect-square bg-gradient-to-br from-almond to-twine/30 rounded-xl flex items-center justify-center relative overflow-hidden">
                                    {/* Featured visual for active tab */}
                                    <div className="text-center">
                                        <div className="text-8xl mb-6 animate-bounce-slow">
                                            {menuItems[activeTab].emoji}
                                        </div>
                                        <h3 className="text-3xl font-bold text-russet font-serif mb-4">
                                            {menuItems[activeTab].title}
                                        </h3>
                                        <p className="text-leather text-lg leading-relaxed px-4">
                                            {menuItems[activeTab].description}
                                        </p>
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute top-4 left-4 w-3 h-3 bg-russet rounded-full animate-ping"></div>
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-twine rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-leather rounded-full animate-bounce"></div>
                                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-russet/50 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="order-1 lg:order-2">
                            <div className="space-y-4">
                                {menuItems[activeTab].items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-twine/10"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                            animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold text-russet group-hover:text-twine transition-colors duration-300">
                                                {item.name}
                                            </h4>
                                            <span className="text-xl font-bold text-leather bg-almond px-3 py-1 rounded-full">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-leather leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-r from-russet to-leather p-8 md:p-12 rounded-2xl shadow-xl">
                        <h3 className="text-3xl md:text-4xl font-bold text-almond font-serif mb-4">
                            Craving for More?
                        </h3>
                        <p className="text-xl text-almond/90 mb-8 max-w-2xl mx-auto">
                            Explore our complete menu with seasonal specials, combo deals, and exclusive beverages
                        </p>
                        <a 
                            href="/full-menu" 
                            className="inline-flex items-center bg-almond text-russet px-10 py-4 rounded-full text-lg font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            View Full Menu
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;