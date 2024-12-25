'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedWrapperProps {
    children: ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence initial={false}>
            <motion.div
                key={pathname}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedWrapper;
