let plus = document.querySelectorAll(".plus");
plus.forEach((btn) => {
    btn.addEventListener("click", () => {
        const main = btn.closest(".main");
        const display = main.querySelector(".display");
        display.classList.toggle("hidden");
        main.classList.toggle("active");
        btn.classList.toggle("fa-plus");
        btn.classList.toggle("fa-minus");

    });
});

let slider = document.getElementById("slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".dot");
let dotIndex = 0;
let width = 0;
let maxwidth = 225;
 function activeDot() {
     dots.forEach((dot) => {
         dot.classList.remove("active"); 
     });
        dots[dotIndex].classList.add("active");
}
next.addEventListener("click", () => {
    if (width < maxwidth) {
        width += 70;
        slider.style.transform = `translateX(-${width}%)`;
        dotIndex++;
        activeDot();
    }
});
prev.addEventListener("click", () => {
    if (width >= 70 ) {
        width -= 70;
        slider.style.transform = `translateX(-${width}%)`;
        dotIndex--;
        activeDot();
    }
});

