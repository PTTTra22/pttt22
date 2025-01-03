const optmenu = document.querySelectorAll(".dropdown");
const sBtn_text = document.getElementById("selected");
// console.log(optmenu);
optmenu.forEach(optmenus => {
    const selects = optmenus.querySelectorAll(".select");
    const options = optmenus.querySelectorAll(".option");
    
selects.forEach(select => {
    select.addEventListener("click", () => {
        console.log(optmenus);
            optmenus.classList.toggle("active");
        console.log(`clicked: ${optmenus}`);
      });
});

options.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".select-text").innerText;
        let li = document.createElement("li");
        li.innerHTML = selectedOption;
        sBtn_text.appendChild(li);
        console.log(selectedOption);
        let span = document.createElement("span");
        span.innerHTML ="\u00D7";
        li.appendChild(span);
    });
});
sBtn_text.addEventListener("click", function(e) {
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
});

const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const opt = optionMenu.querySelectorAll(".option_1");
const sBtn = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    console.log("clicked");
});

opt.forEach(opti => {
    opti.addEventListener("click", () => {
            let selectedOpt = opti.innerText;
            sBtn.innerText = selectedOpt; 
        console.log(selectedOpt);

        optionMenu.classList.remove("active");
    });
});

const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("active");
        console.log("clicked");
    });
});

const hearts1 = document.querySelectorAll(".heart1");

hearts1.forEach(heart1 => {
    heart1.addEventListener("click", () => {
        heart1.classList.toggle("active");
        console.log("clicked");
    });
});

// active popup 

const modal = document.querySelectorAll('.popup');
const vcBtn = document.querySelectorAll('.sanpham1');
const modalClose = document.querySelectorAll('.close');
const modalPU = document.querySelectorAll('.khung');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-popup');
}

vcBtn.forEach((vcBtn, i) => {
    vcBtn.addEventListener('click', () => {
        activeModal(i);
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-popup');
        })
    })
})

modalPU.forEach((modalPU) => {
    modalPU.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})