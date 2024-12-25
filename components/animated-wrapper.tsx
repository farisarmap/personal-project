'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, Suspense } from 'react';
import Loading from '@/app/loading';

interface AnimatedWrapperProps {
    children: ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <Suspense fallback={<Loading />}>
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={pathname}
                    // initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </Suspense>
    );
};

export default AnimatedWrapper;
