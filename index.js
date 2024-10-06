// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

const perHourWage = prompt ("How much you are earning per hour? ");
const hours = prompt ("How many hours are you working a day?");
const days = prompt ("How many days are you working a week?")
const perDay = hours * perHourWage;
const perWeek = days*perDay

console.log(`You earn Rm${perDay} daily`)
console.log(`You earn RM${perWeek} weekly`)
