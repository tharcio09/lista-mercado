````markdown
# 🛒 Minha Lista de Mercado (PWA)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=for-the-badge&logo=pwa&logoColor=white)

<br/>

[![Deploy com Vercel](https://img.shields.io/badge/Acessar_Demo_Online-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://SEU-LINK-AQUI.vercel.app)

> Um aplicativo de gestão de compras inteligente, focado em **UX Mobile-First**, organização automática e agilidade no supermercado.

---

## 📱 Sobre o Projeto

Este projeto nasceu da necessidade de otimizar a ida ao supermercado. Diferente de blocos de notas comuns, este app oferece uma **Lista Mestra com +90 itens essenciais**, categorização automática por "corredores" (Hortifruti, Limpeza, etc.) e funciona offline.

O foco principal do desenvolvimento foi a **Experiência do Usuário (UX)**:
1.  **Mobile First:** Botões grandes e áreas de toque otimizadas para uso com uma mão.
2.  **Fluxo de "Exclusão":** Em vez de digitar tudo do zero, o usuário carrega uma lista completa e apenas remove o que não precisa.
3.  **Feedback Visual:** Cores vibrantes para diferenciar categorias e feedback imediato ao marcar itens.

---

## ✨ Funcionalidades Principais

-   **🔍 Busca Híbrida & Inteligente:** Um único campo serve para filtrar a lista existente ou adicionar novos itens automaticamente na categoria correta.
-   **📦 Lista Mestra (Template):** Preenchimento automático com +90 itens essenciais de uma casa brasileira com um único clique.
-   **📂 Categorização Automática:** Os itens são organizados visualmente por setores (Hortifruti 🥬, Açougue 🥩, Limpeza 🧹), evitando idas e vindas no mercado.
-   **💬 Integração com WhatsApp:** Compartilhe a lista de pendências com familiares através de Deep Linking, gerando uma mensagem formatada automaticamente.
-   **📱 PWA (Progressive Web App):** O projeto é instalável no Android e iOS, rodando em tela cheia e com ícone nativo.
-   **💾 Persistência de Dados:** Uso de `LocalStorage` para garantir que a lista não se perca se fechar o navegador.

---

## 🛠️ Tecnologias Utilizadas

* **React (Vite):** Para uma interface reativa e performática.
* **Tailwind CSS:** Para estilização utilitária, responsiva e moderna.
* **Lucide React:** Biblioteca de ícones leves e consistentes.
* **Vite PWA Plugin:** Para transformar a aplicação web em um aplicativo instalável.
* **Git & GitHub:** Versionamento com histórico semântico de commits.

---

## 📸 Visão Geral do Projeto

<div align="center">
  <a href="./public/screenshot.png" target="_blank">
    <img src="./public/screenshot.png" alt="Visão geral da aplicação" width="100%">
  </a>
  <br/>
  <i>(Clique na imagem para ampliar. Tela completa com Lista Mestra, Categorias e Compartilhamento via WhatsApp)</i>
</div>

---

## 🚀 Como Rodar Localmente

Pré-requisitos: Node.js instalado.

```bash
# 1. Clone o repositório
git clone [https://github.com/tharcio09/lista-mercado.git](https://github.com/tharcio09/lista-mercado.git)

# 2. Entre na pasta
cd lista-mercado

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
````

-----

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção:

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Header.jsx    # Cabeçalho e navegação de abas
│   ├── Controls.jsx  # Barra de busca, categorias e inputs
│   └── ItemRow.jsx   # Lógica de renderização de cada item
├── App.jsx           # Gerenciamento de Estado Global e Lógica
└── main.jsx          # Ponto de entrada
```

-----

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes de Engenharia de Software:

  * **Refatoração e Componentização:** Quebra de interfaces complexas em componentes menores.
  * **Estado e Efeitos (Hooks):** Uso avançado de `useState` e `useEffect` para persistência local.
  * **Deep Linking:** Integração com APIs de terceiros (WhatsApp URL Scheme).
  * **Web App Manifest:** Configuração de ícones e comportamento para PWA.

-----

## 👨‍💻 Autor

Desenvolvido por **Tharcio Augusto Santos**

  * [LinkedIn](https://www.linkedin.com/in/tharcio-santos-dev/)
  * [Portfólio](https://tharcio-portfolio.vercel.app/)
