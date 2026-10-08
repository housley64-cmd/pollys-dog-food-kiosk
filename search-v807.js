
(function(){
  function sets(){
    return [
      ['Fromm',typeof FROMM_PRODUCTS!=='undefined'?FROMM_PRODUCTS:[]],
      ['ACANA',typeof ACANA_PRODUCTS!=='undefined'?ACANA_PRODUCTS:[]],
      ['Taste of the Wild',typeof TASTE_WILD_PRODUCTS!=='undefined'?TASTE_WILD_PRODUCTS:[]],
      ['Science Diet',typeof SCIENCE_DIET_PRODUCTS!=='undefined'?SCIENCE_DIET_PRODUCTS:[]],
      ['Ultimates',typeof ULTIMATES_PRODUCTS!=='undefined'?ULTIMATES_PRODUCTS:[]],
      ['SquarePet',typeof SQUAREPET_PRODUCTS!=='undefined'?SQUAREPET_PRODUCTS:[]],
      ['Nulo',typeof NULO_PRODUCTS!=='undefined'?NULO_PRODUCTS:[]],
      ['NutriSource',typeof NUTRISOURCE_PRODUCTS!=='undefined'?NUTRISOURCE_PRODUCTS:[]],
      ['Diamond Naturals',typeof DIAMOND_NATURALS_PRODUCTS!=='undefined'?DIAMOND_NATURALS_PRODUCTS:[]],
      ['Redbarn',typeof REDBARN_PRODUCTS!=='undefined'?REDBARN_PRODUCTS:[]],
      ['Zignature',typeof ZIGNATURE_PRODUCTS!=='undefined'?ZIGNATURE_PRODUCTS:[]],
      ['ORIJEN',typeof ORIJEN_PRODUCTS!=='undefined'?ORIJEN_PRODUCTS:[]],
      ['Open Farm',typeof OPEN_FARM_PRODUCTS!=='undefined'?OPEN_FARM_PRODUCTS:[]],
      ['KOHA',typeof KOHA_PRODUCTS!=='undefined'?KOHA_PRODUCTS:[]],
      ['CanineX',typeof CANINEX_PRODUCTS!=='undefined'?CANINEX_PRODUCTS:[]],
      ['My Perfect Pet',typeof MY_PERFECT_PET_PRODUCTS!=='undefined'?MY_PERFECT_PET_PRODUCTS:[]],
      ['A Pup Above',typeof A_PUP_ABOVE_COLD_PRODUCTS!=='undefined'?A_PUP_ABOVE_COLD_PRODUCTS:[]],
      ["Tucker's",typeof TUCKERS_PRODUCTS!=='undefined'?TUCKERS_PRODUCTS:[]],
      ['ORIJEN FreshPrey',typeof ORIJEN_FRESHPREY_PRODUCTS!=='undefined'?ORIJEN_FRESHPREY_PRODUCTS:[]],
      ["Oma's Pride",typeof OMAS_PRIDE_PRODUCTS!=='undefined'?OMAS_PRIDE_PRODUCTS:[]],
      ['OC Raw',typeof OC_RAW_PRODUCTS!=='undefined'?OC_RAW_PRODUCTS:[]],
      ['MuttGut',typeof MUTTGUT_PRODUCTS!=='undefined'?MUTTGUT_PRODUCTS:[]],
      ['Primal',typeof PRIMAL_PRODUCTS!=='undefined'?PRIMAL_PRODUCTS:[]]
    ];
  }
  var catalog=[];
  sets().forEach(function(s){s[1].forEach(function(p){catalog.push({brand:s[0],product:p})})});

  function text(e){
    var p=e.product;
    return [e.brand,p.name,p.line,p.life,p.protein,p.description,p.ingredients,p.analysis,(p.tags||[]).join(' ')].join(' ').toLowerCase();
  }
  function rank(e,terms){
    var hay=text(e),name=(e.product.name||'').toLowerCase(),brand=(e.brand||'').toLowerCase(),n=0;
    for(var i=0;i<terms.length;i++){
      if(hay.indexOf(terms[i])<0)return -1;
      if(name.indexOf(terms[i])>=0)n+=8;
      if(brand.indexOf(terms[i])>=0)n+=6;
      if((e.product.protein||'').toLowerCase().indexOf(terms[i])>=0)n+=4;
      if((e.product.life||'').toLowerCase().indexOf(terms[i])>=0)n+=4;
      n++;
    }
    return n;
  }
  function openProduct(e){
    try{
      sessionStorage.setItem('pollysSelectedProduct',JSON.stringify(e.product));
      sessionStorage.setItem('pollysSelectedBrand',e.brand||'');
      sessionStorage.setItem('pollysSelectedReturnContext',JSON.stringify({type:'search',query:document.getElementById('searchInput').value||''}));
    }catch(x){}
    window.location.href='product-detail.html?v=807';
  }
  function makeCard(e){
    var p=e.product,c=document.createElement('article');c.className='card';c.onclick=function(){openProduct(e)};
    c.innerHTML='<div class="img"><img src="'+(p.image||'')+'" alt="'+(p.name||'')+'" onerror="this.style.display=\'none\'"></div>'+
      '<div class="body"><div class="brand">'+e.brand+'</div><div class="name">'+(p.name||'Dog Food')+'</div>'+
      '<div class="meta">'+[p.life,p.protein].filter(Boolean).join(' • ')+'</div>'+
      "<div class=\"meta\">Polly's Sizes: "+(p.carriedSize||"Ask an associate")+"</div></div>";
    return c;
  }
  function search(){
    var q=document.getElementById('searchInput').value.trim().toLowerCase(),grid=document.getElementById('results'),status=document.getElementById('status');
    grid.innerHTML='';
    if(!q){status.textContent="Start typing to search the foods Polly's carries.";return}
    var terms=q.split(/\s+/).filter(Boolean);
    var hits=catalog.map(function(e){return {e:e,s:rank(e,terms)}}).filter(function(x){return x.s>=0})
      .sort(function(a,b){return b.s-a.s||a.e.brand.localeCompare(b.e.brand)}).slice(0,60);
    status.textContent=hits.length+' matching foods found';
    if(!hits.length){grid.innerHTML='<div class="empty">No foods matched. Try a brand, protein, life stage, or another keyword.</div>';return}
    hits.forEach(function(x){grid.appendChild(makeCard(x.e))});
  }
  var input=document.getElementById('searchInput');
  var form=document.getElementById('searchForm');

  input.addEventListener('input',search);

  form.addEventListener('submit',function(e){
    e.preventDefault();
    search();
    input.blur();
    return false;
  });

  input.addEventListener('keydown',function(e){
    if(e.key==='Enter' || e.keyCode===13 || e.which===13){
      e.preventDefault();
      search();
      input.blur();
      return false;
    }
  });

  input.addEventListener('keyup',function(e){
    if(e.key==='Enter' || e.keyCode===13 || e.which===13){
      e.preventDefault();
      search();
      input.blur();
      return false;
    }
  });


  try{
    var params=new URLSearchParams(window.location.search);
    var saved=params.get('q');
    if(saved){input.value=saved;search();}
  }catch(e){}

  document.getElementById('clearSearch').onclick=function(){
    input.value='';
    search();
    input.focus();
  };
})();
