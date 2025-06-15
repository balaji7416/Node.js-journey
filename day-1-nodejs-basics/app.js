console.log("This is my first day learning Node.js");
let name = "karthik";
const greet = (name) => {
  return `hello ${name} welcome back`;
};
console.log(greet(name));

console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Arguments:", process.argv);
console.log("memory usage:", process.memoryUsage())

console.time("loopTime");

for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}

console.timeEnd("loopTime");
