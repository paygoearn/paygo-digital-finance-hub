
import React from 'react';
import { Wallet } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface BalanceCardProps {
  balance: number;
  hasPayId: boolean;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, hasPayId }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="paygo-gradient text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Wallet Balance</h2>
          <Wallet size={24} />
        </div>
        <div className="text-3xl font-bold">{formatCurrency(balance)}</div>
        
        <div className="mt-4 text-sm">
          {!hasPayId && (
            <div className="bg-white/20 rounded-md p-2 backdrop-blur-sm">
              Purchase a PAY ID to enable withdrawals
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 flex justify-between text-sm text-gray-600">
        <div>
          <p className="font-medium">PAY ID Status:</p>
          <p>{hasPayId ? 'Active' : 'Not Purchased'}</p>
        </div>
        <div>
          <p className="font-medium">Account Type:</p>
          <p>Standard</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
