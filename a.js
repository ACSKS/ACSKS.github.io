var canvas = document.getElementById("myCanvas");
var questions=["I like plants and animals",
              "I like reading books",
              "I'm curious about how machines work",
              "I'm good at drawing and make beutiful paintings",
              "I am sensitive to sounds and voices",
              "I always like having a chat with my friends",
              "I like physical sports that need effort",
              "I have a special interest that I always spend time with",
              "I sometimes think of why I live and the meaning of my life",
              "Strategy games are interesting to me",
              "I like studying while listening to music",
              "I like planting",
              "I value my freedom",
              "I often remember dreams",
              "I'm good at expressing my thoughts through writing",
              "I think about human existance deeply",
              "I prefer to go out and spend time outside",
              "I stand out among my friends with my leadership skills"];
var score=[0,0,0,0,0,0,0,0,0];
var add_index=[0,6,2,8,1,4,5,7,3,2,1,0,7,8,6,3,5,4];
var intelligences=["Naturalist","Musical","Logical-mathematical","Existential","Interpersonal","Bodily-kinesthetic","Linguistic","Intra-personal","Spatial"];
var index=0;
function question(){
  if(index>=questions.length){
    canvas.innerHTML="<font size=\"4\">Thank you for your time<br>Your Results:<br>"+calc_results()+"</font>";
    //canvas.innerHTML="score"
    //canvas.innerHTML=calc();
  }
  else{
    canvas.innerHTML="<font size=\"4\">"+questions[index]+"</font>";
  }
}
function calc_results(){
  var sum=0;
  for(var i=0;i<score.length;i++)sum+=score[i];
  var percentage=[0,0,0,0,0,0,0,0,0];
  for(var i=0;i<score.length;i++)percentage[i]=Math.round(score[i]/sum*100);
  var result="";
  for(var i=0;i<percentage.length;i++)result+=intelligences[i]+": "+percentage[i]+"%<br>";
  return result;
}
question();
function one(){
  if(index>=questions.length)return;
  score[add_index[index]]+=1;
  index++;
  question();
}
function two(){
  if(index>=questions.length)return;
  score[add_index[index]]+=2;
  index++;
  question();
}
function three(){
  if(index>=questions.length)return;
  score[add_index[index]]+=3;
  index++;
  question();
}
function four(){
  if(index>=questions.length)return;
  score[add_index[index]]+=4;
  index++;
  question();
}
function five(){
  if(index>=questions.length)return;
  score[add_index[index]]+=5;
  index++;
  question();
}
function calc(){

}
var oneBtn=document.getElementById('one');
oneBtn.addEventListener('click',one,false);

var twoBtn=document.getElementById('two');
twoBtn.addEventListener('click',two,false);

var threeBtn=document.getElementById('three');
threeBtn.addEventListener('click',three,false);

var fourBtn=document.getElementById('four');
fourBtn.addEventListener('click',four,false);

var fiveBtn=document.getElementById('five');
fiveBtn.addEventListener('click',five,false);