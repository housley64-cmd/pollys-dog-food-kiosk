var guideStep=0;
var guideAnswers={};

var guideQuestions=[
  {
    key:'age',
    title:'How old is your dog?',
    subtitle:'Choose the closest match.',
    answers:['Puppy','Adult','Senior','All Life Stages']
  },
  {
    key:'need',
    title:'What is most important to you?',
    subtitle:'Choose the closest match for what you need.',
    answers:['Everyday Nutrition','Sensitive Stomach','Skin & Coat','Weight Support']
  },
  {
    key:'protein',
    title:'Any protein preference?',
    subtitle:'Choose the protein you would like to start with.',
    answers:['Chicken','Beef','Lamb','Fish / Salmon']
  }
];

function hideAllScreens(){
  var ids=['homeScreen','sectionScreen','guideScreen','guideResultScreen'];
  for(var i=0;i<ids.length;i++){
    document.getElementById(ids[i]).className='screen';
  }
}

function showHome(){
  hideAllScreens();
  document.getElementById('homeScreen').className='screen active-screen';
  guideStep=0;
  guideAnswers={};
  window.scrollTo(0,0);
}

function openSection(title,description){
  hideAllScreens();
  document.getElementById('sectionTitle').innerHTML=title;
  document.getElementById('sectionDescription').innerHTML=description;
  document.getElementById('sectionScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function startGuide(){
  guideStep=0;
  guideAnswers={};
  showGuideQuestion();
}

function showGuideQuestion(){
  hideAllScreens();

  var question=guideQuestions[guideStep];
  document.getElementById('questionTitle').innerHTML=question.title;
  document.getElementById('questionSubtitle').innerHTML=question.subtitle;

  var grid=document.getElementById('answerGrid');
  grid.innerHTML='';

  for(var i=0;i<question.answers.length;i++){
    var btn=document.createElement('button');
    btn.className='answer-btn';
    btn.type='button';
    btn.innerHTML=question.answers[i];
    btn.setAttribute('data-value',question.answers[i]);
    btn.onclick=function(){
      selectGuideAnswer(this.getAttribute('data-value'));
    };
    grid.appendChild(btn);
  }

  document.getElementById('guideScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

function selectGuideAnswer(value){
  var question=guideQuestions[guideStep];
  guideAnswers[question.key]=value;

  if(guideStep<guideQuestions.length-1){
    guideStep++;
    showGuideQuestion();
  }else{
    showGuideResult();
  }
}

function previousGuideStep(){
  if(guideStep===0){
    showHome();
  }else{
    guideStep--;
    showGuideQuestion();
  }
}

function showGuideResult(){
  hideAllScreens();

  document.getElementById('guideSummary').innerHTML=
    'You selected <strong>'+guideAnswers.age+'</strong>, with a focus on <strong>'+
    guideAnswers.need+'</strong>, and a preference for <strong>'+
    guideAnswers.protein+'</strong>.';

  document.getElementById('guideResultScreen').className='screen content-screen active-screen';
  window.scrollTo(0,0);
}

document.addEventListener('contextmenu',function(event){
  event.preventDefault();
});

var idleTimer;
function resetIdleTimer(){
  clearTimeout(idleTimer);
  idleTimer=setTimeout(function(){showHome()},180000);
}
document.addEventListener('click',resetIdleTimer);
document.addEventListener('touchstart',resetIdleTimer);
resetIdleTimer();

setInterval(function(){
  if(document.getElementById('homeScreen').className.indexOf('active-screen')!==-1){
    window.location.reload(true);
  }
},900000);
