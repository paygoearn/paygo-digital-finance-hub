
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  Wallet, 
  PhoneCall, 
  Wifi, 
  History, 
  HelpCircle,
  Video
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import NavBar from '@/components/NavBar';
import BalanceCard from '@/components/BalanceCard';
import FeatureCard from '@/components/FeatureCard';

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="max-w-screen-lg mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}</h1>
        
        <div className="mb-8">
          <BalanceCard balance={user.balance} hasPayId={user.hasPayId} />
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <FeatureCard
            title="Withdraw Funds"
            description="Transfer money to your bank account"
            icon={<CreditCard className="text-paygo-primary" size={24} />}
            to="/withdraw"
          />
          
          <FeatureCard
            title="Buy PAY ID"
            description="Purchase a PAY ID to enable withdrawals"
            icon={<Wallet className="text-paygo-primary" size={24} />}
            to="/buy-pay-id"
            gradient
          />
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <FeatureCard
            title="Buy Airtime"
            description="Purchase airtime for any network"
            icon={<PhoneCall className="text-paygo-primary" size={24} />}
            to="/airtime"
          />
          
          <FeatureCard
            title="Buy Data"
            description="Get internet data bundles"
            icon={<Wifi className="text-paygo-primary" size={24} />}
            to="/data"
          />
          
          <FeatureCard
            title="Buy BPC"
            description="Purchase BPC for ₦5,500"
            icon={<CreditCard className="text-paygo-primary" size={24} />}
            to="/buy-bpc"
          />
          
          <FeatureCard
            title="Transaction History"
            description="View your transaction records"
            icon={<History className="text-paygo-primary" size={24} />}
            to="/history"
          />
          
          <FeatureCard
            title="Support"
            description="Get help via WhatsApp"
            icon={<HelpCircle className="text-paygo-primary" size={24} />}
            to="/support"
          />
          
          <FeatureCard
            title="Watch Videos"
            description="Learn how to earn with PayGo"
            icon={<Video className="text-paygo-primary" size={24} />}
            to="/watch"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
