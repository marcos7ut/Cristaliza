(function(){
  /* Revalida tudo o que vem do armazenamento do navegador: só entra na sacola
     o que existe no catálogo, com essência válida, cor curta e quantidade 1 a 99. */
  try{
    var changed=false;
    Object.keys(bag).forEach(function(k){
      var parts=k.split('|'),id=parts[0],sc=parts[1]||'',co=parts[2]||'',p=products.find(function(x){return x.id===id}),ok=!!p&&parts.length<=3;
      if(ok&&isCustom(p)){ok=!!sc&&scentFamilies.some(function(f){return f.scents.indexOf(sc)>-1})&&co.length<=40&&!/[\u0000-\u001f\u007f<>]/.test(co)}
      else if(ok){ok=parts.length===1}
      var n=bag[k];
      if(!ok||!Number.isInteger(n)||n<1||n>99){delete bag[k];changed=true}
    });
    if(changed)persist();
  }catch(e){}
  /* Campos de texto livre com limite também no código (além do atributo maxlength) */
  [['customer',80],['notes',500]].forEach(function(c){var el=document.getElementById(c[0]);if(el)el.addEventListener('input',function(){if(el.value.length>c[1])el.value=el.value.slice(0,c[1])})});
})();
