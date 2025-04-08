
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'dark' }) => {
  const sizeClass = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  const textClass = variant === 'light' ? 'text-white' : 'text-paygo-dark';

  return (
    <div className={`font-bold ${sizeClass} ${textClass} flex items-center`}>
      <span className="text-paygo-primary mr-1">Pay</span>
      <span>Go</span>
    </div>
  );
};

export default Logo;
