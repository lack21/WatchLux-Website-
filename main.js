"use strict";
// lear
// Watchlux
// When window is loaded
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("blur");
  const switchBtn = document.querySelector(".switch-btn");
  const switchIcon = document.querySelector(".switch-icon");
  const hiddenOffers = document.querySelectorAll(".hidden-offer");
  const offersBtn = document.querySelector(".offers-btn");
  let offerMode = false;
  const hiddenItems = document.querySelectorAll(".hidden-item");
  const itemsBtn = document.querySelector(".items-btn");
  let itemMode = false;
  const navigation = document.querySelector(".navigation");
  const topBtn = document.querySelector(".top-btn");
  const navLinks = document.querySelector(".links");
  const openLinksBtn = document.querySelector(".open-links-btn");
  const closeLinksBtn = document.querySelector(".close-links-btn");
  // Switching background mode
  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
    switchIcon.classList.toggle("icon-on");
  });
  // Show/Hide hidden offers
  offersBtn.addEventListener("click", () => {
    offerMode = !offerMode;
    if (offerMode) {
      hiddenOffers.forEach((item) => {
        item.style.display = "block";
      });
      offersBtn.innerHTML = "Show Less!";
    } else {
      hiddenOffers.forEach((item) => {
        item.style.display = "none";
      });
      offersBtn.innerHTML = "Show More!";
    }
  });
  // Show/Hide hidden items
  itemsBtn.addEventListener("click", () => {
    itemMode = !itemMode;
    if (itemMode) {
      hiddenItems.forEach((item) => {
        item.style.display = "block";
      });
      itemsBtn.innerHTML = "Show Less!";
    } else {
      hiddenItems.forEach((item) => {
        item.style.display = "none";
      });
      itemsBtn.innerHTML = "Show More!";
    }
  });
  // Show/Hide navigation background
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navigation.style.backgroundColor = "#4686f6";
      navigation.style.padding = ".5rem 5%";
      topBtn.style.display = "block";
    } else {
      navigation.style.backgroundColor = "transparent";
      navigation.style.padding = "2rem 5%";
      topBtn.style.display = "none";
    }
  });
  // Show navigation links
  openLinksBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
  });
  // Hide navigation links
  closeLinksBtn.addEventListener("click", () => {
    navLinks.style.right = "-150px";
  });
});
