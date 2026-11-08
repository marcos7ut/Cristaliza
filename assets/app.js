/* Cristaliza: simulador "monte o seu site ao vivo" + rua das lojas.
   Sem bibliotecas. Para mudar números, lojas ou textos, edite só os blocos de dados abaixo. */
'use strict';

// ---------- contatos ----------
const ZAP = {
  marcos: { nome: 'Marcos', numero: '5511954810927' },
  fernando: { nome: 'Fernando', numero: '5511991739104' },
};
const linkZap = (quem, texto) => `https://wa.me/${ZAP[quem].numero}?text=${encodeURIComponent(texto)}`;

// ---------- rua das lojas: para incluir uma loja nova, acrescente um item aqui ----------
// estado: 'aberta' (tem link), 'obra' (em breve) ou 'vaga' (chamada para o cliente)
const LOJAS = [
  { nome: 'Saboaria Lavanda', ramo: 'Saboaria artesanal', estado: 'aberta', link: 'exemplos/saboaria/',
    foto: 'exemplos/saboaria/img/redondos.webp', toldo: ['#80509a', '#f4ecf8'], parede: '#efe4f5',
    detalhe: 'Catálogo, quiz de aroma, monte seu kit e sacola que vira pedido no WhatsApp.' },
  { nome: 'Barbearia', ramo: 'Agenda online', estado: 'obra', toldo: ['#1d1d1f', '#c8a96a'], parede: '#e8e1d4',
    detalhe: 'Horários livres na tela e confirmação pelo WhatsApp.' },
  { nome: 'Confeitaria', ramo: 'Cardápio e encomendas', estado: 'obra', toldo: ['#d9466f', '#fff1f4'], parede: '#fbe3e9',
    detalhe: 'Cardápio do dia e encomenda de bolo com data marcada.' },
  { nome: 'Sua loja', ramo: 'Esta vaga está livre', estado: 'vaga', toldo: ['#14121a', '#f3efe6'], parede: '#f3efe6',
    detalhe: 'Monte o rascunho lá em cima e a sua fachada entra aqui.' },
];

