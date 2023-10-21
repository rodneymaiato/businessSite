window.onload = function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const headerBackground = document.querySelector(".header-background");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerBackground.classList.toggle("active");
  });

  
};

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".nav-menu a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Close the menu (you can replace this with your specific code to close the menu)
            document.querySelector(".nav-menu").classList.remove("active");
            document.querySelector(".hamburger").classList.remove("active");
            document.querySelector(".header-background").classList.remove("active");
        });
    });
});
