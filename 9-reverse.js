/* function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
    }
    return reversed;
}
const myString = "I am a good boy";
const reversed = reverseString(myString);
console.log('Reversed output: ',reversed); */

/* function reverseStr(str) {
  let revsd = "";
  for (let i = str.length - 1; i >= 0; i--) { 
    const element = str[i];
    revsd = revsd + element;
    // console.log(element, revsd);
  }
  return revsd;
}

const myStr = "I am a good person";
const revsd = reverseStr(myStr);
console.log(revsd); */

function doReverse(text) {
  let doingRev = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    doingRev = doingRev + element;
    // console.log(element, doingRev);
  }
  return doingRev;
}
const myText = "He is a teacher";
const doingRev = doReverse(myText);
console.log(doingRev);
