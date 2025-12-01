import { Search, Plus, X } from 'lucide-react'

export default function Controls({ 
  categorias, categoriaAtiva, setCategoriaAtiva, 
  termoBusca, setTermoBusca, 
  qtd, setQtd, 
  onAdicionar 
}) {
  return (
    <div className="bg-white border-b border-gray-100 flex-none z-10 flex flex-col">
      <div className="flex overflow-x-auto p-2 gap-2 no-scrollbar hide-scroll border-b border-gray-50">
        {Object.entries(categorias).map(([key, info]) => (
          <button
            key={key}
            onClick={() => setCategoriaAtiva(key)}
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-full whitespace-nowrap transition-all border
              ${categoriaAtiva === key 
                ? `${info.color} shadow-sm ring-1 ring-offset-1 ring-gray-200 font-bold` 
                : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}
            `}
          >
            <span className="text-xs">{info.emoji}</span>
            <span className="text-xs">{info.label}</span>
          </button>
        ))}
      </div>

      <form onSubmit={onAdicionar} className="p-3 flex gap-2">
        <input 
          type="number" min="1" value={qtd}
          onChange={(e) => setQtd(Number(e.target.value))}
          className="w-12 p-2 bg-gray-50 border border-gray-200 rounded-lg text-center font-bold"
        />
        
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            value={termoBusca} 
            onChange={(e) => setTermoBusca(e.target.value)}
            placeholder="Buscar ou Adicionar..."
            className="w-full pl-10 pr-8 p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {termoBusca && (
            <button type="button" onClick={() => setTermoBusca('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          )}
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg shadow-md active:scale-95 transition-all">
          <Plus />
        </button>
      </form>
    </div>
  )
}