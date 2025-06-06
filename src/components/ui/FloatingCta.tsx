import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './button';

interface FloatingCtaProps {
  onApplyClick?: () => void;
  isFormOpen: boolean;
}

export default function FloatingCta({ onApplyClick, isFormOpen }: FloatingCtaProps) {
  // Only show on screens larger than 768px and hide when form is open
  if (isFormOpen) return null;
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:flex items-center gap-4 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg">
      <span className="text-lg font-medium text-purple-800">Ready to start?</span>
      <Button 
        onClick={onApplyClick}
        className="bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-full px-5 py-2 flex items-center gap-2"
      >
        Apply Now <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
