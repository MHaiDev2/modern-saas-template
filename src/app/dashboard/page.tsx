import DashboardLayout from '@/components/layout/DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your SaaS dashboard</p>
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
              <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
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