// ---------- simulador ----------
const RAMOS = {
  loja:     { rotulo: 'Loja / moda', chamada: 'Peças novas toda semana', sub: 'Escolha, monte a sacola e finalize pelo WhatsApp.', itens: [['Vestido Lia', 'R$ 129'], ['Bolsa Duna', 'R$ 89'], ['Sandália Ária', 'R$ 99']], formas: 'arco' },
  beleza:   { rotulo: 'Beleza / estética', chamada: 'Seu horário em três toques', sub: 'Veja os serviços, escolha o horário e confirme.', itens: [['Corte', 'R$ 60'], ['Escova', 'R$ 45'], ['Unhas', 'R$ 35']], formas: 'gota' },
  comida:   { rotulo: 'Comida / doces', chamada: 'Feito hoje, do jeito que você gosta', sub: 'Cardápio do dia e encomendas com data marcada.', itens: [['Bolo de pote', 'R$ 14'], ['Brigadeiro', 'R$ 4'], ['Torta de limão', 'R$ 18']], formas: 'circulo' },
  servicos: { rotulo: 'Serviços', chamada: 'Orçamento sem enrolação', sub: 'Conte o que precisa e receba um retorno rápido.', itens: [['Instalação', 'sob consulta'], ['Manutenção', 'sob consulta'], ['Visita técnica', 'R$ 80']], formas: 'quadrado' },
  saude:    { rotulo: 'Saúde / bem-estar', chamada: 'Cuidado com hora marcada', sub: 'Atendimento humano, agenda organizada.', itens: [['Consulta', 'R$ 180'], ['Retorno', 'R$ 90'], ['Avaliação', 'R$ 120']], formas: 'gota' },
  artesanato: { rotulo: 'Artesanato', chamada: 'Feito à mão, do seu jeito', sub: 'Escolha cor, aroma e embalagem para presente.', itens: [['Sabonete', 'R$ 12'], ['Vela', 'R$ 35'], ['Kit presente', 'R$ 79']], formas: 'arco' },
};
const ESTILOS = {
  delicado: { rotulo: 'Delicado', fundo: '#fbf3f6', tinta: '#4a2b3a', cor: '#c2577f', suave: '#f3dbe5', fonte: "'Instrument Serif', Georgia, serif", italico: true, caixa: 'none', raio: '22px' },
  ousado:   { rotulo: 'Ousado', fundo: '#111014', tinta: '#f5f3ee', cor: '#d6ff3d', suave: '#26242c', fonte: "'Bricolage Grotesque', system-ui, sans-serif", italico: false, caixa: 'uppercase', raio: '4px' },
  classico: { rotulo: 'Clássico', fundo: '#f6f1e7', tinta: '#1b2540', cor: '#1b2540', suave: '#e6dcc8', fonte: "Georgia, 'Times New Roman', serif", italico: false, caixa: 'none', raio: '2px' },
  natural:  { rotulo: 'Natural', fundo: '#f1efe6', tinta: '#2f3a2a', cor: '#5e7d4f', suave: '#dfe3d2', fonte: "'Bricolage Grotesque', system-ui, sans-serif", italico: false, caixa: 'none', raio: '999px' },
};
const OBJETIVOS = {
  vender:    { rotulo: 'Vender pelo WhatsApp', botao: 'Pedir pelo WhatsApp', plano: 'Site com sacola de pedidos', preco: 'a partir de R$ 2.400', modo: 'produtos' },
  agendar:   { rotulo: 'Agendar horários', botao: 'Agendar horário', plano: 'Site + automação de agenda no WhatsApp', preco: 'a partir de R$ 2.400 + R$ 1.800', modo: 'agenda' },
  mostrar:   { rotulo: 'Mostrar meu trabalho', botao: 'Ver trabalhos', plano: 'Landing page de portfólio', preco: 'a partir de R$ 1.200', modo: 'galeria' },
  contatos:  { rotulo: 'Juntar contatos', botao: 'Quero novidades', plano: 'Landing page de captação', preco: 'a partir de R$ 1.200', modo: 'lista' },
};
const GRUPOS = { ramo: RAMOS, estilo: ESTILOS, objetivo: OBJETIVOS };

const estado = { nome: '', ramo: 'artesanato', estilo: 'delicado', objetivo: 'vender' };
const $ = (s, r = document) => r.querySelector(s);
const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// lê rascunho do link (#n=...&r=...&e=...&o=...) ou do aparelho
function carregar() {
  let dados = {};
  try { dados = JSON.parse(localStorage.getItem('cristaliza-rascunho') || '{}'); } catch { }
  const h = new URLSearchParams(location.hash.slice(1));
  if (h.has('r')) dados = { nome: h.get('n') || '', ramo: h.get('r'), estilo: h.get('e'), objetivo: h.get('o') };
  if (typeof dados.nome === 'string') estado.nome = dados.nome.slice(0, 32);
  for (const g of ['ramo', 'estilo', 'objetivo']) if (GRUPOS[g][dados[g]]) estado[g] = dados[g];
}
function guardar() {
  try { localStorage.setItem('cristaliza-rascunho', JSON.stringify(estado)); } catch { }
}
function linkRascunho() {
  const p = new URLSearchParams({ n: estado.nome, r: estado.ramo, e: estado.estilo, o: estado.objetivo });
  return location.href.split('#')[0] + '#' + p.toString();
}

function montarFichas() {
  document.querySelectorAll('.fichas').forEach(box => {
    const g = box.dataset.grupo;
    box.innerHTML = Object.entries(GRUPOS[g]).map(([id, v]) =>
      `<button type="button" class="ficha" data-g="${g}" data-v="${id}" aria-pressed="${estado[g] === id}">${esc(v.rotulo)}</button>`).join('');
  });
  document.getElementById('config').addEventListener('click', e => {
    const b = e.target.closest('.ficha'); if (!b) return;
    estado[b.dataset.g] = b.dataset.v;
    b.parentElement.querySelectorAll('.ficha').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    atualizar(true);
  });
  const nome = $('#c-nome');
  nome.value = estado.nome;
  nome.addEventListener('input', () => { estado.nome = nome.value; atualizar(false); });
  $('#config').addEventListener('submit', e => e.preventDefault());
}

