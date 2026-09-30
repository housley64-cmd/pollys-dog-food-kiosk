var guideStep=0;
var guideAnswers={};

var guideQuestions=[
  {key:'age',title:'How old is your dog?',subtitle:'Choose the closest match.',answers:['Puppy','Adult','Senior','All Life Stages']},
  {key:'need',title:'What is most important to you?',subtitle:'Choose the closest match for what you need.',answers:['Everyday Nutrition','Sensitive Stomach','Skin & Coat','Weight Support']},
  {key:'protein',title:'Any protein preference?',subtitle:'Choose the protein you would like to start with.',answers:['Chicken','Beef','Lamb','Fish / Salmon']}
];

/* Fix older Android Chrome viewport sizing on first load.
   It can report 100vh too tall until the first interaction.
   We measure the real visible height and store it as a CSS variable. */
function setAppHeight(){
  var h = window.innerHeight;
  if(window.visualViewport && window.visualViewport.height){
    h = Math.min(h, window.visualViewport.height);
  }
  document.documentElement.style.setProperty('--app-height', h + 'px');
}

setAppHeight();
window.addEventListener('resize', setAppHeight);
window.addEventListener('orientationchange', function(){
  setTimeout(setAppHeight, 100);
  setTimeout(setAppHeight, 500);
});
if(window.visualViewport){
  window.visualViewport.addEventListener('resize', setAppHeight);
}

/* Re-measure a few times after page load because old Chrome may settle late. */
window.addEventListener('load', function(){
  setAppHeight();
  setTimeout(setAppHeight, 150);
  setTimeout(setAppHeight, 500);
  setTimeout(setAppHeight, 1200);
});

function hideAllScreens(){
  var ids=['homeScreen','brandScreen','brandDetailScreen','sectionScreen','guideScreen','guideResultScreen'];
  for(var i=0;i<ids.length;i++){document.getElementById(ids[i]).className='screen'}
}

function showHome(){
  hideAllScreens();
  setAppHeight();
  document.getElementById('homeScreen').className='screen active-screen';
  guideStep=0;guideAnswers={};window.scrollTo(0,0)
}

function showBrandScreen(){
  hideAllScreens();
  buildBrandGrid();
  document.getElementById('brandScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0)
}

function buildBrandGrid(){
  var grid=document.getElementById('brandGrid');
  if(grid.children.length>0){return}
  for(var i=0;i<DOG_FOOD_BRANDS.length;i++){
    var b=DOG_FOOD_BRANDS[i];
    var btn=document.createElement('button');
    btn.className='brand-sign';
    btn.type='button';
    btn.setAttribute('data-brand',b.name);
    btn.innerHTML='<span class="brand-name">'+b.name+'</span><span class="brand-note">'+b.note+'</span>';
    btn.onclick=function(){openBrand(this.getAttribute('data-brand'))};
    grid.appendChild(btn)
  }
}

function openBrand(name){
  hideAllScreens();
  document.getElementById('brandDetailTitle').innerHTML=name;
  document.getElementById('brandDetailText').innerHTML='Explore <strong>'+name+'</strong> dog foods carried at Polly\'s Pets.';
  document.getElementById('brandDetailScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0)
}

function openSection(title,description){
  hideAllScreens();
  document.getElementById('sectionTitle').innerHTML=title;
  document.getElementById('sectionDescription').innerHTML=description;
  document.getElementById('sectionScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0)
}

function startGuide(){guideStep=0;guideAnswers={};showGuideQuestion()}

function showGuideQuestion(){
  hideAllScreens();
  var question=guideQuestions[guideStep];
  document.getElementById('questionTitle').innerHTML=question.title;
  document.getElementById('questionSubtitle').innerHTML=question.subtitle;
  var grid=document.getElementById('answerGrid');grid.innerHTML='';
  for(var i=0;i<question.answers.length;i++){
    var btn=document.createElement('button');
    btn.className='answer-btn';btn.type='button';btn.innerHTML=question.answers[i];
    btn.setAttribute('data-value',question.answers[i]);
    btn.onclick=function(){selectGuideAnswer(this.getAttribute('data-value'))};
    grid.appendChild(btn)
  }
  document.getElementById('guideScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0)
}

function selectGuideAnswer(value){
  var q=guideQuestions[guideStep];guideAnswers[q.key]=value;
  if(guideStep<guideQuestions.length-1){guideStep++;showGuideQuestion()}else{showGuideResult()}
}

function previousGuideStep(){if(guideStep===0){showHome()}else{guideStep--;showGuideQuestion()}}

function showGuideResult(){
  hideAllScreens();
  document.getElementById('guideSummary').innerHTML='You selected <strong>'+guideAnswers.age+'</strong>, with a focus on <strong>'+guideAnswers.need+'</strong>, and a preference for <strong>'+guideAnswers.protein+'</strong>.';
  document.getElementById('guideResultScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0)
}

document.addEventListener('contextmenu',function(e){e.preventDefault()});

document.addEventListener('touchstart',function(){
  setAppHeight();
}, {passive:true});

document.addEventListener('click',function(){
  setAppHeight();
});

var idleTimer;
function resetIdleTimer(){clearTimeout(idleTimer);idleTimer=setTimeout(function(){showHome()},180000)}
document.addEventListener('click',resetIdleTimer);
document.addEventListener('touchstart',resetIdleTimer);
resetIdleTimer();

setInterval(function(){
  if(document.getElementById('homeScreen').className.indexOf('active-screen')!==-1){window.location.reload(true)}
},900000);
