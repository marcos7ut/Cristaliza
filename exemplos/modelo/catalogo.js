/* ===== EDITE SÓ ESTE ARQUIVO para criar uma loja nova =====
   - whatsapp: só números, com 55 + DDD (ex.: 5511999998888)
   - cores: qualquer cor CSS
   - produtos: foto em img/ (use ferramentas/otimizar-imagens.py), preço em número ou null para "sob consulta" */
window.LOJA = {
  nome: 'Nome da Loja',
  frase: 'Uma frase curta que diz o que você vende e para quem.',
  whatsapp: '5511954810927',
  instagram: '',            // ex.: 'minhaloja' (sem @). Vazio = não mostra
  cores: { fundo: '#f7f3ee', tinta: '#1f1b24', destaque: '#8a4fff', suave: '#ece4f7' },
  demonstracao: true,       // mostra a faixa "site de demonstração"; ponha false na loja do cliente
  categorias: ['Todos', 'Categoria A', 'Categoria B'],
  produtos: [
    { id: 'produto-1', nome: 'Produto 1', categoria: 'Categoria A', preco: 29.9, foto: 'img/exemplo.svg', descricao: 'Descrição curta do produto.' },
    { id: 'produto-2', nome: 'Produto 2', categoria: 'Categoria A', preco: 49.9, foto: 'img/exemplo.svg', descricao: 'Outra descrição curta.' },
    { id: 'produto-3', nome: 'Produto 3', categoria: 'Categoria B', preco: null, foto: 'img/exemplo.svg', descricao: 'Preço sob consulta.' },
  ],
};
