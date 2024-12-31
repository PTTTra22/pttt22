var delay_popup1 = 5000;
var delay_popup2 = 5000;
var delay_popup3 = 5000;
var delay_popup4 = 5000;
var delay_popup5 = 5000;
var delay_popup6 = 5000;
var delay_popup7 = 5000;
var delay_popup8 = 5000;

const showMode = (openButton, modalContent, delay) => {
    const openBtn = document.getElementById(openButton);
    const modalContainer = document.getElementById(modalContent);
    console.log(`Hello Tra ${openBtn} is shown at ${new Date().toLocaleTimeString()}`);
    console.log(`Hello Khang ${modalContainer} is shown at ${new Date().toLocaleTimeString()}`);
    modalContainer.classList.remove('show-modal');
    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal');
            modalContainer.style.visibility = 'visible';

            console.log(`Popup ${modalContent} is shown at ${new Date().toLocaleTimeString()}`);

            // Reset the timeout each time the button is clicked
            setTimeout(() => {
                modalContainer.style.visibility = 'hidden';
                console.log(`Popup ${modalContent} is hidden at ${new Date().toLocaleTimeString()}`);
            }, delay);
        });
    }
};

showMode('op-1', 'popup-1', delay_popup1);
showMode('op-2', 'popup-2', delay_popup2);
showMode('op-3', 'popup-3', delay_popup3);
showMode('op-4', 'popup-4', delay_popup4);
showMode('op-5', 'popup-5', delay_popup5);
showMode('op-6', 'popup-6', delay_popup6);
showMode('op-7', 'popup-7', delay_popup7);
showMode('op-8', 'popup-8', delay_popup8);

const btn1 = document.querySelector('#op-1');
const btn2 = document.querySelector('#op-2');
const btn3 = document.querySelector('#op-3');
const btn4 = document.querySelector('#op-4');
const btn5 = document.querySelector('#op-5');
const btn6 = document.querySelector('#op-6');
const btn7 = document.querySelector('#op-7');
const btn8 = document.querySelector('#op-8');

btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'white';
    toggleLabel(btn1);
});

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'white';
    toggleLabel(btn2);
});
btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = 'white';
    toggleLabel(btn3);
});
btn4.addEventListener('click', () => {
    btn4.style.backgroundColor = 'white';
    toggleLabel(btn4);
});
btn5.addEventListener('click', () => {
    btn5.style.backgroundColor = 'white';
    toggleLabel(btn5);
});
btn6.addEventListener('click', () => {
    btn6.style.backgroundColor = 'white';
    toggleLabel(btn6);
});
btn7.addEventListener('click', () => {
    btn7.style.backgroundColor = 'white';
    toggleLabel(btn7);
});
btn8.addEventListener('click', () => {
    btn8.style.backgroundColor = 'white';
    toggleLabel(btn8);
});

function toggleLabel(btn) {
    if (btn.innerText === 'Lưu mã') {
        btn.innerText = 'Đã lưu';
    }
    const computedStyle = getComputedStyle(btn);
    const borderColor = computedStyle.borderColor;
    console.log(`Border color of the button: ${borderColor}`);
    console.log(btn);
    if(borderColor === 'rgb(128, 2, 8)') {
        btn.style.color = '#800208';
        btn.style.fontSize = '1vw';
    }else{
        btn.style.color = '#00A375';
        btn.style.fontSize = '1vw';
    }
}
// ======detail popup ======
const modal = document.querySelectorAll('.model');
const vcBtn = document.querySelectorAll('.voucher');
const modalClose = document.querySelectorAll('.close');
const modalPU = document.querySelectorAll('.khungpu');

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


