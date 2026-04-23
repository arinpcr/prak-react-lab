import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);
    
    const ordersData = Array.from({ length: 30 }, (_, i) => ({
        id: `#ORD-${1000 + i}`,
        name: ["Arini Zahira Putri", "Oyeng", "Nigga", "Nelong", "Matcha"][i % 5],
        status: ["Pending", "Completed", "Cancelled"][i % 3],
        price: `Rp ${(i + 1) * 25}.000`,
        date: `23 April 2026`
    }));

    return (
        <div id="dashboard-container" className="p-6 font-poppins">
            <PageHeader title="Orders" breadcrumb="Order List">
                <button 
                    onClick={() => setShowForm(true)}
                    className="bg-hijau text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-[0_10px_20px_rgba(0,176,116,0.3)]"
                >
                    + Add Orders
                </button>
            </PageHeader>

            <div className="mt-8 bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-green-50/50">
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest">Order ID</th>
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest">Customer</th>
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest text-center">Status</th>
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest">Total Price</th>
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {ordersData.map((order, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-6 font-bold text-gray-800">{order.id}</td>
                                <td className="p-6 font-extrabold text-gray-700">{order.name}</td>
                                <td className="p-6 text-center">
                                    <div className={`mx-auto w-fit px-5 py-1.5 rounded-full text-[10px] font-black uppercase flex items-center gap-2 ${
                                        order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                                    }`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${
                                            order.status === 'Completed' ? 'bg-green-600' : 
                                            order.status === 'Pending' ? 'bg-yellow-600' : 'bg-red-600'
                                        }`} />
                                        {order.status}
                                    </div>
                                </td>
                                <td className="p-6 font-black text-gray-800">{order.price}</td>
                                <td className="p-6 text-xs font-bold text-gray-300">{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL POPUP */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl animate-in zoom-in duration-200">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">Create New Order</h2>
                        <div className="space-y-4 text-left">
                            <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-hijau" placeholder="Customer Name" />
                            <select className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none">
                                <option>Pending</option>
                                <option>Completed</option>
                            </select>
                            <input type="number" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none" placeholder="Total Price" />
                        </div>
                        <div className="flex gap-4 mt-8">
                            <button onClick={() => setShowForm(false)} className="flex-1 font-bold text-gray-400">Discard</button>
                            <button onClick={() => setShowForm(false)} className="flex-1 py-4 bg-hijau text-white rounded-2xl font-bold shadow-lg">Submit Order</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}