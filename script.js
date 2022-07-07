// const wrapper = document.querySelector(".wrapper");
// const smallImages = document.querySelectorAll(".imgSmall");
// const bigImages = document.querySelectorAll(".imgBig");

// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].addEventListener("click", function () {
//     wrapper.classList.add("show");
//     bigImages[i].classList.toggle("show");
//   })
// }

wrapper.addEventListener("click", function () {
  this.classList.remove("show");
  document.querySelector(".imgBig.show").classList.remove("show");

// })
