export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-brand-600 p-2 rounded-xl text-white font-bold shadow-lg shadow-brand-500/30">
            ✨ AI
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Editor Gambar AI Pro</h1>
            <p className="text-xs text-slate-400">Pusat Kreativitas & Peningkatan Kualitas Visual Berbasis AI</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ● Sistem AI Online
          </span>
        </div>
      </div>
    </header>
  );
}
