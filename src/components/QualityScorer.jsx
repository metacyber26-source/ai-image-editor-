export default function QualityScorer({ score = 99 }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
      <div>
        <h3 className="text-sm font-semibold text-slate-300">Skor Kualitas Gambar</h3>
        <p className="text-xs text-slate-500">Evaluasi otomatis ketajaman & warna</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-black text-emerald-400">{score}<span className="text-xs text-slate-500">/100</span></div>
        <div className="w-12 bg-slate-800 rounded-full h-2 overflow-hidden">
          <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${score}%` }}></div>
        </div>
      </div>
    </div>
  );
}
