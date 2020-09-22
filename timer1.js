// implement an alarm clock / timer that will beep after a specified amount of time has passed
// user can specifiy an unlimited number of alarms using command line inputs
const timer = () => {
  const alertBell = () => process.stdout.write("\u0007");
  const sortNum = (a, b) => a - b;

  let userInputs = process.argv.slice(2); // get user input as array of strings
  let alarmTimes = userInputs
    .map(i => parseInt(i)) // turn string inputs into numbers
    .filter(i => Boolean(i)) // remove non-numbers
    .filter(i => i > 0) // remove negative numbers
    .map(i => i * 1000) // turn times into ms
    .sort(sortNum);   // sort from smallest to largest

  for (let i = 0; i < alarmTimes.length; i++) {
    setTimeout(() => {
      console.log(`${alarmTimes[i] / 1000}s: Ding!`);
      alertBell();
    }, alarmTimes[i]);
  }
};

timer();