import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaSearch } from 'react-icons/fa'; // Impor ikon tambahan
import PageHeader from "../components/PageHeader"; // Asumsikan diimpor seperti di Orders

export default function NotFound() {
  return (
    <div id="dashboard-container" className="p-6">
      {/* Gunakan PageHeader yang sama untuk konsistensi */}
      <PageHeader title="Halaman Tidak Ditemukan" />

      {/* Kontainer Utama 404 bergaya card putih */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center p-12 bg-white rounded-3xl shadow-sm border border-gray-100">
        
        {/* Visual Pusat: Piring Kosong dan Tanda Tanya Besar */}
        <div className="relative mb-12">
          {/* Ikon Piring Kosong Besar */}
          <FaUtensils className="text-gray-100 text-[250px]" />
          {/* Ikon Tanda Tanya di Atas Piring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-100">
              <span className="text-green-500 text-7xl font-bold">?</span>
          </div>
        </div>

        {/* Teks Error Besar (404) dengan aksen warna */}
        <div className="flex items-center space-x-2 mb-6">
            <span className="text-9xl font-extrabold text-gray-900 tracking-tighter">4</span>
            <span className="text-9xl font-extrabold text-green-500 tracking-tighter">0</span>
            <span className="text-9xl font-extrabold text-gray-900 tracking-tighter">4</span>
        </div>

        {/* Pesan Kesalahan Ramah bertema 'Sedap' */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3 tracking-tight">
          Waduh! Sepertinya menu yang Anda cari sudah habis.
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl leading-relaxed">
          Halaman yang Anda minta tidak dapat ditemukan dalam menu utama kami. Mungkin resepnya telah dihapus, alamatnya salah, atau chef kami sedang mencoba resep baru di dapur. Jangan khawatir, mari kita kembali ke dapur utama!
        </p>

        {/* Tombol Navigasi bergaya seperti tombol sidebar 'Add Menus' */}
        <Link to="/" className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-200 shadow-lg transform hover:-translate-y-0.5">
          <FaHome className="text-2xl" />
          <span className="text-lg">Kembali ke Beranda Utama</span>
        </Link>

        {/* Elemen Dekoratif Halus di Pojok Bawah Card untuk sentuhan 'Sedap' */}
        <div className="absolute bottom-6 right-6 text-sm text-gray-400 font-medium">
          &copy; 2025 Sedap. Restaurant Admin
        </div>
      </div>
    </div>
  );
}