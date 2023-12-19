const modal = document.querySelector("#modal");
const body = document.querySelector("body");
    

  const noScroll = function (e) {

      if (modal.classList.contains('is-open')) {
          // Disable scroll
          body.style.overflow = "hidden";
      } else {
          // Enable scroll
          body.style.overflow = "auto";
      }
  };