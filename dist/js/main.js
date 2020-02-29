// $(function() {
//   $(".work-slider").slick({
//     slidesToShow: 7,
//     centerMode: true,
//     // autoplay: true,
//     // autoplaySpeed: 500,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "js/particles.json", function() {
  console.log("callback - particles.js config loaded");
});
