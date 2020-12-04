const reverse = require('./reverse');

const reverseBtn  = document.querySelector('.reverse');
const resetBtn  = document.querySelector('.reset');

reverseBtn.addEventListener('click', () => {
    const val = document.querySelector('input').value;
    const res = reverse(val);
    document.querySelector('p').innerHTML = `Reversed: ${res}`
})

resetBtn.addEventListener('click', () => {
    document.querySelector('p').innerHTML = '';
})