import { useState } from "react";
import { Link } from "react-router-dom"; // WAJIB DI-IMPORT
import PageHeader from "../components/PageHeader";
import productsData from "../data/Products.json";

export default function Products() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div id="dashboard-container" className="p-6 font-poppins relative">
            <PageHeader title="Products" breadcrumb="Inventory List">
                <button 
                    onClick={() => setShowForm(true)}
                    className="bg-hijau text-white px-8 py-3.5 rounded-[20px] font-bold hover:bg-green-600 transition-all shadow-[0_15px_30px_rgba(0,176,116,0.25)] active:scale-95"
                >
                    + Add Product
                </button>
            </PageHeader>

            <div className="mt-8 bg-white rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-green-50/30 border-b border-green-50">
                                <th className="p-6 text-[13px] font-bold text-hijau uppercase tracking-widest">Product Details</th>
                                <th className="p-6 text-[13px] font-bold text-hijau uppercase tracking-widest text-center">Category</th>
                                <th className="p-6 text-[13px] font-bold text-hijau uppercase tracking-widest">Brand</th>
                                <th className="p-6 text-[13px] font-bold text-hijau uppercase tracking-widest">Price</th>
                                <th className="p-6 text-[13px] font-bold text-hijau uppercase tracking-widest text-center">Stock</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {productsData.map((product) => (
                                <tr key={product.id} className="hover:bg-green-50/20 transition-all group cursor-default">
                                    <td className="p-6">
                                        <div className="flex flex-col">
                                            {/* LINK KE HALAMAN DETAIL PRODUK */}
                                            <Link 
                                                to={`/products/${product.id}`} 
                                                className="text-[15px] font-extrabold text-gray-800 leading-none mb-1 group-hover:text-hijau transition-colors hover:underline w-fit"
                                            >
                                                {product.title}
                                            </Link>
                                            <span className="text-[11px] font-bold text-gray-300 tracking-wider">
                                                {product.code}
                                            </span>
                                        </div>
                                    </td>
                                    
                                    <td className="p-6 text-center">
                                        <span className={`px-5 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-tighter border ${
                                            product.category === 'Food' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                                            product.category === 'Beverage' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-purple-50 text-purple-600 border-purple-100'
                                        }`}>
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="p-6 text-[14px] font-semibold text-gray-500">{product.brand}</td>
                                    <td className="p-6 text-[15px] font-black text-gray-800">{product.price}</td>
                                    <td className="p-6 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className={`text-[15px] font-bold ${product.stock < 20 ? 'text-red-500' : 'text-gray-700'}`}>{product.stock}</span>
                                            {product.stock < 20 && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- MODAL POPUP ADD PRODUCT --- */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl animate-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">New Product</h2>
                            <span className="bg-green-100 text-hijau text-[10px] font-black px-3 py-1 rounded-full uppercase">Stock Entry</span>
                        </div>
                        
                        <div className="space-y-5 text-left">
                            <div className="space-y-1">
                                <label className="text-[11px] font-black text-gray-400 uppercase ml-2">Product Name</label>
                                <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-hijau transition-all" placeholder="e.g. Nasi Ayam Bakar" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-black text-gray-400 uppercase ml-2">Product Code</label>
                                    <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none" placeholder="PRD-000" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[11px] font-black text-gray-400 uppercase ml-2">Brand</label>
                                    <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none" placeholder="Sedap Kitchen" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[11px] font-black text-gray-400 uppercase ml-2">Category</label>
                                <select className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none appearance-none cursor-pointer font-bold text-gray-700">
                                    <option>Food</option>
                                    <option>Beverage</option>
                                    <option>Snack</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-black text-gray-400 uppercase ml-2">Price (Rp)</label>
                                    <input type="number" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none" placeholder="0" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[11px] font-black text-gray-400 uppercase ml-2">Initial Stock</label>
                                    <input type="number" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none" placeholder="0" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <button onClick={() => setShowForm(false)} className="flex-1 font-bold text-gray-400 hover:text-gray-600 transition-colors">Discard</button>
                            <button onClick={() => setShowForm(false)} className="flex-1 py-4 bg-hijau text-white rounded-2xl font-bold shadow-[0_10px_20px_rgba(0,176,116,0.2)]">Save Product</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}