
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/Logo';
import { useNotifications } from '@/contexts/NotificationsContext';

const Welcome = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }

    // Add welcome notification
    if (isAuthenticated) {
      addNotification(
        'Welcome to PayGo!',
        'Your account has been credited with ₦200,000 welcome bonus.'
      );
    }
  }, [isAuthenticated, navigate, addNotification]);

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        <Logo size="lg" />
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to PayGo!</h1>
          
          <div className="paygo-gradient text-white p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Welcome Bonus</h2>
            <div className="text-3xl font-bold">₦200,000</div>
            <p className="mt-2 text-sm">Has been added to your account</p>
          </div>
          
          <div className="space-y-4 text-left mb-6">
            <h3 className="font-semibold text-lg">Get Started:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Purchase a PAY ID to enable withdrawals</li>
              <li>Buy airtime and data at discounted rates</li>
              <li>Transfer funds to your bank account</li>
              <li>Check the support page for help</li>
            </ul>
          </div>
          
          <Button 
            onClick={handleContinue}
            className="w-full paygo-gradient"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
