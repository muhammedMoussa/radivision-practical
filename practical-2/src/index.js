document.querySelector('.outer__circle').addEventListener('mouseover', () => {
    document.querySelector('.outer__circle').classList.add('outer__mouseover')
});

document.querySelector('.outer__circle').addEventListener('mouseout', () => {
    document.querySelector('.outer__circle').classList.remove('outer__mouseover')
});
