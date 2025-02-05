window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".btntopo");
  scroll.classList.toggle("active", window.scrollY > 450);
}); // Seleção e função de scroll do botão topo

function backtopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
} // Função do botão voltar ao topo

function voltartopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
} // Função da logo voltar ao topo

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 9,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  keyboard: true,
  loop: true,
}); // Manipulação do slide
