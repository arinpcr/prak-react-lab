import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
  <div className="min-h-screen relative p-8 flex flex-col items-center font-sans overflow-x-hidden">
    {/* Background Pattern - Papan Catur Biru Muda & Putih (Sesuai Foto) */}
    <div className="absolute inset-0 z-0" 
         style={{ 
           backgroundColor: '#ffffff',
           backgroundImage: `linear-gradient(45deg, #d1e9f6 25%, transparent 25%, transparent 75%, #d1e9f6 75%, #d1e9f6), 
                             linear-gradient(45deg, #d1e9f6 25%, transparent 25%, transparent 75%, #d1e9f6 75%, #d1e9f6)`,
           backgroundSize: '80px 80px',
           backgroundPosition: '0 0, 40px 40px' 
         }}>
    </div>

    <div className="relative z-10 w-full max-w-2xl space-y-6">
      {frameworkData.map((item) => (
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
              className="bg-white text-[#ff6b81] text-xs font-bold px-4 py-2 rounded-2xl shadow-sm border border-[#ffb6c1] hover:bg-[#ffb6c1] hover:text-white transition-colors"
            >
              Visit Website 🔗
            </a>
          </div>

          {/* Bagian Tengah - Deskripsi (Gaya Kotak Hobi) */}
          <div className="bg-white/70 border-2 border-dashed border-[#ffb6c1] rounded-[25px] p-5">
            <p className="text-[#8e5d67] text-sm leading-relaxed font-medium">
              {item.description}
            </p>
          </div>

          {/* Bagian Bawah - Tags (Gaya Let's Connect) */}
          <div className="bg-[#ffb6c1] rounded-[20px] p-3 flex flex-wrap justify-center gap-2 shadow-inner">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/80 text-[#ff8fa3] text-[10px] font-bold px-3 py-1 rounded-full border border-white"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}