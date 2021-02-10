const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const buttons = document.querySelectorAll(".btn");
const mainImg = document.querySelector(".intro img");
const secondImg = document.querySelectorAll(".img-content img");
const thirdImg = document.querySelector(".content-destination img");
const divs = document.querySelectorAll(".destination");
const footer = document.querySelector("footer");

//MOUSEOVER
h1.addEventListener("mouseover", () => {
  h1.style.color = "yellow";
  h1.style.textShadow = "1px 1px black";
  h1.style.fontSize = "85px";
  h1.style.fontWeight = "bold";
});
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

//CLICK W/ STOP PROPAGATION & STOP DEFAULT
buttons[0].addEventListener("click", (event) => {
  body.style.backgroundColor = "powderblue";
  event.stopPropagation();
});
divs[0].addEventListener("click", () => divs[0].style.border = "5px black solid");
buttons[1].addEventListener("click", () => body.style.backgroundColor = "teal");
divs[1].addEventListener("click", () => divs[1].style.border = "5px white double");
buttons[2].addEventListener("click", () => body.style.backgroundColor = "coral");
divs[2].addEventListener("click", () => divs[2].style.border = "5px brown dotted");
navLinks.forEach(e => e.addEventListener("click", (e) => e.preventDefault()));


//DBLCLICK
thirdImg.addEventListener('dblclick', () => thirdImg.style.filter = "drop-shadow(10px 10px 12px pink)");

//MOUSEMOVE
footer.addEventListener("mousemove", (e) => footer.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 50)");

//MOUSEENTER
secondImg.forEach(item => item.addEventListener('mouseenter', () => item.style.filter = "contrast(180%)"));

//MOUSELEAVE
secondImg.forEach(item => item.addEventListener('mouseleave', () => item.style.filter = "hue-rotate(180deg)"));

//MOUSEUP
navLinks[0].addEventListener("mouseup", () => navLinks[0].style.display = "none");
navLinks[1].addEventListener("mouseup", () => navLinks[1].style.fontSize = "30px");
navLinks[2].addEventListener("mouseup", () => navLinks[2].style.fontSize = "3px");
navLinks[3].addEventListener("mouseup", () => navLinks[3].style.transform = "rotate(-90deg)");

//WHEEL
body.addEventListener("wheel", () => mainImg.style.transform = "rotate(180deg)");

//MOUSEOUT
divs.forEach(item => item.addEventListener('mouseout', () => item.style.color ="maroon"));

//MOUSEDOWN
body.addEventListener("mousedown", () => {
  const newLink = document.createElement("a");
  newLink.textContent = "Hi, there!";
  nav.prepend(newLink);
}, {once: true});

