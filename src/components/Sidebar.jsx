import { MdDashboard, MdShoppingCart, MdPeople, MdErrorOutline, MdInventory, MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl px-4 py-2.5 space-x-3 transition-all
        ${isActive ? 
            "text-hijau bg-green-100 font-extrabold" : 
            "text-gray-500 hover:text-hijau hover:bg-green-50 hover:font-bold"
        }`;

    return (
        // Menggunakan p-5 agar tidak terlalu boros tempat
        <div id="sidebar" className="flex h-screen sticky top-0 flex-col bg-white p-5 shadow-lg min-w-[260px] overflow-y-auto overflow-x-hidden font-poppins border-r border-gray-50">
            
            {/* Logo - Diperkecil sedikit marginnya */}
            <div id="sidebar-logo" className="flex flex-col mb-6 mt-2 px-2">
                <span id="logo-title" className="text-4xl font-black text-gray-900 tracking-tight">
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                    Modern Admin
                </span>
            </div>

            {/* List Menu - space-y-1 agar lebih rapat */}
            <ul id="menu-list" className="space-y-1 flex-1">
                <li>
                    <NavLink to="/" className={menuClass}>
                        <MdDashboard className="text-xl" />
                        <span className="text-sm">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" className={menuClass}>
                        <MdShoppingCart className="text-xl" />
                        <span className="text-sm">Orders</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customers" className={menuClass}>
                        <MdPeople className="text-xl" />
                        <span className="text-sm">Customers</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={menuClass}>
                        <MdInventory className="text-xl" />
                        <span className="text-sm">Products</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/components" className={menuClass}>
                        <MdInventory className="text-xl" />
                        <span className="text-sm">Components</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/fitur-xyz" className={menuClass}>
                        <MdInventory className="text-xl" />
                        <span className="text-sm">Fitur XYZ</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/notes" className={menuClass}>
                        <MdInventory className="text-xl" />
                        <span className="text-sm">Notes</span>
                    </NavLink>
                </li>

                {/* PEMBATAS */}
                <div className="pt-4 pb-2 px-4 mt-2 border-t border-gray-50">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Error Pages</p>
                </div>

                <li>
                    <NavLink to="/error-400" className={menuClass}>
                        <MdErrorOutline className="text-xl" />
                        <span className="text-sm">Error 400</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/error-401" className={menuClass}>
                        <MdErrorOutline className="text-xl" />
                        <span className="text-sm">Error 401</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/error-403" className={menuClass}>
                        <MdErrorOutline className="text-xl" />
                        <span className="text-sm">Error 403</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/error-404" className={menuClass}>
                        <MdErrorOutline className="text-xl" />
                        <span className="text-sm">Error 404</span>
                    </NavLink>
                </li>
            </ul>

            {/* Footer - Dibuat lebih ringkas */}
            <div id="sidebar-footer" className="mt-6">
                <div id="footer-card" className="bg-hijau p-4 rounded-2xl shadow-md flex items-center justify-between mb-4">
                    <div id="footer-text" className="text-white w-2/3">
                        <span className="text-[10px] font-medium leading-tight block mb-2">Organize your menus!</span>
                        <button id="add-menu-button" className="flex justify-center items-center px-3 py-1.5 bg-white rounded-lg space-x-1 hover:bg-gray-50 transition-colors">
                            <MdAdd className="text-gray-800 text-sm" />
                            <span className="text-gray-800 text-[10px] font-bold">Add</span>
                        </button>
                    </div>
                    <img id="footer-avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://avatar.iran.liara.run/public/28" alt="Avatar" />
                </div>
                <div className="text-center px-2">
                    <span id="footer-brand" className="font-bold text-gray-400 text-[9px] uppercase tracking-wider block">Sedap Dashboard</span>
                    <p id="footer-copyright" className="font-medium text-gray-300 text-[9px] mt-0.5">&copy; 2026 All Right Reserved</p>
                </div>
            </div>
            
        </div>
    );
}