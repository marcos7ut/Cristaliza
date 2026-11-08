const products=[
{"id": "arabescos", "name": "Sabonetes Arabescos", "category": "sabonetes", "kind": "Sabonetes decorados", "description": "Detalhes em relevo e cores marcantes para o seu ritual.", "image": "", "tag": "TEXTURA & COR"},{"id": "redondos", "name": "Sabonetes Coloridos", "category": "sabonetes", "kind": "Sabonetes em barra", "description": "Uma seleção de formatos redondos e combinações de cores.", "image": "", "tag": "ARTESANAL"},{"id": "difusores", "name": "Difusores & Aromas", "category": "aromas", "kind": "Aromas para ambientes", "description": "Escolha uma fragrância para os seus espaços favoritos.", "image": "", "tag": "PARA O AMBIENTE"},{"id": "composicao", "name": "Presentes de Cuidado", "category": "kits", "kind": "Composição para presente", "description": "Monte uma seleção especial e consulte as opções de embalagem.", "image": "", "tag": "PARA PRESENTEAR"},


{id:'coracao',name:'Sabonetes Coração',category:'kits',kind:'Sabonete decorado',description:'Um pequeno gesto de carinho para presentear.',image:'',tag:'PARA PRESENTEAR'},
{id:'colmeia',name:'Sabonetes Colmeia',category:'sabonetes',kind:'Sabonete decorado',description:'Formato de colmeia com detalhes delicados.',image:'',tag:'ARTESANAL'},
{id:'kit',name:'Kit de Carinho',category:'kits',kind:'Kit de produtos',description:'Seu presente, do seu jeito.',image:'',tag:'KIT & PRESENTE'},
{id:'citrico',name:'Sabonetes Decorados',category:'kits',kind:'Sabonetes para presente',description:'Detalhes florais e cítricos em embalagem de organza.',image:'',tag:'PARA PRESENTEAR'}
];
// Fichas do catálogo (gancho, descrição, destaques, benefícios, ingredientes, preço e peso).
// Cada ficha atualiza o produto com o mesmo id ou cria um novo. A ordem aqui é a ordem na vitrine.
const fichas=[{"id": "clareador", "name": "Sabonete Clareador", "category": "sabonetes", "kind": "Sabonete em barra", "tag": "DOLOMITA & ARGILA", "price": 10.0, "size": "80 g (aprox.)", "description": "Cuidado em forma de flor.", "details": "Com dolomita e argila, ajuda a controlar a oleosidade e deixa a pele com aspecto mais uniforme e renovado.", "highlights": ["Dolomita e argila", "Óleos essenciais", "Formato de flor"], "benefits": ["Ajuda a controlar a oleosidade", "Deixa a pele com aspecto mais uniforme", "Argila e dolomita para limpeza suave", "Sensação calmante na pele", "Formato de flor, lindo na saboneteira"], "ingredients": "Base glicerinada, óleos essenciais, dolomita, argila, essências e corante.", "image": "img/clareador.webp"}, {"id": "energizante", "name": "Sabonete Energizante", "category": "sabonetes", "kind": "Sabonete em barra", "tag": "ESPECIARIAS", "price": 10.0, "size": "80 g (aprox.)", "description": "Acorde com aroma de especiarias.", "details": "Canela, anis-estrelado, louro e cravo em um blend que esfolia de leve e dá disposição para começar o dia.", "highlights": ["Especiarias naturais", "Aroma acolhedor", "Esfoliação suave"], "aroma": "Canela, anis-estrelado, louro e cravo", "benefits": ["Aroma de especiarias que desperta", "Esfoliação suave", "Sensação de pele desperta", "Limpeza profunda", "Banho que dá disposição"], "ingredients": "Base glicerinada, óleos essenciais, canela, anis-estrelado, louro, cravo, essências e corante.", "image": "img/energizante.webp"},  {"id": "redondos", "name": "Sabonete Redondo", "category": "sabonetes", "kind": "Sabonete em barra", "tag": "VÁRIOS AROMAS", "price": 8.0, "size": "80 g (aprox.)", "description": "Pequeno, perfumado e irresistível.", "details": "Prático, colorido e perfeito para presentear. Limpa com suavidade e deixa um aroma delicado na pele. Algumas opções contêm sementes.", "highlights": ["Base glicerinada", "Vários aromas", "Bom para presentear"], "benefits": ["Tamanho prático para o dia a dia", "Limpeza delicada", "Aromas variados para escolher", "Ótima opção de presente", "Preço acessível"], "ingredients": "Base glicerinada, óleos essenciais, essências e corante. Em algumas opções, sementes.", "image": "img/redondos.webp"}, {"id": "fatia", "name": "Sabonete Fatia", "category": "sabonetes", "kind": "Sabonete em barra", "tag": "PEÇA ÚNICA", "price": 8.9, "size": "120 g (aprox.)", "description": "Cada barra é única.", "details": "Cortado à mão, com desenhos e cores que nunca se repetem. Óleos essenciais em base glicerinada deixam a pele macia e o banho perfumado até o fim.", "highlights": ["Óleos essenciais", "Rende muito", "Cortado à mão"], "benefits": ["Limpeza suave com base glicerinada", "Aroma que dura no banho", "Peça única, cada barra é diferente", "Rende por mais tempo", "Pele com sensação macia"], "ingredients": "Base glicerinada, óleos essenciais, essência e corante.", "image": "img/fatia.webp"}, {"id": "colmeia", "name": "Sabonete Colmeia", "category": "sabonetes", "kind": "Sabonete decorado", "tag": "ARTESANAL", "price": 9.9, "description": "Tão bonito que dá pena de usar.", "details": "Abelhinha em relevo sobre a colmeia, um mimo artesanal que decora o lavabo e perfuma a pele. Ótimo para presentear.", "highlights": ["Formato exclusivo", "Artesanal", "Presente ideal"], "benefits": ["Design exclusivo com relevo", "Decora o lavabo", "Perfuma a pele e o ambiente", "Presente criativo", "Feito à mão"], "image": "img/colmeia.webp"},      {"id": "rechaud", "name": "Kit Rechaud", "category": "kits", "kind": "Kit para presente", "tag": "PARA PRESENTEAR", "description": "Um presente para um lar acolhedor.", "details": "Rechaud de cerâmica, wax melt artesanal e aromatizante, em caixa para presente. Consulte valores e opções disponíveis.", "highlights": ["Rechaud de cerâmica", "Wax melt artesanal", "Aromatizante"], "image": "img/rechaud.webp"}, {"id": "barba", "name": "Kit Barba Premium", "category": "kits", "kind": "Kit para presente", "tag": "PARA ELE", "description": "Tradição e frescor para a sua rotina.", "details": "Sabonetes, pincel de barba e spray, em caixa kraft com laço, pronta para presentear. Consulte valores e opções disponíveis.", "highlights": ["Sabonetes", "Pincel de barba", "Spray"], "image": "img/barba.webp"},  {"id": "iemanja", "name": "Coração de Iemanjá", "category": "espiritualidade", "kind": "Sabonete líquido", "tag": "LAVANDA & BABY", "description": "Conexão e calma.", "details": "Sabonete líquido de lavanda com essência Baby, em frasco com fita azul e búzios. Uma lembrança do mar para o seu banho.", "highlights": ["Lavanda", "Essência Baby", "Feito à mão"], "aroma": "Lavanda com essência Baby", "image": "img/iemanja.webp"}, {"id": "oxum", "name": "Ouro de Oxum", "category": "espiritualidade", "kind": "Sabonete líquido", "tag": "CAMOMILA & CALÊNDULA", "description": "Conexão e abundância.", "details": "Sabonete líquido de camomila e calêndula, em frasco com fita dourada e pedra âmbar. Luz e doçura para o seu banho.", "highlights": ["Camomila", "Calêndula", "Feito à mão"], "aroma": "Camomila e calêndula", "image": "img/oxum.webp"}, {"id": "sais", "name": "Sais de Banho", "category": "espiritualidade", "kind": "Sais de banho", "tag": "RITUAL DE BANHO", "price": 15.0, "description": "Energia, purificação e conexão.", "details": "Sais de banho de lavanda e camomila, nas versões Nanã Buruquê e Iansã. Para sentir, acalmar e renovar.", "highlights": ["Lavanda", "Camomila", "Duas versões"], "aroma": "Lavanda e camomila", "image": "img/sais.webp"}, {"id": "chantilly", "name": "Chantilly de Banho", "category": "cremes", "kind": "Chantilly de banho", "tag": "TEXTURA DE NUVEM", "price": 25.0, "size": "120 g (aprox.)", "description": "Um banho com textura de nuvem.", "details": "Derrete na pele, limpa com delicadeza e hidrata, com um toque de glitter cosmético para brilhar. Experiência sensorial do começo ao fim.", "highlights": ["Glitter cosmético", "Vitamina E", "Textura de nuvem"], "benefits": ["Limpeza delicada", "Sensação de pele hidratada", "Textura sensorial e relaxante", "Glitter cosmético para brilhar", "Transforma o banho em ritual"], "ingredients": "Base 3 em 1, óleos essenciais, textura de chantilly, glitter cosmético, vitamina E, silicone, ureia, essência e corante.", "image": "img/chantilly.webp"},   {"id": "kit", "image": "img/kit.svg"},  {"id": "difusores", "image": "img/difusores.webp"},  {"id": "arabescos", "image": "img/arabescos.webp"}, {"id": "coracao", "image": "img/coracao.webp"}, {"id": "citrico", "image": "img/citrico.webp"}, {"id": "composicao", "image": "img/composicao.webp"}, ];
fichas.forEach(f=>{const p=products.find(x=>x.id===f.id);if(p)Object.assign(p,f);else products.push(f)});
products.sort((a,b)=>{const i=fichas.findIndex(f=>f.id===a.id),j=fichas.findIndex(f=>f.id===b.id);return (i<0?99:i)-(j<0?99:j)});
// Essências: 36 opções em 5 famílias. Para incluir ou tirar uma essência, edite a lista "scents" da família.
const scentFamilies=[{"id": "frutadas", "name": "Frutadas", "profile": "Frutado", "icon": "❋", "text": "Você gosta de aromas alegres e suculentos, com cara de verão.", "product": "scrub", "picks": ["Melancia", "Maracujá", "Pêssego"], "scents": ["Abacaxi", "Ameixa negra", "Lichia", "Maçã verde", "Manga", "Maracujá", "Melancia", "Morango", "Pêssego", "Pitanga"]}, {"id": "florais", "name": "Florais", "profile": "Floral", "icon": "✿", "text": "Delicadeza é com você: aromas suaves, de flor recém-colhida.", "product": "clareador", "picks": ["Lavanda", "Jasmim", "Rosas"], "scents": ["Alfazema", "Camomila", "Flor de cerejeira", "Jasmim", "Lavanda", "Rosas"]}, {"id": "doces", "name": "Doces", "profile": "Doce", "icon": "♡", "text": "Você gosta de aromas que abraçam, com cara de sobremesa.", "product": "vanilla", "picks": ["Baunilha", "Morango com champagne", "Cereja com avelã"], "scents": ["Amêndoas", "Baunilha", "Cacau", "Café", "Cereja com avelã", "Coco", "Coco passion", "Mel", "Morango com champagne"]}, {"id": "frescas", "name": "Frescas e cítricas", "profile": "Fresco", "icon": "❧", "text": "Leveza para começar bem o dia: aromas limpos, cítricos e de ervas.", "product": "redondos", "picks": ["Capim-limão", "Chá branco", "Verbena"], "scents": ["Alecrim", "Algodão", "Bergamota", "Capim-limão", "Chá branco", "Erva-doce", "Limão siciliano", "Verbena"]}, {"id": "quentes", "name": "Quentes e amadeiradas", "profile": "Quente", "icon": "✦", "text": "Seu banho pede calma e calor, com aromas envolventes.", "product": "energizante", "picks": ["Canela", "Patchouli", "Madeira"], "scents": ["Canela", "Madeira", "Patchouli"]}];
// Produtos feitos por encomenda, em que a cliente escolhe essência e cor.
const customProducts=["clareador", "redondos", "colmeia"];
let chosenScent='';try{const v=localStorage.getItem('lavanda-essencia')||'';if(scentFamilies.some(f=>f.scents.includes(v)))chosenScent=v}catch{}
const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

