import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'
import { Chart, Line, Bar, Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [dashboarddata] = useState(dashboardDummyData);
    const [paymentStatus, setPaymentStatus] = useState(dashboarddata.bookings.map(item => item.isPaid ? 'Completed' : item.status === 'Pending' ? 'Pending' : 'Cancelled'));

    // Line Chart
    const linedetails = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Booking Details',
            data: [12, 19, 3, 5, 2, 3, 7],
            borderColor: 'rgb(37, 99, 235)',
            tension: 0.3,
            fill: true,
        }]
    };
    const lineadd = {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scale: {
            y: { beginAtZero: true, title: { display: true, text: 'Booking Details' } },
            x: { beginAtZero: true, title: { display: true, text: 'Days' } }
        }
    };

    // Bar Chart
    // const bardetails = {
    //     labels: ['Room A', 'Room B', 'Room C', 'Room D'],
    //     datasets: [{
    //         label: 'Revenue by Room',
    //         data: [500, 700, 300, 400],
    //         backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
    //     }]
    // };
    // const baradd = {
    //     responsive: true,
    //     plugins: { legend: { position: 'top' } },
    // };

    // Pie Chart
    const paymentStatusCounts = paymentStatus.reduce((acc, status) => {
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});
    const piedetails = {
        labels: Object.keys(paymentStatusCounts),
        datasets: [{
            data: Object.values(paymentStatusCounts),
            backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
            hoverOffset: 40,
        }]
    };
    const pieadd = {
        responsive: true,
        plugins: { legend: { position: 'top' } },
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-200 text-green-600';
            case 'Pending':
                return 'bg-amber-200 text-yellow-600';
            case 'Cancelled':
                return 'bg-red-200 text-red-600';
            default:
                return '';
        }
    };

    return (
        <div className='pb-10 min-h-screen'>
            <Title align='left' font='outfit' title='DashBoard' subTitle='Monitor your room listings, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations.' />

            {/* Chart */}
            <div className='flex flex-wrap gap-4'>
                {/* Line Chart */}
                <div className='  bg-white rounded shadow'>
                    <h2 className='text-lg font-medium text-center mb-4'>Booking Details</h2>
                    <Line data={linedetails} options={lineadd}></Line>
                </div>
                {/* Bar Chart
                <div className=' bg-white rounded shadow'>
                    <h2 className='text-lg font-medium text-center mb-4'>Revenue by Room</h2>
                    <Bar data={bardetails} options={baradd}></Bar>
                </div> */}
                {/* Pie Chart */}
                <div className=' bg-white rounded shadow'>
                    <h2 className='text-lg font-medium text-center mb-4'>Payment Status Distribution</h2>
                    <Pie data={piedetails} options={pieadd}></Pie>
                </div>
            </div>

            <div className='flex gap-4 my-8 '>
                {/* Total Bookings */}
                <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                    <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Bookings</p>
                        <p className='text-neutral-400 text-base'>{dashboarddata.totalBookings}</p>
                    </div>
                </div>
                {/* Total Revenue */}
                <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                    <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Revenue</p>
                        <p className='text-neutral-400 text-base'>${dashboarddata.totalRevenue}</p>
                    </div>
                </div>
            </div>

            {/* Recent Bookings */}
            <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
                <table className='w-full '>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {dashboarddata.bookings.map((item, i) => (
                            <tr key={i} >
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>${item.totalPrice}</td>
                                <td className='py-3 px-4 border-t border-gray-300 flex'>
                                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${getStatusColor(paymentStatus[i])}`}>
                                        {item.status}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Dashboard