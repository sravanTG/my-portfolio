"use strict";

const mnBtn = document.querySelector(".mbi");
const mbt1 = document.querySelector(".mb-it1");
const mbt2 = document.querySelector(".mb-it2");
const mbt3 = document.querySelector(".mb-it3");
const mobNav = document.querySelector(".mob-nav");
let is_open = false;

mnBtn.addEventListener("click", function name(params) {
  if (is_open === false) {
    mobNav.classList.remove("dn");
    is_open = true;
  } else {
    mobNav.classList.add("dn");
    is_open = false;
  }
});

mbt1.addEventListener("click", function name(params) {
  mobNav.classList.add("dn");
  is_open = false;
});

mbt2.addEventListener("click", function name(params) {
  mobNav.classList.add("dn");
  is_open = false;
});

mbt3.addEventListener("click", function name(params) {
  mobNav.classList.add("dn");
  is_open = false;
});
