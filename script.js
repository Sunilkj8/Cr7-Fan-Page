// var crsr = document.querySelector("#cursor")
// var crsrBlr = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x + "px"
//     crsr.style.top = dets.y + "px"
//     crsrBlr.style.left = dets.x - 50 + "px"
//     crsrBlr.style.top = dets.y - 50 + "px"


// })


gsap.to("#nav", {
    // backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        // scrub: 1,

    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -50%",
        end: "top -100%",
        scrub: 2
    }
})

// var typed = new Typed('#suii', {
//     strings: ['SUII'],
//     typeSpeed: 1000,
//   });
var typed2 = new Typed('#suii', {
    strings: ['<strong>MADEIRA</strong>','MANCHESTER','<strong>MADRID</strong>','<strong>TURIN</strong>','<strong>AND</strong>','MANCHESTER <strong>AGAIN</strong>','<strong>WREATHED IN</strong> RED','<strong>RESTORED TO THIS GREAT GALLERY OF THE GAME</strong>','<strong>A WALKING WORK OF ART</strong>','<strong>VINTAGE</strong>','<strong>BEYOND VALUATION</strong>','<strong>BEYOND FORGERY</strong>','<strong>OR IMITATION</strong>','<strong>18 YEARS</strong>','<strong>SINCE THAT TREMBLING TEENAGER</strong>','<strong>FIRST TIP TOED</strong>','<strong>ON TO THIS STORIED STAGE</strong>','<strong>NOW IN HIS IMMACULATE MATURITY</strong>','CR <bold>7</bold>'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    loop: true
  });