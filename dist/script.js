const humburger = document.getElementById("humberger");
const nava = document.getElementById("nav");
const navContain = document.getElementById("nav-list");


humburger.addEventListener("click", () => {
     navContain.style.display = navContain.style.display === "block" ? "none" : "block";
     nava.className = "nav";
     humburger.classList.toggle("active");
     nava.classList.toggle("active");
     document.body.classList.toggle("active");
     document.body.style.overflow = document.body.classList.contains("active") ? "hidden" : "visible";

});

const inputButton = document.getElementById("input");
const inputText = document.getElementById("input-text");
const warner = document.getElementById("warner");

function validate(mail) {
     const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     return regex.test(mail)
};

inputButton.addEventListener("click", () => {
     let emailData = inputText.value;
     
     if (emailData.trim() === "") {
          alert("Please fill out the required email filed!!!");
          return;
     }
     else {
          // Checking if the email is valid or not.
          if (!validate(emailData)) {
               warner.style.display = "block";
               emailData.style.color = "red";
               return;
          } else {
               warner.style.display = "none";
          }
     }
});


const dots = document.querySelectorAll(".dot");
let activeDotNum = 0;
dots.forEach((dot, idx) => {
     dot.setAttribute("data-num", idx);

     dot.addEventListener("click", e => {
          let clickedDotNum = e.target.dataset.num;
          if (clickedDotNum == activeDotNum) {
               return;
          } else {
               dots[activeDotNum].classList.remove("active");
               dots[clickedDotNum].classList.add("active");
               activeDotNum = clickedDotNum;
          }     
     });
});


let swiperCards = new Swiper('.card__content ', {
     loop: true,
     grabCursor: true,
     spaceBetween: 32,
     
  pagination: {
       el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true,
  },

});

