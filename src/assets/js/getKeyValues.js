import arr from './data';

// document.onkeydown = function(event) {
//     console.log(event.key);
// }

function init () {
    let out = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 'Backspace' && arr[i] !== 'Tab' && arr[i] !== 'CapsLock' && arr[i] !== 'Enter' && arr[i] !== 'Shift' && arr[i] !== 'Control' && arr[i] !== 'Alt' && arr[i] !== 'ArrowUp' && arr[i] !== 'ArrowLeft' && arr[i] !== 'ArrowRight' && arr[i] !== 'ArrowDown' &&  arr[i] !== ' ' && arr[i] !== 'Meta' && arr[i] !== 'Delete') {
            out += `<div class="buttom" data="${arr[i]}">${arr[i]}</div>`;
        }
        if(arr[i] === 'Backspace') {
            out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'Tab') {
            out += `<div class="buttom tab" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'CapsLock') {
            out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'Enter') {
            out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'Shift') {
            out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'Alt') {
            out += `<div class="buttom ctrl" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'Delete') {
            out += `<div class="buttom ctrl" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'ArrowDown') {
            out += `<div class="buttom ctrl" data="${arr[i]}"><div class="botton-triangle"></div></div>`;
        }

        if(arr[i] === 'ArrowUp') {
            out += `<div class="buttom ctrl" data="${arr[i]}"><div class="top-triangle"></div></div>`;
        }

        if(arr[i] === 'ArrowLeft') {
            out += `<div class="buttom ctrl" data="${arr[i]}"><div class="left-triangle"></div></div>`;
        }

        if(arr[i] === 'ArrowRight') {
            out += `<div class="buttom ctrl" data="${arr[i]}"><div class="right-triangle"></div></div>`;
        }

        if(arr[i] === 'Control' ) {
            out += `<div class="buttom ctrl" data="${arr[i]}">Ctrl</div>`;
        }

        if(arr[i] === ' ') {
            out += `<div class="buttom space" data="${arr[i]}">${arr[i]}</div>`;
        }

        if(arr[i] === 'Meta') {
            out += `<div class="buttom ctrl" data="${arr[i]}">Win</div>`;
        }
    }

    document.querySelector('.keyboard').innerHTML = out;
}

init();

document.onkeydown = function(event) {
    // console.log(event.key);
    document.querySelector(`.buttom[data="${event.key}"]`).classList.add('active');
};

document.onkeyup = function(event) {
    document.querySelector(`.buttom[data="${event.key}"]`).classList.remove('active');
};

// Mouse event
// document.querySelector('.keyboard').onmousedown = function(event) {

//     let buttoms = document.querySelectorAll('.buttom');

//     buttoms.forEach(elem => {
//         elem.classList.remove('active');
//     });

//     if(event.target.classList.contains('buttom')) {
//         event.target.classList.add('active');
//     }
//     // console.log(event.target);
// }