'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import SubscriptionModal from '@/components/subscription/SubscriptionModal';

export default function DashboardPage() {
  const { data: session } = useSession();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [userTier, setUserTier] = useState<'FREE' | 'PRO' | 'MAX'>('FREE');

  useEffect(() => {
    // Fetch user subscription data
    const fetchUserData = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch('/api/user/subscription');
          if (response.ok) {
            const data = await response.json();
            setUserTier(data.tier);
          }
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };

    fetchUserData();
  }, [session]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome to your SaaS dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg border px-4 py-2">
              <span className="text-sm text-gray-600">Current Plan: </span>
              <span className={`font-medium ${
                userTier === 'FREE' ? 'text-gray-900' :
                userTier === 'PRO' ? 'text-blue-600' :
                'text-purple-600'
              }`}>
                {userTier}
              </span>
            </div>
            <button
              onClick={() => setShowSubscriptionModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {userTier === 'FREE' ? 'Upgrade Plan' : 'Manage Subscription'}
            </button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value="1,234"
            change="+12%"
            changeType="positive"
          />
          <StatCard
            title="Revenue"
            value="$12,345"
            change="+8%"
            changeType="positive"
          />
          <StatCard
            title="Active Sessions"
            value="456"
            change="-3%"
            changeType="negative"
          />
          <StatCard
            title="Conversion Rate"
            value="3.2%"
            change="+1.2%"
            changeType="positive"
          />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <ActivityItem text="New user registered" time="2 minutes ago" />
              <ActivityItem text="Payment received" time="5 minutes ago" />
              <ActivityItem text="Support ticket created" time="1 hour ago" />
              <ActivityItem text="User upgraded to Pro" time="2 hours ago" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                📊 View Analytics
              </button>
              <button 
                onClick={() => setShowSubscriptionModal(true)}
                className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                💳 Manage Billing
              </button>
              <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                ⚙️ Settings
              </button>
              <button className="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                📞 Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Subscription Modal */}
        <SubscriptionModal 
          isOpen={showSubscriptionModal}
          onClose={() => setShowSubscriptionModal(false)}
          currentTier={userTier}
        />
      </div>
    </DashboardLayout>
  );
}

function StatCard({ 
  title, 
  value, 
  change, 
  changeType 
}: { 
  title: string; 
  value: string; 
  change: string; 
  changeType: 'positive' | 'negative' 
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          changeType === 'positive' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
}

function ActivityItem({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-sm text-gray-900">{text}</span>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
}