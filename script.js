const menuBtn = document.querySelector('.menu-Btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
navlinks.classList.toggle('mobile-menu')
})

let currentSet1 = 0;
let currentSet2 = 0;

function changeSlide(sliderId, direction) {
  const currentSet = (sliderId === 'slider1') ? currentSet1 : currentSet2;
  const newSet = (currentSet + direction + 3) % 3; // Ensure positive result

  if (sliderId === 'slider1') {
    currentSet1 = newSet;
    updateSlider('slider1', currentSet1);
  } else if (sliderId === 'slider2') {
    currentSet2 = newSet;
    updateSlider('slider2', currentSet2);
  }
}

function updateSlider(sliderId, currentSet) {
  const cardSlider = document.getElementById(sliderId);
  const offset = -currentSet * 300; // 300px is the width of each set of cards

  cardSlider.style.transform = `translateX(${offset}px)`;
}

var tl = gsap.timeline();
tl
.from(".navbar",{
  y:40,
  duration:1
})

.from(".header-content h5",{
  y:40,
  opacity:0,
  delay:0.3,
  duration:0.3
})

.from(".header-content h1",{
  y:40,
  opacity:0,
  delay:0.3,
  duration:0.3
})

.from(".header-content p",{
  y:40,
  opacity:0,
  delay:0.3,
  duration:0.3
})

.from(".ctn",{
  y:40,
  opacity:0,
  delay:0.2,
  duration:0.3
})

gsap.from(".our-menu",{
  opacity:0,
  stagger:0.4,
  y:40,
  delay:0.5,
  duration:1.5,
  scrollTrigger:{
    trigger: ".our-menu",
    scroller:"body",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".types",{
  opacity:0,
  stagger:0.4,
  y:40,
  delay:0.5,
  duration:1.5,
  scrollTrigger:{
    trigger: ".types",
    scroller:"body",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".wrapper-slide",{
  opacity:0,
  delay:0.5,
  stagger:0.4,
  y:40,
  duration:1.5,
  scrollTrigger:{
    trigger: ".wrapper-slide",
    scroller:"body",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".foodvideo",{
  opacity:0,
  delay:0.5,
  stagger:0.4,
  y:20,
  duration:1.5,
  scrollTrigger:{
    trigger: ".foodvideo",
    scroller:"body",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".icon-container",{
  opacity:0,
  delay:0.5,
  stagger:0.4,
  y:20,
  duration:1.5,
  scrollTrigger:{
    trigger: ".icon-container",
    scroller:"body",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".wrapper",{
  opacity:0,
  delay:0.5,
  stagger:0.4,
  y:20,
  duration:1.5,
  scrollTrigger:{
    trigger: ".wrapper",
    scroller:"body",
    start:"top 60%",
    // markers:true
  }
})