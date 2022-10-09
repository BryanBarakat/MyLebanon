const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".container");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-220px"
};

const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneOptions) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("nav-scrolled");
        }
        else{
            nav.classList.remove("nav-scrolled");
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const sectionFaders = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries,sectionFaders){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},sectionFaders);

sliders.forEach(slide => {
    appearOnScroll.observe(slide);
})

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

const content1 = document.getElementById("cont1");
const content2 = document.getElementById("cont2");
const content3 = document.getElementById("cont3");
const content4 = document.getElementById("cont4");

const m1 = document.getElementById("map1");
const m2 = document.getElementById("map2");
const m3 = document.getElementById("map3");
const m4 = document.getElementById("map5");

content1.onclick = function(){
    content1.style.visibility = "hidden";
    m1.style.visibility = "visible";
}

content2.onclick = function(){
    content2.style.visibility = "hidden";
    m2.style.visibility = "visible";
}

content3.onclick = function(){
    content3.style.visibility = "hidden";
    m3.style.visibility = "visible";
}

content4.onclick = function(){
    content4.style.visibility = "hidden";
    m4.style.visibility = "visible";
}

const obj = document.getElementById("num");

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
    nav.classList.remove("nav-scrolled");
}
