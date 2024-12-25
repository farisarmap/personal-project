'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';

const LoadingScreen: React.FC = () => {
    const text: string = "Getting everything ready.";
    const characters = text.split("");

    const radius = 80;
    const fontSize = "18px";
    const letterSpacing = 12.5;

    const [scope, animate] = useAnimate();

    useEffect(() => {
        const animateLoader = async () => {
            const letterAnimation: any = [];

            characters.forEach((_, i) => {
                letterAnimation.push([
                    `.letter-${i}`,
                    { opacity: 0 },
                    { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" }
                ]);
            });

            characters.forEach((_, i) => {
                letterAnimation.push([
                    `.letter-${i}`,
                    { opacity: 1 },
                    { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" }
                ]);
            });

            animate(letterAnimation, {
                ease: "linear",
                repeat: Infinity
            });

            animate(
                scope.current,
                { rotate: 360 },
                { duration: 4, ease: "linear", repeat: Infinity }
            );
        };

        animateLoader();
    }, [animate, characters, scope]);
    return (
        <AnimatePresence>
            (
            <motion.div
                className="fixed inset-0 bg-white flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    ref={scope}
                    className="relative aspect-square"
                    style={{ width: radius * 2 }}
                    aria-label={text}
                >
                    <p className="sr-only">{text}</p>

                    <p className="absolute inset-0 flex items-center justify-center">
                        {characters.map((ch, i) => (
                            <motion.span
                                key={i}
                                className={`absolute left-1/2 top-0 font-rubik-mono-one font-medium text-red-600 letter-${i}`}
                                style={{
                                    transformOrigin: `0 ${radius}px`,
                                    transform: `rotate(${i * letterSpacing}deg)`,
                                    fontSize
                                }}
                            >
                                {ch}
                            </motion.span>
                        ))}
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LoadingScreen;
