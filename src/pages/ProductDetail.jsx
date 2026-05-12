import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.statusText);
                    return;
                }
                setProduct(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [id]);

    if (error) return (
        <div className="p-6 font-poppins flex justify-center items-center h-[60vh]">
            <div className="bg-red-50 text-red-600 p-6 rounded-3xl font-bold border border-red-100 shadow-sm">Error: {error}</div>
        </div>
    );
    
    if (!product) return (
        <div className="p-6 font-poppins flex justify-center items-center h-[60vh]">
            <div className="animate-pulse flex items-center gap-3 text-hijau font-black text-xl">
                <div className="w-6 h-6 border-4 border-hijau border-t-transparent rounded-full animate-spin"></div>
                Loading Product...
            </div>
        </div>
    );

    return (
        <div className="p-6 font-poppins">
            {/* Tombol Back */}
            <Link to="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-hijau font-bold text-sm mb-6 transition-colors">
                <span>←</span> Kembali ke List Produk
            </Link>

            {/* Card Detail Premium "Sedap Style" */}
            <div className="bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 overflow-hidden max-w-3xl mx-auto flex flex-col md:flex-row">
                
                {/* Bagian Gambar */}
                <div className="w-full md:w-1/2 p-6 bg-gray-50/50 flex items-center justify-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="rounded-[30px] w-full h-64 md:h-80 object-cover shadow-sm bg-white"
                    />
                </div>

                {/* Bagian Informasi */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <span className="bg-green-50 text-hijau w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                        {product.category}
                    </span>
                    
                    <h2 className="text-3xl font-black text-gray-800 mb-2 leading-tight">
                        {product.title}
                    </h2>
                    
                    <p className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                        Brand: <span className="text-gray-600">{product.brand || "Unknown Brand"}</span>
                    </p>
                    
                    <div className="mt-auto">
                        <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">
                            Total Price
                        </p>
                        <p className="text-4xl font-black text-hijau">
                            Rp {new Intl.NumberFormat('id-ID').format(product.price * 15000)}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}