import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  /** Deklarasi state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
      searchDev: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  /** Deklarasi Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLocaleLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);

    const matchesTag =dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags untuk pilihan dropdown **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen relative p-8 flex flex-col items-center font-sans overflow-x-hidden">
      {/* Background Pattern - Papan Catur Biru Muda & Putih (Sesuai Foto Arin) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `linear-gradient(45deg, #d1e9f6 25%, transparent 25%, transparent 75%, #d1e9f6 75%, #d1e9f6), 
                            linear-gradient(45deg, #d1e9f6 25%, transparent 25%, transparent 75%, #d1e9f6 75%, #d1e9f6)`,
          backgroundSize: "80px 80px",
          backgroundPosition: "0 0, 40px 40px",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-2xl space-y-6">
        
        {/* --- Bagian Input Search & Select (Redesign Dropdown) --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Input Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search framework..."
              onChange={handleChange}
              className="w-full p-4 pl-6 border-[4px] border-[#ffb6c1] rounded-[25px] focus:outline-none focus:ring-4 focus:ring-pink-100 bg-white/90 text-[#8e5d67] font-bold placeholder:text-pink-200 shadow-md transition-all"
            />
          </div>

          {/* Select Dropdown (Pilihan ke Bawah) */}
          <div className="relative w-full md:w-1/3">
            <select
              onChange={handleChange}
              className="w-full p-4 pl-6 pr-10 border-[4px] border-[#ffb6c1] rounded-[25px] bg-white text-[#ff8fa3] font-black shadow-md appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all hover:bg-pink-50"
            >
              <option value="">All Tags ✨</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            {/* Ikon Panah Custom untuk Dropdown */}
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-[#ff8fa3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- List Framework - Menggunakan filteredFrameworks --- */}
        <div className="space-y-6">
          {filteredFrameworks.length > 0 ? (
            filteredFrameworks.map((item) => (
              <div
                key={item.id}
                className="bg-[#ffe4e9] border-[5px] border-[#ffb6c1] rounded-[35px] p-6 shadow-lg flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Bagian Atas - Nama & Link */}
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h2 className="text-xl font-bold text-[#ff6b81]">
                      {item.name}
                    </h2>
                    <p className="text-[#a16a75] font-semibold text-[10px] uppercase tracking-widest mt-0.5">
                      {item.details.developer} — {item.details.releaseYear}
                    </p>
                  </div>

                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#ff6b81] text-[11px] font-bold px-4 py-2 rounded-2xl shadow-sm border border-[#ffb6c1] hover:bg-[#ffb6c1] hover:text-white transition-colors"
                  >
                    Visit Website 🔗
                  </a>
                </div>

                {/* Bagian Tengah - Deskripsi (Style Kotak Hobi) */}
                <div className="bg-white/70 border-2 border-dashed border-[#ffb6c1] rounded-[25px] p-5">
                  <p className="text-[#8e5d67] text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bagian Bawah - Tags (Style Let's Connect) */}
                <div className="bg-[#ffb6c1] rounded-[20px] p-3 flex flex-wrap justify-center gap-2 shadow-inner">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/80 text-[#ff8fa3] text-[9px] font-bold px-3 py-1 rounded-full border border-white"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            /* Tampilan jika framework tidak ditemukan */
            <div className="text-center p-12 bg-white/60 rounded-[40px] border-[4px] border-dashed border-[#ffb6c1]">
              <p className="text-[#ff6b81] font-bold italic text-lg">
                Yah, frameworknya nggak ketemu... 🌸
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}