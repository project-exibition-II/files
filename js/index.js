let nav = document.querySelector("#navbarResponsive");
let toggler = document.querySelector(".navbar-toggler");
let toggle = true;

const setSmallSize = () => {
     nav.classList.add("d-none");
     nav.classList.remove("justify-content-end");
     nav.classList.add("justify-content-start");
}

const setBigSize = () => {
     nav.classList.add("d-block");
     nav.classList.add("justify-content-end");
     nav.classList.remove("justify-content-start");
}

window.addEventListener("resize", () => {
     // console.log(event);
     console.log("resized");
     console.log(nav)
     let width = window.innerWidth;

     if (width <= 766) {
          setSmallSize();
     }
     else {
          setBigSize();
     }
})

toggler.addEventListener("click", () => {
     toggle = !toggle;
     if (!toggle) {
          nav.classList.remove("d-none");
          nav.classList.add("d-block");
     }
     else {
          nav.classList.add("d-none");
          nav.classList.remove("d-block");
     }
})

if (window.innerWidth <= 766) {
     setSmallSize();
}
else {
     setBigSize();
}