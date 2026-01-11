
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll position
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-28 z-50">
            <button
                type="button"
                onClick={scrollToTop}
                className={`
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500 text-blue-950 shadow-2xl 
          transition-all duration-500 hover:bg-white hover:scale-110 active:scale-95 group border-2 border-amber-500
        `}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
        </div>
    );
};

export default ScrollToTop;
