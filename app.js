var guideStep=0,guideAnswers={},currentProduct=null;
var guideQuestions=[{key:'age',title:'How old is your dog?',subtitle:'Choose the closest match.',answers:['Puppy','Adult','Senior','All Life Stages']},{key:'need',title:'What is most important to you?',subtitle:'Choose the closest match.',answers:['Everyday Nutrition','Sensitive Stomach','Skin & Coat','Weight Support']},{key:'protein',title:'Any protein preference?',subtitle:'Choose a protein.',answers:['Chicken','Beef','Lamb','Fish / Salmon']}];

function hideAllScreens(){['homeScreen','brandScreen','frommScreen','productDetailScreen','brandDetailScreen','sectionScreen','guideScreen','guideResultScreen'].forEach(function(id){document.getElementById(id).className='screen'})}
function showHome(){hideAllScreens();document.getElementById('homeScreen').className='screen active-screen';guideStep=0;guideAnswers={};window.scrollTo(0,0)}
function showBrandScreen(){hideAllScreens();buildBrandGrid();document.getElementById('brandScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function showFromm(){hideAllScreens();buildFrommProducts(FROMM_PRODUCTS);document.getElementById('frommScreen').className='screen content-screen active-screen';window.scrollTo(0,0)}
function buildBrandGrid(){var g=document.getElementById('brandGrid');if(g.children.length)return;DOG_FOOD_BRANDS.forEach(function(b){var x=document.createElement('button');x.className='brand-sign';x.innerHTML='<span class="brand-name">'+b.name+'</span><span class="brand-note">'+b.note+'</span>';x.onclick=function(){openBrand(b.name)};g.appendChild(x)})}
function openBrand(name){if(name==='Fromm'){showFromm();return}hideAllScreens();document.getElementById('brandDetailTitle').innerHTML=name;document.getElementById('brandDetailText').innerHTML='Explore <strong>'+name+'</strong> dog foods carried at Polly\'s Pets.';document.getElementById('brandDetailScreen').className='screen content-screen active-screen'}

function buildFrommProducts(items){
  var g=document.getElementById('frommProductGrid');
  g.innerHTML='';
  items.forEach(function(p){
    var c=document.createElement('div');
    c.className='product-card';
    c.onclick=function(){openProductDetail(p.name)};
    c.innerHTML=
      '<div class="product-image-wrap"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy"><div class="size-badge"><span class="badge-label">Polly\'s Size</span><span class="badge-size">'+p.carriedSize+'</span></div></div>'+
      '<div class="product-body">'+
      '<div class="product-line">'+p.line+'</div>'+
      '<div class="product-name">'+p.name+'</div>'+
      '<div class="product-meta"><div class="meta-chip">'+p.life+'</div><div class="meta-chip">'+p.protein+'</div></div>'+
      '<div class="available-sizes">Available Sizes: '+p.availableSizes+'</div>'+
      '<button class="more-info-btn" type="button">More Info</button>'+
      '</div>';
    g.appendChild(c);
  });
}

function filterFromm(filter,btn){
  document.querySelectorAll('.filter-btn').forEach(function(b){b.className='filter-btn'});
  btn.className='filter-btn active';
  if(filter==='All'){buildFrommProducts(FROMM_PRODUCTS);return}
  var f=FROMM_PRODUCTS.filter(function(p){return p.line===filter || p.life.indexOf(filter)>=0});
  buildFrommProducts(f);
}

function openProductDetail(name){
  var product = FROMM_PRODUCTS.find(function(p){ return p.name===name; });
  if(!product){ return; }
  currentProduct = product;
  hideAllScreens();
  document.getElementById('detailLine').innerHTML = product.line + ' • Fromm Family Foods';
  document.getElementById('detailLineValue').innerHTML = product.line;
  document.getElementById('detailName').innerHTML = product.name;
  document.getElementById('detailTagline').innerHTML = 'Recipe details and size information.';
  document.getElementById('detailImage').src = product.image;
  document.getElementById('detailImage').alt = product.name;
  document.getElementById('detailLife').innerHTML = product.life;
  document.getElementById('detailProtein').innerHTML = product.protein;
  document.getElementById('detailCarrySize').innerHTML = product.carriedSize;
  document.getElementById('detailSizes').innerHTML = product.availableSizes;
  document.getElementById('detailDescription').innerHTML = product.description;
  document.getElementById('productDetailScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function openOfficialPage(){
  if(currentProduct && currentProduct.url){
    window.open(currentProduct.url, '_blank');
  }
}

function openSection(t,d){hideAllScreens();document.getElementById('sectionTitle').innerHTML=t;document.getElementById('sectionDescription').innerHTML=d;document.getElementById('sectionScreen').className='screen content-screen active-screen'}
function startGuide(){guideStep=0;guideAnswers={};showGuideQuestion()}
function showGuideQuestion(){hideAllScreens();var q=guideQuestions[guideStep];document.getElementById('questionTitle').innerHTML=q.title;document.getElementById('questionSubtitle').innerHTML=q.subtitle;var g=document.getElementById('answerGrid');g.innerHTML='';q.answers.forEach(function(a){var b=document.createElement('button');b.className='answer-btn';b.innerHTML=a;b.onclick=function(){selectGuideAnswer(a)};g.appendChild(b)});document.getElementById('guideScreen').className='screen content-screen active-screen'}
function selectGuideAnswer(v){var q=guideQuestions[guideStep];guideAnswers[q.key]=v;if(guideStep<guideQuestions.length-1){guideStep++;showGuideQuestion()}else{showGuideResult()}}
function previousGuideStep(){if(guideStep===0)showHome();else{guideStep--;showGuideQuestion()}}
function showGuideResult(){hideAllScreens();document.getElementById('guideSummary').innerHTML='You selected <strong>'+guideAnswers.age+'</strong>, focused on <strong>'+guideAnswers.need+'</strong>, with <strong>'+guideAnswers.protein+'</strong>.';document.getElementById('guideResultScreen').className='screen content-screen active-screen'}
document.addEventListener('contextmenu',function(e){e.preventDefault()});
var idleTimer;function resetIdleTimer(){clearTimeout(idleTimer);idleTimer=setTimeout(showHome,180000)}
document.addEventListener('click',resetIdleTimer);document.addEventListener('touchstart',resetIdleTimer);resetIdleTimer();
