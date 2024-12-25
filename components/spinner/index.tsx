// src/components/Spinner.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface SpinnerProps {
    text: string;
    radius: number;
    fontSize: string | number;
    letterSpacing: number;
}

const Spinner: React.FC<SpinnerProps> = ({
    text,
    radius,
    fontSize,
    letterSpacing,
}) => {
    const characters = text.split('');

    return (
        <motion.div
            className="relative"
            style={{
                width: radius * 2,
                height: radius * 2,
            }}
            aria-label={text}
        >
            {/* Hidden accessibility text */}
            <p className="sr-only">{text}</p>

            {/* Rotating Text */}
            <p className="absolute inset-0 flex items-center justify-center">
                {characters.map((ch, i) => (
                    <motion.span
                        key={i}
                        className="absolute left-1/2 top-0 font-creepster text-custom-green"
                        style={{
                            transformOrigin: `0 ${radius}px`,
                            transform: `rotate(${i * letterSpacing}deg)`,
                            fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
                        }}
                    >
                        {ch}
                    </motion.span>
                ))}
            </p>
        </motion.div>
    );
};

export default Spinner;
