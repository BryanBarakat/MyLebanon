const hamburger = document.getElementById("ham");
const navs = document.getElementById("navigation");
const navs2 = document.getElementById("navigation2");
const navs3 = document.getElementById("navigation3");
const navs4 = document.getElementById("navigation4");
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

slides2.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // touch events
  slide.addEventListener('touchstart', touchStart2(index))
  slide.addEventListener('touchmove', touchMove2)
  slide.addEventListener('touchend', touchEnd2)
})

let isDragging2 = false,
  startPos2 = 0,
  currentTranslate2 = 0,
  prevTranslate2 = 0,
  animationID2,
  currentIndex2 = 0;


function getPositionX2(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart2(index) {
  return function (event) {
    currentIndex2 = index
    startPos2 = getPositionX2(event)
    isDragging2 = true
    animationID2 = requestAnimationFrame(animation)
  }
}

function touchMove2(event) {
  if (isDragging2) {
    const currentPosition2 = getPositionX2(event)
    currentTranslate2 = prevTranslate2 + currentPosition2 - startPos2
  }
}

function touchEnd2() {
  cancelAnimationFrame(animationID2)
  isDragging2 = false
  const movedBy = currentTranslate2 - prevTranslate2

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex2 < slides2.length - 1) currentIndex2 += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex2 > 0) currentIndex2 -= 1

  setPositionByIndex2()
}

function animation2() {
  setSliderPosition2()
  if (isDragging2) requestAnimationFrame(animation)
}

function setPositionByIndex2() {
  currentTranslate2 = currentIndex2 * -window.innerWidth
  prevTranslate2 = currentTranslate2
  setSliderPosition2()
}

function setSliderPosition2() {
  slider2.style.transform = `translateX(${currentTranslate2}px)`
}

const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".reasons");
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
            descs.style.animation="fadeInUp 1.5s 1";
            descs2.style.animation="fadeInUp 1.5s 1";
            descs3.style.animation="fadeInUp 1.5s 1";
            sectionOneObserver.unobserve(entry.target);
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);