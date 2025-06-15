
console.time("looptime");
// motivational quotes
const quotes = [
  "You're doing amazing, buddy! ✨",
  "Keep pushing — success is on the other side! 🚀",
  "One line of code closer to greatness 💻",
  "Don't give up — you're already ahead of 99%! 🔥",
  "You're not just learning Node.js... you're DOMINATING it! 😎",
  "If bugs scare you, remember... even bugs fear YOU now 🐛💀",
];

let name = process.argv[2];


if(!name){
    console.error("⚠️  Please provide your name: node motivator.js <YourName>");
    process.exit(1); // exit with error code
}

let randomIndex = Math.floor(Math.random()*quotes.length);
let randomQuote = quotes[randomIndex];

console.log(`💥 hey ${name}, ${randomQuote}`);
console.timeEnd("looptime");