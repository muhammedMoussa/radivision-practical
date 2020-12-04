const reverse = require('./reverse');

const reverseBtn  = document.querySelector('.reverse');
const resetBtn  = document.querySelector('.reset');

reverseBtn.addEventListener('click', () => {
    const val = document.querySelector('input').value;
    const res = reverse(val);
    console.log(res)
})
