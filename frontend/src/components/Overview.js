import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

// Data for employees in each department
const departmentData = [
  { name: "Warehouse", value: 150 },
  { name: "Maintenance", value: 80 },
  { name: "Production", value: 200 },
  { name: "Silo", value: 60 },
];

// Data for inventory over time
const inventoryData = [
  { week: "2025-01-01", productA: 120, productB: 80, productC: 150 },
  { week: "2025-01-08", productA: 115, productB: 75, productC: 145 },
  { week: "2025-01-15", productA: 110, productB: 70, productC: 140 },
  { week: "2025-01-22", productA: 100, productB: 65, productC: 135 },
  { week: "2025-01-29", productA: 95, productB: 60, productC: 130 },
];

// Colors for Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Overview() {
  return (
    <main className="p-6">
      {/* Top Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users Card */}
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
          <svg
            className="text-blue-500"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            <path d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4" />
          </svg>
          <div className="ml-4">
            <h2 className="text-gray-500">Total Users</h2>
            <span className="text-xl font-bold">10</span>
          </div>
        </div>

        {/* Active Employees Card */}
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
          <svg
            className="text-green-500"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M8 6.5h12M8 12h12M8 17.5h12M4 6.5h1M4 12h1m-1 5.5h1" />
          </svg>
          <div className="ml-4">
            <h2 className="text-gray-500">Active Employees</h2>
            <span className="text-xl font-bold">450</span>
          </div>
        </div>

        {/* Inventory Stock Card */}
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
          <svg
            className="text-orange-500"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M8 6.5h12M8 12h12M8 17.5h12M4 6.5h1M4 12h1m-1 5.5h1" />
          </svg>
          <div className="ml-4">
            <h2 className="text-gray-500">Stock Levels</h2>
            <span className="text-xl font-bold">850</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Line Chart (Inventory Over Time) */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold text-center mb-4">Inventory Levels Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="productA" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="productB" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="productC" stroke="#ff7300" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart (Department Employee Distribution) */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold text-center mb-4">Department Employee Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Overview;
