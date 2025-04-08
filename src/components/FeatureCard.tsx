
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  gradient?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  to,
  gradient = false 
}) => {
  return (
    <Link 
      to={to} 
      className={`block feature-card ${gradient ? 'paygo-gradient text-white' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${gradient ? 'bg-white/20' : 'bg-paygo-light/20'}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className={`text-sm mt-1 ${gradient ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
