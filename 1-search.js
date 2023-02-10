const lyrics =
  "Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay bolte parini";

const searchString = "PakHi";
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyrics.includes('Pakhi');
const doesExist = lyricsLowerCase.includes(searchString.toLowerCase());
// console.log(doesExist);

// -------------------------------------------
// indexOf

console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("Tumi"));

if (lyrics.indexOf("pakhi") !== -1) {
  console.log("exists inside ihe string");
} else {
  console.log("cannot find it");
}

// starsWith

console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf');