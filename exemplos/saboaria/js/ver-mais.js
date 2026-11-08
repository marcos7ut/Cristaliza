(function(){
  var mq=window.matchMedia('(max-width:809px)');
  function apply(id,n,label){
    var box=document.getElementById(id);if(!box)return;
    var btn=document.getElementById('more-'+id);
    if(!btn){btn=document.createElement('button');btn.type='button';btn.id='more-'+id;btn.className='more-btn';box.insertAdjacentElement('afterend',btn);
      btn.addEventListener('click',function(){var k=0;box.querySelectorAll('.product.is-more').forEach(function(c){if(k<n){c.classList.remove('is-more');k++}});upd()})}
    function upd(){var h=box.querySelectorAll('.product.is-more').length;btn.hidden=!h;btn.textContent='Ver mais '+label+' ('+h+')'}
    var cards=box.querySelectorAll('.product');
    cards.forEach(function(c,i){c.classList.toggle('is-more',mq.matches&&!(typeof query!=='undefined'&&query)&&i>=n)});
    upd();
  }
  var _r=render;
  render=function(){_r.apply(null,arguments);apply('products',8,'produtos')};
  render();
  apply('gift-products',4,'presentes');
  if(mq.matches&&scentFamily==='todas'&&scentFamilies.length){scentFamily=scentFamilies[0].id;renderScents()}
})();
