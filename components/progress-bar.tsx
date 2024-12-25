// components/ScrollProgressBar.tsx
'use client'
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const ScrollProgressBar: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = throttle(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const totalScroll = scrollHeight - clientHeight;
        if (totalScroll === 0) {
            setScrollPercentage(0);
            return;
        }
        const currentScroll = scrollTop;
        const scrolled = (currentScroll / totalScroll) * 100;
        setScrollPercentage(scrolled);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            handleScroll.cancel();
        };
    }, [handleScroll]);

    return (
        <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50 group">
            <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-200 relative"
                style={{ width: `${scrollPercentage}%` }}
            >
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 hidden group-hover:block">
                    {Math.round(scrollPercentage)}%
                </span>
            </div>
        </div>
    );
};

export default ScrollProgressBar;
