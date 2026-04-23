import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    const customersData = Array.from({ length: 30 }, (_, i) => ({
        id: `CUST-0${i + 1}`,
        name: ["Arini Zahira Putri", "Oyeng", "Nigga", "Nelong", "Matcha"][i % 5],
        email: `user${i + 1}@sedap.com`,
        phone: `0812-7788-00${i}`,
        loyalty: ["Bronze", "Silver", "Gold"][i % 3]
    }));

    return (
        <div id="dashboard-container" className="p-6">
            <PageHeader title="Customers" breadcrumb="Customer List">
                <button 
                    onClick={() => setShowForm(true)}
                    className="bg-hijau text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-[0_10px_20px_rgba(0,176,116,0.3)] active:scale-95"
                >
                    + Add Customer
                </button>
            </PageHeader>

            <div className="mt-8 bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-green-50/50">
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest">ID</th>
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest">Customer Name</th>
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest">Contact</th>
                            <th className="p-6 text-sm font-bold text-hijau uppercase tracking-widest text-center">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {customersData.map((cust, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-6 font-bold text-gray-300 group-hover:text-hijau">{cust.id}</td>
                                <td className="p-6">
                                    <div className="font-extrabold text-gray-800">{cust.name}</div>
                                    <div className="text-xs text-gray-400">{cust.email}</div>
                                </td>
                                <td className="p-6 text-sm text-gray-500 font-medium">{cust.phone}</td>
                                <td className="p-6 text-center">
                                    <span className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm ${
                                        cust.loyalty === 'Gold' ? 'bg-amber-400 text-white' : 
                                        cust.loyalty === 'Silver' ? 'bg-biru text-white' : 'bg-orange-400 text-white'
                                    }`}>
                                        {cust.loyalty}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL POPUP */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl animate-in zoom-in duration-200">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">New Customer</h2>
                        <div className="space-y-4">
                            <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-hijau" placeholder="Full Name" />
                            <input type="email" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none" placeholder="Email" />
                            <select className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none">
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Bronze</option>
                            </select>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <button onClick={() => setShowForm(false)} className="flex-1 font-bold text-gray-400">Cancel</button>
                            <button onClick={() => setShowForm(false)} className="flex-1 py-4 bg-hijau text-white rounded-2xl font-bold shadow-lg">Save Customer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}