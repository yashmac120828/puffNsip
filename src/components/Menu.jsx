import React, { useState, useEffect, useRef } from 'react';

// SVG Icons Components
const CoffeeIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="coffeeTitle">
  <title id="coffeeTitle">Coffee Cup</title>
  
  <ellipse cx="32" cy="48" rx="20" ry="4.5" fill="#EFDBBF" opacity="0.35"/>
 
  <path d="M18 36c0-7 2-12 14-12s14 5 14 12v6c0 4-5 8-14 8s-14-4-14-8v-6z" fill="#EFDBBF" stroke="#7A4619" stroke-width="2" stroke-linejoin="round"/>
  
  <ellipse cx="32" cy="27.5" rx="14" ry="3.8" fill="#7A4619"/>
  
  <path d="M46 34c2 0 6 2 6 6s-4 6-6 6" fill="none" stroke="#7A4619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  
  <path d="M26 20c0-3 2-5 2-7s-2-4-2-5" fill="none" stroke="#C39658" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(4,4)"/>
  <path d="M35 20c0-3 2-5 2-7s-2-4-2-5" fill="none" stroke="#C39658" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(6,4)"/>
  
  <path d="M22 32c4-1 8-1 10-1s6 1 10 2" fill="none" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.2" stroke-linecap="round"/>
</svg>


);

const BreadIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="puffTitle">
  <title id="puffTitle">Puff Pastry</title>
  <ellipse cx="32" cy="46.5" rx="18" ry="3.5" fill="#EFDBBF" opacity="0.35"/>
  
  <path d="M13 34c0-7 7-14 19-14s20 7 20 14c0 7-8 12-20 12S13 41 13 34z" fill="#EFDBBF" stroke="#7A4619" stroke-width="2" stroke-linejoin="round"/>
   
  <path d="M22 30c3-3 7-5 10-5s8 2 12 5" fill="none" stroke="#C39658" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 36c4-2 8-3 12-3s8 1 12 3" fill="none" stroke="#C39658" stroke-width="1.6" stroke-linecap="round"/>
  
  <path d="M19 28c2-1 6-2 10-2s7 1 10 2" fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="1.2" stroke-linecap="round"/>
</svg>

);

const CroissantIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="toastTitle">
  <title id="toastTitle">Toast Slice</title>
  
  <ellipse cx="32" cy="50" rx="16" ry="3" fill="#EFDBBF" opacity="0.28"/>
  
  <path d="M20 22c0-5 5-10 12-10s12 5 12 10v10c0 2-3 6-12 6s-12-4-12-6V22z" fill="#C39658" stroke="#7A4619" stroke-width="2" stroke-linejoin="round"/>
  
  <path d="M23 26c0-3 3-6 9-6s9 3 9 6v6c0 1-2 3-9 3s-9-2-9-3v-6z" fill="#EFDBBF" stroke="#7A4619" stroke-width="1" stroke-linejoin="round" opacity="0.95"/>
  
  <path d="M27 30h10" stroke="#7A4619" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
  <path d="M27 34h10" stroke="#7A4619" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
</svg>

);

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

