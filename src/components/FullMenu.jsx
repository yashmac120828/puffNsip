import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function FullMenu() {
    const [activeCategory, setActiveCategory] = useState('all');
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

    const fullMenuItems = {
        coffee: {
            title: 'Premium Coffee & Beverages',
            emoji: '☕',
            items: [
                { name: 'House Blend Espresso', price: '$3.50', description: 'Rich and bold with chocolate notes', popular: true },
                { name: 'Cappuccino Supreme', price: '$4.25', description: 'Creamy foam art perfection', popular: true },
                { name: 'Caramel Macchiato', price: '$4.75', description: 'Sweet caramel with espresso layers' },
                { name: 'Cold Brew Special', price: '$4.00', description: 'Smooth and refreshing cold extraction', popular: true },
                { name: 'Seasonal Latte', price: '$4.50', description: 'Featured flavor of the month' },
                { name: 'Americano Classic', price: '$3.25', description: 'Pure espresso with hot water' },
                { name: 'Vanilla Bean Frappé', price: '$5.25', description: 'Iced blended with vanilla and whipped cream' },
                { name: 'Mocha Delight', price: '$4.75', description: 'Rich chocolate and espresso blend' },
                { name: 'Turkish Coffee', price: '$3.75', description: 'Traditional preparation with cardamom' },
                { name: 'Matcha Latte', price: '$4.50', description: 'Premium Japanese green tea powder' }
            ]
        },
        toast: {
            title: 'Gourmet Toasts & Sandwiches',
            emoji: '🍞',
            items: [
                { name: 'Avocado Delight', price: '$8.50', description: 'Fresh avocado, tomatoes, and herbs', popular: true },
                { name: 'Classic French Toast', price: '$7.25', description: 'Golden brioche with maple syrup' },
                { name: 'Smoked Salmon Toast', price: '$12.75', description: 'Premium salmon with cream cheese', popular: true },
                { name: 'Nutella Banana', price: '$6.50', description: 'Creamy nutella with fresh banana slices' },
                { name: 'Mediterranean Veggie', price: '$9.00', description: 'Roasted vegetables and feta cheese' },
                { name: 'Honey Ricotta', price: '$7.75', description: 'Sweet ricotta drizzled with local honey' },
                { name: 'BLT Deluxe', price: '$9.50', description: 'Bacon, lettuce, tomato on sourdough' },
                { name: 'Grilled Cheese Supreme', price: '$6.75', description: 'Three cheese blend with caramelized onions' },
                { name: 'Mushroom Swiss Melt', price: '$8.25', description: 'Sautéed mushrooms with swiss cheese' },
                { name: 'Pesto Caprese', price: '$9.75', description: 'Fresh mozzarella, basil pesto, and tomatoes' }
            ]
        },
        puffs: {
            title: 'Artisan Puff Pastries',
            emoji: '🥐',
            items: [
                { name: 'Classic Butter Puff', price: '$3.25', description: 'Traditional flaky layers with butter', popular: true },
                { name: 'Cheese & Herb Puff', price: '$4.50', description: 'Savory blend of cheese and fresh herbs' },
                { name: 'Sweet Cinnamon Puff', price: '$3.75', description: 'Warm cinnamon sugar coating' },
                { name: 'Spinach Feta Puff', price: '$4.25', description: 'Mediterranean inspired savory filling', popular: true },
                { name: 'Chocolate Croissant', price: '$4.00', description: 'Rich dark chocolate filling' },
                { name: 'Ham & Swiss Puff', price: '$5.25', description: 'Premium ham with melted swiss cheese' },
                { name: 'Apple Cinnamon Danish', price: '$4.75', description: 'Sweet apple filling with cinnamon glaze' },
                { name: 'Almond Croissant', price: '$4.50', description: 'Flaky pastry filled with almond cream' },
                { name: 'Savory Mushroom Puff', price: '$4.75', description: 'Wild mushroom medley with herbs' },
                { name: 'Berry Cheese Danish', price: '$4.25', description: 'Mixed berries with cream cheese' }
            ]
        },
        beverages: {
            title: 'Non-Coffee Beverages',
            emoji: '🧃',
            items: [
                { name: 'Fresh Orange Juice', price: '$3.50', description: 'Squeezed daily from local oranges' },
                { name: 'Green Smoothie', price: '$5.25', description: 'Spinach, apple, banana, and honey' },
                { name: 'Chai Tea Latte', price: '$4.00', description: 'Spiced black tea with steamed milk' },
                { name: 'Hot Chocolate Deluxe', price: '$4.50', description: 'Rich cocoa with whipped cream and marshmallows' },
                { name: 'Iced Tea Varieties', price: '$2.75', description: 'Earl Grey, Green, or Herbal blends' },
                { name: 'Berry Protein Smoothie', price: '$6.00', description: 'Mixed berries with protein powder' },
                { name: 'Lemonade Fresh', price: '$3.25', description: 'House-made with mint and honey' },
                { name: 'Sparkling Water', price: '$2.50', description: 'Various flavored options available' }
            ]
        },
        desserts: {
            title: 'Sweet Treats & Desserts',
            emoji: '🧁',
            items: [
                { name: 'Chocolate Lava Cake', price: '$6.50', description: 'Warm chocolate cake with molten center' },
                { name: 'Tiramisu Slice', price: '$5.75', description: 'Classic Italian coffee-flavored dessert' },
                { name: 'Cheesecake Variety', price: '$5.25', description: 'New York style with seasonal toppings' },
                { name: 'Macarons (6 pack)', price: '$8.00', description: 'Assorted flavors of French macarons' },
                { name: 'Fruit Tart', price: '$4.75', description: 'Custard base with fresh seasonal fruits' },
                { name: 'Brownie à la Mode', price: '$5.50', description: 'Fudgy brownie with vanilla ice cream' },
                { name: 'Crème Brûlée', price: '$6.25', description: 'Vanilla custard with caramelized sugar top' },
                { name: 'Scones (2 pieces)', price: '$4.25', description: 'Butter scones with jam and cream' }
            ]
        }
    };

    const categories = [
        { key: 'all', label: 'All Items', emoji: '🍽️' },
        { key: 'coffee', label: 'Coffee', emoji: '☕' },
        { key: 'toast', label: 'Toast', emoji: '🍞' },
        { key: 'puffs', label: 'Puffs', emoji: '🥐' },
        { key: 'beverages', label: 'Beverages', emoji: '🧃' },
        { key: 'desserts', label: 'Desserts', emoji: '🧁' }
    ];

    const getFilteredItems = () => {
        if (activeCategory === 'all') {
            return Object.values(fullMenuItems).flatMap(category => 
                category.items.map(item => ({ ...item, category: category.title, categoryEmoji: category.emoji }))
            );
        }
        return fullMenuItems[activeCategory]?.items.map(item => ({ 
            ...item, 
            category: fullMenuItems[activeCategory].title,
            categoryEmoji: fullMenuItems[activeCategory].emoji
        })) || [];
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
                                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                                    activeCategory === category.key
                                        ? 'bg-russet text-almond shadow-lg transform scale-105'
                                        : 'bg-white text-russet hover:bg-russet/10 shadow-md hover:shadow-lg'
                                }`}
                            >
                                <span className="mr-2">{category.emoji}</span>
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
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-twine/10 relative"
                                style={{
                                    animationDelay: `${(index % 12) * 0.1}s`,
                                    animation: isVisible.menu ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                                }}
                            >
                                {item.popular && (
                                    <div className="absolute -top-2 -right-2 bg-twine text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        Popular
                                    </div>
                                )}
                                
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{item.categoryEmoji}</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-russet group-hover:text-twine transition-colors duration-300">
                                                {item.name}
                                            </h3>
                                            {activeCategory === 'all' && (
                                                <span className="text-sm text-leather/70">{item.category}</span>
                                            )}
                                        </div>
                                    </div>
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
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="text-4xl mb-4">🌅</div>
                            <h3 className="text-xl font-bold text-russet mb-3">Morning Combo</h3>
                            <p className="text-leather mb-4">Any coffee + puff pastry</p>
                            <p className="text-2xl font-bold text-twine">$6.99</p>
                            <p className="text-sm text-leather/70 mt-2">Available until 11 AM</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="text-4xl mb-4">🥪</div>
                            <h3 className="text-xl font-bold text-russet mb-3">Lunch Deal</h3>
                            <p className="text-leather mb-4">Any toast + beverage</p>
                            <p className="text-2xl font-bold text-twine">$11.99</p>
                            <p className="text-sm text-leather/70 mt-2">12 PM - 3 PM</p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="text-4xl mb-4">🍰</div>
                            <h3 className="text-xl font-bold text-russet mb-3">Sweet Evening</h3>
                            <p className="text-leather mb-4">Coffee + dessert</p>
                            <p className="text-2xl font-bold text-twine">$8.99</p>
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
                        <button className="border-2 border-almond text-almond px-10 py-4 rounded-full text-lg font-semibold hover:bg-almond hover:text-russet transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Call for Takeout
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FullMenu;