!(function(){
    const body = document.querySelector('body');

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.append(wrapper);

    let tittle = document.createElement('h1');
    tittle.textContent = 'RSS Виртуальная клавиатура';
    tittle.classList.add('tittle');
    wrapper.append(tittle);

    let textArrea = document.createElement('textarea');
    textArrea.classList.add('textarea');
    wrapper.append(textArrea);
})();