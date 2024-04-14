let burgerMenu = document.querySelector(".burger__menu");
let burgerMenuActive = document.querySelector(".nav__div");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

burgerMenu.addEventListener("click", burgerAppear);

function burgerAppear() {
  burgerMenuActive.classList.toggle("nav__div__active");

  // Selects items in the navMenu object
  const navMenu = {
    spanTop: document.querySelector(".burger__span__top"),
    spanCentre: document.querySelector(".burger__span__centre"),
    spanBottom: document.querySelector(".burger__span__bottom"),
  };

  // Selects items in the navMenu object and adds .burger__active
  Object.values(navMenu).forEach((item) => {
    item.classList.toggle("burger__active");
  });

  // Toggle scrolling on the body
  if (burgerMenuActive.classList.contains("nav__div__active")) {
    disableScroll();
  } else {
    enableScroll();
  }
}

function disableScroll() {
  // Save current scroll position
  const scrollY = window.scrollY;

  // Disable scrolling
  document.body.style.overflow = "hidden";

  // Set the scroll position to the saved value to prevent the page from jumping
  window.scrollTo(0, scrollY);
}

function enableScroll() {
  // Enable scrolling
  document.body.style.overflow = "visible";
}
