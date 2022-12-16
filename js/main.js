let burgerMenu = document.querySelector(".burger__menu");
let burgerMenuActive = document.querySelector(".nav__div");

burgerMenu.addEventListener("click", burgerAppear);

function burgerAppear() {
  burgerMenuActive.classList.toggle("nav__div__active");
  const navMenu = {
    body: document.querySelector("#body"),
    spanTop: document.querySelector(".burger__span__top"),
    spanCentre: document.querySelector(".burger__span__centre"),
    spanBottom: document.querySelector(".burger__span__bottom"),
  };
  //   Selects items in the navMenu object and adds .burger__active
  Object.values(navMenu).forEach((item) => {
    item.classList.toggle("burger__active");
  });
}
