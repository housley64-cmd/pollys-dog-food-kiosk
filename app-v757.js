var guideStep=0,guideAnswers={},currentProduct=null,currentBrand='Fromm';
var guideQuestions=[
  {key:'age',title:'How old is your dog?',subtitle:'Choose the closest match.',answers:['Puppy','Adult','Senior','All Life Stages']},
  {key:'need',title:'What is most important to you?',subtitle:'Choose the closest match.',answers:['Everyday Nutrition','Sensitive Stomach','Skin & Coat','Weight Support']},
  {key:'protein',title:'Any protein preference?',subtitle:'Choose a protein.',answers:['Chicken','Beef','Lamb','Fish / Salmon']}
];

function hideAllScreens(){['homeScreen','brandScreen','frommScreen','acanaScreen','tasteWildScreen','scienceDietScreen','ultimatesScreen','squarePetScreen','nuloScreen','nutriSourceScreen','diamondNaturalsScreen','redbarnScreen','zignatureScreen','orijenScreen','openFarmScreen','kohaScreen','caninexScreen','productDetailScreen','brandDetailScreen','sectionScreen','guideScreen','guideResultScreen'].forEach(function(id){var el=document.getElementById(id);if(el){el.className='screen';}})}
function showHome(){hideAllScreens();document.getElementById('homeScreen').className='screen active-screen';guideStep=0;guideAnswers={};window.scrollTo(0,0)}
function showBrandScreen(){hideAllScreens();buildBrandGrid();document.getElementById('brandScreen').className='screen brand-picture-screen active-screen';window.scrollTo(0,0)}
function showFromm(){hideAllScreens();buildFrommProducts(FROMM_PRODUCTS);resetFilterRow(document.querySelectorAll('#frommScreen .filter-btn'));document.querySelector('#frommScreen .filter-btn').className='filter-btn active';document.getElementById('frommScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function showAcana(){hideAllScreens();buildAcanaProducts(ACANA_PRODUCTS);resetFilterRow(document.querySelectorAll('#acanaScreen .filter-btn'));document.querySelector('#acanaScreen .filter-btn').className='filter-btn active';document.getElementById('acanaScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function showTasteWild(){
  hideAllScreens();
  buildTasteWildProducts(TASTE_WILD_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#tasteWildScreen .filter-btn'));
  document.querySelector('#tasteWildScreen .filter-btn').className='filter-btn active';
  document.getElementById('tasteWildScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}
function showScienceDiet(){
  hideAllScreens();
  buildScienceDietProducts(SCIENCE_DIET_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#scienceDietScreen .filter-btn'));
  document.querySelector('#scienceDietScreen .filter-btn').className='filter-btn active';
  document.getElementById('scienceDietScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}
function showUltimates(){
  hideAllScreens();
  buildUltimatesProducts(ULTIMATES_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#ultimatesScreen .filter-btn'));
  document.querySelector('#ultimatesScreen .filter-btn').className='filter-btn active';
  document.getElementById('ultimatesScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}
function showSquarePet(){
  hideAllScreens();
  buildSquarePetProducts(SQUAREPET_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#squarePetScreen .filter-btn'));
  document.querySelector('#squarePetScreen .filter-btn').className='filter-btn active';
  document.getElementById('squarePetScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function showNulo(){
  hideAllScreens();
  buildNuloProducts(NULO_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#nuloScreen .filter-btn'));
  document.querySelector('#nuloScreen .filter-btn').className='filter-btn active';
  document.getElementById('nuloScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function showNutriSource(){
  hideAllScreens();
  buildNutriSourceProducts(NUTRISOURCE_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#nutriSourceScreen .filter-btn'));
  document.querySelector('#nutriSourceScreen .filter-btn').className='filter-btn active';
  document.getElementById('nutriSourceScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function showDiamondNaturals(){
  hideAllScreens();
  buildDiamondNaturalsProducts(DIAMOND_NATURALS_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#diamondNaturalsScreen .filter-btn'));
  document.querySelector('#diamondNaturalsScreen .filter-btn').className='filter-btn active';
  document.getElementById('diamondNaturalsScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function showRedbarn(){
  hideAllScreens();
  buildRedbarnProducts(REDBARN_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#redbarnScreen .filter-btn'));
  document.querySelector('#redbarnScreen .filter-btn').className='filter-btn active';
  document.getElementById('redbarnScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function showZignature(){
  hideAllScreens();
  buildZignatureProducts(ZIGNATURE_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#zignatureScreen .filter-btn'));
  document.querySelector('#zignatureScreen .filter-btn').className='filter-btn active';
  document.getElementById('zignatureScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function showOrijen(){
  hideAllScreens();
  buildOrijenProducts(ORIJEN_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#orijenScreen .filter-btn'));
  document.querySelector('#orijenScreen .filter-btn').className='filter-btn active';
  document.getElementById('orijenScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function resetFilterRow(nodes){nodes.forEach(function(b){b.className='filter-btn'})}

function showOpenFarm(){
  hideAllScreens();
  buildOpenFarmProducts(OPEN_FARM_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#openFarmScreen .filter-btn'));
  document.querySelector('#openFarmScreen .filter-btn').className='filter-btn active';
  document.getElementById('openFarmScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}


function buildOpenFarmProducts(items){
  var g=document.getElementById('openFarmProductGrid');
  if(!g){ return; }
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Open Farm','zignature-card'));});
}
function filterOpenFarm(filter,btn){
  document.querySelectorAll('#openFarmScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  if(btn){btn.className='filter-btn active';}
  if(filter==='All'){buildOpenFarmProducts(OPEN_FARM_PRODUCTS);return;}
  var f=OPEN_FARM_PRODUCTS.filter(function(p){
    var tags=p.tags||[];
    return p.line===filter || (p.life||'').indexOf(filter)>=0 || tags.indexOf(filter)>=0;
  });
  buildOpenFarmProducts(f);
}


function showKoha(){
  hideAllScreens();
  buildKohaProducts(KOHA_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#kohaScreen .filter-btn'));
  document.querySelector('#kohaScreen .filter-btn').className='filter-btn active';
  document.getElementById('kohaScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}
function buildKohaProducts(items){
  var g=document.getElementById('kohaProductGrid');
  if(!g){return;}
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'KOHA','zignature-card'));});
}
function filterKoha(filter,btn){
  document.querySelectorAll('#kohaScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  if(btn){btn.className='filter-btn active';}
  if(filter==='All'){buildKohaProducts(KOHA_PRODUCTS);return;}
  var f=KOHA_PRODUCTS.filter(function(p){var tags=p.tags||[];return p.line===filter || (p.life||'').indexOf(filter)>=0 || tags.indexOf(filter)>=0 || p.protein===filter;});
  buildKohaProducts(f);
}


function showCanineX(){
  hideAllScreens();
  buildCanineXProducts(CANINEX_PRODUCTS);
  resetFilterRow(document.querySelectorAll('#caninexScreen .filter-btn'));
  document.querySelector('#caninexScreen .filter-btn').className='filter-btn active';
  document.getElementById('caninexScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}
function buildCanineXProducts(items){
  var g=document.getElementById('caninexProductGrid');
  if(!g){return;}
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'CanineX','zignature-card'));});
}
function filterCanineX(filter,btn){
  document.querySelectorAll('#caninexScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  if(btn){btn.className='filter-btn active';}
  if(filter==='All'){buildCanineXProducts(CANINEX_PRODUCTS);return;}
  var f=CANINEX_PRODUCTS.filter(function(p){
    var tags=p.tags||[];
    return p.line===filter || (p.life||'').indexOf(filter)>=0 || tags.indexOf(filter)>=0 || p.protein===filter;
  });
  buildCanineXProducts(f);
}

function buildBrandGrid(){var g=document.getElementById('brandGrid');if(g.children.length)return;DOG_FOOD_BRANDS.forEach(function(b,i){var x=document.createElement('button');x.className='brand-sign wood-brand-sign';x.innerHTML='<span class="brand-name">'+b.name+'</span>';x.title=b.note||'';x.onclick=function(){openBrand(b.name)};g.appendChild(x)})}
function openBrand(name){if(name==='Fromm'){showFromm();return}if(name==='ACANA'){showAcana();return}if(name==='Taste of the Wild'){showTasteWild();return}if(name==='Science Diet'){showScienceDiet();return}if(name==='Ultimates'){showUltimates();return}if(name==='SquarePet'){showSquarePet();return}if(name==='Nulo'){showNulo();return}if(name==='NutriSource'){showNutriSource();return}if(name==='Diamond Naturals'){showDiamondNaturals();return}if(name==='Redbarn'){showRedbarn();return}if(name==='Zignature'){showZignature();return}if(name==='ORIJEN'){showOrijen();return}if(name==='Open Farm'){showOpenFarm();return}if(name==='KOHA'){showKoha();return}if(name==='CanineX'){showCanineX();return}hideAllScreens();document.getElementById('brandDetailTitle').innerHTML=name;document.getElementById('brandDetailText').innerHTML="Explore <strong>"+name+"</strong> dog foods carried at Polly's Pets.";document.getElementById('brandDetailScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}

function getProteinAmount(product){
  if(product.proteinAmount){ return product.proteinAmount; }
  var text = product.analysis || '';
  var match = text.match(/Crude Protein\s*(\d+(?:\.\d+)?)%\s*(min)?/i);
  if(match){ return match[1] + '% min'; }
  return '';
}

function buildProductCard(product, brandKey, cardClass){
  var c=document.createElement('div');
  c.className='product-card'+(cardClass?(' '+cardClass):'');
  c.onclick=function(){openBrandProduct(product, brandKey)};
  c.innerHTML=
    '<div class="product-image-wrap"><img src="'+product.image+'" alt="'+product.name+'" loading="lazy"><div class="size-badge"><span class="badge-label">Polly\'s Sizes</span><span class="badge-size">'+product.carriedSize+'</span></div></div>'+
    '<div class="product-body">'+
      '<div class="product-line">'+product.line+'</div>'+
      '<div class="product-name">'+product.name+'</div>'+
      '<div class="product-meta"><div class="meta-chip">'+product.life+'</div><div class="meta-chip">'+product.protein+'</div></div>'+
      (getProteinAmount(product) ? '<div class="protein-amount-badge">Crude Protein: '+getProteinAmount(product)+'</div>' : '')+
      '<div class="available-sizes">Available Sizes: '+product.availableSizes+'</div>'+
      '<button class="more-info-btn" type="button">Ingredients</button>'+
    '</div>';
  return c;
}

function buildFrommProducts(items){
  var g=document.getElementById('frommProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Fromm','fromm-card'));});
}

function buildAcanaProducts(items){
  var g=document.getElementById('acanaProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'ACANA','acana-card'));});
}


function buildTasteWildProducts(items){
  var g=document.getElementById('tasteWildProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Taste of the Wild','totw-card'));});
}

function filterTasteWild(filter,btn){
  document.querySelectorAll('#tasteWildScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildTasteWildProducts(TASTE_WILD_PRODUCTS);return}
  var f=TASTE_WILD_PRODUCTS.filter(function(p){return p.line===filter || p.life.indexOf(filter)>=0});
  buildTasteWildProducts(f);
}


function buildScienceDietProducts(items){
  var g=document.getElementById('scienceDietProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Science Diet','science-card'));});
}

function filterScienceDiet(filter,btn){
  document.querySelectorAll('#scienceDietScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildScienceDietProducts(SCIENCE_DIET_PRODUCTS);return}
  var f=SCIENCE_DIET_PRODUCTS.filter(function(p){return p.line===filter || p.life.indexOf(filter)>=0});
  buildScienceDietProducts(f);
}


function buildUltimatesProducts(items){
  var g=document.getElementById('ultimatesProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Ultimates','ultimates-card'));});
}
function filterUltimates(filter,btn){
  document.querySelectorAll('#ultimatesScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildUltimatesProducts(ULTIMATES_PRODUCTS);return}
  var f=ULTIMATES_PRODUCTS.filter(function(p){
    if(filter==='Sensitive'){return p.line==='Sensitive'}
    if(filter==='Grain-Free'){return p.line==='Grain-Free'}
    if(filter==='Puppy'){return p.life.indexOf('Puppy')>=0}
    if(filter==='Adult'){return p.life==='Adult'}
    if(filter==='All Life Stages'){return p.life==='All Life Stages'}
    return p.line===filter || p.life.indexOf(filter)>=0;
  });
  buildUltimatesProducts(f);
}


function buildSquarePetProducts(items){
  var g=document.getElementById('squarePetProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'SquarePet','squarepet-card'));});
}
function filterSquarePet(filter,btn){
  document.querySelectorAll('#squarePetScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildSquarePetProducts(SQUAREPET_PRODUCTS);return}
  var f=SQUAREPET_PRODUCTS.filter(function(p){return p.line===filter});
  buildSquarePetProducts(f);
}


function buildNuloProducts(items){
  var g=document.getElementById('nuloProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Nulo','nulo-card'));});
}
function filterNulo(filter,btn){
  document.querySelectorAll('#nuloScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildNuloProducts(NULO_PRODUCTS);return}
  var f=NULO_PRODUCTS.filter(function(p){
    var tags=p.tags||[];
    return p.line===filter || p.life.indexOf(filter)>=0 || tags.indexOf(filter)>=0;
  });
  buildNuloProducts(f);
}


function buildNutriSourceProducts(items){
  var g=document.getElementById('nutriSourceProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'NutriSource','nutrisource-card'));});
}
function filterNutriSource(filter,btn){
  document.querySelectorAll('#nutriSourceScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildNutriSourceProducts(NUTRISOURCE_PRODUCTS);return}
  var f=NUTRISOURCE_PRODUCTS.filter(function(p){
    var tags=p.tags||[];
    return p.line===filter || p.life.indexOf(filter)>=0 || tags.indexOf(filter)>=0;
  });
  buildNutriSourceProducts(f);
}

function buildDiamondNaturalsProducts(items){
  var g=document.getElementById('diamondNaturalsProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Diamond Naturals','diamond-card'));});
}
function filterDiamondNaturals(filter,btn){
  document.querySelectorAll('#diamondNaturalsScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildDiamondNaturalsProducts(DIAMOND_NATURALS_PRODUCTS);return}
  var f=DIAMOND_NATURALS_PRODUCTS.filter(function(p){var tags=p.tags||[];return p.life.indexOf(filter)>=0 || tags.indexOf(filter)>=0;});
  buildDiamondNaturalsProducts(f);
}

function buildRedbarnProducts(items){
  var g=document.getElementById('redbarnProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Redbarn','redbarn-card'));});
}
function filterRedbarn(filter,btn){
  document.querySelectorAll('#redbarnScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildRedbarnProducts(REDBARN_PRODUCTS);return}
  var f=REDBARN_PRODUCTS.filter(function(p){var tags=p.tags||[];return p.line===filter || p.life.indexOf(filter)>=0 || tags.indexOf(filter)>=0;});
  buildRedbarnProducts(f);
}

function buildZignatureProducts(items){
  var g=document.getElementById('zignatureProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'Zignature','zignature-card'));});
}
function filterZignature(filter,btn){
  document.querySelectorAll('#zignatureScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildZignatureProducts(ZIGNATURE_PRODUCTS);return}
  var f=ZIGNATURE_PRODUCTS.filter(function(p){var tags=p.tags||[];return p.life.indexOf(filter)>=0 || tags.indexOf(filter)>=0;});
  buildZignatureProducts(f);
}

function buildOrijenProducts(items){
  var g=document.getElementById('orijenProductGrid');
  g.innerHTML='';
  items.forEach(function(p){g.appendChild(buildProductCard(p,'ORIJEN','zignature-card'));});
}
function filterOrijen(filter,btn){
  document.querySelectorAll('#orijenScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildOrijenProducts(ORIJEN_PRODUCTS);return}
  var f=ORIJEN_PRODUCTS.filter(function(p){var tags=p.tags||[];return p.line===filter || p.life.indexOf(filter)>=0 || tags.indexOf(filter)>=0;});
  buildOrijenProducts(f);
}

function filterFromm(filter,btn){
  document.querySelectorAll('#frommScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildFrommProducts(FROMM_PRODUCTS);return}
  var f=FROMM_PRODUCTS.filter(function(p){return p.line===filter || p.life.indexOf(filter)>=0});
  buildFrommProducts(f);
}

function filterAcana(filter,btn){
  document.querySelectorAll('#acanaScreen .filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildAcanaProducts(ACANA_PRODUCTS);return}
  var f=ACANA_PRODUCTS.filter(function(p){return p.line===filter || p.life.indexOf(filter)>=0});
  buildAcanaProducts(f);
}

function openBrandProduct(product, brandKey){
  currentProduct = product;
  currentBrand = brandKey;
  hideAllScreens();
  document.getElementById('detailBrandAccent').innerHTML =
    brandKey === 'ACANA' ? 'ACANA RECIPE DETAILS' :
    brandKey === 'Taste of the Wild' ? 'TASTE OF THE WILD RECIPE DETAILS' :
    brandKey === 'Science Diet' ? 'SCIENCE DIET RECIPE DETAILS' :
    brandKey === 'Ultimates' ? 'ULTIMATES RECIPE DETAILS' :
    brandKey === 'SquarePet' ? 'SQUAREPET RECIPE DETAILS' :
    brandKey === 'Nulo' ? 'NULO RECIPE DETAILS' :
    brandKey === 'NutriSource' ? 'NUTRISOURCE RECIPE DETAILS' :
    brandKey === 'Diamond Naturals' ? 'DIAMOND NATURALS RECIPE DETAILS' :
    brandKey === 'Redbarn' ? 'REDBARN RECIPE DETAILS' :
    brandKey === 'Zignature' ? 'ZIGNATURE RECIPE DETAILS' :
    brandKey === 'KOHA' ? 'KOHA RECIPE DETAILS' :
    brandKey === 'Open Farm' ? 'OPEN FARM RECIPE DETAILS' :
    brandKey === 'ORIJEN' ? 'ORIJEN RECIPE DETAILS' :
    'FROMM RECIPE DETAILS';
  document.getElementById('detailLine').innerHTML = product.line + ' • ' + brandKey;
  document.getElementById('detailName').innerHTML = product.name;
  document.getElementById('detailImage').src = product.image;
  document.getElementById('detailImage').alt = product.name;
  document.getElementById('detailCarrySize').innerHTML = product.carriedSize;
  document.getElementById('detailSizes').innerHTML = product.availableSizes;
  document.getElementById('ingredientsHeading').innerHTML = product.ingredientsTitle || 'Ingredients';
  document.getElementById('detailIngredients').innerHTML = product.ingredients || '';
  document.getElementById('detailProteinAmount').innerHTML = getProteinAmount(product) || 'See guaranteed analysis';
  var proteinLabel = document.querySelector('#productDetailScreen .protein-highlight-box .nutrition-label');
  if(proteinLabel){
    proteinLabel.innerHTML = brandKey === 'Science Diet' ? 'Protein' : 'Crude Protein';
  }
  document.getElementById('detailAnalysis').innerHTML = product.analysis || '';
  document.getElementById('detailCalories').innerHTML = product.calories || '';
  var backLabel =
    brandKey === 'ACANA' ? '← Back to ACANA' :
    brandKey === 'Taste of the Wild' ? '← Back to Taste of the Wild' :
    brandKey === 'Science Diet' ? '← Back to Science Diet' :
    brandKey === 'Ultimates' ? '← Back to Ultimates' :
    brandKey === 'SquarePet' ? '← Back to SquarePet' :
    brandKey === 'Nulo' ? '← Back to Nulo' :
    brandKey === 'NutriSource' ? '← Back to NutriSource' :
    brandKey === 'Diamond Naturals' ? '← Back to Diamond Naturals' :
    brandKey === 'Redbarn' ? '← Back to Redbarn' :
    brandKey === 'Zignature' ? '← Back to Zignature' :
    brandKey === 'CanineX' ? '← Back to CanineX' :
    brandKey === 'KOHA' ? '← Back to KOHA' :
    brandKey === 'Open Farm' ? '← Back to Open Farm' :
    brandKey === 'ORIJEN' ? '← Back to ORIJEN' :
    '← Back to Fromm';
  var backFn =
    brandKey === 'ACANA' ? showAcana :
    brandKey === 'Taste of the Wild' ? showTasteWild :
    brandKey === 'Science Diet' ? showScienceDiet :
    brandKey === 'Ultimates' ? showUltimates :
    brandKey === 'SquarePet' ? showSquarePet :
    brandKey === 'Nulo' ? showNulo :
    brandKey === 'NutriSource' ? showNutriSource :
    brandKey === 'Diamond Naturals' ? showDiamondNaturals :
    brandKey === 'Redbarn' ? showRedbarn :
    brandKey === 'Zignature' ? showZignature :
    brandKey === 'CanineX' ? showCanineX :
    brandKey === 'KOHA' ? showKoha :
    brandKey === 'Open Farm' ? showOpenFarm :
    brandKey === 'ORIJEN' ? showOrijen :
    showFromm;
  var topBtn = document.getElementById('detailBackTop');
  var bottomBtn = document.getElementById('detailBackBottom');
  topBtn.innerHTML = backLabel; bottomBtn.innerHTML = backLabel;
  topBtn.onclick = backFn; bottomBtn.onclick = backFn;
  document.getElementById('productDetailScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function openPollysWebsite(){ window.location.href='https://www.pollyspets.com/'; }
var sectionState={title:'',description:'',mode:'',filter:'All'};

function getCompletedProductCatalog(){
  var sets=[
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
    ['CanineX',typeof CANINEX_PRODUCTS!=='undefined'?CANINEX_PRODUCTS:[]]
  ];
  var out=[];
  sets.forEach(function(set){set[1].forEach(function(p){out.push({brand:set[0],product:p})})});
  return out;
}

function sectionText(entry){
  var p=entry.product;
  return [entry.brand,p.name,p.line,p.life,p.protein,(p.tags||[]).join(' '),p.analysis||'',p.ingredients||''].join(' ').toLowerCase();
}
function isPuppyEntry(e){var t=sectionText(e);return /\bpuppy\b/.test(t) && !/adult/.test((e.product.life||'').toLowerCase());}
function isSeniorEntry(e){var t=sectionText(e);return /\bsenior\b/.test(t);}
function isAdultEntry(e){
  var life=(e.product.life||'').toLowerCase();
  var t=sectionText(e);
  if(isPuppyEntry(e)||isSeniorEntry(e))return false;
  return /adult|all life stages|all lifestages|maintenance/.test(life) || (!/puppy/.test(t) && !/senior/.test(t));
}
function specialNeedType(e){
  var t=sectionText(e);
  if(/active \/ performance|working dogs|high energy|performance nutrition|maximum energy/.test(t))return 'Active / Performance';
  if(/mobility|joint|glucosamine|chondroitin/.test(t))return 'Mobility / Joint';
  if(/low fat|low-fat|digestive support/.test(t))return 'Digestive / Low Fat';
  if(/weight|trim|light|healthy weight|weight management/.test(t))return 'Weight';
  if(/sensitive|digest|stomach|skin/.test(t))return 'Sensitive';
  if(/limited|limited\+|single protein/.test(t))return 'Limited Ingredient';
  if(/large breed/.test(t))return 'Large Breed';
  if(/small breed|small bites/.test(t))return 'Small Breed';
  if(/grain[- ]?free/.test(t))return 'Grain-Free';
  return '';
}
function proteinTypes(e){
  var t=sectionText(e), vals=[];
  [['Chicken','chicken'],['Turkey','turkey'],['Beef','beef'],['Lamb','lamb'],['Pork','pork'],['Salmon','salmon'],['Fish','fish|cod|trout|herring|pollock|whitefish|sardine|mackerel'],['Duck','duck'],['Venison','venison'],['Goat','goat'],['Kangaroo','kangaroo']].forEach(function(x){if(new RegExp(x[1]).test(t))vals.push(x[0])});
  return vals;
}
function getSectionBaseItems(mode){
  var all=getCompletedProductCatalog();
  if(mode==='Puppy')return all.filter(isPuppyEntry);
  if(mode==='Adult')return all.filter(isAdultEntry);
  if(mode==='Senior')return all.filter(isSeniorEntry);
  if(mode==='Special')return all.filter(function(e){return specialNeedType(e)!==''});
  if(mode==='Protein')return all.filter(function(e){return proteinTypes(e).length>0});
  return all;
}
function getSectionFilters(mode,items){
  if(mode==='Puppy')return ['All','Large Breed','Small Breed','Grain-Free'];
  if(mode==='Adult')return ['All','All Life Stages','Large Breed','Small Breed','Grain-Free'];
  if(mode==='Senior')return ['All','Weight','Small Breed'];
  if(mode==='Special')return ['All','Active / Performance','Sensitive','Digestive / Low Fat','Mobility / Joint','Weight','Limited Ingredient','Large Breed','Small Breed','Grain-Free'];
  if(mode==='Protein')return ['All','Chicken','Turkey','Beef','Lamb','Pork','Salmon','Fish','Duck','Venison'];
  return ['All'];
}
function sectionMatchesFilter(e,mode,filter){
  if(filter==='All')return true;
  var t=sectionText(e);
  if(mode==='Special')return specialNeedType(e)===filter || (filter==='Grain-Free' && /grain[- ]?free/.test(t));
  if(mode==='Protein')return proteinTypes(e).indexOf(filter)>=0;
  if(filter==='Large Breed')return /large breed/.test(t);
  if(filter==='Small Breed')return /small breed|small bites/.test(t);
  if(filter==='Grain-Free')return /grain[- ]?free/.test(t);
  if(filter==='All Life Stages')return /all life stages|all lifestages/.test((e.product.life||'').toLowerCase());
  if(filter==='Weight')return /weight|trim|light/.test(t);
  return t.indexOf(filter.toLowerCase())>=0;
}
function buildSectionFilters(mode,items){
  var row=document.getElementById('sectionFilterRow');row.innerHTML='';
  getSectionFilters(mode,items).forEach(function(f){var b=document.createElement('button');b.className='filter-btn'+(f===sectionState.filter?' active':'');b.innerHTML=f;b.onclick=function(){sectionState.filter=f;renderSectionProducts();buildSectionFilters(mode,items)};row.appendChild(b)});
}
function buildCategoryProductCard(entry){
  var card=buildProductCard(entry.product,entry.brand,'category-card');
  var body=card.querySelector('.product-body');
  if(body){var badge=document.createElement('div');badge.className='category-brand-badge';badge.innerHTML=entry.brand;body.insertBefore(badge,body.firstChild)}
  return card;
}
function renderSectionProducts(){
  var grid=document.getElementById('sectionProductGrid');var cold=document.getElementById('coldBrandGrid');
  cold.style.display='none';grid.style.display='grid';grid.innerHTML='';
  var items=getSectionBaseItems(sectionState.mode).filter(function(e){return sectionMatchesFilter(e,sectionState.mode,sectionState.filter)});
  document.getElementById('sectionCount').innerHTML=items.length+' foods found';
  items.forEach(function(e){grid.appendChild(buildCategoryProductCard(e))});
  if(!items.length){grid.innerHTML='<div class="category-empty">No foods match this filter yet. Try another filter.</div>'}
}
function showColdDogFood(){
  var grid=document.getElementById('sectionProductGrid');var cold=document.getElementById('coldBrandGrid');
  grid.style.display='none';cold.style.display='grid';document.getElementById('sectionFilterRow').innerHTML='';
  document.getElementById('sectionCount').innerHTML='Refrigerated, frozen, raw & freeze-dried brands carried at Polly\'s Pets';
  cold.innerHTML='';
  [
    ['Tucker\'s','Frozen raw'],['A Pup Above','Gently cooked'],['OC Raw','Frozen raw'],['Vital Essentials','Raw & freeze-dried'],['Primal','Frozen & freeze-dried']
  ].forEach(function(x){var b=document.createElement('button');b.className='cold-brand-card';b.innerHTML='<span class="cold-brand-name">'+x[0]+'</span><span class="cold-brand-note">'+x[1]+'</span>';b.onclick=function(){openBrand(x[0].replace('\\\'','\''))};cold.appendChild(b)});
}
function openSection(t,d){
  hideAllScreens();sectionState.title=t;sectionState.description=d;sectionState.filter='All';
  document.getElementById('sectionTitle').innerHTML=t;document.getElementById('sectionDescription').innerHTML=d;
  if(t==='Puppy Food')sectionState.mode='Puppy';
  else if(t==='Adult Dog Food')sectionState.mode='Adult';
  else if(t==='Senior Dog Food')sectionState.mode='Senior';
  else if(t==='Special Needs')sectionState.mode='Special';
  else if(t==='Protein')sectionState.mode='Protein';
  else if(t==='Cold Dog Food')sectionState.mode='Cold';
  document.getElementById('sectionScreen').className='screen content-screen active-screen';
  if(sectionState.mode==='Cold'){showColdDogFood()}else{var items=getSectionBaseItems(sectionState.mode);buildSectionFilters(sectionState.mode,items);renderSectionProducts()}
  window.scrollTo(0,0);
}
function startGuide(){guideStep=0;guideAnswers={};showGuideQuestion()}
function showGuideQuestion(){hideAllScreens();var q=guideQuestions[guideStep];document.getElementById('questionTitle').innerHTML=q.title;document.getElementById('questionSubtitle').innerHTML=q.subtitle;var g=document.getElementById('answerGrid');g.innerHTML='';q.answers.forEach(function(a){var b=document.createElement('button');b.className='answer-btn';b.innerHTML=a;b.onclick=function(){selectGuideAnswer(a)};g.appendChild(b)});document.getElementById('guideScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function selectGuideAnswer(v){var q=guideQuestions[guideStep];guideAnswers[q.key]=v;if(guideStep<guideQuestions.length-1){guideStep++;showGuideQuestion()}else{showGuideResult()}}
function previousGuideStep(){if(guideStep===0)showHome();else{guideStep--;showGuideQuestion()}}
function showGuideResult(){hideAllScreens();document.getElementById('guideSummary').innerHTML='You selected <strong>'+guideAnswers.age+'</strong>, focused on <strong>'+guideAnswers.need+'</strong>, with <strong>'+guideAnswers.protein+'</strong>.';document.getElementById('guideResultScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
document.addEventListener('contextmenu',function(e){e.preventDefault()});
var idleTimer;function resetIdleTimer(){clearTimeout(idleTimer);idleTimer=setTimeout(showHome,180000)}
document.addEventListener('click',resetIdleTimer);document.addEventListener('touchstart',resetIdleTimer);resetIdleTimer();
