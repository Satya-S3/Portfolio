/////////Loader///////////////
let loader=document.querySelector('.loader');

setTimeout(()=>{
      loader.style.display="none";
},3000)

// window.addEventListener("load",function(){
//       loader.style.display="none";
// })

/////////////Audio///////////////
let audio = new Audio('sound1.mp3');

const sound=()=>{
      audio.play();
}

let navh1=document.querySelector("#navh");
navh1.onclick=sound;
let navm1=document.querySelector("#navm")
navm1.onclick=sound;
let navo1=document.querySelector("#navo")
navo1.onclick=sound;
let navf1=document.querySelector("#navf")
navf1.onclick=sound;

//////////Parallax///////////

const parallax_el = document.querySelectorAll('.parallax')

let xValue = 0, yValue = 0;

function update(cursor){
      parallax_el.forEach((el) => {
            
            let speedx=el.dataset.speedx;
            let speedy=el.dataset.speedy;
            let speedz=el.dataset.speedz;

            let isInLeft=parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;
            let zValue=(cursor - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.2;

            el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`
      })
}

update(0)

window.addEventListener('mousemove', (e) => {
      
      if(timeline.isActive()) return;
      xValue = e.clientX - window.innerWidth / 2
      yValue = e.clientY - window.innerHeight / 2

      update(e.clientX)
})

/////////////////////////////////////// Typer //////////////////////////////////
 function sleep(ms){
      return new Promise((resolve)=>setTimeout(resolve,ms))
 } 

 const text=['SATYA','DEVELOPER','CODER']
 const el=document.getElementById('typewriter')

 let sleepTime=200;
 let currTextIndex=0;

 const writeLoop=async()=>{
      while(true){
            let currWord=text[currTextIndex];
            for(let i=0;i<currWord.length;i++){
                  el.innerText=currWord.substring(0,i+1)
                  await sleep(sleepTime)
            }
            
            await sleep(sleepTime*10);
            
            for(let i=currWord.length;i>0;i--){
                  el.innerText=currWord.substring(0,i-1)
                  await sleep(sleepTime)
            }
            await sleep(sleepTime*2);

            if(currTextIndex===text.length-1){
                  currTextIndex=0
            }else{
                  currTextIndex++
            }
      }
 }

writeLoop()
///////////////////////////Random text///////////////////
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;


const satya = (event)=>{  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 50);
}

// let toph2=document.querySelector("#top-h2")
// toph2.onmouseover=satya;
let navh=document.querySelector("#navh")
navh.onmouseover=satya;
let navm=document.querySelector("#navm")
navm.onmouseover=satya;
let navo=document.querySelector("#navo")
navo.onmouseover=satya;
let navf=document.querySelector("#navf")
navf.onmouseover=satya;
///////////////////////GreenSock Animation////////////////////////////

let timeline=gsap.timeline();

//For Single Element
// timeline.from(
//       '.bg-img',{
//             top:'50%',
//             duration:2
//       })

timeline.from(
      '.text div',{
            y:window.innerHeight-document.querySelector('.text div').getBoundingClientRect().top+200,
            duration:2
      },'0.5').from('.text h2',{
            y:-150,
            opacity:0,
            duration:1.5
      },'0.5').from('.hide',{
            opacity:0,
            duration:1.5            
      },'1')



////////////////////////GSAP////////////////////////////
var t1=gsap.timeline({scrollTrigger:{
      trigger:'.main',
      markers:false,
      start:'50% 50%',
      end:'100% 50%',
      scrub:2,
      pin:true
}})

t1.to('.top',{
      top:'-50%'
},'a').to('.bottom',{
      bottom:'-50%'
},'a').to('.content',{
      marginTop:'5%'
},'a').to('#bottom-h',{
      bottom:'-70%'
},'a')



/////////////////////////////Skills Effect//////////////////////////////////

const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
            if(entry.isIntersecting)
            {
                  entry.target.classList.add('show');
            }
            else
            {
                  entry.target.classList.remove('show');
            }
      });
});


const hiddenitem=document.querySelectorAll('.hidden');
hiddenitem.forEach((e1)=>observer.observe(e1));


/////////////////////////////////PROJECT///////////////////////////
const observer2=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
            if(entry.isIntersecting)
            {
                  entry.target.classList.add('show2');
            }
            else
            {
                  entry.target.classList.remove('show2');
            }
      });
});

const hiddenitem2=document.querySelectorAll('.hidden2');
hiddenitem2.forEach((e1)=>observer2.observe(e1));

//Bootstrap//
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

///////////////////////CLEAR FORM/////////////////////
let input=document.querySelectorAll('.form-input');
let clear=document.querySelector('#clear');
clear.addEventListener('click',()=>{
      input.forEach(e => e.value='');
})


////////////////////////Keyboard problem///////////////////////////////
