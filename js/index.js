const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-link");
const buttons = document.querySelectorAll(".btn");





navLinks[0].addEventListener("mouseover", function(){
    navLinks[0].style.color = "blue"
  });
navLinks[1].addEventListener("mouseover", function(){
    navLinks[1].style.color = "red"
  });
navLinks[2].addEventListener("mouseover", function(){
    navLinks[2].style.color = "purple"
  });
navLinks[3].addEventListener("mouseover", function(){
    navLinks[3].style.color = "orange"
  });

buttons[0].addEventListener("click", item => body.style.backgroundColor = "lightgrey");
buttons[1].addEventListener("click", item => body.style.backgroundColor = "powderblue");
buttons[2].addEventListener("click", item => body.style.backgroundColor = "coral");
