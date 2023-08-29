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

 const text=['DEVELOPER','CODER']
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
},'a').to('#top-h',{
      top:'70%'
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