import React from 'react';

interface GrayscaleImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GrayscaleImage: React.FC<GrayscaleImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className="relative inline-block">
      {/* SVG filter for grayscale effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="grayscale">
            <feColorMatrix
              type="matrix"
              values="0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Image with filter applied */}
      <img 
        src={src} 
        alt={alt} 
        className={`${className} filter-grayscale`} 
        style={{ filter: 'url(#grayscale)' }} 
      />
    </div>
  );
};

export default GrayscaleImage;
