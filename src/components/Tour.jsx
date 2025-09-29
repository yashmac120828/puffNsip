import React, { useState, useEffect, useRef } from 'react';
import cafeTourVideo from '../assets/cafe tour.mp4';

// Tour Shimmer Loading Component
const TourShimmer = () => (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Video Section Shimmer */}
        <div className="order-1 lg:order-1">
            <div className="bg-gradient-to-br from-white to-almond/50 p-6 md:p-8 rounded-2xl shadow-xl border border-twine/20">
                <div className="aspect-video bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded-xl animate-shimmer">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded-full animate-shimmer"></div>
                    </div>
                </div>
                
                {/* Control buttons shimmer */}
                <div className="flex justify-center mt-6 space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded-full animate-shimmer"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded-full animate-shimmer"></div>
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
                </div>

                {/* Features list shimmer */}
                <div className="space-y-3 mt-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded animate-shimmer"></div>
                            <div className="h-4 bg-gradient-to-r from-almond/50 via-white to-almond/50 rounded flex-1 animate-shimmer"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

function Tour() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const tourRef = useRef(null);
    const videoRef = useRef(null);

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

        if (tourRef.current) {
            observer.observe(tourRef.current);
        }

        return () => {
            clearTimeout(loadingTimer);
            if (tourRef.current) {
                observer.unobserve(tourRef.current);
            }
        };
    }, []);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="tour" className="py-16 md:py-20 bg-gradient-to-b from-white to-almond/30 relative overflow-hidden" ref={tourRef}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-10 w-24 h-24 bg-twine rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-20 w-20 h-20 bg-leather rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-russet/30 rounded-full animate-ping"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-russet font-serif mb-6">
                        Take a Virtual Tour
                    </h2>
                    <div className="w-24 h-1 bg-twine mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-leather max-w-3xl mx-auto">
                        Step inside our cozy café and experience the warm atmosphere before you visit
                    </p>
                </div>

                {isLoading ? (
                    <TourShimmer />
                ) : (
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Video Section */}
                        <div className={`order-1 lg:order-1 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="bg-gradient-to-br from-white to-almond/50 p-6 md:p-8 rounded-2xl shadow-xl border border-twine/20 relative overflow-hidden">
                                {/* Decorative corner elements */}
                                <div className="absolute top-4 right-4 w-3 h-3 bg-twine rounded-full animate-pulse"></div>
                                <div className="absolute bottom-4 left-4 w-2 h-2 bg-leather rounded-full animate-bounce"></div>
                                
                                <div className="aspect-video rounded-xl overflow-hidden relative group">
                                    <video 
                                        ref={videoRef}
                                        src={cafeTourVideo}
                                        autoPlay
                                        loop
                                        muted={isMuted}
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onLoadStart={() => setIsLoading(false)}
                                    />
                                    
                                    {/* Video overlay with play button */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button
                                            onClick={togglePlayPause}
                                            className="bg-white/90 hover:bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
                                        >
                                            {isPlaying ? (
                                                <svg className="w-6 h-6 text-russet ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6 text-russet ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    
                                    {/* Tour badge */}
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-russet to-leather text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        🎥 Virtual Tour
                                    </div>
                                </div>
                                
                                {/* Video Controls */}
                                <div className="flex justify-center mt-6 space-x-4">
                                    <button
                                        onClick={togglePlayPause}
                                        className="bg-russet hover:bg-leather text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                                        title={isPlaying ? 'Pause' : 'Play'}
                                    >
                                        {isPlaying ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        )}
                                    </button>
                                    
                                    <button
                                        onClick={toggleMute}
                                        className="bg-twine hover:bg-twine/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                                        title={isMuted ? 'Unmute' : 'Mute'}
                                    >
                                        {isMuted ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className={`order-2 lg:order-2 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-russet font-serif">
                                    Experience Our Cozy Atmosphere
                                </h3>
                                
                                <p className="text-lg text-leather leading-relaxed">
                                    Take a virtual stroll through our warm and inviting café space. From our comfortable 
                                    seating areas to our artisanal coffee preparation station, discover why Puff & Sip 
                                    is the perfect place to relax, work, or catch up with friends.
                                </p>
                                
                                <p className="text-lg text-leather leading-relaxed">
                                    Our carefully designed interior combines rustic charm with modern comfort, 
                                    creating an atmosphere that feels like home. Watch as our skilled baristas 
                                    craft each drink with precision and passion.
                                </p>

                                {/* Features List */}
                                <div className="space-y-4 mt-8">
                                    <h4 className="text-xl font-bold text-russet mb-4">What You'll See:</h4>
                                    
                                    <div className="flex items-center space-x-3 group">
                                        <div className="w-6 h-6 bg-twine rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                        </div>
                                        <span className="text-leather">Comfortable seating areas with natural lighting</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3 group">
                                        <div className="w-6 h-6 bg-twine rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                        </div>
                                        <span className="text-leather">Professional coffee bar and preparation area</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3 group">
                                        <div className="w-6 h-6 bg-twine rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                        </div>
                                        <span className="text-leather">Cozy corner spots perfect for reading or working</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3 group">
                                        <div className="w-6 h-6 bg-twine rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                        </div>
                                        <span className="text-leather">Beautiful décor that reflects our café culture</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="pt-6">
                                    <a 
                                        href="#contact" 
                                        className="inline-flex items-center bg-russet text-almond px-8 py-3 rounded-full font-semibold hover:bg-leather transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                                    >
                                        Plan Your Visit
                                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Tour;