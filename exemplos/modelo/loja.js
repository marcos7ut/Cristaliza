/* Modelo de loja da Cristaliza: catálogo + sacola + pedido pronto no WhatsApp. Não precisa mexer aqui. */
'use strict';
(function () {
  const L = window.LOJA, $ = id => document.getElementById(id);
  const chave = 'sacola-' + L.nome.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const real = v => v == null ? 'sob consulta' : v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let filtro = L.categorias[0], sacola = {};
  try { const s = JSON.parse(localStorage.getItem(chave) || '{}'); for (const k in s) if (L.produtos.some(p => p.id === k) && Number.isInteger(s[k]) && s[k] > 0 && s[k] < 100) sacola[k] = s[k]; } catch { }

  const raiz = document.documentElement.style;
  for (const [k, v] of Object.entries(L.cores)) raiz.setProperty('--' + k, v);
  document.title = L.nome;
  $('marca').textContent = L.nome; $('titulo').textContent = L.nome; $('frase').textContent = L.frase;
  $('rodape-nome').textContent = '© ' + new Date().getFullYear() + ' ' + L.nome;
  $('rodape-zap').href = 'https://wa.me/' + L.whatsapp;
  if (L.instagram) $('rodape-insta').innerHTML = ` · <a href="https://www.instagram.com/${encodeURIComponent(L.instagram)}/" target="_blank" rel="noopener">Instagram</a>`;
  $('faixa-demo').hidden = !L.demonstracao;

  $('filtros').innerHTML = L.categorias.map(c => `<button type="button" aria-pressed="${c === filtro}">${esc(c)}</button>`).join('');
  $('filtros').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    filtro = b.textContent;
    [...$('filtros').children].forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    grade();
  });

  function grade() {
    const lista = L.produtos.filter(p => filtro === L.categorias[0] || p.categoria === filtro);
    $('grade').innerHTML = lista.map(p => `<article class="card">
      <img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" width="720" height="900">
      <div><h3>${esc(p.nome)}</h3><p>${esc(p.descricao)}</p><span class="preco">${real(p.preco)}</span></div>
      <button type="button" data-add="${esc(p.id)}">Adicionar</button></article>`).join('');
  }
  $('grade').addEventListener('click', e => {
    const b = e.target.closest('[data-add]'); if (!b) return;
    sacola[b.dataset.add] = Math.min(99, (sacola[b.dataset.add] || 0) + 1);
    salvar(); b.textContent = 'Adicionado ✓'; setTimeout(() => { b.textContent = 'Adicionar'; }, 1200);
  });

  function salvar() {
    try { localStorage.setItem(chave, JSON.stringify(sacola)); } catch { }
    $('conta').textContent = Object.values(sacola).reduce((a, b) => a + b, 0);
    desenharSacola();
  }
  function mensagem() {
    const nome = $('cliente').value.trim();
    const linhas = Object.entries(sacola).map(([id, q]) => { const p = L.produtos.find(x => x.id === id); return `• ${q}x ${p.nome} (${real(p.preco)})`; });
    return [`Olá, ${L.nome}! Quero fazer este pedido:`, nome ? 'Nome: ' + nome : '', '', ...linhas, '', 'Total aproximado: ' + total()].filter((l, i) => l || i > 1).join('\n');
  }
  function total() {
    let t = 0, consulta = false;
    for (const [id, q] of Object.entries(sacola)) { const p = L.produtos.find(x => x.id === id); if (p.preco == null) consulta = true; else t += p.preco * q; }
    return real(t) + (consulta ? ' + itens sob consulta' : '');
  }
  function desenharSacola() {
    const ids = Object.keys(sacola);
    $('itens').innerHTML = ids.length ? ids.map(id => { const p = L.produtos.find(x => x.id === id); return `<li><span>${esc(p.nome)}</span><div><button type="button" data-menos="${esc(id)}" aria-label="Menos">−</button><b>${sacola[id]}</b><button type="button" data-mais="${esc(id)}" aria-label="Mais">+</button></div></li>`; }).join('') : '<li>A sacola está vazia.</li>';
    $('total').textContent = ids.length ? 'Total: ' + total() : '';
    $('enviar').setAttribute('aria-disabled', String(!ids.length));
    $('enviar').href = 'https://wa.me/' + L.whatsapp + '?text=' + encodeURIComponent(mensagem());
  }
  $('itens').addEventListener('click', e => {
    const m = e.target.closest('[data-mais]'), n = e.target.closest('[data-menos]');
    if (m) sacola[m.dataset.mais] = Math.min(99, sacola[m.dataset.mais] + 1);
    if (n && --sacola[n.dataset.menos] < 1) delete sacola[n.dataset.menos];
    if (m || n) salvar();
  });
  $('cliente').addEventListener('input', desenharSacola);
  $('abrir-sacola').addEventListener('click', () => $('sacola').showModal());
  $('fechar').addEventListener('click', () => $('sacola').close());
  grade(); salvar();
})();
