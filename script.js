// Slider

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const images = slider.querySelectorAll("img");
  const dots = document.querySelectorAll(".dot");
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach(function (image) {
      image.style.display = "none";
    });
    images[index].style.display = "block";
  }

  function setActiveDot(index) {
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
    dots[index].classList.add("active");
  }

  function changeImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    showImage(currentImageIndex);
    setActiveDot(currentImageIndex);
  }

  function jumpToImage(index) {
    currentImageIndex = index;
    showImage(currentImageIndex);
    setActiveDot(currentImageIndex);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      const index = parseInt(dot.dataset.index);
      jumpToImage(index);
    });
  });

  setInterval(changeImage, 2000);
});

// document.addEventListener("click", function () {});

// // Button and id selection and storing in variable
// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let Programme = document.getElementById("Programme");
// let Skills = document.getElementById("Skills");

// // Adding event listeners to the buttons
// button1.addEventListener("click", function () {
//   this.classList.add('button-red');
//   button2.classList.remove('button-red');
//   Programme.style.display = "block";
//   Skills.style.display = "none";
// });

// button2.addEventListener("click", function () {
//    this.classList.add('button-red');
//    button1.classList.remove('button-red');
//   Programme.style.display = "none";
//   Skills.style.display = "block";
// });

// Scrolling

let fourthSection = document.getElementById("fourth-section");
let thirdSection = document.getElementById("third-section");
let contactSection = document.getElementById("contact");


document.addEventListener("DOMContentLoaded", function () {
  let contactLink = document.querySelector(".courses");

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    thirdSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let contactLink = document.querySelector(".contact");

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const freeDemoBtn = document.querySelector(".hero-btn");

  freeDemoBtn.addEventListener("click", function () {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Go to other HTML file
document.querySelector(".library").addEventListener("click", function() {
  console.log("Hello")
  window.location.href = "/library.html";
});
document.querySelector(".home").addEventListener("click", function() {
  window.location.href = "/";
});

document.querySelector(".about").addEventListener("click", function() {
  console.log("About Us clicked"); // Check if this logs
  window.location.href = "/about.html";
});
