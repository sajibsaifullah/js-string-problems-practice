/* function reverseWord(str) {
    const words = str.split(' ');
    const result = [];
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for (let i = words.length-1; i >= 0; i --){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = 'I am a good boy';
const reversed = reverseWord(myString);
console.log(reversed); */

function revWord(text) {
    const words = text.split(' ');
    const result = [];
    for (let i = text.length - 1; i >= 0; i--){
        const element = text[i];
        result.push(element);
    }
    const reversed = result.join('');
    return reversed;
}
const myText = 'I am a teacher';
const reversed = revWord(myText);
console.log(reversed);
