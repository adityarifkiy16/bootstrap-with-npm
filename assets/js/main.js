const header = document.querySelector("header");
const navbar = document.querySelector("#navbar");

// fixed navbar
window.onscroll = () => {
  const fixedNav = header.offsetTop;
  if (window.scrollY > fixedNav) {
    header.classList.add("fixed-top");
    header.classList.remove("position-absolute");
  } else {
    header.classList.remove("fixed-top");
    header.classList.add("position-absolute");
  }
};
