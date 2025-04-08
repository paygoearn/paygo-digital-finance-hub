
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { useNotifications } from '@/contexts/NotificationsContext';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BuyPayId = () => {
  const [copied, setCopied] = useState(false);
  const [transactionCode, setTransactionCode] = useState('');
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const { addNotification } = useNotifications();
  const navigate = useNavigate();

  const bankDetails = {
    bankName: 'First Bank',
    accountNumber: '3105209234',
    accountName: 'PayGo Technologies',
    amount: '₦15,000',
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    toast({
      title: "Copied!",
      description: "Account details copied to clipboard",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!transactionCode) {
      toast({
        title: "Error",
        description: "Please enter your transaction code",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would verify the payment with the backend
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your PAY ID has been activated successfully",
      });
      
      addNotification(
        'PAY ID Activated',
        'Your PAY ID has been activated. You can now make withdrawals.'
      );
      
      navigate('/');
    }, 2000);
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="max-w-screen-md mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Buy PAY ID</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Purchase PAY ID</CardTitle>
            <CardDescription>
              A PAY ID costs ₦15,000 and is required to make withdrawals from your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Bank Transfer Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank Name:</span>
                    <span className="font-medium">{bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankDetails.accountNumber}</span>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.accountNumber)}
                        className="p-1 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-medium">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium text-paygo-primary">{bankDetails.amount}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="transaction-code" className="block text-sm font-medium text-gray-700 mb-1">
                        Transaction Reference/Code
                      </label>
                      <Input
                        id="transaction-code"
                        placeholder="Enter your transaction reference or code"
                        value={transactionCode}
                        onChange={(e) => setTransactionCode(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full paygo-gradient">
                      Verify Payment
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start text-sm text-gray-600">
            <p>After making the payment, enter your transaction reference/code above to verify your payment.</p>
            <p className="mt-2">Your PAY ID will be activated within 5-10 minutes after verification.</p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default BuyPayId;
