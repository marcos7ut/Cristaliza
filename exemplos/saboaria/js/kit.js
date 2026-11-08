(function(){
  var KIT_FLAG='lavanda-kit',sel={},cat='sabonetes',dlg=document.getElementById('kit-dialog');
  var CATS={sabonetes:'Sabonetes',esfoliantes:'Esfoliantes',cremes:'Cremes',aromas:'Aromas para ambientes',espiritualidade:'Espiritualidade'};
  var ORDER=['sabonetes','esfoliantes','cremes','aromas','espiritualidade'];
  function pool(){return products.filter(function(p){return p.category!=='kits'&&p.category!=='automotivo'})}
  function pid(id){return products.find(function(x){return x.id===id})}
  function qtyOf(id){return sel[id].reduce(function(a,l){return a+l.qty},0)}
  function count(){var n=0;Object.keys(sel).forEach(function(id){sel[id].forEach(function(l){n+=l.qty})});return n}
  function totals(){var sum=0,priced=false,unpriced=false;Object.keys(sel).forEach(function(id){var p=pid(id);sel[id].forEach(function(l){if(p.price){sum+=p.price*l.qty;priced=true}else unpriced=true})});return{sum:sum,priced:priced,unpriced:unpriced}}
  function scentOptions(cur){return '<option value="">Escolha a essência</option>'+scentFamilies.map(function(f){return '<optgroup label="'+esc(f.name)+'">'+f.scents.map(function(x){return '<option'+(x===cur?' selected':'')+'>'+esc(x)+'</option>'}).join('')+'</optgroup>'}).join('')}
  function lineHtml(p,l,i,n){
    var custom=isCustom(p);
    return '<div class="kit-line" data-id="'+p.id+'" data-i="'+i+'">'+(custom?'<div class="kit-fields"><label>Essência<select data-k="scent" aria-label="Essência de '+esc(p.name)+'">'+scentOptions(l.scent)+'</select></label><label>Cor (opcional)<input type="text" data-k="color" maxlength="40" placeholder="Ex.: lilás, natural" value="'+esc(l.color||'')+'"></label></div>':'<div><label>Quantidade</label></div>')+'<div class="kit-qty"><button type="button" data-q="-1" aria-label="Diminuir">−</button><span>'+l.qty+'</span><button type="button" data-q="1" aria-label="Aumentar">+</button>'+(custom&&n>1?'<button class="kit-x" type="button" data-rm aria-label="Remover esta essência">×</button>':'')+'</div></div>'
  }
  function renderChips(){
    var present=ORDER.filter(function(c){return pool().some(function(p){return p.category===c})});
    document.getElementById('kit-chips').innerHTML=present.map(function(c){return '<button type="button" data-cat="'+c+'" aria-pressed="'+(c===cat)+'">'+CATS[c]+'</button>'}).join('');
  }
  function renderGrid(){
    var list=pool().filter(function(p){return p.category===cat});
    document.getElementById('kit-grid').innerHTML=list.map(function(p){
      var on=!!sel[p.id];
      return '<button type="button" class="kit-pick" data-pick="'+p.id+'" aria-pressed="'+on+'"><div class="kit-photo"><img src="'+p.image+'" alt="'+esc(p.name)+'" loading="lazy"></div><span class="kit-check" aria-hidden="true">'+(on?'✓':'+')+'</span><div class="kit-meta"><b>'+esc(p.name)+'</b><span>'+esc(p.kind)+(isCustom(p)?' · 36 essências':'')+'</span><span class="kit-price">'+(p.price?money(p.price):'Valor sob consulta')+'</span></div></button>'
    }).join('');
  }
  function totalRow(){var t=totals();return '<div class="kit-total"><span>Total do kit'+(t.unpriced?'<small>'+(t.priced?'sem os itens sob consulta':'valores sob consulta')+'</small>':'')+'</span><b>'+(t.priced?money(t.sum):'—')+'</b></div>'}
  function renderTray(){
    var ids=Object.keys(sel),tr=document.getElementById('kit-tray');tr.hidden=!ids.length;
    if(!ids.length){tr.innerHTML='';return}
    tr.innerHTML='<h3>Seu kit</h3>'+ids.map(function(id){var p=pid(id),n=sel[id].length;
      return '<div class="kit-group" data-g="'+id+'"><div class="kit-ghead"><img src="'+p.image+'" alt=""><div class="kit-gtxt"><b>'+esc(p.name)+'</b><small>'+esc(p.description||'')+'</small></div><span class="kit-gprice">'+(p.price?'<i>'+money(p.price)+' cada</i>'+money(p.price*qtyOf(id)):'sob consulta')+'</span><button type="button" class="kit-gx" data-del="'+id+'" aria-label="Remover '+esc(p.name)+' do kit">×</button></div><div class="kit-lines">'+sel[id].map(function(l,i){return lineHtml(p,l,i,n)}).join('')+(isCustom(p)?'<button type="button" class="kit-more" data-more="'+id+'">+ Adicionar outra essência</button>':'')+'</div></div>'}).join('')+totalRow();
  }
  function summary(){
    var n=count(),t=totals(),btn=document.getElementById('kit-add'),h=document.getElementById('kit-hint');
    document.getElementById('kit-sum').innerHTML=n?('<span>'+n+(n===1?' item':' itens')+' no kit</span>'+(t.priced?'<b>'+money(t.sum)+'</b>':'')+(t.unpriced?'<small>'+(t.priced?'+ itens sob consulta':'Valores sob consulta')+'</small>':'')):'<span>Nenhum item escolhido ainda</span>';
    btn.disabled=n<2;h.classList.remove('is-bad');
    h.textContent=n<2?(n?'Escolha pelo menos mais um item para formar o kit.':'Escolha pelo menos dois itens para formar o kit.'):'';
  }
  function renderAll(){var top=dlg.scrollTop;renderChips();renderGrid();renderTray();summary();dlg.scrollTop=top}
  function open(){renderAll();if(!dlg.open)dlg.showModal()}
  document.addEventListener('click',function(e){
    var o=e.target.closest('[data-open-kit]');
    if(o){e.preventDefault();var mt=document.getElementById('menu-toggle');if(mt&&mt.getAttribute('aria-expanded')==='true')mt.click();open();return}
    var d=e.target.closest('[data-detail]');
    if(d&&d.dataset.detail==='kit'){e.preventDefault();e.stopPropagation();open()}
  },true);
  dlg.addEventListener('click',function(e){
    if(e.target===dlg||e.target.closest('#close-kit')){dlg.close();return}
    var c=e.target.closest('[data-cat]');if(c){cat=c.dataset.cat;renderChips();renderGrid();return}
    var k=e.target.closest('[data-pick]');
    if(k){var id=k.dataset.pick;if(sel[id])delete sel[id];else sel[id]=[{scent:'',color:'',qty:1}];renderGrid();renderTray();summary();
      if(sel[id]&&isCustom(pid(id))){var tr=document.getElementById('kit-tray'),g=tr.querySelector('[data-g="'+id+'"]');if(g)g.scrollIntoView({block:'nearest',behavior:'smooth'})}return}
    var dl=e.target.closest('[data-del]');if(dl){delete sel[dl.dataset.del];renderGrid();renderTray();summary();return}
    var m=e.target.closest('[data-more]');if(m){sel[m.dataset.more].push({scent:'',color:'',qty:1});renderTray();summary();return}
    var q=e.target.closest('[data-q]');
    if(q){var ln=q.closest('.kit-line'),l=sel[ln.dataset.id][+ln.dataset.i];l.qty=Math.max(1,Math.min(99,l.qty+(+q.dataset.q)));renderTray();summary();return}
    var r=e.target.closest('[data-rm]');if(r){var ln2=r.closest('.kit-line');sel[ln2.dataset.id].splice(+ln2.dataset.i,1);renderTray();summary();return}
    if(e.target.closest('#kit-add'))add();
  });
  dlg.addEventListener('input',function(e){
    var ln=e.target.closest('.kit-line');if(!ln)return;var l=sel[ln.dataset.id][+ln.dataset.i],k=e.target.dataset.k;
    if(k==='scent'){l.scent=e.target.value;e.target.classList.remove('is-missing');summary()}
    if(k==='color')l.color=e.target.value.replace(/[|]/g,' ');
  });
  function add(){
    var miss=null;
    Object.keys(sel).forEach(function(id){if(isCustom(pid(id)))sel[id].forEach(function(l,i){if(!l.scent&&!miss)miss={id:id,i:i}})});
    if(miss){var el=dlg.querySelector('.kit-line[data-id="'+miss.id+'"][data-i="'+miss.i+'"] select');if(el){el.classList.add('is-missing');el.scrollIntoView({block:'nearest',behavior:'smooth'});el.focus()}var h=document.getElementById('kit-hint');h.classList.add('is-bad');h.textContent='Escolha a essência dos itens marcados em rosa.';return}
    Object.keys(sel).forEach(function(id){var p=pid(id);sel[id].forEach(function(l){
      var key=isCustom(p)?id+'|'+l.scent+'|'+(l.color||'').trim():id;
      bag[key]=Math.min(99,(bag[key]||0)+l.qty)})});
    try{localStorage.setItem(KIT_FLAG,'1')}catch(e){}
    persist();sel={};dlg.close();toast('Seu kit foi para a sacola ♡');
    var b=document.getElementById('open-bag');if(b)setTimeout(function(){b.click()},350);
  }
  // Cartão do Kit de Carinho: sem preço, com botão "Monte seu kit"
  var kitP=pid('kit');
  if(kitP){kitP.kind='Presente sob medida';kitP.description='Seu presente, do seu jeito.'}
  // Janela de detalhes do Kit: sem "sob consulta", botão leva ao montador
  var _ff=fillFicha;
  fillFicha=function(p){
    _ff(p);
    var add=document.getElementById('detail-add'),isK=!!(p&&p.id==='kit');
    if(isK){
      document.getElementById('detail-size').textContent='Você escolhe os itens';
      document.getElementById('detail-price').textContent='Soma dos itens escolhidos';
      add.textContent='Monte seu kit →';add.setAttribute('data-open-kit','');
    }else{add.textContent='Adicionar à sacola';add.removeAttribute('data-open-kit')}
  };
  document.getElementById('detail-add').addEventListener('click',function(e){
    if(this.hasAttribute('data-open-kit')){e.stopImmediatePropagation();var d=document.getElementById('product-dialog');if(d&&d.open)d.close()}
  },true);
  var _pc=productCard;
  productCard=function(p){
    var h=_pc(p);
    if(p&&p.id==='kit')h=h.replace(/<div class="product-bottom">[\s\S]*<\/div><\/div><\/article>$/,'<div class="product-bottom"><button type="button" class="primary kit-card-btn" data-open-kit>Monte seu kit <span>→</span></button></div></div></article>');
    return h;
  };
  document.getElementById('gift-products').innerHTML=products.filter(function(p){return p.category==='kits'}).sort(function(a,b){return (b.id==='kit')-(a.id==='kit')}).map(productCard).join('');
  render();
  var _om=orderMessage;
  orderMessage=function(){
    var m=_om(),f=null;try{f=localStorage.getItem(KIT_FLAG)}catch(e){}
    if(f&&Object.keys(bag).length)m=m.replace('Gostaria de consultar este pedido:','Quero montar um kit personalizado. Estes são os itens:');
    return m;
  };
})();