let filter='todos',query='',bag={};try{const saved=JSON.parse(localStorage.getItem('lavanda-bag')||'{}');for(const k in saved){const n=saved[k];if(products.some(p=>p.id===k.split('|')[0])&&Number.isInteger(n)&&n>0&&n<=99)bag[k]=n}}catch{}
const $=id=>document.getElementById(id),dialog=$('bag-dialog');
function persist(){try{localStorage.setItem('lavanda-bag',JSON.stringify(bag))}catch{}$('bag-count').textContent=Object.values(bag).reduce((a,b)=>a+b,0);renderBag()}
function productCard(p){return `<article class="product product-enter" data-category="${p.category}"><button class="product-image" data-detail="${p.id}" aria-label="Ver detalhes de ${p.name}"><img src="${p.image}" alt="${p.name} — ${p.kind}, Saboaria Lavanda" loading="lazy"><span class="product-tag">${p.tag}</span></button><div class="product-info"><span class="product-kind">${p.kind}</span><h3>${p.name}</h3><p>${p.description}</p>${isCustom(p)?'<span class="product-custom">36 essências à escolha</span>':''}<div class="product-bottom"><div><span class="${p.price?'product-price':''}">${p.price?money(p.price)+(p.size?'<small> · '+p.size.replace(' (aprox.)','')+'</small>':''):'Valor sob consulta'}</span><button class="detail-link" data-detail="${p.id}">Ver detalhes</button></div><button class="add-button" data-add="${p.id}" aria-label="Adicionar ${p.name} à sacola">+</button></div></div></article>`}
function render(){$('esp-intro').hidden=filter!=='espiritualidade';const list=products.filter(p=>p.category!=='automotivo'&&(filter==='todos'?(!!query||p.category!=='espiritualidade'):p.category===filter)&&(p.name+' '+p.kind+' '+p.description).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query));$('products').innerHTML=list.map(productCard).join('');$('products').scrollLeft=0;$('no-results').hidden=list.length>0;updateCarousel('products');$('products').querySelectorAll('.product').forEach((card,i)=>card.style.setProperty('--entry-delay',Math.min(i,3)*65+'ms'))}
function updateCarousel(id){const track=$(id),cards=track.querySelectorAll('.product');const step=cards.length>1?cards[1].offsetLeft-cards[0].offsetLeft:track.clientWidth;const current=cards.length?Math.min(cards.length,Math.max(1,Math.round(track.scrollLeft/Math.max(step,1))+1)):0;$(id+'-position').textContent=cards.length?`${current} / ${cards.length} · deslize para explorar`:'0 produtos';document.querySelectorAll(`[data-carousel="${id}"]`).forEach(b=>{b.disabled=b.dataset.direction==='-1'?track.scrollLeft<=2:track.scrollLeft+track.clientWidth>=track.scrollWidth-2})}

