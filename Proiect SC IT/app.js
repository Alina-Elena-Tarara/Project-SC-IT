let sidebar = document.getElementById("mySidebar");
let closebtn = document.getElementById("close-btn");
let content = document.getElementsByClassName(".content");

// console.log(closebtn);

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

// console.log(btns);

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        form_group.classList.toggle("show-form-group");
        btns[0].classList.toggle("remove-big-btn");
    })
})

let modal = document.getElementById("myModal");
let img = document.querySelectorAll("div.frame.container img"); 
// console.log(img); 
let modalImg = document.getElementById("image-content");

let captionText = document.getElementById("caption");

 for(let i = 0; i<img.length; i++) {
  // console.log(img);
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


// let list = document.querySelectorAll("button.button.white.hide-small");
// let itemBox = document.querySelectorAll("div.frame.container.margin-bottom");

// console.log(list);
// console.log(itemBox)


// for(let i = 0; i<list.length; i++) {
//   list[i].addEventListener("click", function() {
//     for(let j = 0; j<list.length; j++) {
//       list[j].classList.remove("active");
//     }
//     this.classList.add("active"); 

//     let dataFilter = this.getAttribute("data-filter");

//     for(let k = 0; k<itemBox.length; k++) {
//       itemBox[k].classList.remove("active");
//       itemBox[k].classList.add("hide");

//       if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
//         itemBox[k].classList.remove("hide");
//         itemBox[k].classList.add("active");
//       }
//     }
//   })
// }







  
