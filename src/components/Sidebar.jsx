import { FaThLarge, FaList, FaHeadphonesAlt, FaBan, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold" : 
        "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div id="sidebar" className="flex flex-col h-full min-h-screen bg-white p-4">
      
      {/* --- 1. LOGO SECTION (DENGAN AKSEN CAHAYA & TITIK BULAT) --- */}
      <div id="sidebar-logo" className="relative mb-10 px-4 pt-8 pb-5">
        {/* Dekorasi Cahaya Halus */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-hijau/10 rounded-full blur-[40px] z-0"></div>
        
        <div className="relative z-10">
            <h1 className="text-[38px] font-black text-gray-900 leading-none flex items-end tracking-tighter">
                Sedap
                <span className="w-2.5 h-2.5 bg-hijau rounded-full ml-1 mb-1.5 shadow-sm"></span>
            </h1>
            <span id="logo-subtitle" className="block text-[11px] text-gray-400 font-bold uppercase tracking-[2px] mt-2">
                Modern Admin Dashboard
            </span>
        </div>
      </div>

      {/* --- 2. MENU SECTION --- */}
      <div id="sidebar-menu" className="flex-1 overflow-y-auto">
        <ul id="menu-list" className="space-y-1">
          <li>
            <NavLink to="/" className={menuClass}><FaThLarge /> <span>Dashboard</span></NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={menuClass}><FaList /> <span>Orders</span></NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={menuClass}><FaHeadphonesAlt /> <span>Customers</span></NavLink>
          </li>
          
          <li className="mt-4 pt-4 border-t border-gray-100">
            <span className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Error Pages</span>
          </li>
          <li>
            <NavLink to="/error-400" className={menuClass}><FaBan /> <span>Error 400</span></NavLink>
          </li>
          <li>
            <NavLink to="/error-401" className={menuClass}><FaBan /> <span>Error 401</span></NavLink>
          </li>
          <li>
            <NavLink to="/error-403" className={menuClass}><FaBan /> <span>Error 403</span></NavLink>
          </li>
        </ul>
      </div>

      {/* --- 3. SIDEBAR FOOTER (KARTU HIJAU & FOTO PROFIL KECIL BULAT) --- */}
      <div id="sidebar-footer" className="mt-auto pt-8">
        <div className="relative bg-hijau p-6 rounded-[32px] shadow-[0_20px_40px_rgba(0,176,116,0.25)] overflow-visible mx-2">
          
          {/* Konten Teks & Tombol */}
          <div className="relative z-10 w-[70%]">
            <p className="text-white text-[12px] font-medium leading-relaxed mb-4">
              Please organize your menus through button below!
            </p>
            <button className="flex items-center gap-2 bg-white text-gray-800 px-5 py-2.5 rounded-2xl font-bold text-[10px] shadow-md active:scale-95 transition-all">
              <FaPlus className="text-[8px]" />
              <span>Add Menus</span>
            </button>
          </div>

          {/* FOTO PROFIL KECIL BULAT */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-[3px] border-white shadow-2xl z-20 overflow-hidden bg-white">
            <img 
              src="/img/profile.jpg" 
              className="w-full h-full object-cover"
              alt="Mini Profile"
              onError={(e) => { e.target.src = "https://avatar.iran.liara.run/public/28" }}
            />
          </div>
        </div>

        {/* Brand Copyright */}
        <div className="mt-6 px-2 text-center border-t border-gray-50 pt-5">
            <span id="footer-brand" className="text-[10px] font-bold text-gray-400 block uppercase tracking-tight">
                Sedap Restaurant Admin Dashboard
            </span>
            <p id="footer-copyright" className="text-[9px] text-gray-300 mt-1 uppercase font-medium tracking-widest">
                &copy; 2026 Arini Zahira Putri
            </p>
        </div>
      </div>

    </div>
  );
}