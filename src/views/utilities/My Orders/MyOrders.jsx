

// import React, { useState } from 'react';
// import plant56 from '../../../Assets/Gift/Gift3.png'; // Corrected the path

// const initialOrders = [
//   {
//     id: '111-9873678-304011',
//     date: '22 Aug 2024',
//     status: 'Cancelled',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹600.00',
//     imageUrl: plant56,
//   },
//   {
//     id: '112-9873678-304012',
//     date: '22 Aug 2024',
//     status: 'Delivered',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹600.00',
//     imageUrl: plant56,
//   },
//   {
//     id: '113-9873678-304013',
//     date: '22 Aug 2024',
//     status: 'Returned',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹600.00',
//     imageUrl: plant56,
//   },
//   {
//     id: '114-9873678-304014',
//     date: '22 Aug 2024',
//     status: 'On the Way',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹600.00',
//     imageUrl: plant56,
//   },
// ];

// const statusColors = {
//   Cancelled: 'text-red-500',
//   Delivered: 'text-green-500',
//   Returned: 'text-blue-500',
//   'On the Way': 'text-orange-500',
// };

// const MyOrders = () => {
//   const [orders, setOrders] = useState(initialOrders);
//   const [filterStatus, setFilterStatus] = useState('all');

//   const filteredOrders =
//     filterStatus === 'all'
//       ? orders
//       : orders.filter((order) => order.status === filterStatus);

//   const handleFilterChange = (status) => setFilterStatus(status);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex space-x-6">
//         {/* Filter Section */}
//         <div className="w-1/4 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Filter</h2>
//           <div className="space-y-2">
//             <button
//               onClick={() => handleFilterChange('all')}
//               className={`block w-full px-4 py-2 rounded-md text-left ${
//                 filterStatus === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               All
//             </button>
//             {Object.keys(statusColors).map((status) => (
//               <button
//                 key={status}
//                 onClick={() => handleFilterChange(status)}
//                 className={`block w-full px-4 py-2 rounded-md text-left ${
//                   filterStatus === status
//                     ? `bg-blue-500 text-white`
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Orders List */}
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold mb-6">My Orders</h1>
//           {filteredOrders.length > 0 ? (
//             filteredOrders.map((order) => (
//               <div
//                 key={order.id}
//                 className="bg-white shadow-md p-4 rounded-lg mb-4 border border-gray-200"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <div>
//                     <h3 className="text-lg font-semibold">Order Placed</h3>
//                     <p className="text-sm text-gray-500">{order.date}</p>
//                   </div>
//                   <p className="text-sm text-gray-500">Order ID: {order.id}</p>
//                 </div>
//                 <div className="flex space-x-4 items-center">
//                   <img
//                     src={order.imageUrl}
//                     alt={order.productName}
//                     className="w-16 h-16 rounded border"
//                   />
//                   <div className="flex-1">
//                     <p className="font-semibold">{order.productName}</p>
//                     <p className="text-lg font-bold">{order.price}</p>
//                   </div>
//                   <div>
//                     <span className={`font-semibold ${statusColors[order.status]}`}>
//                       {order.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No orders found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;


// import React, { useState } from 'react';
// import plant56 from '../../../Assets/Gift/Gift3.png'; // Corrected the path

// const initialOrders = [
//   {
//     id: '111-9873678-304011',
//     date: '22 Aug 2024',
//     status: 'Cancelled',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹499.00',
//     imageUrl: plant56,
//   },
//   {
//     id: '112-9873678-304012',
//     date: '22 Aug 2024',
//     status: 'Delivered',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹499.00',
//     imageUrl: plant56,
//   },
//   {
//     id: '113-9873678-304013',
//     date: '22 Aug 2024',
//     status: 'Returned',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹499.00',
//     imageUrl: plant56,
//   },
//   {
//     id: '114-9873678-304014',
//     date: '22 Aug 2024',
//     status: 'On the Way',
//     productName: 'Peace Lily Plant/Bonsai Pot',
//     price: '₹499.00',
//     imageUrl: plant56,
//   },
// ];

// const statusColors = {
//   Cancelled: 'text-red-500',
//   Delivered: 'text-green-500',
//   Returned: 'text-blue-500',
//   'On the Way': 'text-orange-500',
// };

// const MyOrders = () => {
//   const [orders] = useState(initialOrders);
//   const [filterStatus, setFilterStatus] = useState([]);
//   const [filterTime, setFilterTime] = useState([]);

//   const toggleFilterStatus = (status) => {
//     setFilterStatus((prev) =>
//       prev.includes(status)
//         ? prev.filter((s) => s !== status)
//         : [...prev, status]
//     );
//   };

//   const toggleFilterTime = (time) => {
//     setFilterTime((prev) =>
//       prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
//     );
//   };

