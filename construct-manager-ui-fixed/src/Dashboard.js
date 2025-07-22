import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <span className="bg-blue-800 text-white px-2 py-1 rounded">CM</span>
          ConstructManager
        </h1>
        <nav className="space-y-4 text-gray-700">
          {["Dashboard", "Projects", "Tasks", "Budget", "Files", "Team", "Calendar", "Reports", "Settings"].map((item) => (
            <div
              key={item}
              className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer hover:bg-gray-100 ${item === "Dashboard" ? "bg-blue-100 text-blue-700 font-medium" : ""}`}
            >
              <span className="material-icons">apps</span>
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search projects, tasks, or files..."
            className="w-1/3 px-4 py-2 border rounded"
          />
          <div className="flex items-center gap-4">
            <span className="material-icons text-gray-600">notifications</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <span className="font-medium">John Smith</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
        <p className="text-gray-600 mb-6">Welcome back, John. Here's what's happening with your projects.</p>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Projects", value: 12, note: "+2 this month" },
            { label: "Completed Tasks", value: 284, note: "+18 this week" },
            { label: "Total Budget", value: "$2.4M", note: "+12% vs last quarter" },
            { label: "Team Members", value: 48, note: "+4 new hires" }
          ].map((card) => (
            <div key={card.label} className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">{card.label}</p>
              <p className="text-2xl font-bold">{card.value}</p>
              <p className="text-sm text-green-500">{card.note}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Recent Projects</h3>
            <p className="text-sm text-gray-500 mb-4">Track progress on your active construction projects</p>
            <div className="bg-gray-100 p-4 rounded">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="font-medium">Downtown Office Complex</p>
                  <p className="text-sm text-gray-500">Manager: Sarah Johnson</p>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">On Track</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div className="bg-blue-600 h-2 rounded w-3/4"></div>
              </div>
              <div className="text-sm text-gray-500 mt-2 flex justify-between">
                <span>Due: Dec 15, 2024</span>
                <span>$850K</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Upcoming Tasks</h3>
            <p className="text-sm text-gray-500 mb-4">Important deadlines and milestones approaching</p>
            <div className="space-y-2">
              <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
                <div>
                  <p className="font-medium">Foundation inspection</p>
                  <p className="text-sm text-gray-500">Downtown Office Complex</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">High</span>
                  <span className="text-xs text-gray-500">Tomorrow</span>
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
                <div>
                  <p className="font-medium">Material delivery</p>
                  <p className="text-sm text-gray-500">Residential Housing</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Medium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}