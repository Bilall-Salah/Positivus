let plus = document.querySelectorAll(".plus");
let slider = document.getElementById("slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".dot");
let dotIndex = 0;
let width = 0;
let maxwidth = 225;
let sendMessage = document.getElementById("sendMessage");
let hiChecked = document.getElementById("hiChecked");
let getChecked = document.getElementById("getChecked");
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
sendMessage.addEventListener("click", (e) => {
    let hiChecked = document.getElementById("hiChecked");
    let getChecked = document.getElementById("getChecked")
    let choose = document.getElementById("choose");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    if (!hiChecked.checked && !getChecked.checked) {
        choose.classList.remove("hidden");
        e.preventDefault();
    } else {
        choose.classList.add("hidden");
    }
    if (name.value.trim() === "") {
        e.preventDefault();
        nameError.classList.remove("hidden");   
    } else {
        nameError.classList.add("hidden");  
    }
    if ( !email.value.includes("@")) {
        e.preventDefault();
        emailError.classList.remove("hidden");   
    } else {
        emailError.classList.add("hidden");  
    }
    if (message.value.trim() === "") {
        e.preventDefault();
        messageError.classList.remove("hidden");   
    } else {
        messageError.classList.add("hidden");  
    }
    if (hiChecked.checked || getChecked.checked && name.value.trim() !== "" && email.value.includes("@") && message.value.trim() !== "") { 
        alert("Message sent successfully!");
    }
});

hiChecked.addEventListener("change", () => {
    if (hiChecked.checked) {
        getChecked.checked = false;
        getChecked.disabled = true;
    } else {
        getChecked.disabled = false;
    }
});

getChecked.addEventListener("change", () => {
    if (getChecked.checked) {
        hiChecked.checked = false;
        hiChecked.disabled = true;
    } else {
        hiChecked.disabled = false;
    }
});
