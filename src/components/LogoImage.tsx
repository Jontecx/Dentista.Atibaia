import React, { useState } from 'react';

const LOGO_PATHS = [
  '/logo.avif',
  '/logo.AVIF',
  '/logo.webp',
  '/logo.WEBP',
  '/logo.png',
  '/logo.PNG',
  '/logo.svg',
  '/logo.SVG',
  '/logo.jpeg',
  '/logo.JPEG',
  '/logo.jpg',
  '/logo.JPG',
];

interface LogoImageProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export const LogoImage: React.FC<LogoImageProps> = ({
  className = "h-11 w-auto object-contain max-w-[180px]",
  variant = 'header',
}) => {
  const [pathIndex, setPathIndex] = useState(0);
  const [hasErrorAll, setHasErrorAll] = useState(false);

  const handleError = () => {
    if (pathIndex < LOGO_PATHS.length - 1) {
      setPathIndex((prev) => prev + 1);
    } else {
      setHasErrorAll(true);
    }
  };

  if (hasErrorAll) {
    if (variant === 'footer') {
      return (
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0E2954] to-[#0A1C38] border border-[#C6A664] text-[#C6A664] font-poppins font-extrabold text-sm flex items-center justify-center tracking-tighter shadow-md">
          LB
        </div>
      );
    }
    return (
      <div className="w-11 h-11 rounded-xl bg-[#0E2954] border border-[#C6A664]/40 flex items-center justify-center text-[#C6A664] shadow-md font-poppins font-bold text-lg tracking-tighter">
        LB
      </div>
    );
  }

  return (
    <img
      src={LOGO_PATHS[pathIndex]}
      alt="Lubru Odontologia Logo"
      className={className}
      onError={handleError}
    />
  );
};
