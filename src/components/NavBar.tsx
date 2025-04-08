
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Menu } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNotifications } from '@/contexts/NotificationsContext';
import Logo from './Logo';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const NavBar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { unreadCount } = useNotifications();

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 py-3 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px]">
            <div className="py-6 flex flex-col gap-4">
              <Logo />
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  Dashboard
                </Link>
                <Link to="/withdraw" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  Withdraw
                </Link>
                <Link to="/buy-pay-id" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  Buy PAY ID
                </Link>
                <Link to="/buy-bpc" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  Buy BPC
                </Link>
                <Link to="/airtime" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  Buy Airtime
                </Link>
                <Link to="/data" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  Buy Data
                </Link>
                <Link to="/history" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  History
                </Link>
                <Link to="/support" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  Support
                </Link>
                <Link to="/about" className="py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
      </div>
      
      {isAuthenticated ? (
        <div className="flex items-center gap-2">
          <Link to="/notifications" className="relative p-2">
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 bg-paygo-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="font-medium">
                {user?.name}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/profile" className="w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="w-full">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Register</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
