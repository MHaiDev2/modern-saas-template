'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  UserIcon,
  CreditCardIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Subscription', href: '/subscription', icon: CreditCardIcon },
  { name: 'Profile', href: '/profile', icon: UserIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
            <SidebarContent navigation={navigation} pathname={pathname} closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <SidebarContent navigation={navigation} pathname={pathname} />
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className="fixed top-4 left-4 z-40 lg:hidden rounded-md bg-white p-2 shadow-md"
        onClick={() => setSidebarOpen(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
    </>
  );
}

function SidebarContent({ 
  navigation, 
  pathname, 
  closeSidebar 
}: { 
  navigation: typeof navigation;
  pathname: string;
  closeSidebar?: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-slate-700">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          SaaS Template
        </h1>
        {closeSidebar && (
          <button onClick={closeSidebar} className="lg:hidden">
            <XMarkIcon className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeSidebar}
              className={`
                group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }
              `}
            >
              <item.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-slate-700 p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-medium text-white">U</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white truncate">Demo User</p>
            <p className="text-xs text-slate-400 truncate">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}