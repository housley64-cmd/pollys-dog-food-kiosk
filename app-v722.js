var guideStep=0,guideAnswers={},currentProduct=null,currentBrand='Fromm';
var guideQuestions=[
  {key:'age',title:'How old is your dog?',subtitle:'Choose the closest match.',answers:['Puppy','Adult','Senior','All Life Stages']},
  {key:'need',title:'What is most important to you?',subtitle:'Choose the closest match.',answers:['Everyday Nutrition','Sensitive Stomach','Skin & Coat','Weight Support']},
  {key:'protein',title:'Any protein preference?',subtitle:'Choose a protein.',answers:['Chicken','Beef','Lamb','Fish / Salmon']}
];

function hideAllScreens(){['homeScreen','brandScreen','frommScreen','acanaScreen','productDetailScreen','brandDetailScreen','sectionScreen','guideScreen','guideResultScreen'].forEach(function(id){var el=document.getElementById(id);if(el){el.className='screen';}})}
function showHome(){hideAllScreens();document.getElementById('homeScreen').className='screen active-screen';guideStep=0;guideAnswers={};window.scrollTo(0,0)}
function showBrandScreen(){hideAllScreens();buildBrandGrid();document.getElementById('brandScreen').className='screen brand-picture-screen active-screen';window.scrollTo(0,0)}
function showFromm(){hideAllScreens();buildFrommProducts(FROMM_PRODUCTS);resetFilterRow(document.querySelectorAll('#frommScreen .filter-btn'));document.querySelector('#frommScreen .filter-btn').className='filter-btn active';document.getElementById('frommScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function showAcana(){hideAllScreens();buildAcanaProducts(ACANA_PRODUCTS);resetFilterRow(document.querySelectorAll('#acanaScreen .filter-btn'));document.querySelector('#acanaScreen .filter-btn').className='filter-btn active';document.getElementById('acanaScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function resetFilterRow(nodes){nodes.forEach(function(b){b.className='filter-btn'})}
function buildBrandGrid(){var g=document.getElementById('brandGrid');if(g.children.length)return;DOG_FOOD_BRANDS.forEach(function(b){var x=document.createElement('button');x.className='brand-sign';x.innerHTML='<span class="brand-name">'+b.name+'</span><span class="brand-note">'+b.note+'</span>';x.onclick=function(){openBrand(b.name)};g.appendChild(x)})}
function openBrand(name){if(name==='Fromm'){showFromm();return}if(name==='ACANA'){showAcana();return}hideAllScreens();document.getElementById('brandDetailTitle').innerHTML=name;document.getElementById('brandDetailText').innerHTML="Explore <strong>"+name+"</strong> dog foods carried at Polly's Pets.";document.getElementById('brandDetailScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}

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
  document.getElementById('detailBrandAccent').innerHTML = brandKey === 'ACANA' ? 'ACANA RECIPE DETAILS' : 'FROMM RECIPE DETAILS';
  document.getElementById('detailLine').innerHTML = product.line + ' • ' + brandKey;
  document.getElementById('detailName').innerHTML = product.name;
  document.getElementById('detailImage').src = product.image;
  document.getElementById('detailImage').alt = product.name;
  document.getElementById('detailCarrySize').innerHTML = product.carriedSize;
  document.getElementById('detailSizes').innerHTML = product.availableSizes;
  document.getElementById('ingredientsHeading').innerHTML = product.ingredientsTitle || 'Ingredients';
  document.getElementById('detailIngredients').innerHTML = product.ingredients || '';
  document.getElementById('detailProteinAmount').innerHTML = getProteinAmount(product) || 'See guaranteed analysis';
  document.getElementById('detailAnalysis').innerHTML = product.analysis || '';
  document.getElementById('detailCalories').innerHTML = product.calories || '';
  var backLabel = brandKey === 'ACANA' ? '← Back to ACANA' : '← Back to Fromm';
  var backFn = brandKey === 'ACANA' ? showAcana : showFromm;
  var topBtn = document.getElementById('detailBackTop');
  var bottomBtn = document.getElementById('detailBackBottom');
  topBtn.innerHTML = backLabel; bottomBtn.innerHTML = backLabel;
  topBtn.onclick = backFn; bottomBtn.onclick = backFn;
  document.getElementById('productDetailScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function openPollysWebsite(){ window.location.href='https://www.pollyspets.com/'; }
function openSection(t,d){hideAllScreens();document.getElementById('sectionTitle').innerHTML=t;document.getElementById('sectionDescription').innerHTML=d;document.getElementById('sectionScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function startGuide(){guideStep=0;guideAnswers={};showGuideQuestion()}
function showGuideQuestion(){hideAllScreens();var q=guideQuestions[guideStep];document.getElementById('questionTitle').innerHTML=q.title;document.getElementById('questionSubtitle').innerHTML=q.subtitle;var g=document.getElementById('answerGrid');g.innerHTML='';q.answers.forEach(function(a){var b=document.createElement('button');b.className='answer-btn';b.innerHTML=a;b.onclick=function(){selectGuideAnswer(a)};g.appendChild(b)});document.getElementById('guideScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function selectGuideAnswer(v){var q=guideQuestions[guideStep];guideAnswers[q.key]=v;if(guideStep<guideQuestions.length-1){guideStep++;showGuideQuestion()}else{showGuideResult()}}
function previousGuideStep(){if(guideStep===0)showHome();else{guideStep--;showGuideQuestion()}}
function showGuideResult(){hideAllScreens();document.getElementById('guideSummary').innerHTML='You selected <strong>'+guideAnswers.age+'</strong>, focused on <strong>'+guideAnswers.need+'</strong>, with <strong>'+guideAnswers.protein+'</strong>.';document.getElementById('guideResultScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
document.addEventListener('contextmenu',function(e){e.preventDefault()});
var idleTimer;function resetIdleTimer(){clearTimeout(idleTimer);idleTimer=setTimeout(showHome,180000)}
document.addEventListener('click',resetIdleTimer);document.addEventListener('touchstart',resetIdleTimer);resetIdleTimer();
