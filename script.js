// slide menu

(function () {

  const burgerButton = document.getElementById("burgerButton");
  const container = document.getElementById("container");
  const slideCloser = document.getElementById("slideCloser");


  // switch the slide menu from close to open and reverse

  function toggleSlide() {
    burgerButton.classList.toggle("open");
    container.classList.toggle("open");
    slideCloser.classList.toggle("open");
  }

  slideCloser.addEventListener("click", function () {
    toggleSlide()
  });

  // button burger

  burgerButton.addEventListener("click", function () {
    toggleSlide()
  })

})();