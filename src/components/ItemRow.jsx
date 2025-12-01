import { Check, Plus, Minus, Trash2, Undo2 } from 'lucide-react'

export default function ItemRow({ item, categorias, onToggle, onQtdChange, onDelete, showCategoryLabel }) {
  const catInfo = categorias[item.categoria] || categorias['todos']

  return (
    <div className={`flex items-center justify-between p-3 mb-3 rounded-xl border shadow-sm bg-white transition-all ${item.peguei ? 'opacity-60 bg-gray-50' : 'border-gray-100'}`}>
      <div onClick={() => onToggle(item.id)} className="flex items-center gap-3 flex-1 cursor-pointer">
        <div className={`w-7 h-7 rounded-md border-2 flex items-center justify-center transition-colors flex-shrink-0 ${item.peguei ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
          {item.peguei && <Check size={16} className="text-white stroke-[3]" />}
        </div>
        
        <div className="overflow-hidden">
          <span className={`block text-[15px] font-medium truncate ${item.peguei ? 'line-through text-gray-500 decoration-2' : 'text-gray-800'}`}>
            {item.nome}
          </span>
          {showCategoryLabel && (
            <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded flex items-center gap-1 w-fit mt-1 ${catInfo.color}`}>
              {catInfo.label}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 pl-2">
        {!item.peguei && (
          <div className="flex items-center bg-gray-100 rounded-lg px-1 h-8 border border-gray-200">
            <button onClick={() => onQtdChange(item.id, -1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-red-500 rounded-l-lg"><Minus size={14} /></button>
            <span className="text-xs font-bold w-6 text-center">{item.quantidade}</span>
            <button onClick={() => onQtdChange(item.id, 1)} className="w-8 h-full flex items-center justify-center text-blue-600 hover:bg-white rounded-r-lg"><Plus size={14} /></button>
          </div>
        )}
        <button onClick={() => onDelete(item.id, item.peguei)} className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            {item.peguei ? <Undo2 size={18} /> : <Trash2 size={18} />}
        </button>
      </div>
    </div>
  )
}