// Abstract Pattern Component
const AbstractPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
        {/* Flowing wave lines */}
        <svg className="absolute top-10 left-0 w-full h-32" viewBox="0 0 800 100">
            <path 
                d="M0,50 Q200,10 400,50 T800,50" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                className="text-russet animate-pulse"
            />
        </svg>
        
        <svg className="absolute top-40 right-0 w-full h-32" viewBox="0 0 800 100">
            <path 
                d="M0,30 Q200,70 400,30 T800,30" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                className="text-twine animate-pulse"
                style={{ animationDelay: '1s' }}
            />
        </svg>
        
        <svg className="absolute bottom-32 left-0 w-full h-32" viewBox="0 0 800 100">
            <path 
                d="M0,70 Q200,30 400,70 T800,70" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                className="text-leather animate-pulse"
                style={{ animationDelay: '2s' }}
            />
        </svg>
        
        {/* Geometric shapes */}
        <div className="absolute top-16 left-12 w-16 h-16 border-2 border-russet rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-60 right-16 w-12 h-12 bg-twine/20 transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-leather/30 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-40 w-20 h-20 border-2 border-twine/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-12 w-6 h-24 bg-russet/20 transform -rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Triangle shapes */}
        <div className="absolute top-80 left-40 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-twine/20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-60 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-leather/20 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
    </div>
);

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
            icon: CoffeeIcon,
            description: 'Expertly crafted beverages made from the finest beans',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop&crop=center',
            items: [
                { name: 'House Blend Espresso', price: '₹120', description: 'Rich and bold with chocolate notes' },
                { name: 'Cappuccino Supreme', price: '₹150', description: 'Creamy foam art perfection' },
                { name: 'Caramel Macchiato', price: '₹180', description: 'Sweet caramel with espresso layers' },
                { name: 'Cold Brew Special', price: '₹140', description: 'Smooth and refreshing cold extraction' },
                { name: 'Seasonal Latte', price: '₹160', description: 'Featured flavor of the month' },
                { name: 'Americano Classic', price: '₹110', description: 'Pure espresso with hot water' }
            ]
        },
        toast: {
            title: 'Artisan Toasts',
            icon: BreadIcon,
            description: 'Thick-cut sourdough with creative gourmet toppings',
            image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=500&fit=crop&crop=center',
            items: [
                { name: 'Avocado Delight', price: '₹280', description: 'Fresh avocado, tomatoes, and herbs' },
                { name: 'Classic French Toast', price: '₹220', description: 'Golden brioche with maple syrup' },
                { name: 'Smoked Salmon Toast', price: '₹380', description: 'Premium salmon with cream cheese' },
                { name: 'Nutella Banana', price: '₹200', description: 'Creamy nutella with fresh banana slices' },
                { name: 'Mediterranean Veggie', price: '₹260', description: 'Roasted vegetables and feta cheese' },
                { name: 'Honey Ricotta', price: '₹230', description: 'Sweet ricotta drizzled with local honey' }
            ]
        },
        puffs: {
            title: 'Fresh Puffs',
            icon: CroissantIcon,
            description: 'Hand-rolled puff pastries baked to golden perfection',
            image: 'https://theobroma.in/cdn/shop/files/Chicken_CheesePuff-Square.jpg?v=1711609351',
            items: [
                { name: 'Classic Butter Puff', price: '₹80', description: 'Traditional flaky layers with butter' },
                { name: 'Cheese & Herb Puff', price: '₹120', description: 'Savory blend of cheese and fresh herbs' },
                { name: 'Sweet Cinnamon Puff', price: '₹90', description: 'Warm cinnamon sugar coating' },
                { name: 'Spinach Feta Puff', price: '₹110', description: 'Mediterranean inspired savory filling' },
                { name: 'Chocolate Croissant', price: '₹100', description: 'Rich dark chocolate filling' },
                { name: 'Ham & Swiss Puff', price: '₹140', description: 'Premium ham with melted swiss cheese' }
            ]
        }
    };

    return (
        <section id="menu" className="py-16 md:py-24 bg-gradient-to-b from-white to-almond/30 relative overflow-hidden" ref={menuRef}>
            {/* Abstract Pattern Background */}
            <AbstractPattern />

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
                    <div className="bg-white/80 p-1.5 rounded-xl shadow-lg border border-twine/10 max-w-full overflow-x-auto flex flex-row">
                        {Object.keys(menuItems).map((tab) => {
                            const IconComponent = menuItems[tab].icon;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 mx-0.5 flex items-center whitespace-nowrap ${
                                        activeTab === tab
                                            ? 'bg-russet text-almond shadow-lg transform scale-105'
                                            : 'text-russet hover:bg-russet/10 hover:text-russet'
                                    }`}
                                >
                                    <IconComponent className="mr-1 md:mr-1.5 w-5 h-5 md:w-6 md:h-6" style={{width: '20px', height: '20px'}} />
                                    <span className="hidden sm:inline text-sm md:text-base">{menuItems[tab].title}</span>
                                    <span className="sm:hidden text-xs">{menuItems[tab].title.split(' ')[0]}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tab Content */}
                <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
                        {/* Featured Image */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-white to-almond/50 p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl border border-twine/20">
                                <div className="aspect-square rounded-xl overflow-hidden relative group">
                                    <img 
                                        src={menuItems[activeTab].image}
                                        alt={menuItems[activeTab].title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Overlay with content */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                                        <div className="p-6 text-white">
                                            <div className="flex items-center mb-2">
                                                {React.createElement(menuItems[activeTab].icon, {
                                                    className: "w-6 h-6 mr-2 text-almond",
                                                    style: {width: '24px', height: '24px'}
                                                })}
                                                <h3 className="text-2xl font-bold font-serif">
                                                    {menuItems[activeTab].title}
                                                </h3>
                                            </div>
                                            <p className="text-almond/90 leading-relaxed">
                                                {menuItems[activeTab].description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute top-4 left-4 w-3 h-3 bg-almond rounded-full animate-ping"></div>
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-twine rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-almond/70 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="order-1 lg:order-2">
                            <div className="space-y-4">
                                {menuItems[activeTab].items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/90 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-twine/10 hover:border-russet/20"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                            animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                                            <h4 className="text-lg md:text-xl font-bold text-russet group-hover:text-twine transition-colors duration-300 flex-1">
                                                {item.name}
                                            </h4>
                                            <span className="text-lg md:text-xl font-bold text-leather bg-almond px-3 py-1 rounded-full group-hover:bg-twine/20 transition-colors duration-300 self-start">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-sm md:text-base text-leather leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-r from-russet to-leather p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                        {/* Steam effect */}
                        <div className="absolute top-4 left-8 opacity-20">
                            <div className="w-2 h-8 bg-white rounded-full animate-pulse"></div>
                            <div className="w-1 h-6 bg-white rounded-full ml-1 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <div className="w-1 h-4 bg-white rounded-full ml-2 animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-almond font-serif mb-4">
                            Craving for More?
                        </h3>
                        <p className="text-lg md:text-xl text-almond/90 mb-6 md:mb-8 max-w-2xl mx-auto">
                            Explore our complete menu with seasonal specials, combo deals, and exclusive beverages
                        </p>
                        <a 
                            href="/full-menu" 
                            className="inline-flex items-center bg-almond text-russet px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                            View Full Menu
                            <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;