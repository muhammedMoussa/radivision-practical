document.querySelector('.outer__circle').addEventListener('mouseover', () => {
    document.querySelector('.outer__circle').classList.add('outer__mouseover')
    document.querySelector('.inner__circle').classList.remove('click__action')
});

document.querySelector('.outer__circle').addEventListener('mouseout', () => {
    document.querySelector('.outer__circle').classList.remove('outer__mouseover')
    document.querySelector('.inner__circle').classList.remove('click__action')
});

document.querySelector('.inner__circle').addEventListener('mouseover', () => {
    document.querySelector('.inner__circle').classList.add('inner__mouseover')
    document.querySelector('.inner__circle').classList.add('pointer')
    document.querySelector('.outer__circle').classList.add('pointer')
    document.querySelector('.outer__circle').classList.add('outer__mouseover__yellow')
    document.querySelector('.inner__circle').classList.remove('click__action')
});

document.querySelector('.inner__circle').addEventListener('mouseout', () => {
    document.querySelector('.inner__circle').classList.remove('inner__mouseover')
    document.querySelector('.inner__circle').classList.remove('pointer')
    document.querySelector('.outer__circle').classList.remove('pointer')
    document.querySelector('.outer__circle').classList.remove('outer__mouseover__yellow')
    document.querySelector('.inner__circle').classList.remove('click__action')
});

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.inner__circle').classList.remove('click__action')
    document.querySelector('main').classList.add('rotateOut');
    setTimeout(() => {
        document.querySelector('main').classList.remove('rotateOut')
    }, 500)
})

// click requirements not clear like mouseover for every circule.
// will add action on outer one for now.
let clicked = false;
document.querySelector('.outer__circle').addEventListener('click', () => {
    if(clicked) {
        clicked = !clicked;
        document.querySelector('.inner__circle').classList.add('click__action')
    } else {
        clicked = !clicked;
        document.querySelector('.inner__circle').classList.remove('click__action')
    }
})