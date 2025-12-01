import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

export default function App() {
  const [items, setItems] = useState([])
  const [novoItem, setNovoItem] = useState('')

  const adicionar = (e) => {
    e.preventDefault()
    if (!novoItem) return
    setItems([...items, { id: Date.now(), nome: novoItem, peguei: false }])
    setNovoItem('')
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lista de Compras (MVP)</h1>
      <form onSubmit={adicionar} className="flex gap-2 mb-4">
        <input 
          value={novoItem} 
          onChange={e => setNovoItem(e.target.value)} 
          className="border p-2 flex-1 rounded" 
          placeholder="Adicionar item..." 
        />
        <button className="bg-blue-600 text-white p-2 rounded"><Plus /></button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center p-2 border-b">
            <span>{item.nome}</span>
            <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="text-red-500">
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}