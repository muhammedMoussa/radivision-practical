function reverseHandler(sentence) {
    const res = sentence.split(' ').reverse().join(' ');
    return res;
}

module.exports = reverseHandler;

