const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

document.body.onload = function() {
    img1.style.height= '400px';
    img1.style.transition = 'all 0ms ease-out';

    img2.style.height= '400px';
    img2.style.transition = 'all 0ms ease-out';

    img3.style.height= '400px';
    img3.style.transition = 'all 0ms ease-out';

    img4.style.height= '400px';
    img4.style.transition = 'all 0ms ease-out';

    img5.style.height= '400px';
    img5.style.transition = 'all 0ms ease-out';
};

const restaurant = document.getElementById("restaurants");
const adventure = document.getElementById("adventure");
const nightlife = document.getElementById("nightlife");

let i = 0;

restaurant.onclick = function(){
    i = 2;
    adventure.style.top = '0px';
    adventure.style.zIndex = '2';
    restaurant.style.zIndex = '3';
    restaurant.style.top = '-5px';
    restaurant.style.transform = 'scale(1)';
    nightlife.style.zIndex = '1';
    nightlife.style.top = '0px';
    restaurant.style.backgroundColor = '#ffffff';
    adventure.style.backgroundColor = '#f4f4f4';
    nightlife.style.backgroundColor = '#f4f4f4';
}

nightlife.onclick = function(){
    i = 3;
    adventure.style.top = '0px';
    adventure.style.zIndex = '2';
    nightlife.style.zIndex = '3';
    nightlife.style.top = '-5px';
    nightlife.style.transform = 'scale(1)';
    restaurant.style.zIndex = '2';
    restaurant.style.top = '0px';
    nightlife.style.backgroundColor = '#ffffff';
    adventure.style.backgroundColor = '#f4f4f4';
    restaurant.style.backgroundColor = '#f4f4f4';
}

adventure.onclick = function() {
    if(i === 0) {
        return;
    }
    else{
        i = 0;
        adventure.style.top = '-5px';
        adventure.style.zIndex = '3';
        adventure.style.transform = 'scale(1)';
        nightlife.style.zIndex = '2';
        nightlife.style.top = '0px';
        restaurant.style.zIndex = '2';
        restaurant.style.top = '0px';
        adventure.style.backgroundColor = '#ffffff';
        restaurant.style.backgroundColor = '#f4f4f4';
        nightlife.style.backgroundColor = '#f4f4f4';
    }
}

restaurant.onmouseover = function(){
    if(i == 2){
        return;
    }
    else{
        restaurant.style.transform = 'scale(1.02)';
    }
}

restaurant.onmouseout = function(){
    restaurant.style.transform = 'scale(1)';
}

adventure.onmouseover = function(){
    if(i == 0){
        return;
    }
    else{
        adventure.style.transform = 'scale(1.02)';
    }
}

adventure.onmouseout = function(){
    adventure.style.transform = 'scale(1)';
}

nightlife.onmouseover = function(){
    if(i == 3){
        return;
    }
    nightlife.style.transform = 'scale(1.02)';
}

nightlife.onmouseout = function(){
    nightlife.style.transform = 'scale(1)';
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.transition = "all ease"; 
  setTimeout(showSlides, 3000);
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  slides[slideIndex2-1].style.display = "block";
  slides[slideIndex2-1].style.transition = "all ease"; 
  setTimeout(showSlides2, 3000);
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}    
  slides[slideIndex3-1].style.display = "block";
  slides[slideIndex3-1].style.transition = "all ease"; 
  setTimeout(showSlides3, 3000);
}


let slideIndex4 = 0;
showSlides4();

function showSlides4() {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex4++;
  if (slideIndex4 > slides.length) {slideIndex4 = 1}    
  slides[slideIndex4-1].style.display = "block";
  slides[slideIndex4-1].style.transition = "all ease"; 
  setTimeout(showSlides4, 3000);
}


let slideIndex5 = 0;
showSlides5();

function showSlides5() {
  let i;
  let slides = document.getElementsByClassName("mySlides5");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex5++;
  if (slideIndex5 > slides.length) {slideIndex5 = 1}    
  slides[slideIndex5-1].style.display = "block";
  slides[slideIndex5-1].style.transition = "all ease"; 
  setTimeout(showSlides5, 3000);
}

let slideIndex6 = 0;
showSlides6();

function showSlides6() {
  let i;
  let slides = document.getElementsByClassName("mySlides6");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex6++;
  if (slideIndex6 > slides.length) {slideIndex6 = 1}    
  slides[slideIndex6-1].style.display = "block";
  slides[slideIndex6-1].style.transition = "all ease"; 
  setTimeout(showSlides6, 3000);
}

const hamburger = document.getElementById("ham");
const navs = document.getElementById("navigation");
const navs2 = document.getElementById("navigation2");
const navs3 = document.getElementById("navigation3");
const navs4 = document.getElementById("navigation1");
const wholes = document.getElementById("whole");
const ham1 = document.getElementById("bar1");
const ham2 = document.getElementById("bar2");
const ham3 = document.getElementById("bar3");
const navigation0 = document.getElementById("nav0");

hamburger.onclick = function(){
    wholes.classList.toggle("addIt");
    ham1.classList.toggle("turnIt");
    ham2.classList.toggle("turnIt2");
    ham3.classList.toggle("turnIt3");
    document.body.classList.toggle("addIt2");
    navs.classList.toggle("addIt3");
    navs2.classList.toggle("addIt3");
    navs3.classList.toggle("addIt3");
    navs4.classList.toggle("addIt3");
    navigation0.classList.toggle("addIt4");
}

const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".container");
const descs = document.querySelector(".desc");
const descs2 = document.querySelector(".desc2");
const descs3 = document.querySelector(".desc3");

const sectionOneOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-400px"
};

const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneOptions) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            descs.style.animation="fadeInUp 2s 1";
            descs2.style.animation="fadeInUp 2s 1";
            descs3.style.animation="fadeInUp 2s 1";
            sectionOneObserver.unobserve(entry.target);
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

if(window.innerWidth < 800){
  img1.src = "immeuble2_copy.png";
}











// get our elements
const slider = document.querySelector('.slider-container'), slider2 = document.querySelector('.slider-container2'),
  slides = Array.from(document.querySelectorAll('.slide')),slides2 = Array.from(document.querySelectorAll('.slide2'));

// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;

// add our event listeners
slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchmove', touchMove)
  slide.addEventListener('touchend', touchEnd)
})

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