function selectFilter(value){filter=value;document.querySelectorAll('[data-filter]').forEach(b=>{const on=b.dataset.filter===filter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});render()}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>selectFilter(b.dataset.filter)));
$('search').addEventListener('input',e=>{query=e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();render()});
let toastTimer;function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2400)}
function addFromCarousel(e){const b=e.target.closest('[data-add]');if(!b)return;const id=b.dataset.add;if((bag[id]||0)>=99){toast('Limite de 99 unidades por produto.');return}bag[id]=(bag[id]||0)+1;persist();toast('Adicionado à sua sacola ♡')}
$('products').addEventListener('click',addFromCarousel);$('gift-products').addEventListener('click',addFromCarousel);
function renderBag(){const list=products.filter(p=>bag[p.id]);$('order-area').hidden=!list.length;$('bag-items').innerHTML=list.length?list.map(p=>`<div class="bag-row"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3>${p.price?`<span class="bag-price">${money(p.price)} cada</span>`:''}<div class="quantity"><button data-change="${p.id}" data-delta="-1" aria-label="Diminuir quantidade de ${p.name}">−</button><span>${bag[p.id]}</span><button data-change="${p.id}" data-delta="1" aria-label="Aumentar quantidade de ${p.name}">+</button><button class="remove" data-remove="${p.id}">Remover</button></div></div></div>`).join(''):'<div class="empty"><h3>Sua sacola está esperando um carinho.</h3><p>Explore a coleção e escolha seus produtos favoritos.</p><button class="primary" id="back-to-shop">Conhecer a coleção</button></div>';$('copy-status').textContent='';$('order-fallback').hidden=true;updateTotal()}
$('bag-items').addEventListener('click',e=>{if(e.target.closest('#back-to-shop')){dialog.close();location.hash='colecao';return}const b=e.target.closest('[data-change],[data-remove]');if(!b)return;if(b.dataset.remove)delete bag[b.dataset.remove];else{const id=b.dataset.change;bag[id]=Math.min(99,bag[id]+Number(b.dataset.delta));if(bag[id]<=0)delete bag[id]}persist()});
$('open-bag').addEventListener('click',()=>{renderBag();dialog.showModal()});$('close-bag').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog&&e.clientX<dialog.getBoundingClientRect().left)dialog.close()});
$('gift-button').addEventListener('click',()=>{query='';$('search').value='';selectFilter('kits');$('colecao').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})});
$('copy-order').addEventListener('click',async()=>{if(!Object.keys(bag).length)return;const text=orderMessage();try{await navigator.clipboard.writeText(text);$('copy-status').textContent='Pedido copiado! Cole no seu canal de atendimento com a Saboaria Lavanda.'}catch{$('order-fallback').hidden=false;$('order-fallback').value=text;$('order-fallback').focus();$('order-fallback').select();$('copy-status').textContent='Selecione e copie o pedido abaixo para enviar ao atendimento.'}});
$('year').textContent=new Date().getFullYear();render();persist();

function orderMessage(){const items=products.filter(p=>bag[p.id]);const name=$('customer').value.trim(),notes=$('notes').value.trim();return ['Olá, Saboaria Lavanda! Gostaria de consultar este pedido:',name?'Nome: '+name:'','',...items.map(p=>`${bag[p.id]} × ${p.name} (${p.kind})${p.price?' — '+money(p.price*bag[p.id]):''}`),'',notes?'Observações: '+notes:'',totalLine(),'Por favor, confirme valores, disponibilidade, formas de pagamento e entrega.'].join('\n')}
$('whatsapp-order').addEventListener('click',e=>{if(!Object.keys(bag).length){e.preventDefault();return}e.currentTarget.href='https://wa.me/5511954810927?text='+encodeURIComponent(orderMessage())});

