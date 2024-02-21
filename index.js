var crsr = document.querySelector("#cursor")

// document.addEventListener("mousemove", function(dets){
//     crsr.style.left = dets.x+"px"
//     crsr.style.top = dets.y+"px"
//     console.log("hey")
// })

gsap.to("nav",{
    backgroundColor: "#002C36",
    duration: 0.5,
    height: "60px",
    width: "100%",
    margin: "0px",
    borderRadius: "0px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: " top -11%",
        scrub: 0.5
    }
})

gsap.to(".main",{
    backgroundColor: "black",
    color: "black",
    scrollTrigger : {
        trigger:".main" ,
        scroller: "body",
        start: "top -30%",
        end: "top -100vh",
        scrub: 2
    }
})