//   const filteredOrders = orders.filter(
//     (order) =>
//       (filterStatus.length === 0 || filterStatus.includes(order.status)) &&
//       (filterTime.length === 0 || filterTime.includes('Last 30 Days')) // Assuming all orders are within the last 30 days for simplicity
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex space-x-6">
//         {/* Filter Section */}
//         <div className="w-1/4 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Filter</h2>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Order status</h3>
//             <div className="space-y-2">
//               {Object.keys(statusColors).map((status) => (
//                 <label key={status} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={filterStatus.includes(status)}
//                     onChange={() => toggleFilterStatus(status)}
//                     className="form-checkbox h-4 w-4 text-blue-500"
//                   />
//                   <span>{status}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-2">Order time</h3>
//             <div className="space-y-2">
//               {['Last 30 Days', '2023', '2022', '2021'].map((time) => (
//                 <label key={time} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={filterTime.includes(time)}
//                     onChange={() => toggleFilterTime(time)}
//                     className="form-checkbox h-4 w-4 text-blue-500"
//                   />
//                   <span>{time}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Orders List */}
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold mb-6">My Orders</h1>
//           {filteredOrders.length > 0 ? (
//             filteredOrders.map((order) => (
//               <div
//                 key={order.id}
//                 className="bg-white shadow-md p-4 rounded-lg mb-4 border border-gray-200"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <div>
//                     <h3 className="text-lg font-semibold">Order Placed</h3>
//                     <p className="text-sm text-gray-500">{order.date}</p>
//                   </div>
//                   <p className="text-sm text-gray-500">Order ID: {order.id}</p>
//                 </div>
//                 <div className="flex space-x-4 items-center">
//                   <img
//                     src={order.imageUrl}
//                     alt={order.productName}
//                     className="w-16 h-16 rounded border"
//                   />
//                   <div className="flex-1">
//                     <p className="font-semibold">{order.productName}</p>
//                     <p className="text-lg font-bold">{order.price}</p>
//                   </div>
//                   <div>
//                     <span className={`font-semibold ${statusColors[order.status]}`}>
//                       {order.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No orders found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;



import React, { useState } from 'react';
import plant56 from '../../../Assets/Gift/Gift3.png'; // Corrected the path

const initialOrders = [
  {
    id: '111-9873678-304011',
    date: '22 Aug 2024',
    status: 'Cancelled',
    productName: 'Peace Lily Plant/Bonsai Pot',
    price: '₹499.00',
    imageUrl: plant56,
  },
  {
    id: '112-9873678-304012',
    date: '22 Aug 2024',
    status: 'Delivered',
    productName: 'Peace Lily Plant/Bonsai Pot',
    price: '₹499.00',
    imageUrl: plant56,
  },
  {
    id: '113-9873678-304013',
    date: '22 Aug 2024',
    status: 'Returned',
    productName: 'Peace Lily Plant/Bonsai Pot',
    price: '₹499.00',
    imageUrl: plant56,
  },
  {
    id: '114-9873678-304014',
    date: '22 Aug 2024',
    status: 'On the Way',
    productName: 'Peace Lily Plant/Bonsai Pot',
    price: '₹499.00',
    imageUrl: plant56,
  },
];

const statusColors = {
  Cancelled: 'text-red-500',
  Delivered: 'text-green-500',
  Returned: 'text-blue-500',
  'On the Way': 'text-orange-500',
};

const MyOrders = () => {
  const [orders] = useState(initialOrders);
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterTime, setFilterTime] = useState([]);

  const toggleFilterStatus = (status) => {
    setFilterStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const toggleFilterTime = (time) => {
    setFilterTime((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const filteredOrders = orders.filter(
    (order) =>
      (filterStatus.length === 0 || filterStatus.includes(order.status)) &&
      (filterTime.length === 0 || filterTime.includes('Last 30 Days')) // Assuming all orders are within the last 30 days for simplicity
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="flex space-x-6">
        {/* Filter Section */}
        <div className="w-1/4 bg-white shadow-lg rounded-lg p-6 h-1/5">


          <h2 className="text-xl font-bold mb-4">Filter</h2>
          <div>
            <h3 className="text-lg font-semibold mb-2">Order status</h3>
            <div className="space-y-2">
              {Object.keys(statusColors).map((status) => (
                <label key={status} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filterStatus.includes(status)}
                    onChange={() => toggleFilterStatus(status)}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span>{status}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Order time</h3>
            <div className="space-y-2">
              {['Last 30 Days', '2023', '2022', '2021'].map((time) => (
                <label key={time} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filterTime.includes(time)}
                    onChange={() => toggleFilterTime(time)}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span>{time}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="flex-1">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow-md p-4 rounded-lg mb-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Order Placed</h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                </div>
                <div className="flex space-x-4 items-center">
                  <img
                    src={order.imageUrl}
                    alt={order.productName}
                    className="w-16 h-16 rounded border"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{order.productName}</p>
                    <p className="text-lg font-bold">{order.price}</p>
                  </div>
                  <div>
                    <span className={`font-semibold ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;