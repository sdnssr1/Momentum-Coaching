import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './button';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingCtaProps {
  onApplyClick?: () => void;
  isFormOpen: boolean;
}

export default function FloatingCta({ onApplyClick, isFormOpen }: FloatingCtaProps) {
  // Only show on screens larger than 768px and hide when form is open
  if (isFormOpen) return null;
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed bottom-5 left-[40%] transform -translate-x-1/2 z-40 hidden md:flex items-center justify-center gap-4 bg-white/60 backdrop-blur-md px-7 py-3.5 rounded-full shadow-lg border border-white/30 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -8, 0],
          boxShadow: [
            '0 10px 25px rgba(139, 92, 246, 0.2)', 
            '0 10px 25px rgba(139, 92, 246, 0.4), 0 0 15px rgba(139, 92, 246, 0.2)', 
            '0 10px 25px rgba(139, 92, 246, 0.2)'
          ]
        }}
        transition={{ 
          duration: 0.5,
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          },
          boxShadow: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }
        }}
      >
        {/* Decorative bubbles */}
        <motion.div 
          className="absolute -left-4 top-1/2 w-12 h-12 bg-gradient-to-tr from-purple-100/40 to-purple-300/10 rounded-full z-0"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -5, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute -right-6 top-0 w-16 h-16 bg-gradient-to-br from-purple-100/30 to-purple-200/10 rounded-full z-0"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 3, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut" 
          }}
        />
        
        <span className="text-lg font-medium text-purple-800 relative z-10 drop-shadow-sm">Ready to start?</span>
        <div>
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={onApplyClick}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-full px-5 py-2 flex items-center gap-2 shadow-md shadow-purple-500/20 relative z-10"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