$('gift-products').innerHTML=products.filter(p=>p.category==='kits').map(productCard).join('');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function moveCarousel(id,direction){const track=$(id),cards=track.querySelectorAll('.product');const step=cards.length>1?cards[1].offsetLeft-cards[0].offsetLeft:track.clientWidth;track.scrollBy({left:direction*Math.max(step,1),behavior:reducedMotion?'auto':'smooth'})}
document.querySelectorAll('[data-carousel]').forEach(b=>b.addEventListener('click',()=>moveCarousel(b.dataset.carousel,Number(b.dataset.direction))));
['products','gift-products'].forEach(id=>{const track=$(id);track.addEventListener('scroll',()=>updateCarousel(id),{passive:true});track.addEventListener('keydown',e=>{if(e.target!==track||!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();moveCarousel(id,e.key==='ArrowLeft'?-1:1)});updateCarousel(id)});
window.addEventListener('resize',()=>{updateCarousel('products');updateCarousel('gift-products')});

const menuToggle=$('menu-toggle'),siteMenu=$('site-menu');function closeMenu(){siteMenu.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu')}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';siteMenu.classList.toggle('is-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
siteMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});document.addEventListener('click',e=>{if(!siteMenu.contains(e.target)&&!menuToggle.contains(e.target))closeMenu()});
document.querySelectorAll('[data-quick-filter]').forEach(a=>a.addEventListener('click',()=>{query='';$('search').value='';selectFilter(a.dataset.quickFilter)}));

// Asimov motion, adapted to care rituals: soft entrances, organic light and photo dissolves.
const sceneImages=[products.find(p=>p.id==='redondos'),products.find(p=>p.id==='fatia'),products.find(p=>p.id==='citrico')];
sceneImages.slice(1).forEach((p,i)=>{const image=$('scene-'+(i+1));image.src=p.image;image.hidden=false;image.setAttribute('aria-hidden','true')});
document.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>{const index=Number(button.dataset.scene);document.querySelectorAll('.hero-scene').forEach((image,i)=>{image.classList.toggle('is-active',i===index);image.setAttribute('aria-hidden',String(i!==index))});document.querySelectorAll('[data-scene]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))}));
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
function setMotionPreference(){document.body.classList.toggle('effects-paused',motionPreference.matches);if(motionPreference.matches){document.body.classList.remove('motion-enabled');revealObserver?.disconnect();document.querySelectorAll('.reveal-pending').forEach(el=>el.classList.add('is-visible'));}}
if(!motionPreference.matches&&'IntersectionObserver' in window){revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.08});document.querySelectorAll('.section-head,.essence,.faq,.closing').forEach(el=>{el.classList.add('reveal-pending');revealObserver.observe(el)});document.body.classList.add('motion-enabled');}
setMotionPreference();motionPreference.addEventListener?.('change',setMotionPreference);
['products','gift-products'].forEach(id=>$(id).addEventListener('click',e=>{const button=e.target.closest('[data-add]');if(!button)return;button.classList.add('just-added');$('open-bag').classList.add('bag-pulse');setTimeout(()=>{button.classList.remove('just-added');$('open-bag').classList.remove('bag-pulse')},600)}));
document.querySelectorAll('.faq details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('.faq details').forEach(other=>{if(other!==detail)other.open=false})}));


const detailDialog=$('product-dialog');let detailProduct=null;
const aromaLabels={vanilla:'Vanilla com Morango',liquido:'Orquídeas e Pêssego',canela:'Aconchego com Canela',creme:'Babaloo de Uva',mousse:'Escândalo',auto:'Vanilla / Invictus (aromatizantes)'};
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-detail]');if(!trigger)return;const p=products.find(p=>p.id===trigger.dataset.detail);if(!p)return;detailProduct=p;$('detail-title').textContent=p.name;$('detail-kind').textContent=p.kind;$('detail-image').src=p.image;$('detail-image').alt=p.name+' — foto do produto';$('detail-description').textContent=p.description;$('detail-aroma').textContent=aromaLabels[p.id]||'Consulte as opções disponíveis';$('detail-status').textContent='';fillFicha(p);fillCustom(p);detailDialog.showModal();detailDialog.scrollTop=0;});
$('close-detail').addEventListener('click',()=>detailDialog.close());
detailDialog.addEventListener('click',e=>{if(e.target!==detailDialog)return;const r=detailDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)detailDialog.close()});
$('detail-add').addEventListener('click',()=>{if(!detailProduct)return;const id=variantKey(detailProduct);if(id===null)return;if((bag[id]||0)>=99){$('detail-status').textContent='Limite de 99 unidades por produto.';return}bag[id]=(bag[id]||0)+1;persist();$('detail-status').textContent='Adicionado à sacola. '+bag[id]+' unidade(s) na sua seleção.'});

