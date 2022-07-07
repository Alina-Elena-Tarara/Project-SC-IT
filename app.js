let sidebar = document.getElementById("mySidebar");
let closebtn = document.getElementById("close-btn");
let content = document.getElementsByClassName(".content");
let openbtn = document.getElementById("open-btn");

openbtn.onclick = function() {
  sidebar.style.display = "block";
  openbtn.style.display = "none";
}
closebtn.onclick = function() {
  sidebar.style.display = "none";
  openbtn.style.display = "block";
}

const btns = document.querySelectorAll("#btn1, #btn2")
const form_group = document.querySelector(".form-group");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        form_group.classList.toggle("show-form-group");
        btns[0].classList.toggle("remove-big-btn");
    })
})

let modal = document.getElementById("myModal");
let img = document.querySelectorAll("div.frame.container img"); 
let modalImg = document.getElementById("image-content");
let captionText = document.getElementById("caption");

 for(let i = 0; i<img.length; i++) {
    img[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
 }
}
var span  = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

function message () {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let msg = document.getElementById("msg"); 

  const success = document.getElementById("success");
  const fail = document.getElementById("fail");

  if (name.value === "" || email.value === ""|| msg.value === ""){
    fail.style.display = "block"; 
  } else  {
    setTimeout(() => {
      name.value = "";
      email.value = "";
      msg.value = "";
    }, 3000);

    success.style.display = "block";
  }
    
    setTimeout(() => {
      fail.style.display = "none";
      success.style.display = "none";
    }, 5000);
}


filterSelection("all");

function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("frame container margin-bottom");
  console.log(x);
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}








  
