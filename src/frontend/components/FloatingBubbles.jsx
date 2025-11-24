import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Droplet } from 'lucide-react';

const FloatingBubbles = () => {
  const bubbles = [
    { Icon: Heart, delay: 0, duration: 20, x: '10%', size: 60 },
    { Icon: Activity, delay: 2, duration: 25, x: '80%', size: 80 },
    { Icon: Droplet, delay: 4, duration: 22, x: '30%', size: 50 },
    { Icon: Heart, delay: 1, duration: 28, x: '70%', size: 70 },
    { Icon: Activity, delay: 3, duration: 24, x: '50%', size: 55 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.3, 0.3, 0],
            rotate: 360
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ left: bubble.x }}
          className="absolute"
        >
          <bubble.Icon
            size={bubble.size}
            className="text-accent/20"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;