// Quiz "Descubra seu aroma": quatro perguntas, um produto sugerido e o convite para a lista do WhatsApp.
// Para mudar perguntas, respostas ou o produto de cada resultado, edite quizQuestions e quizResults.
const quizResults={
doce:{product:'chantilly',text:'Você gosta de aromas que abraçam. O Chantilly de Banho transforma o banho em um mimo doce no fim do dia.'},
aconchego:{product:'energizante',text:'Seu banho pede calor e especiarias. O Sabonete Energizante, com canela e anis-estrelado, foi pensado para você.'},
floral:{product:'fatia',text:'Leveza para começar bem o dia. O Sabonete Fatia, com flores e cores delicadas, combina com você.'},
casa:{product:'difusores',text:'Para você, cuidado também é ambiente. Escolha uma fragrância para os seus espaços favoritos.'},
presente:{product:'kit',text:'Seu presente, do seu jeito.'}
};
const quizQuestions=[
{q:'Para quem é esse carinho?',options:[['♡','Para mim',null],['❧','Para presentear alguém','presente']]},
{q:'Qual cheiro te lembra uma coisa boa?',options:[['♡','Sobremesa saindo do forno','doce'],['✦','Chá quente com canela','aconchego'],['✿','Jardim florido pela manhã','floral'],['❧','Casa arrumada e perfumada','casa']]},
{q:'Como é o seu momento ideal?',options:[['✦','Banho demorado, sem olhar o relógio','aconchego'],['✿','Banho rápido para começar o dia','floral'],['♡','Um mimo doce no fim do dia','doce'],['❧','A casa cheirosa o dia inteiro','casa']]},
{q:'Escolha a palavra que mais combina com você.',options:[['♡','Doçura','doce'],['✦','Aconchego','aconchego'],['✿','Leveza','floral'],['❧','Harmonia','casa']]}
];
const WHATSAPP_LIST='https://wa.me/5511954810927?text=';
let quizStep=0,quizAnswers=[];
const quizCard=$('quiz-card');
function quizEsc(t){return String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function quizOutcome(){
  const score={};quizAnswers.forEach((a,i)=>{if(a&&a!=='presente')score[a]=(score[a]||0)+(i===1?1.5:1)});
  const top=Object.keys(score).sort((a,b)=>score[b]-score[a])[0]||'doce';
  return quizAnswers[0]==='presente'?{main:'presente',extra:top}:{main:top,extra:null};
}
function renderQuiz(focus){
  if(quizStep<quizQuestions.length){
    const item=quizQuestions[quizStep];
    quizCard.innerHTML=`<div class="quiz-view"><div class="quiz-top"><span class="quiz-step">Pergunta ${quizStep+1} de ${quizQuestions.length}</span><span class="quiz-dots" aria-hidden="true">${quizQuestions.map((_,i)=>`<i class="${i<=quizStep?'on':''}"></i>`).join('')}</span></div><h3 class="quiz-question" tabindex="-1">${item.q}</h3><div class="quiz-options">${item.options.map((o,i)=>`<button type="button" class="quiz-option" data-quiz-option="${i}"><i aria-hidden="true">${o[0]}</i><span>${o[1]}</span></button>`).join('')}</div>${quizStep?'<button type="button" class="quiz-back" data-quiz-back>← Voltar</button>':''}</div>`;
  }else{
    const out=quizOutcome(),r=quizResults[out.main],p=products.find(x=>x.id===r.product),extra=out.extra?products.find(x=>x.id===quizResults[out.extra].product):null;
    quizCard.innerHTML=`<div class="quiz-view quiz-result"><button type="button" class="quiz-photo" data-detail="${p.id}" aria-label="Ver detalhes de ${quizEsc(p.name)}"><img src="${p.image}" alt="${quizEsc(p.name)} — ${quizEsc(p.kind)}, Saboaria Lavanda"></button><div class="quiz-result-copy"><span class="eyebrow">${out.main==='presente'?'O presente ideal é':'Seu aroma é'}</span><h3 class="quiz-question" tabindex="-1" style="margin-bottom:9px"><em>${quizEsc(p.name)}</em></h3><p>${r.text}</p>${extra?`<p class="quiz-extra">Para acompanhar: <button type="button" data-detail="${extra.id}">${quizEsc(extra.name)}</button></p>`:''}<div class="quiz-actions" style="margin-top:14px"><button type="button" class="secondary-order" data-quiz-add="${p.id}">Adicionar à sacola +</button><button type="button" class="quiz-back" data-quiz-restart>Refazer o quiz</button></div></div></div><div class="quiz-lead"><h4>Quer saber das promoções antes de todo mundo?</h4><p>Entre na nossa lista do WhatsApp e receba novidades e descontos antecipados.</p><label class="field" for="quiz-name">Seu nome<input id="quiz-name" maxlength="80" autocomplete="given-name" placeholder="Como podemos te chamar?"></label><div class="quiz-source"><span id="quiz-source-label">Como você conheceu a Saboaria Lavanda? (opcional)</span><div class="quiz-source-options" role="group" aria-labelledby="quiz-source-label">${leadSources.map(o=>`<button type="button" data-source="${o[0]}" aria-pressed="${leadSource===o[0]}">${o[1]}</button>`).join('')}</div><label class="field" for="quiz-ref" id="quiz-ref-wrap"${leadSource==='indicacao'?'':' hidden'}>Quem indicou? (opcional)<input id="quiz-ref" maxlength="60" autocomplete="off" placeholder="Nome de quem indicou" value="${esc(leadRef)}"></label></div><label class="quiz-consent" for="quiz-consent"><input type="checkbox" id="quiz-consent"><span>Quero receber novidades e promoções da Saboaria Lavanda pelo WhatsApp. Posso sair da lista quando quiser.</span></label><a class="primary" id="quiz-join" href="https://wa.me/5511954810927" target="_blank" rel="noopener noreferrer" aria-disabled="true">Entrar na lista pelo WhatsApp</a><p class="quiz-status" id="quiz-status" role="status"></p><small class="quiz-fine">A conversa abre com a mensagem pronta. É só enviar e salvar o nosso número para receber as promoções.</small></div>`;
  }
  if(focus)quizCard.querySelector('.quiz-question')?.focus({preventScroll:true});
}
function quizMessage(){
  const out=quizOutcome(),p=products.find(x=>x.id===quizResults[out.main].product),name=$('quiz-name').value.trim();
  return ['Olá, Saboaria Lavanda!'+(name?' Meu nome é '+name+'.':''),out.main==='presente'?'Fiz o quiz do site procurando um presente e a sugestão foi: '+p.name+'.':'Fiz o quiz do site e o meu aroma é: '+p.name+'.','Quero entrar na lista para receber novidades, promoções e descontos antecipados pelo WhatsApp.'].join('\n');
}
quizCard.addEventListener('click',e=>{
  const option=e.target.closest('[data-quiz-option]');
  if(option){quizAnswers[quizStep]=quizQuestions[quizStep].options[Number(option.dataset.quizOption)][2];quizStep++;renderQuiz(true);return}
  if(e.target.closest('[data-quiz-back]')){quizStep=Math.max(0,quizStep-1);renderQuiz(true);return}
  if(e.target.closest('[data-quiz-restart]')){quizStep=0;quizAnswers=[];renderQuiz(true);return}
  const add=e.target.closest('[data-quiz-add]');
  if(add){const id=add.dataset.quizAdd;if((bag[id]||0)>=99){toast('Limite de 99 unidades por produto.');return}bag[id]=(bag[id]||0)+1;persist();toast('Adicionado à sua sacola ♡');$('open-bag').classList.add('bag-pulse');setTimeout(()=>$('open-bag').classList.remove('bag-pulse'),600);return}
  const join=e.target.closest('#quiz-join');
  if(join){if(!$('quiz-consent').checked){e.preventDefault();$('quiz-status').textContent='Marque a caixa acima para entrar na lista.';$('quiz-consent').focus();return}join.href=WHATSAPP_LIST+encodeURIComponent(quizMessage());$('quiz-status').textContent='Abrimos o WhatsApp. Envie a mensagem para confirmar sua entrada na lista.'}
});
quizCard.addEventListener('change',e=>{if(e.target.id==='quiz-consent'){$('quiz-join').setAttribute('aria-disabled',String(!e.target.checked));if(e.target.checked)$('quiz-status').textContent=''}});
renderQuiz(false);

// Fichas na janela de detalhes e subtotal da sacola.
function fillFicha(p){
  const hook=$('detail-hook'),chips=$('detail-chips'),more=$('detail-more');
  hook.hidden=!p.details;hook.textContent=p.details?p.description:'';
  if(p.details)$('detail-description').textContent=p.details;
  if(p.aroma)$('detail-aroma').textContent=p.aroma;
  $('detail-size').textContent=p.size||'Confirme no atendimento';
  $('detail-price').textContent=p.price?money(p.price):'Valor sob consulta';
  chips.hidden=!(p.highlights&&p.highlights.length);chips.innerHTML=(p.highlights||[]).map(h=>`<li>${h}</li>`).join('');
  more.hidden=!(p.benefits&&p.benefits.length);$('detail-benefits').innerHTML=(p.benefits||[]).map(b=>`<li>${b}</li>`).join('');
  $('detail-ingredients').hidden=!p.ingredients;$('detail-ingredients').open=false;$('detail-ingredients-text').textContent=p.ingredients||'';
}
function bagTotals(){const items=products.filter(p=>bag[p.id]);return{sum:items.reduce((t,p)=>t+(p.price||0)*bag[p.id],0),priced:items.some(p=>p.price),unpriced:items.some(p=>!p.price)}}
function totalLine(){const t=bagTotals();return t.priced?'Subtotal estimado: '+money(t.sum)+(t.unpriced?' + itens sob consulta':''):''}
function updateTotal(){const t=bagTotals(),el=$('order-total');el.hidden=!t.priced;el.innerHTML=t.priced?`<span>Subtotal estimado${t.unpriced?'<small>sem os itens sob consulta</small>':''}</span><b>${money(t.sum)}</b>`:''}
updateTotal();

// ===== Essências: seção, escolha no produto e sacola com variações =====
function esc(t){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function isCustom(p){return customProducts.includes(p.id)}
function familyOf(scent){return scentFamilies.find(f=>f.scents.includes(scent))}
function parseKey(k){const [id,scent='',color='']=k.split('|');return{k,p:products.find(x=>x.id===id),scent,color}}
function bagEntries(){return Object.keys(bag).map(parseKey).filter(e=>e.p&&bag[e.k]>0)}
function variantLabel(e){return [e.scent?'essência '+e.scent:'',e.color?'cor '+e.color:''].filter(Boolean).join(', ')}
function variantKey(p){
  if(!isCustom(p))return p.id;
  const scent=$('detail-essence').value,color=$('detail-color').value.replace(/[|]/g,' ').trim();
  if(!scent){$('detail-status').textContent='Escolha a essência para adicionar à sacola.';$('detail-essence').focus();return null}
  return p.id+'|'+scent+'|'+color;
}
function fillCustom(p){
  const box=$('detail-custom'),custom=isCustom(p);box.hidden=!custom;if(!custom)return;
  $('detail-aroma').textContent='36 essências à escolha';
  $('detail-essence').innerHTML='<option value="">Escolha a essência</option>'+scentFamilies.map(f=>`<optgroup label="${esc(f.name)}">${f.scents.map(x=>`<option${x===chosenScent?' selected':''}>${esc(x)}</option>`).join('')}</optgroup>`).join('');
  $('detail-color').value='';
}
// Sacola (substitui as versões anteriores para aceitar essência e cor por item)
function renderBag(){
  const list=bagEntries();$('order-area').hidden=!list.length;
  $('bag-items').innerHTML=list.length?list.map(e=>`<div class="bag-row"><img src="${e.p.image}" alt="${esc(e.p.name)}"><div><h3>${esc(e.p.name)}</h3>${variantLabel(e)?`<span class="bag-variant">${esc(variantLabel(e))}</span>`:''}${e.p.price?`<span class="bag-price">${money(e.p.price)} cada</span>`:''}<div class="quantity"><button data-change="${esc(e.k)}" data-delta="-1" aria-label="Diminuir quantidade de ${esc(e.p.name)}">−</button><span>${bag[e.k]}</span><button data-change="${esc(e.k)}" data-delta="1" aria-label="Aumentar quantidade de ${esc(e.p.name)}">+</button><button class="remove" data-remove="${esc(e.k)}">Remover</button></div></div></div>`).join(''):'<div class="empty"><h3>Sua sacola está esperando um carinho.</h3><p>Explore a coleção e escolha seus produtos favoritos.</p><button class="primary" id="back-to-shop">Conhecer a coleção</button></div>';
  $('copy-status').textContent='';$('order-fallback').hidden=true;updateTotal();
}
function bagTotals(){const l=bagEntries();return{sum:l.reduce((t,e)=>t+(e.p.price||0)*bag[e.k],0),priced:l.some(e=>e.p.price),unpriced:l.some(e=>!e.p.price)}}
function orderMessage(){
  const name=$('customer').value.trim(),notes=$('notes').value.trim();
  return ['Olá, Saboaria Lavanda! Gostaria de consultar este pedido:',name?'Nome: '+name:null,'',...bagEntries().map(e=>`${bag[e.k]} × ${e.p.name} (${e.p.kind})${variantLabel(e)?' | '+variantLabel(e):''}${e.p.price?' — '+money(e.p.price*bag[e.k]):''}`),'',notes?'Observações: '+notes:null,totalLine()||null,sourceLine()||null,'Por favor, confirme valores, disponibilidade, formas de pagamento e entrega.'].filter(l=>l!==null).join('\n');
}
// O "+" do cartão abre os detalhes quando o produto pede essência
document.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(!b)return;const p=products.find(x=>x.id===b.dataset.add);if(!p||!isCustom(p))return;e.stopPropagation();e.preventDefault();const t=document.querySelector(`#products [data-detail="${p.id}"]`)||document.querySelector(`[data-detail="${p.id}"]`);t&&t.click()},true);

