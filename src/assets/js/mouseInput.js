let textarea = document.querySelector('.textarea');

document.onclick = function(evevnt) {
    console.log(evevnt.target);
    if(evevnt.target.classList.contains('buttom') && evevnt.target.textContent.length == 1) {
        textarea.textContent += evevnt.target.textContent;
    }
}


document.querySelector('.keyboard').onmousedown = function(event) {

    let buttoms = document.querySelectorAll('.buttom');

    buttoms.forEach(elem => {
        elem.classList.remove('active');
    });

    if(event.target.classList.contains('buttom')) {
        event.target.classList.add('active');
    }
    // console.log(event.target);
}

document.querySelector('.keyboard').onmouseup = function(event) {

    let buttoms = document.querySelectorAll('.buttom');

    buttoms.forEach(elem => {
        elem.classList.remove('active');
    });
}