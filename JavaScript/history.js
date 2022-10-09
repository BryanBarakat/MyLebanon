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
