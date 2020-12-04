document.querySelector('.outer__circle').addEventListener('mouseover', () => {
    document.querySelector('.outer__circle').classList.add('outer__mouseover')
});

document.querySelector('.outer__circle').addEventListener('mouseout', () => {
    document.querySelector('.outer__circle').classList.remove('outer__mouseover')
});


document.querySelector('.inner__circle').addEventListener('mouseover', () => {
    document.querySelector('.inner__circle').classList.add('inner__mouseover')
    document.querySelector('.inner__circle').classList.add('pointer')
    document.querySelector('.outer__circle').classList.add('pointer')
    document.querySelector('.outer__circle').classList.add('outer__mouseover__yellow')
    
});

document.querySelector('.inner__circle').addEventListener('mouseout', () => {
    document.querySelector('.inner__circle').classList.remove('inner__mouseover')
    document.querySelector('.inner__circle').classList.remove('pointer')
    document.querySelector('.outer__circle').classList.remove('pointer')
    document.querySelector('.outer__circle').classList.remove('outer__mouseover__yellow')
});
