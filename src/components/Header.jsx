import { ShoppingCart, RotateCcw, Trash2 } from 'lucide-react'

export default function Header({ itemsCount, pendentesCount, carrinhoCount, abaAtiva, setAbaAtiva, onReset, onPreencher }) {
  return (
    <header className="bg-blue-600 px-4 py-3 text-white flex-none shadow-md z-20">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <ShoppingCart size={20} className="text-blue-200" />
          Minha Lista
        </h1>
        
        <div className="flex gap-2">
          {itemsCount < 5 && (
            <button onClick={onPreencher} className="p-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-white text-xs font-bold uppercase">
              Preencher
            </button>
          )}
          <button 
            onClick={onReset} 
            className="flex items-center gap-1 px-3 py-1.5 bg-blue-700 hover:bg-red-500 rounded-lg transition-colors text-xs font-bold uppercase tracking-wide shadow-sm"
          >
            <RotateCcw size={14} />
            Reiniciar
          </button>
        </div>
      </div>
      
      <div className="flex p-1 bg-blue-800/40 rounded-lg">
        <button onClick={() => setAbaAtiva('pendentes')} className={`flex-1 py-1.5 text-xs font-bold uppercase rounded transition-all ${abaAtiva === 'pendentes' ? 'bg-white text-blue-600 shadow' : 'text-blue-200'}`}>
          Faltam ({pendentesCount})
        </button>
        <button onClick={() => setAbaAtiva('carrinho')} className={`flex-1 py-1.5 text-xs font-bold uppercase rounded transition-all ${abaAtiva === 'carrinho' ? 'bg-white text-green-600 shadow' : 'text-blue-200'}`}>
          Carrinho ({carrinhoCount})
        </button>
      </div>
    </header>
  )
}