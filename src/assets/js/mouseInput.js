let textarea = document.querySelector('.textarea');

document.onclick = function(evevnt) {
    console.log(evevnt.target);
    if(evevnt.target.classList.contains('buttom') && evevnt.target.textContent.length == 1) {
        textarea.textContent += evevnt.target.textContent;
    }
}