function forma(tipo, cor) {
  const f = {
    arco: `<path d="M8 56V30a24 24 0 0 1 48 0v26z" fill="${cor}"/>`,
    gota: `<path d="M32 6c14 18 22 28 22 38a22 22 0 0 1-44 0c0-10 8-20 22-38z" fill="${cor}"/>`,
    circulo: `<circle cx="32" cy="34" r="22" fill="${cor}"/>`,
    quadrado: `<rect x="12" y="12" width="40" height="40" rx="6" fill="${cor}" transform="rotate(8 32 32)"/>`,
  }[tipo];
  return `<svg viewBox="0 0 64 64" aria-hidden="true">${f}</svg>`;
}

function previa() {
  const r = RAMOS[estado.ramo], e = ESTILOS[estado.estilo], o = OBJETIVOS[estado.objetivo];
  const nome = estado.nome.trim() || 'Seu negócio';
  const tela = $('#previa');
  for (const [k, v] of Object.entries({ '--p-fundo': e.fundo, '--p-tinta': e.tinta, '--p-cor': e.cor, '--p-suave': e.suave, '--p-fonte': e.fonte, '--p-raio': e.raio, '--p-caixa': e.caixa }))
    tela.style.setProperty(k, v);
  tela.dataset.estilo = estado.estilo;
  const corBotaoTexto = estado.estilo === 'ousado' ? '#111014' : '#fff';
  let bloco = '';
  if (o.modo === 'produtos') bloco = `<div class="p-grade">${r.itens.map(([n, p], i) => `<div class="p-item">${forma(r.formas, i % 2 ? 'var(--p-cor)' : 'var(--p-suave)')}<b>${esc(n)}</b><small>${esc(p)}</small><span class="p-mais">+</span></div>`).join('')}</div><div class="p-sacola">Sacola · 2 itens <span>Enviar pedido</span></div>`;
  if (o.modo === 'agenda') bloco = `<div class="p-agenda"><p>${esc(r.itens[0][0])} · escolha um horário</p><div>${['09:00', '10:30', '14:00', '15:30', '17:00', '18:30'].map((h, i) => `<span class="${i === 2 ? 'sel' : ''}${i === 4 ? ' x' : ''}">${h}</span>`).join('')}</div></div>`;
  if (o.modo === 'galeria') bloco = `<div class="p-galeria">${[0, 1, 2, 3].map(i => `<div>${forma(['arco', 'gota', 'circulo', 'quadrado'][i], i % 2 ? 'var(--p-cor)' : 'var(--p-suave)')}</div>`).join('')}</div>`;
  if (o.modo === 'lista') bloco = `<div class="p-lista"><p>Novidades e promoções antes de todo mundo.</p><span class="p-campo">Seu WhatsApp</span></div>`;
  tela.innerHTML = `
    <div class="p-barra"><span class="p-logo">${esc(nome)}</span><span class="p-menu" aria-hidden="true"><i></i><i></i></span></div>
    <div class="p-hero">
      <p class="p-selo">${esc(r.rotulo)}</p>
      <h3>${esc(r.chamada)}</h3>
      <p>${esc(r.sub)}</p>
      <span class="p-botao" style="color:${corBotaoTexto}">${esc(o.botao)}</span>
    </div>
    ${bloco}
    <div class="p-prova"><span aria-hidden="true">★★★★★</span><p>“Atendimento rápido e tudo muito caprichado.”</p><small>Cliente de ${esc(nome)}</small></div>
    <div class="p-zap"><span aria-hidden="true"></span>Fale com a gente no WhatsApp</div>
    <p class="p-rodape">${esc(nome)} · feito pela Cristaliza</p>`;
  $('#v-plano').textContent = o.plano;
  $('#v-preco').textContent = o.preco;
}

