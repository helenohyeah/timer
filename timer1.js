// implement an alarm clock / timer that will beep after a specified amount of time has passed
// user can specifiy an unlimited number of alarms usling CL args

const timer = () => {
  const alertBell = () => console.log("\u0007");
  const sortNum = (a, b) => a - b;

  let userInputs = process.argv.slice(2); // get user input as array
  let alarmTimes = userInputs
    .map(i => parseInt(i)) // turn string inputs into numbers
    .filter(i => Boolean(i)) // remove non-numbers
    .filter(i => i > 0) // remove negative numbers
    .sort(sortNum);   // sort from smallest to largest

  console.log(userInputs);
  console.log(alarmTimes);


  // for (let i = 0; i <= Math.max(...userInput); i++) {
  //   console.log(i);
  // }
  // loop through a counter that starts from 0 to largest
  // loop through the userInput
  // beep when input === counter
  // else silence??
  // console.log(userInput);
  // alertBell();
};

timer();