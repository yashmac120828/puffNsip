import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function FullMenu() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState({});
    const [showFloatingButton, setShowFloatingButton] = useState(false);
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

        // Handle scroll for floating button
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            setShowFloatingButton(scrollY > windowHeight * 0.3);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            Object.values(observers).forEach(observer => observer.disconnect());
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const setRef = (key) => (el) => {
        sectionRefs.current[key] = el;
    };

    const fullMenuItems = {
        coffee: {
            title: 'Premium Coffee & Beverages',
            icon: 'coffee',
            items: [
                { name: 'House Blend Espresso', price: '₹280', description: 'Rich and bold with chocolate notes', popular: true, image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400' },
                { name: 'Cappuccino Supreme', price: '₹340', description: 'Creamy foam art perfection', popular: true, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400' },
                { name: 'Caramel Macchiato', price: '₹380', description: 'Sweet caramel with espresso layers', image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=400' },
                { name: 'Cold Brew Special', price: '₹320', description: 'Smooth and refreshing cold extraction', popular: true, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400' },
                { name: 'Matcha Latte', price: '₹360', description: 'Premium Japanese green tea powder', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D' }
            ]
        },
        toast: {
            title: 'Gourmet Toasts & Sandwiches',
            icon: 'bread',
            items: [
                { name: 'Avocado Delight', price: '₹680', description: 'Fresh avocado, tomatoes, and herbs', popular: true, image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400' },
                { name: 'Smoked Salmon Toast', price: '₹1020', description: 'Premium salmon with cream cheese', popular: true, image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400' },
                { name: 'Nutella Banana', price: '₹520', description: 'Creamy nutella with fresh banana slices', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400' },
                { name: 'Mediterranean Veggie', price: '₹720', description: 'Roasted vegetables and feta cheese', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400' }
            ]
        },
        puffs: {
            title: 'Artisan Puff Pastries',
            icon: 'croissant',
            items: [
                { name: 'Classic Butter Puff', price: '₹260', description: 'Traditional flaky layers with butter', popular: true, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
                { name: 'Cheese & Herb Puff', price: '₹360', description: 'Savory blend of cheese and fresh herbs', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
                { name: 'Spinach Feta Puff', price: '₹340', description: 'Mediterranean inspired savory filling', popular: true, image: 'https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?w=400' },
                { name: 'Chocolate Croissant', price: '₹320', description: 'Rich dark chocolate filling', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400' }
            ]
        },
        beverages: {
            title: 'Non-Coffee Beverages',
            icon: 'juice',
            items: [
                { name: 'Fresh Orange Juice', price: '₹280', description: 'Squeezed daily from local oranges', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400' },
                { name: 'Green Smoothie', price: '₹420', description: 'Spinach, apple, banana, and honey', image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400' },
                { name: 'Chai Tea Latte', price: '₹320', description: 'Spiced black tea with steamed milk', popular: true, image: 'https://images.unsplash.com/photo-1683533698664-12ee473e8c9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXxlbnwwfHwwfHx8MA%3D%3D' },
                { name: 'Berry Smoothie', price: '₹480', description: 'Mixed berries with protein powder', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400' }
            ]
        },
        desserts: {
            title: 'Sweet Treats & Desserts',
            icon: 'cake',
            items: [
                { name: 'Chocolate Lava Cake', price: '₹520', description: 'Warm chocolate cake with molten center', popular: true, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400' },
                { name: 'Tiramisu Slice', price: '₹460', description: 'Classic Italian coffee-flavored dessert', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
                { name: 'Cheesecake Variety', price: '₹420', description: 'New York style with seasonal toppings', image: 'https://images.unsplash.com/photo-1567624725806-227866a3f784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D' },
                { name: 'Brownie à la Mode', price: '₹440', description: 'Fudgy brownie with vanilla ice cream', image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400' }
            ]
        }
    };

    const categories = [
        { key: 'all', label: 'All Items', icon: 'utensils' },
        { key: 'coffee', label: 'Coffee', icon: 'coffee' },
        { key: 'toast', label: 'Toast', icon: 'bread' },
        { key: 'puffs', label: 'Puffs', icon: 'croissant' },
        { key: 'beverages', label: 'Beverages', icon: 'juice' },
        { key: 'desserts', label: 'Desserts', icon: 'cake' }
    ];

    const getIcon = (iconName) => {
        const icons = {
            utensils: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
            coffee: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            bread: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
            croissant: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
            juice: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>,
            cake: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        };
        return icons[iconName] || icons.utensils;
    };

    const downloadMenu = () => {
        // Create a comprehensive menu text content
        const menuContent = `
🍴 PUFF & SIP CAFÉ - COMPLETE MENU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${Object.entries(fullMenuItems).map(([key, category]) => {
            return `${category.title.toUpperCase()}\n${'='.repeat(category.title.length)}\n\n${category.items.map(item => {
                return `${item.name}${item.popular ? ' ⭐ (POPULAR)' : ''}\n${item.price} - ${item.description}\n`;
            }).join('\n')}\n`;
        }).join('\n')}

🎉 SPECIAL OFFERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Morning Combo - ₹560
Any coffee + puff pastry (Available until 11 AM)

Lunch Deal - ₹960
Any toast + beverage (12 PM - 3 PM)

Sweet Evening - ₹720
Coffee + dessert (After 4 PM)

📍 Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Address: 123, Heritage Plaza, Brigade Road, Bangalore - 560001
Phone: +91 98765 43210
Email: hello@puffandsip.com

Opening Hours:
Monday - Sunday: 7:00 AM - 11:00 PM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Visit us for fresh puffs, artisan toasts, and premium coffee!
        `.trim();

        // Create and download the file
        const blob = new Blob([menuContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Puff-and-Sip-Menu.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const getFilteredItems = () => {
        if (activeCategory === 'all') {
            return Object.values(fullMenuItems).flatMap(category => 
                category.items.map(item => ({ ...item, category: category.title, categoryIcon: category.icon }))
            );
        }
        return fullMenuItems[activeCategory]?.items.map(item => ({ 
            ...item, 
            category: fullMenuItems[activeCategory].title,
            categoryIcon: fullMenuItems[activeCategory].icon
        })) || [];
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-almond to-white">
                {/* Floating Download Button */}
                <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
                    showFloatingButton ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
                }`}>
                    <button
                        onClick={downloadMenu}
                        className="group relative bg-gradient-to-r from-twine to-russet text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
                        title="Download Menu"
                    >
                        {/* Glowing ring effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-twine to-russet opacity-75 animate-ping"></div>
                        
                        {/* Button content */}
                        <div className="relative flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-16 right-0 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            Download Menu
                            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                        </div>
                        
                        {/* Sparkle effects */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute top-1 left-0 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                    </button>
                </div>
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-almond via-almond to-twine/20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-russet rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-28 h-28 bg-leather rounded-full animate-bounce"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link 
                            to="/" 
                            className="inline-flex items-center text-russet hover:text-twine transition-colors duration-300 font-medium"
                        >
                            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-russet font-serif mb-6">
                        Full Menu
                    </h1>
                    <div className="w-32 h-1 bg-twine mx-auto mb-8"></div>
                    <p className="text-2xl md:text-3xl text-leather max-w-4xl mx-auto leading-relaxed">
                        Discover our complete collection of handcrafted delights
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section 
                ref={setRef('filter')} 
                className={`py-12 transition-all duration-1000 ${isVisible.filter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key)}
                                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    activeCategory === category.key
                                        ? 'bg-russet text-almond shadow-lg transform scale-105'
                                        : 'bg-white text-russet hover:bg-russet/10 shadow-md hover:shadow-lg'
                                }`}
                            >
                                {getIcon(category.icon)}
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Items Grid */}
            <section 
                ref={setRef('menu')} 
                className={`py-12 transition-all duration-1000 delay-300 ${isVisible.menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getFilteredItems().map((item, index) => (
                            <div
                                key={`${item.name}-${index}`}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-twine/10 relative overflow-hidden"
                                style={{
                                    animationDelay: `${(index % 12) * 0.1}s`,
                                    animation: isVisible.menu ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                                }}
                            >
                                {item.popular && (
                                    <div className="absolute top-4 right-4 bg-twine text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg">
                                        Popular
                                    </div>
                                )}
                                
                                {/* Image */}
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-russet group-hover:text-twine transition-colors duration-300 mb-1">
                                                {item.name}
                                            </h3>
                                            {activeCategory === 'all' && (
                                                <span className="text-sm text-leather/70 flex items-center gap-1">
                                                    {getIcon(item.categoryIcon)}
                                                    {item.category}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xl font-bold text-leather bg-almond px-4 py-2 rounded-full whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </div>
                                    
                                    <p className="text-leather leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Offers */}
            <section 
                ref={setRef('offers')} 
                className={`py-16 bg-gradient-to-r from-russet/5 to-twine/5 transition-all duration-1000 delay-500 ${isVisible.offers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-russet font-serif mb-6">
                            Special Offers
                        </h2>
                        <div className="w-24 h-1 bg-twine mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-russet mb-3">Morning Combo</h3>
                            <p className="text-leather mb-4">Any coffee + puff pastry</p>
                            <p className="text-2xl font-bold text-twine">₹560</p>
                            <p className="text-sm text-leather/70 mt-2">Available until 11 AM</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-russet mb-3">Lunch Deal</h3>
                            <p className="text-leather mb-4">Any toast + beverage</p>
                            <p className="text-2xl font-bold text-twine">₹960</p>
                            <p className="text-sm text-leather/70 mt-2">12 PM - 3 PM</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-russet mb-3">Sweet Evening</h3>
                            <p className="text-leather mb-4">Coffee + dessert</p>
                            <p className="text-2xl font-bold text-twine">₹720</p>
                            <p className="text-sm text-leather/70 mt-2">After 4 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-russet to-leather">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-almond font-serif mb-6">
                        Ready to Order?
                    </h2>
                    <p className="text-xl text-almond/90 mb-12 max-w-2xl mx-auto">
                        Visit us today or call ahead for takeout. We can't wait to serve you!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link 
                            to="/#contact" 
                            className="bg-almond text-russet px-10 py-4 rounded-full text-lg font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Visit Us
                        </Link>
                        <button 
                            onClick={downloadMenu}
                            className="bg-twine text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-twine/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Download Menu
                        </button>
                        <button className="border-2 border-almond text-almond px-10 py-4 rounded-full text-lg font-semibold hover:bg-almond hover:text-russet transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Call for Takeout
                        </button>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default FullMenu;