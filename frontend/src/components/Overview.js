import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


function Overview() {
   // Data representing total number of employees in each department
  const departmentData = [
      { name: 'Warehouse', value: 150 },    // Total employees in Warehouse
      { name: 'Maintenance', value: 80 },    // Total employees in Maintenance
      { name: 'Production', value: 200 },   // Total employees in Production
      { name: 'Silo', value: 60 }           // Total employees in Silo
   ];
    const inventoryData = [
      { week: '2025-01-01', productA: 120, productB: 80, productC: 150 },
      { week: '2025-01-08', productA: 115, productB: 75, productC: 145 },
      { week: '2025-01-15', productA: 110, productB: 70, productC: 140 },
      { week: '2025-01-22', productA: 100, productB: 65, productC: 135 },
      { week: '2025-01-29', productA: 95, productB: 60, productC: 130 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  return (
   <main>
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="p-4 shadow-md max-w-52 ">
         <svg className="ml-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4'/><path d='M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4'/></svg>
         <h2 className="ml-5 mt-2">Users</h2>
         <span className="ml-5 ">10</span>
      </div>
      <div className="p-4 shadow-md max-w-52 ">
         <svg className="ml-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4'/><path d='M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4'/></svg>
         <h2 className="ml-5 mt-2">Users</h2>
         <span className="ml-5 ">10</span>
      </div>
      <div className="p-4 shadow-md max-w-52 ">
         <svg className="ml-5" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4'/><path d='M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4'/></svg>
         <h2 className="ml-5 mt-2">Users</h2>
         <span className="ml-5 ">10</span>
      </div>
   </div>
      <div className="grid grid-cols-3 mt-5">
      <div className="col-span-2">
      <h2 className="text-center">Inventory Levels Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={inventoryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="productA" stroke="#8884d8" />
          <Line type="monotone" dataKey="productB" stroke="#82ca9d" />
          <Line type="monotone" dataKey="productC" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
         <div>
         <h2>Department Employee Distribution</h2>
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
  )
}

export default Overview