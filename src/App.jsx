import { useState, useEffect } from 'react'
import { PackagePlus, ShoppingCart, Share2, Search } from 'lucide-react'
import Header from './components/Header'
import Controls from './components/Controls'
import ItemRow from './components/ItemRow'


const CATEGORIAS = {
  todos: { label: 'Todos', emoji: '📋', color: 'bg-gray-800 text-white border-gray-800' },
  hortifruti: { label: 'Hortifruti', emoji: '🥬', color: 'bg-green-100 text-green-800 border-green-200' },
  carnes: { label: 'Açougue', emoji: '🥩', color: 'bg-red-100 text-red-800 border-red-200' },
  mercearia: { label: 'Mercearia', emoji: '🍚', color: 'bg-orange-100 text-orange-800 border-orange-200' },
  higiene: { label: 'Higiene', emoji: '🧴', color: 'bg-purple-100 text-purple-800 border-purple-200' },
  limpeza: { label: 'Limpeza', emoji: '🧹', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  padaria: { label: 'Padaria', emoji: '🍞', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  bebidas: { label: 'Bebidas', emoji: '🥤', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  frios: { label: 'Frios', emoji: '🧀', color: 'bg-pink-100 text-pink-800 border-pink-200' },
}



const LISTA_MESTRA = [
  // --- HORTIFRUTI (Verde) ---
  { nome: 'Batata', qtd: 1, cat: 'hortifruti' },
  { nome: 'Cebola', qtd: 1, cat: 'hortifruti' },
  { nome: 'Tomate', qtd: 1, cat: 'hortifruti' },
  { nome: 'Alho', qtd: 1, cat: 'hortifruti' },
  { nome: 'Cenoura', qtd: 1, cat: 'hortifruti' },
  { nome: 'Banana', qtd: 1, cat: 'hortifruti' },
  { nome: 'Maçã', qtd: 1, cat: 'hortifruti' },
  { nome: 'Limão', qtd: 1, cat: 'hortifruti' },
  { nome: 'Laranja', qtd: 1, cat: 'hortifruti' },
  { nome: 'Mamão', qtd: 1, cat: 'hortifruti' },
  { nome: 'Alface', qtd: 1, cat: 'hortifruti' },
  { nome: 'Cheiro Verde', qtd: 1, cat: 'hortifruti' },
  { nome: 'Pimentão', qtd: 1, cat: 'hortifruti' },
  { nome: 'Chuchu/Abobrinha', qtd: 1, cat: 'hortifruti' },
  { nome: 'Ovos (Dúzia)', qtd: 1, cat: 'hortifruti' },

  // --- AÇOUGUE (Vermelho) ---
  { nome: 'Carne Moída', qtd: 1, cat: 'carnes' },
  { nome: 'Filé de Frango', qtd: 1, cat: 'carnes' },
  { nome: 'Bife Bovino', qtd: 1, cat: 'carnes' },
  { nome: 'Carne de Panela', qtd: 1, cat: 'carnes' },
  { nome: 'Linguiça', qtd: 1, cat: 'carnes' },
  { nome: 'Bacon', qtd: 1, cat: 'carnes' },
  { nome: 'Hambúrguer', qtd: 1, cat: 'carnes' },
  { nome: 'Peixe', qtd: 1, cat: 'carnes' },

  // --- MERCEARIA (Laranja) ---
  { nome: 'Arroz (5kg)', qtd: 1, cat: 'mercearia' },
  { nome: 'Feijão', qtd: 1, cat: 'mercearia' },
  { nome: 'Açúcar', qtd: 1, cat: 'mercearia' },
  { nome: 'Sal', qtd: 1, cat: 'mercearia' },
  { nome: 'Óleo de Soja', qtd: 1, cat: 'mercearia' },
  { nome: 'Azeite', qtd: 1, cat: 'mercearia' },
  { nome: 'Café', qtd: 1, cat: 'mercearia' },
  { nome: 'Macarrão', qtd: 2, cat: 'mercearia' },
  { nome: 'Molho de Tomate', qtd: 3, cat: 'mercearia' },
  { nome: 'Farinha de Trigo', qtd: 1, cat: 'mercearia' },
  { nome: 'Farinha de Mandioca/Farofa', qtd: 1, cat: 'mercearia' },
  { nome: 'Maionese', qtd: 1, cat: 'mercearia' },
  { nome: 'Ketchup/Mostarda', qtd: 1, cat: 'mercearia' },
  { nome: 'Atum/Sardinha', qtd: 1, cat: 'mercearia' },
  { nome: 'Milho/Ervilha', qtd: 2, cat: 'mercearia' },
  { nome: 'Creme de Leite', qtd: 2, cat: 'mercearia' },
  { nome: 'Leite Condensado', qtd: 1, cat: 'mercearia' },
  { nome: 'Fermento', qtd: 1, cat: 'mercearia' },
  { nome: 'Bolacha/Biscoito', qtd: 2, cat: 'mercearia' },
  { nome: 'Pipoca', qtd: 1, cat: 'mercearia' },
  { nome: 'Achocolatado', qtd: 1, cat: 'mercearia' },
  { nome: 'Tempero Pronto/Pimenta', qtd: 1, cat: 'mercearia' },

  // --- FRIOS E LATICÍNIOS (Rosa) ---
  { nome: 'Queijo Mussarela', qtd: 1, cat: 'frios' },
  { nome: 'Presunto', qtd: 1, cat: 'frios' },
  { nome: 'Requeijão', qtd: 1, cat: 'frios' },
  { nome: 'Manteiga/Margarina', qtd: 1, cat: 'frios' },
  { nome: 'Iogurte', qtd: 1, cat: 'frios' },
  { nome: 'Leite Fermentado', qtd: 1, cat: 'frios' },

  // --- PADARIA (Amarelo) ---
  { nome: 'Pão de Forma', qtd: 1, cat: 'padaria' },
  { nome: 'Pão Francês', qtd: 1, cat: 'padaria' },
  { nome: 'Leite (Caixa)', qtd: 6, cat: 'padaria' },
  { nome: 'Torrada', qtd: 1, cat: 'padaria' },
  { nome: 'Bolo', qtd: 1, cat: 'padaria' },

  // --- HIGIENE (Roxo) ---
  { nome: 'Papel Higiênico', qtd: 1, cat: 'higiene' },
  { nome: 'Pasta de Dente', qtd: 2, cat: 'higiene' },
  { nome: 'Sabonete', qtd: 4, cat: 'higiene' },
  { nome: 'Shampoo', qtd: 1, cat: 'higiene' },
  { nome: 'Condicionador', qtd: 1, cat: 'higiene' },
  { nome: 'Desodorante', qtd: 1, cat: 'higiene' },
  { nome: 'Escova de Dente', qtd: 1, cat: 'higiene' },
  { nome: 'Fio Dental', qtd: 1, cat: 'higiene' },
  { nome: 'Cotonete', qtd: 1, cat: 'higiene' },
  { nome: 'Absorvente', qtd: 1, cat: 'higiene' },
  { nome: 'Barbeador', qtd: 1, cat: 'higiene' },

  // --- LIMPEZA (Azul) ---
  { nome: 'Detergente', qtd: 2, cat: 'limpeza' },
  { nome: 'Esponja de Louça', qtd: 1, cat: 'limpeza' },
  { nome: 'Sabão em Pó', qtd: 1, cat: 'limpeza' },
  { nome: 'Amaciante', qtd: 1, cat: 'limpeza' },
  { nome: 'Água Sanitária', qtd: 1, cat: 'limpeza' },
  { nome: 'Desinfetante', qtd: 1, cat: 'limpeza' },
  { nome: 'Lã de Aço (Bombril)', qtd: 1, cat: 'limpeza' },
  { nome: 'Saco de Lixo', qtd: 1, cat: 'limpeza' },
  { nome: 'Papel Toalha', qtd: 1, cat: 'limpeza' },
  { nome: 'Papel Alumínio/Filme', qtd: 1, cat: 'limpeza' },
  { nome: 'Álcool', qtd: 1, cat: 'limpeza' },
  { nome: 'Rodo/Vassoura', qtd: 1, cat: 'limpeza' },

  // --- BEBIDAS (Ciano) ---
  { nome: 'Água Mineral', qtd: 1, cat: 'bebidas' },
  { nome: 'Suco', qtd: 1, cat: 'bebidas' },
  { nome: 'Refrigerante', qtd: 1, cat: 'bebidas' },
  { nome: 'Cerveja', qtd: 1, cat: 'bebidas' },
]

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('minha-lista-mercado')
    return saved ? JSON.parse(saved) : []
  })
  
  const [termoBusca, setTermoBusca] = useState('')
  const [quantidadeInput, setQuantidadeInput] = useState(1)
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos')
  const [abaAtiva, setAbaAtiva] = useState('pendentes')

  useEffect(() => {
    localStorage.setItem('minha-lista-mercado', JSON.stringify(items))
  }, [items])

  // --- Ações ---
  const resetarLista = () => {
    if (window.confirm("Reiniciar lista do zero?")) {
      setItems([]); setAbaAtiva('pendentes'); setTermoBusca('');
    }
  }

  const carregarTemplate = () => {
    if (items.length > 0 && !window.confirm("Adicionar lista padrão?")) return
    const novos = LISTA_MESTRA.map((m, i) => ({ id: Date.now() + i, nome: m.nome, quantidade: m.qtd, categoria: m.cat, peguei: false }))
    setItems(prev => [...prev, ...novos])
  }

  const adicionarOuBuscar = (e) => {
    e.preventDefault()
    if (!termoBusca.trim()) return
    const cat = categoriaAtiva === 'todos' ? 'outros' : categoriaAtiva
    setItems([{ id: Date.now(), nome: termoBusca, quantidade: quantidadeInput, categoria: cat, peguei: false }, ...items])
    setTermoBusca(''); setQuantidadeInput(1)
  }

  const toggleItem = (id) => setItems(items.map(i => i.id === id ? { ...i, peguei: !i.peguei } : i))
  const deletarItem = (id, noCarrinho) => noCarrinho ? toggleItem(id) : setItems(items.filter(i => i.id !== id))
  const alterarQtd = (id, delta) => setItems(items.map(i => i.id === id ? { ...i, quantidade: Math.max(1, i.quantidade + delta) } : i))

  const enviarWhatsapp = () => {
    const faltam = items.filter(i => !i.peguei)
    if (!faltam.length) return
    const texto = `*🛒 LISTA DE MERCADO:*\n\n` + faltam.map(i => `◻️ ${i.quantidade}x ${i.nome}`).join('\n')
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank')
  }

  // --- Filtros ---
  const pendentes = items.filter(i => !i.peguei)
  const carrinho = items.filter(i => i.peguei)
  let visiveis = abaAtiva === 'pendentes' ? pendentes : carrinho
  if (categoriaAtiva !== 'todos') visiveis = visiveis.filter(i => (i.categoria || 'outros') === categoriaAtiva)
  if (termoBusca.trim()) visiveis = visiveis.filter(i => i.nome.toLowerCase().includes(termoBusca.toLowerCase()))

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100 sm:p-4 font-sans relative">
      <div className="w-full max-w-lg bg-white sm:rounded-xl shadow-xl overflow-hidden h-screen sm:h-[90vh] flex flex-col relative">
        
        <Header 
          itemsCount={items.length} 
          pendentesCount={pendentes.length} 
          carrinhoCount={carrinho.length} 
          abaAtiva={abaAtiva} 
          setAbaAtiva={setAbaAtiva} 
          onReset={resetarLista}
          onPreencher={carregarTemplate}
        />

        {abaAtiva === 'pendentes' && (
          <Controls 
            categorias={CATEGORIAS} 
            categoriaAtiva={categoriaAtiva} 
            setCategoriaAtiva={setCategoriaAtiva}
            termoBusca={termoBusca} 
            setTermoBusca={setTermoBusca}
            qtd={quantidadeInput} 
            setQtd={setQuantidadeInput}
            onAdicionar={adicionarOuBuscar}
          />
        )}

        <div className="flex-1 overflow-y-auto p-3 bg-gray-50 pb-24">
          {visiveis.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60 text-center px-6">
               {termoBusca ? (
                 <> <Search size={40} className="mb-2 opacity-50"/> <p>Nada encontrado.</p> </>
               ) : abaAtiva === 'pendentes' && categoriaAtiva === 'todos' ? (
                 <>
                   <PackagePlus size={48} className="mb-4 text-blue-300" />
                   <p className="mb-4">Lista vazia.</p>
                   <button onClick={carregarTemplate} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">Carregar Sugestão</button>
                 </>
               ) : <p>Vazio.</p>}
            </div>
          ) : (
            visiveis.map(item => (
              <ItemRow 
                key={item.id} 
                item={item} 
                categorias={CATEGORIAS} 
                onToggle={toggleItem} 
                onQtdChange={alterarQtd} 
                onDelete={deletarItem} 
                showCategoryLabel={categoriaAtiva === 'todos'} 
              />
            ))
          )}
        </div>

        {abaAtiva === 'pendentes' && pendentes.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 z-30 shadow-lg">
            <button onClick={enviarWhatsapp} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
              <Share2 size={20} /> Compartilhar no Zap
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App