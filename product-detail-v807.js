(function(){
  function get(id){return document.getElementById(id)}
  function proteinAmount(p){
    if(p.proteinAmount)return p.proteinAmount;
    var m=(p.analysis||'').match(/Crude Protein\s*(\d+(?:\.\d+)?)%\s*(min)?/i);
    return m?m[1]+'% min':'See guaranteed analysis';
  }
  var product=null,brand='';
  try{product=JSON.parse(sessionStorage.getItem('pollysSelectedProduct')||'null');brand=sessionStorage.getItem('pollysSelectedBrand')||''}catch(e){}
  if(!product){window.location.replace('index.html?v=807');return}
  var accentMap={
    'ACANA':'ACANA RECIPE DETAILS','Taste of the Wild':'TASTE OF THE WILD RECIPE DETAILS','Science Diet':'SCIENCE DIET RECIPE DETAILS',
    'Ultimates':'ULTIMATES RECIPE DETAILS','SquarePet':'SQUAREPET RECIPE DETAILS','Nulo':'NULO RECIPE DETAILS','NutriSource':'NUTRISOURCE RECIPE DETAILS',
    'Diamond Naturals':'DIAMOND NATURALS RECIPE DETAILS','Redbarn':'REDBARN RECIPE DETAILS','Zignature':'ZIGNATURE RECIPE DETAILS','KOHA':'KOHA RECIPE DETAILS',
    'Open Farm':'OPEN FARM RECIPE DETAILS','ORIJEN FreshPrey':'ORIJEN FRESHPREY RECIPE DETAILS','OC Raw':'OC RAW RECIPE DETAILS','Primal':'PRIMAL RECIPE DETAILS',
    'ORIJEN':'ORIJEN RECIPE DETAILS',"Tucker's":"TUCKER'S RECIPE DETAILS",'My Perfect Pet':'MY PERFECT PET RECIPE DETAILS','A Pup Above':'A PUP ABOVE RECIPE DETAILS',
    'CanineX':'CANINEX RECIPE DETAILS',"Oma's Pride":"OMA'S PRIDE RECIPE DETAILS",'MuttGut':'MUTTGUT RECIPE DETAILS','Fromm':'FROMM RECIPE DETAILS'
  };
  get('brandAccent').textContent=accentMap[brand]||'PRODUCT DETAILS';
  get('detailLine').textContent=(product.line||'')+(brand?' • '+brand:'');
  get('detailName').textContent=product.name||'Product Details';
  get('detailImage').src=product.image||'';get('detailImage').alt=product.name||'';
  get('detailCarrySize').textContent=product.carriedSize||'';
  get('detailSizes').textContent=product.availableSizes||'';
  get('ingredientsHeading').textContent=product.ingredientsTitle||'Ingredients';
  get('detailIngredients').textContent=product.ingredients||'';
  get('detailProteinAmount').textContent=proteinAmount(product);
  get('proteinLabel').textContent=brand==='Science Diet'?'Protein':'Crude Protein';
  get('detailAnalysis').textContent=product.analysis||'';
  get('detailCalories').textContent=product.calories||'';
  function goBack(){
    var ctx=null;
    try{ctx=JSON.parse(sessionStorage.getItem('pollysSelectedReturnContext')||'null')}catch(e){}
    if(ctx && ctx.type==='search'){
      window.location.href='search.html?v=807&q='+encodeURIComponent(ctx.query||'');
      return;
    }
    if(ctx){
      try{sessionStorage.setItem('pollysResumeContext',JSON.stringify(ctx))}catch(e){}
      window.location.href='index.html?v=807';
      return;
    }
    if(history.length>1){history.back();return}
    window.location.href='index.html?v=807';
  }
  get('backTop').onclick=goBack;get('backBottom').onclick=goBack;
  get('homeTop').onclick=function(){window.location.href='index.html?v=807'};
  get('websiteBtn').onclick=function(){window.location.href='https://www.pollyspets.com/'};
})();
