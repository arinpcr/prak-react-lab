import React from 'react';

// ==========================================
// 1. KOMPONEN UTAMA (Menyatukan semua bagian)
// ==========================================
export default function TaiwindCSS() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-pink-200">
            {/* Navbar di atas */}
            <FlexboxGrid />

            {/* Bagian Hero (Sambutan) */}
            <Typography />

            {/* Bagian Kategori (Lebih banyak isi) */}
            <BackgroundColors />

            {/* Bagian Promo / Highlight */}
            <Spacing 
                title="Kualitas Premium yang Aman" 
                content="Semua koleksi web arin dibuat dari bahan kain ramah lingkungan dan isian hypoallergenic. Super lembut, aman untuk bayi, dan dirancang untuk menjadi teman pelukan seumur hidup." 
            />

            {/* Bagian Testimoni (Review pelanggan) */}
            <ShadowEffects />

            {/* Bagian Newsletter / Footer */}
            <BorderRadius />
            
            {/* Footer Sederhana */}
            <footer className="bg-slate-800 text-slate-400 text-center py-8 text-sm mt-12">
                © 2026 web arin. Kelembutan dalam setiap warna.
            </footer>
        </div>
    );
}

// ==========================================
// 2. NAVBAR (Bersih, Rapi, Solid White)
// ==========================================
function FlexboxGrid() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 lg:px-12 py-4 flex justify-between items-center shadow-sm">
            <h1 className="text-2xl font-extrabold lowercase text-slate-800 tracking-tight">
                web <span className="text-pink-400">arin</span>
            </h1>
            <ul className="hidden md:flex space-x-8 font-medium text-sm text-slate-500">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Beranda</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Koleksi Boneka</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Aksesoris</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-colors">Tentang Kami</a></li>
            </ul>
            <div className="flex space-x-4">
                <button className="text-sm font-bold text-slate-600 hover:text-pink-400 px-4 py-2 transition-colors">Masuk</button>
                <button className="text-sm font-bold bg-pink-100 text-pink-600 px-5 py-2 rounded-full hover:bg-pink-200 transition-colors">
                    Keranjang (0)
                </button>
            </div>
        </nav>
    );
}

// ==========================================
// 3. TYPOGRAPHY (Hero Section yang Rapi & Jelas)
// ==========================================
function Typography() {
    return (
        <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
            <span className="bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
                Koleksi Musim Semi Tiba
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-800 mb-6 tracking-tight leading-tight">
                Dunia Lembut <br />
                <span className="text-pink-400">Penuh Warna.</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Temukan teman pelukan barumu di <strong>web arin</strong>. Hadir dengan warna-warna pastel yang menenangkan pikiran dan bahan paling lembut yang pernah kamu sentuh.
            </p>
            <div className="flex space-x-4">
                <button className="bg-slate-800 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg">
                    Belanja Sekarang
                </button>
                <button className="bg-white text-slate-800 border border-slate-200 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
                    Lihat Katalog
                </button>
            </div>
        </div>
    );
}

// ==========================================
// 4. BACKGROUND COLORS (Kategori Produk - Warna Solid)
// ==========================================
function BackgroundColors() {
    return (
        <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-12">Pilih Warna Favoritmu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card Baby Pink */}
                <div className="bg-pink-100 p-10 rounded-3xl text-center border border-pink-200 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-sm">🐰</div>
                    <h3 className="text-xl font-bold text-pink-700 mb-2">Baby Pink</h3>
                    <p className="text-pink-600/80 text-sm">Koleksi kelinci dan stroberi yang manis.</p>
                </div>

                {/* Card Baby Blue */}
                <div className="bg-sky-100 p-10 rounded-3xl text-center border border-sky-200 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-sm">🐳</div>
                    <h3 className="text-xl font-bold text-sky-700 mb-2">Baby Blue</h3>
                    <p className="text-sky-600/80 text-sm">Teman naga awan dan paus laut pelukan.</p>
                </div>

                {/* Card Baby Yellow */}
                <div className="bg-yellow-50 p-10 rounded-3xl text-center border border-yellow-200 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-sm">🐥</div>
                    <h3 className="text-xl font-bold text-yellow-700 mb-2">Baby Yellow</h3>
                    <p className="text-yellow-600/80 text-sm">Bebek kecil dan bintang bersinar ceria.</p>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 5. SPACING (Banner Promo Full Lebar)
// ==========================================
function Spacing(props) {
    return (
        <div className="bg-white border-y border-slate-200 py-20 my-16">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="inline-block bg-pink-100 text-pink-500 p-3 rounded-2xl mb-6">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 mb-6">{props.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    {props.content}
                </p>
            </div>
        </div>
    );
}

// ==========================================
// 6. SHADOW EFFECTS (Testimoni dengan Bayangan Halus)
// ==========================================
function ShadowEffects() {
    return (
        <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-12">Kata Pelanggan web arin</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg shadow-slate-200/50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-slate-600 mb-6 font-medium">"Boneka naga Baby Blue-nya luar biasa lembut. Anak saya tidak mau tidur tanpanya. Warnanya juga sangat estetik di kamar!"</p>
                    <h4 className="font-bold text-slate-800">- Sarah T.</h4>
                </div>
                
                <div className="bg-white shadow-lg shadow-slate-200/50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-slate-600 mb-6 font-medium">"Pengirimannya cepat dan *packaging*-nya sangat rapi. Kelinci Baby Pink ini jadi kado terbaik untuk keponakan saya."</p>
                    <h4 className="font-bold text-slate-800">- Budi M.</h4>
                </div>

                <div className="bg-white shadow-lg shadow-slate-200/50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-slate-600 mb-6 font-medium">"Baru kali ini beli boneka yang kualitasnya benar-benar premium. Jahitannya kuat, isinya padat tapi tetap bisa dipeluk erat."</p>
                    <h4 className="font-bold text-slate-800">- Dina A.</h4>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 7. BORDER RADIUS (Newsletter CTA - Bentuk Membulat)
// ==========================================
function BorderRadius() {
    return (
        <div className="container mx-auto px-6 py-16 mt-10">
            <div className="bg-sky-50 rounded-[3rem] p-12 md:p-20 text-center border border-sky-100 max-w-5xl mx-auto">
                <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Dapatkan Diskon 15%</h2>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                    Berlangganan buletin kami untuk mendapatkan info koleksi pastel terbaru dan promo eksklusif langsung ke emailmu.
                </p>
                
                {/* Form dengan sudut sangat bulat (Border Radius full) */}
                <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                    <input 
                        type="email" 
                        placeholder="Masukkan email kamu..." 
                        className="px-6 py-4 rounded-full w-full border border-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                    />
                    <button className="bg-sky-400 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-500 transition-colors whitespace-nowrap shadow-md hover:shadow-lg">
                        Berlangganan
                    </button>
                </div>
            </div>
        </div>
    );
}