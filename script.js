let homeImgContainers = document.querySelectorAll(".extra-img-container");
let trustFlex = document.querySelector('.trust-flex');

let homeLeader = 0;
let homeOpac = 96;
let scrolledPast = false;
let menuOpen = false;
let homeInt;

let quesBoxes = [false, false, false, false, false];
let quesSeen = [false, false, false, false, false];

// SQUARES BG
for(let i = 0; i <= 500; i++){
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.addEventListener("mouseenter", () => {
        newSquare.style.backgroundColor = "hsl(0, 0%, 13%)";
    });
    newSquare.addEventListener("mouseleave", () => {
        newSquare.style.backgroundColor = "transparent";
    });
    document.querySelector(".square-container").appendChild(newSquare);
}

// STARTERS ANIMATION //
document.querySelectorAll(".starter").forEach((starer, idx) => {
    setTimeout(() => {
        starer.style.opacity = "1";
        starer.style.top = "0px";
    }, 220 * (idx + 1) - (10 * idx));
});

// HOVERS //
document.querySelector(".btn-home").addEventListener("mouseenter", () => {
    document.querySelector(".btn-home").style.border = "1px solid white";
    document.querySelector(".btn-home").style.backgroundColor = "transparent";
    document.querySelector(".btn-home-txt").style.color = "white";
    document.querySelector(".home-arr").style.color = "white";
});
document.querySelector(".btn-home").addEventListener("mouseleave", () => {
    document.querySelector(".btn-home").style.border = "1px solid transparent";
    document.querySelector(".btn-home").style.backgroundColor = "white";
    document.querySelector(".btn-home-txt").style.color = "hsl(0, 0%, 10%)";
    document.querySelector(".home-arr").style.color = "hsl(0, 0%, 10%)";
});

document.querySelectorAll(".feat-box").forEach(box => {
    box.addEventListener("mouseenter", () => {if(window.innerWidth > 1130){
        box.querySelector(".feat-arr-container").style.transform = "rotate(-45deg)";
        box.querySelector(".feat-shadow").style.background = "linear-gradient(to right, hsla(0, 0%, 8%, 0.97), hsla(0, 0%, 14%, 0.97))";
        box.querySelector(".feat-img").style.transform = "scale(1.05)";
    }});
    box.addEventListener("mouseleave", () => {if(window.innerWidth > 1130){
        box.querySelector(".feat-arr-container").style.transform = "rotate(0deg)";
        box.querySelector(".feat-shadow").style.background = "linear-gradient(to left, hsla(0, 0%, 8%, 0.97), hsla(0, 0%, 14%, 0.97))";
        box.querySelector(".feat-img").style.transform = "scale(1)";
    }});
});

document.querySelector(".about-avt-wrapper").addEventListener("mouseenter", () => {
    document.querySelector(".about-avt").style.filter = "grayscale(0%)";
});
document.querySelector(".about-avt-wrapper").addEventListener("mouseleave", () => {
    if(window.innerWidth > 1300){
        document.querySelector(".about-avt").style.filter = "grayscale(100%)";
    }
});
//        //

document.querySelectorAll(".ques-box").forEach((box, idx) => {
    box.addEventListener("click", () => {
        if(!quesBoxes[idx]){
            box.querySelector(".ques-icon").innerHTML = '-';
            box.querySelector(".ques-para").style.paddingTop = "15px";
            if(idx == 4){
                box.querySelector(".ques-para").style.maxHeight = "315px";
            } else {
                box.querySelector(".ques-para").style.maxHeight = "115px";
            }

            if(window.innerWidth < 1130){
                box.style.background = "hsla(0, 0%, 4%, 0.93)";
            } else {
                box.style.background = "linear-gradient(to right, hsla(0, 0%, 12%, 0.93), hsla(0, 0%, 5%, 0.93))";
            }
            quesBoxes[idx] = true;
            quesSeen[idx] = true;
        } else {
            box.querySelector(".ques-icon").innerHTML = '+';
            box.style.background = "hsla(0, 0%, 4%, 0.93)";
            box.querySelector(".ques-para").style.paddingTop = "0px";
            box.querySelector(".ques-para").style.maxHeight = "0px";
            quesBoxes[idx] = false;
        }
    });

    box.addEventListener("mouseenter", () => {if(window.innerWidth > 1130){
        if(quesBoxes[idx]){
            box.style.background = "linear-gradient(to right, hsla(0, 0%, 12%, 0.93), hsla(0, 0%, 5%, 0.93))";
        } else {
            box.style.background = "hsla(0, 0%, 4%, 0.93)";
        }
    }});
    box.addEventListener("mouseleave", () => {if(window.innerWidth > 1130){
        if(quesSeen[idx]){
            box.style.background = "hsla(0, 0%, 4%, 0.93)";
        }
        else {
            box.style.background = "hsla(0, 0%, 7%, 0.93)";
        }
    }});
});

function toggleMenu(){
    if(!menuOpen){
        document.querySelector(".line1").style.top = "5.75px";
        document.querySelector(".line1").style.transform = "rotate(45deg)";
        document.querySelector(".line2").style.top = "-5.75px";
        document.querySelector(".line2").style.transform = "rotate(-45deg)";
        document.querySelector(".menu-container").style.transition = "0.5s ease";
        document.querySelector(".menu-blur").style.transition = "0.5s ease";
        document.getElementById("menuSpace").style.height = "150px";
        document.querySelector(".menu-container").style.height = "100%";
        document.querySelector(".menu-blur").style.height = "100%";
        menuOpen = true;
    } else {
        document.querySelector(".line1").style.top = "0px";
        document.querySelector(".line2").style.top = "0px";
        document.querySelector(".line1").style.transform = "rotate(0deg)";
        document.querySelector(".line2").style.transform = "rotate(0deg)";
        document.querySelector(".menu-container").style.transition = "0s ease";
        document.querySelector(".menu-blur").style.transition = "0s ease";
        document.getElementById("menuSpace").style.height = "0px";
        document.querySelector(".menu-container").style.height = "0%";
        document.querySelector(".menu-blur").style.height = "0%";
        menuOpen = false;
    }
}

const extraObs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if(!scrolledPast){
            entry.target.classList.add("extra-active");
            scrolledPast = true;
        }
      }
    });
  }, {
    threshold: 1,
});
extraObs.observe(document.querySelector(".extra-container"));
window.addEventListener("scroll", () => {
    if(window.scrollY < 100){
        document.querySelector(".extra-container").classList.remove("extra-active");
        scrolledPast = false;
    }
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.top = "0px";
          entry.target.style.opacity = "1";

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
});
document.querySelectorAll(".scroll-target").forEach(target => {
    observer.observe(target);
});