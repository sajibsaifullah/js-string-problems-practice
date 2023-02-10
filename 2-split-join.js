const lyrics =
    "Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay bolte parini";
  
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const characters = lyrics.split('');

// console.log(characters);

const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    ' Bosonto kale tomay bolte parini'
];

const newSong = lines.join(':');
console.log(newSong);
