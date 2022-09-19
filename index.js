$("#owl-demo").owlCarousel({
  loop: true,
  margin: 120,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

$("#owl-demo1").owlCarousel({
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
