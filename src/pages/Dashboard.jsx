import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaUserFriends } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    // Data Dummy untuk Tabel Recent Activity (Sesuai Improvisasi Pertemuan 5)
    const recentActivity = [
        { id: "#001", name: "Arini Zahira Putri", menu: "Nasi Goreng Spesial", status: "Success" },
        { id: "#002", name: "Oyeng", menu: "Mie Ayam Bakso", status: "Pending" },
        { id: "#003", name: "Nigga", menu: "Es Teh Manis", status: "Canceled" },
    ];

    return (
        <div id="dashboard-container">
            {/* 1. Menggunakan PageHeader dengan props baru sesuai Latihan Pertemuan 6 */}
            <PageHeader title="Dashboard" breadcrumb="Overview" />

            {/* 2. Stats Cards Grid (Sesuai Desain Figma Sedap) */}
            <div id="dashboard-grid" className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* Total Orders */}
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div id="orders-icon" className="bg-hijau rounded-full p-4 text-3xl text-white">
                        <FaShoppingCart />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold text-gray-800">75</span>
                        <span id="orders-text" className="text-gray-400 text-sm">Total Orders</span>
                    </div>
                </div>

                {/* Total Delivered */}
                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div id="delivered-icon" className="bg-biru rounded-full p-4 text-3xl text-white">
                        <FaTruck />
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold text-gray-800">175</span>
                        <span id="delivered-text" className="text-gray-400 text-sm">Total Delivered</span>
                    </div>
                </div>

                {/* Total Canceled */}
                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div id="canceled-icon" className="bg-merah rounded-full p-4 text-3xl text-white">
                        <FaBan />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold text-gray-800">40</span>
                        <span id="canceled-text" className="text-gray-400 text-sm">Total Canceled</span>
                    </div>
                </div>

                {/* Total Revenue */}
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div id="revenue-icon" className="bg-kuning rounded-full p-4 text-3xl text-white">
                        <FaDollarSign />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold text-gray-800">Rp.128M</span>
                        <span id="revenue-text" className="text-gray-400 text-sm">Total Revenue</span>
                    </div>
                </div>
            </div>

            {/* 3. Recent Customers Activity (Improvisasi Pertemuan 5) */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                    <FaUserFriends className="text-hijau text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">Recent Customers Activity</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-50 text-sm">
                                <th className="pb-4 font-medium uppercase tracking-wider">Customer Name</th>
                                <th className="pb-4 font-medium uppercase tracking-wider">Order ID</th>
                                <th className="pb-4 font-medium uppercase tracking-wider">Menu Item</th>
                                <th className="pb-4 font-medium uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {recentActivity.map((c, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 font-semibold text-gray-700">{c.name}</td>
                                    <td className="py-4 text-gray-500">{c.id}</td>
                                    <td className="py-4 text-gray-500">{c.menu}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            c.status === 'Success' ? 'bg-green-100 text-green-600' : 
                                            c.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                                        }`}>
                                            {c.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}