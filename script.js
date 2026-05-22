// Typing Effect
const text = "Computer Engineering Student • HR & Volunteer Experience • Tech Explorer";

let i = 0;

function typeEffect(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();


// Scroll Reveal
const sections = document.querySelectorAll(".section");

function revealSections(){

  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.classList.add("show");
    }

  });
}

window.addEventListener("scroll", revealSections);

revealSections();


// Button Scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:"smooth"
  });
}
function projectMessage(){

alert(
"Project details will be added soon 🚀"
);

}