// Seção de essências
let scentFamily='todas';
function renderScents(){
  $('scent-tabs').innerHTML=[{id:'todas',name:'Todas'},...scentFamilies].map(f=>`<button type="button" data-scent-family="${f.id}" aria-pressed="${f.id===scentFamily}">${f.icon?`<i aria-hidden="true">${f.icon}</i>`:''}${esc(f.name)}${f.scents?`<sup>${f.scents.length}</sup>`:''}</button>`).join('');
  $('scent-wall').innerHTML=scentFamilies.map(f=>`<div class="scent-family${scentFamily!=='todas'&&scentFamily!==f.id?' is-dim':''}" data-family="${f.id}"><span class="scent-family-name">${esc(f.name)}</span><div class="scent-names">${f.scents.map(x=>`<button type="button" class="scent" data-scent="${esc(x)}" aria-pressed="${x===chosenScent}">${esc(x)}</button>`).join('')}</div></div>`).join('');
  const fam=chosenScent?familyOf(chosenScent):null,list=products.filter(isCustom);
  $('scent-pick').innerHTML=`<div class="scent-pick-copy">${chosenScent?`<span class="eyebrow">Sua essência</span><h3><em>${esc(chosenScent)}</em></h3><p>Família ${esc(fam.name.toLowerCase())}. Agora escolha o sabonete. Ele já abre com essa essência marcada.</p><button type="button" class="scent-clear" data-scent-clear>Trocar de essência</button>`:`<span class="eyebrow">Feitos por encomenda</span><h3>Escolha a essência, depois o sabonete.</h3><p>Estes modelos são feitos na essência e na cor que você pedir.</p>`}</div><div class="scent-products">${list.map(p=>`<button type="button" class="scent-product" data-detail="${p.id}" aria-label="Ver ${esc(p.name)}"><img src="${p.image}" alt="" loading="lazy"><span><b>${esc(p.name.replace('Sabonete ',''))}</b><small>${p.price?money(p.price):'Sob consulta'}</small></span></button>`).join('')}</div>`;
}
function chooseScent(name,scroll){
  chosenScent=name;try{localStorage.setItem('lavanda-essencia',name)}catch{}
  renderScents();
  if(scroll)$('scent-pick').scrollIntoView({block:'center',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
$('essencias').addEventListener('click',e=>{
  const tab=e.target.closest('[data-scent-family]');if(tab){scentFamily=tab.dataset.scentFamily;renderScents();return}
  const b=e.target.closest('[data-scent]');if(b){chooseScent(b.dataset.scent===chosenScent?'':b.dataset.scent,false);if(chosenScent)toast('Essência escolhida: '+chosenScent);return}
  if(e.target.closest('[data-scent-clear]'))chooseScent('',false);
});
renderScents();

// Quiz por família de aroma (substitui o resultado por produto)
const quizGift={product:'kit',text:'Seu presente, do seu jeito.'};
quizQuestions.length=0;
quizQuestions.push(
{q:'Para quem é esse carinho?',options:[['♡','Para mim',null],['❧','Para presentear alguém','presente']]},
{q:'Qual cheiro te lembra uma coisa boa?',options:[['❋','Fruta fresca, recém-cortada','frutadas'],['✿','Jardim florido pela manhã','florais'],['♡','Sobremesa saindo do forno','doces'],['❧','Roupa limpa no varal','frescas'],['✦','Chá quente com canela','quentes']]},
{q:'Como é o seu momento ideal?',options:[['❧','Banho rápido para começar o dia','frescas'],['✦','Banho demorado, sem olhar o relógio','quentes'],['♡','Um mimo doce no fim do dia','doces'],['❋','Banho com cara de verão','frutadas'],['✿','Um cuidado delicado, só meu','florais']]},
{q:'Escolha a palavra que mais combina com você.',options:[['❋','Alegria','frutadas'],['✿','Delicadeza','florais'],['♡','Doçura','doces'],['❧','Leveza','frescas'],['✦','Aconchego','quentes']]}
);
function quizOutcome(){
  const score={};quizAnswers.forEach((a,i)=>{if(a&&a!=='presente')score[a]=(score[a]||0)+(i===1?1.5:1)});
  const top=Object.keys(score).sort((a,b)=>score[b]-score[a])[0]||'florais';
  return{family:scentFamilies.find(f=>f.id===top),gift:quizAnswers[0]==='presente'};
}
function renderQuiz(focus){
  if(quizStep<quizQuestions.length){
    const item=quizQuestions[quizStep];
    quizCard.innerHTML=`<div class="quiz-view"><div class="quiz-top"><span class="quiz-step">Pergunta ${quizStep+1} de ${quizQuestions.length}</span><span class="quiz-dots" aria-hidden="true">${quizQuestions.map((_,i)=>`<i class="${i<=quizStep?'on':''}"></i>`).join('')}</span></div><h3 class="quiz-question" tabindex="-1">${item.q}</h3><div class="quiz-options">${item.options.map((o,i)=>`<button type="button" class="quiz-option" data-quiz-option="${i}"><i aria-hidden="true">${o[0]}</i><span>${o[1]}</span></button>`).join('')}</div>${quizStep?'<button type="button" class="quiz-back" data-quiz-back>← Voltar</button>':''}</div>`;
  }else{
    const out=quizOutcome(),f=out.family,p=quizProduct(out);
    const chips=`<div class="quiz-picks">${f.picks.map(x=>`<button type="button" data-quiz-scent="${esc(x)}">${esc(x)}</button>`).join('')}</div>`;
    quizCard.innerHTML=`<div class="quiz-view quiz-result"><button type="button" class="quiz-photo" data-detail="${p.id}" aria-label="Ver detalhes de ${esc(p.name)}"><img src="${p.image}" alt="${esc(p.name)}, Saboaria Lavanda"></button><div class="quiz-result-copy"><span class="eyebrow">${out.gift?'O presente ideal é':'Seu perfil de aroma é'}</span><h3 class="quiz-question" tabindex="-1" style="margin-bottom:9px"><em>${esc(out.gift?p.name:f.profile)}</em></h3><p>${out.gift?quizGift.text:f.text}</p><p class="quiz-picks-label">${out.gift?'Para personalizar, essências do perfil '+esc(f.profile.toLowerCase())+':':'Essências que combinam com você:'}</p>${chips}<div class="quiz-actions" style="margin-top:14px"><button type="button" class="secondary-order" data-detail="${p.id}">${out.gift?'Ver o kit':'Ver sugestão: '+esc(p.name.replace('Sabonete ','').replace('Esfoliante ',''))}</button><button type="button" class="quiz-back" data-quiz-restart>Refazer o quiz</button></div></div></div><div class="quiz-lead"><h4>Quer saber das promoções antes de todo mundo?</h4><p>Entre na nossa lista do WhatsApp e receba novidades e descontos antecipados.</p><label class="field" for="quiz-name">Seu nome<input id="quiz-name" maxlength="80" autocomplete="given-name" placeholder="Como podemos te chamar?"></label><div class="quiz-source"><span id="quiz-source-label">Como você conheceu a Saboaria Lavanda? (opcional)</span><div class="quiz-source-options" role="group" aria-labelledby="quiz-source-label">${leadSources.map(o=>`<button type="button" data-source="${o[0]}" aria-pressed="${leadSource===o[0]}">${o[1]}</button>`).join('')}</div><label class="field" for="quiz-ref" id="quiz-ref-wrap"${leadSource==='indicacao'?'':' hidden'}>Quem indicou? (opcional)<input id="quiz-ref" maxlength="60" autocomplete="off" placeholder="Nome de quem indicou" value="${esc(leadRef)}"></label></div><label class="quiz-consent" for="quiz-consent"><input type="checkbox" id="quiz-consent"><span>Quero receber novidades e promoções da Saboaria Lavanda pelo WhatsApp. Posso sair da lista quando quiser.</span></label><a class="primary" id="quiz-join" href="https://wa.me/5511954810927" target="_blank" rel="noopener noreferrer" aria-disabled="true">Entrar na lista pelo WhatsApp</a><p class="quiz-status" id="quiz-status" role="status"></p><small class="quiz-fine">A conversa abre com a mensagem pronta. É só enviar e salvar o nosso número para receber as promoções.</small></div>`;
  }
  if(focus)quizCard.querySelector('.quiz-question')?.focus({preventScroll:true});
}
function quizMessage(){
  const out=quizOutcome(),name=$('quiz-name').value.trim();
  return ['Olá, Saboaria Lavanda!'+(name?' Meu nome é '+name+'.':''),(out.gift?'Fiz o quiz do site procurando um presente. ':'Fiz o quiz do site. ')+'Meu perfil de aroma é '+out.family.profile.toLowerCase()+' ('+out.family.picks.join(', ')+').',sourceLine()||null,'Quero entrar na lista para receber novidades, promoções e descontos antecipados pelo WhatsApp.'].filter(l=>l!==null).join('\n');
}
quizCard.addEventListener('click',e=>{const b=e.target.closest('[data-quiz-scent]');if(b){chooseScent(b.dataset.quizScent,true);toast('Essência escolhida: '+b.dataset.quizScent)}});
quizStep=0;quizAnswers=[];renderQuiz(false);

// Quiz: estes produtos e categorias nunca aparecem como resultado.
const quizNeverIds=['difusores','composicao'],quizNeverCategories=['aromas','automotivo','espiritualidade'];
function quizAllowed(p){return !!p&&!quizNeverIds.includes(p.id)&&!quizNeverCategories.includes(p.category)}
function quizProduct(out){
  const wanted=products.find(x=>x.id===(out.gift?quizGift.product:out.family.product));
  return quizAllowed(wanted)?wanted:products.find(x=>quizAllowed(x)&&(out.gift?x.category==='kits':isCustom(x)))||products.find(quizAllowed);
}
// Origem do contato: vem do link (?origem=instagram), do site de onde a pessoa chegou ou da resposta dela.
const leadSources=[['instagram','Instagram'],['indicacao','Indicação'],['pesquisa','Pesquisa na internet'],['outro','Outro']];
let leadSource='',leadRef='';
try{
  const q=new URLSearchParams(location.search),tag=(q.get('origem')||q.get('utm_source')||'').toLowerCase(),from=(document.referrer||'').toLowerCase();
  if(/insta|^ig$/.test(tag)||from.includes('instagram.'))leadSource='instagram';
  else if(/indica/.test(tag))leadSource='indicacao';
  else if(/google|pesquisa|busca/.test(tag)||/google\.|bing\.|duckduckgo\./.test(from))leadSource='pesquisa';
  else{const saved=localStorage.getItem('lavanda-origem')||'';if(leadSources.some(o=>o[0]===saved))leadSource=saved}
  if(leadSource)localStorage.setItem('lavanda-origem',leadSource);
}catch{}
function sourceLine(){
  if(!leadSource)return '';
  const label=leadSources.find(o=>o[0]===leadSource)[1];
  return 'Como conheci a Saboaria Lavanda: '+(leadSource==='indicacao'&&leadRef?'indicação de '+leadRef:label)+'.';
}
quizCard.addEventListener('click',e=>{
  const b=e.target.closest('[data-source]');if(!b)return;
  leadSource=leadSource===b.dataset.source?'':b.dataset.source;try{localStorage.setItem('lavanda-origem',leadSource)}catch{}
  quizCard.querySelectorAll('[data-source]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.source===leadSource)));
  const wrap=$('quiz-ref-wrap');wrap.hidden=leadSource!=='indicacao';if(!wrap.hidden)$('quiz-ref').focus();
});
quizCard.addEventListener('input',e=>{if(e.target.id==='quiz-ref')leadRef=e.target.value.trim()});

// ===== Pétalas caindo por toda a página e pétalas no chão, nas cores da marca =====
// PETALAS.on=false desliga a queda. porLargura menor = mais pétalas.
const PETALAS={on:true,porLargura:22,max:64,min:18,cores:['#d9b8ee','#c9a2e4','#b98ad6','#e9d6f5','#f3d9ec','#a586c9','#bfdccf'],veio:'rgba(128,80,154,.42)'};
(function(){
  const stamps=PETALAS.cores.map(c=>{const s=document.createElement('canvas');s.width=s.height=48;const g=s.getContext('2d');g.translate(24,24);
    g.beginPath();g.moveTo(0,-19);g.bezierCurveTo(15,-14,17,8,3,19);g.lineTo(0,14.5);g.lineTo(-3,19);g.bezierCurveTo(-17,8,-15,-14,0,-19);g.closePath();
    const gr=g.createLinearGradient(0,-19,0,19);gr.addColorStop(0,'#fffdf9');gr.addColorStop(.38,c);gr.addColorStop(1,c);g.fillStyle=gr;g.fill();
    g.strokeStyle=PETALAS.veio;g.lineWidth=1;g.beginPath();g.moveTo(0,-13);g.quadraticCurveTo(1.5,2,0,13);g.stroke();return s});

  // --- chão: pétalas pousadas no fim da página (desenho fixo, sempre igual) ---
  const chao=document.querySelector('.chao-petalas canvas');
  function desenharChao(){
    if(!chao)return;const dpr=Math.min(window.devicePixelRatio||1,2),W=chao.clientWidth,H=chao.clientHeight;if(!W||!H)return;
    chao.width=W*dpr;chao.height=H*dpr;const g=chao.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,W,H);
    let seed=20261009;const rnd=()=>(seed=(seed*1664525+1013904223)>>>0)/4294967296;
    const n=Math.round(W/3.2);
    for(let i=0;i<n;i++){
      const d=Math.pow(rnd(),2.4);                       // a maioria fica bem embaixo; poucas mais acima
      const s=10+rnd()*16,x=rnd()*W,y=H-4-s*.18-d*(H-18);
      g.save();g.translate(x,y);g.rotate((rnd()-.5)*2.6+Math.PI/2);g.scale(1,.42+rnd()*.3);   // deitadas
      g.globalAlpha=.55+(1-d)*.4;g.drawImage(stamps[(rnd()*stamps.length)|0],-s/2,-s/2,s,s);g.restore();
    }
  }
  desenharChao();window.addEventListener('resize',desenharChao);

  // --- queda ---
  const cv=document.getElementById('petalas');if(!cv||!PETALAS.on)return;
  const calm=window.matchMedia('(prefers-reduced-motion: reduce)');if(calm.matches){cv.remove();return}
  const ctx=cv.getContext('2d');let W=0,H=0,dpr=1,list=[],last=0,raf=0,px=-9999,py=-9999;
  function novo(topo){const z=Math.random();return{x:Math.random()*W,y:topo?-30-Math.random()*H*.3:Math.random()*H,z,s:11+z*17,vy:20+z*38+Math.random()*10,vx:-(6+Math.random()*16),
    a:Math.random()*6.28,va:(Math.random()-.5)*1.6,f:Math.random()*6.28,vf:.8+Math.random()*1.8,w:Math.random()*6.28,vw:.5+Math.random()*.9,c:(Math.random()*stamps.length)|0,ox:0,oy:0}}
  function medir(){dpr=Math.min(window.devicePixelRatio||1,2);W=window.innerWidth;H=window.innerHeight;cv.width=W*dpr;cv.height=H*dpr;
    const n=Math.max(PETALAS.min,Math.min(PETALAS.max,Math.round(W/PETALAS.porLargura)));
    while(list.length<n)list.push(novo(false));list.length=n}
  function quadro(t){
    raf=requestAnimationFrame(quadro);const dt=Math.min(.05,(t-last)/1000||0);last=t;
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
    for(const p of list){
      p.w+=p.vw*dt;p.a+=p.va*dt;p.f+=p.vf*dt;
      const dx=p.x-px,dy=p.y-py,d2=dx*dx+dy*dy;if(d2<32400){const d=Math.sqrt(d2)||1,k=(1-d/180)*260;p.ox+=dx/d*k*dt;p.oy+=dy/d*k*dt}
      p.ox*=1-2.2*dt;p.oy*=1-2.2*dt;
      p.x+=(p.vx+Math.sin(p.w)*26*(.5+p.z)+p.ox)*dt;p.y+=(p.vy+p.oy)*dt;   // o vento leva para a esquerda, saindo do galho
      if(p.y>H+30||p.x<-40||p.x>W+60)Object.assign(p,novo(true),p.x<-40?{x:W+20,y:Math.random()*H*.6}:{});
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.scale(Math.cos(p.f)*.75+.25*Math.sign(Math.cos(p.f)||1),1);
      ctx.globalAlpha=.5+p.z*.42;ctx.drawImage(stamps[p.c],-p.s/2,-p.s/2,p.s,p.s);ctx.restore();
    }
  }
  function ligar(){if(!raf){last=performance.now();raf=requestAnimationFrame(quadro)}}
  function desligar(){cancelAnimationFrame(raf);raf=0}
  medir();ligar();
  window.addEventListener('resize',medir);
  window.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'){px=e.clientX;py=e.clientY}},{passive:true});
  document.addEventListener('visibilitychange',()=>document.hidden?desligar():ligar());
  calm.addEventListener?.('change',()=>{if(calm.matches){desligar();ctx.clearRect(0,0,W,H)}else ligar()});
})();
// Menu: transparente no topo, com fundo ao rolar.
(function(){const h=document.querySelector('header');if(!h)return;const f=()=>h.classList.toggle('is-scrolled',window.scrollY>24);f();window.addEventListener('scroll',f,{passive:true})})();