function mensagem(quem) {
  const r = RAMOS[estado.ramo], e = ESTILOS[estado.estilo], o = OBJETIVOS[estado.objetivo];
  return [
    `Olá, ${ZAP[quem].nome}! Montei um rascunho no site da Cristaliza:`,
    `• Negócio: ${estado.nome.trim() || '(ainda sem nome)'}`,
    `• Ramo: ${r.rotulo}`,
    `• Estilo: ${e.rotulo}`,
    `• O site precisa: ${o.rotulo}`,
    `• Sugestão: ${o.plano} (${o.preco})`,
    '',
    `Rascunho: ${linkRascunho()}`,
    'Quero conversar sobre ele.',
  ].join('\n');
}

let pulso;
function atualizar(animar) {
  previa();
  guardar();
  document.querySelectorAll('[data-quero]').forEach(a => { a.href = linkZap(a.dataset.quero, mensagem(a.dataset.quero)); });
  if (animar && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const c = $('#celular'); c.classList.remove('pulsa'); void c.offsetWidth; c.classList.add('pulsa');
    clearTimeout(pulso); pulso = setTimeout(() => c.classList.remove('pulsa'), 600);
  }
}

function contatosFixos() {
  document.querySelectorAll('[data-zap]').forEach(a => {
    a.href = linkZap(a.dataset.zap, a.dataset.zapTexto || 'Olá! Vim pelo site da Cristaliza.');
  });
  document.querySelectorAll('a[href^="https://wa.me"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
  $('#copiar-link').addEventListener('click', async () => {
    const aviso = $('#aviso-copia');
    try { await navigator.clipboard.writeText(linkRascunho()); aviso.textContent = 'Link copiado. Quem abrir vê o mesmo rascunho.'; }
    catch { aviso.textContent = linkRascunho(); }
  });
}

// ---------- rua ----------
function montarRua() {
  const trilho = $('#rua-trilho');
  trilho.innerHTML = LOJAS.map((l, i) => {
    const listras = `repeating-linear-gradient(90deg, ${l.toldo[0]} 0 22px, ${l.toldo[1]} 22px 44px)`;
    const vitrine = l.foto ? `<img src="${esc(l.foto)}" alt="" loading="lazy" width="720" height="900">` : '';
    const porta = l.estado === 'aberta' ? 'Entrar' : l.estado === 'obra' ? 'Em obra' : 'Quero esta vaga';
    const tag = l.estado === 'aberta' ? 'a' : l.estado === 'vaga' ? 'a' : 'div';
    const href = l.estado === 'aberta' ? ` href="${esc(l.link)}"` : l.estado === 'vaga' ? ' href="#monte"' : '';
    return `<${tag} class="fachada fachada-${l.estado}"${href} style="--parede:${l.parede};--toldo:${listras};--n:${i}">
      <span class="fachada-placa">${esc(l.nome)}</span>
      <span class="fachada-toldo" aria-hidden="true"></span>
      <span class="fachada-vitrine">${vitrine}${l.estado === 'obra' ? '<span class="porta-aco" aria-hidden="true"></span>' : ''}</span>
      <span class="fachada-info"><b>${esc(l.ramo)}</b><small>${esc(l.detalhe)}</small></span>
      <span class="fachada-porta">${porta}</span>
    </${tag}>`;
  }).join('');
}

// no celular o rascunho fica abaixo das escolhas: um botão leva até ele
function atalhoPrevia() {
  const b = $('#ver-previa'), cel = $('#celular');
  if (!b || !('IntersectionObserver' in window)) return;
  let visivel = true, mexeu = false;
  new IntersectionObserver(([e]) => { visivel = e.isIntersecting; b.hidden = visivel || !mexeu; }, { threshold: .35 }).observe(cel);
  $('#config').addEventListener('click', e => { if (e.target.closest('.ficha')) { mexeu = true; b.hidden = visivel; } });
  $('#c-nome').addEventListener('input', () => { mexeu = true; b.hidden = visivel; });
  b.addEventListener('click', () => cel.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' }));
}

// pausa animações fora da tela (economiza bateria)
function pausarForaDaTela() {
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('fora', !e.isIntersecting)));
  document.querySelectorAll('.monte, .rua').forEach(el => io.observe(el));
}

carregar();
montarFichas();
montarRua();
contatosFixos();
atualizar(false);
pausarForaDaTela();
atalhoPrevia();
$('#ano').textContent = new Date().getFullYear();
