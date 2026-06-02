import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
    const messages = [
        "Preparing Your Insight..."
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="fixed inset-0 bg-[#F4E11A] flex flex-col items-center justify-center z-50">

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="relative w-28 h-28"
            >
                {/* Outer Orbit */}
                <div className="absolute inset-0 border-2 border-black rounded-full">
                    <div className="absolute w-3 h-3 bg-black rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-3 h-3 bg-black rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
                    <div className="absolute w-3 h-3 bg-black rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-3 h-3 bg-black rounded-full right-0 top-1/2 translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Inner Orbit */}
                <div className="absolute inset-4 border-2 border-black rounded-full">
                    <div className="absolute w-2 h-2 bg-black rounded-full top-2 right-3" />
                    <div className="absolute w-2 h-2 bg-black rounded-full bottom-3 left-2" />
                </div>

                {/* Center Sun */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="text-4xl"
                    >
                        ☀
                    </motion.div>
                </div>
            </motion.div>

            <div className="h-8 mt-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm uppercase tracking-[6px] text-black font-medium"
                    >
                        {messages[index]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}