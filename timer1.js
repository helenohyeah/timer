// implement an alarm clock / timer that will beep after a specified amount of time has passed
// user can specifiy an unlimited number of alarms usling CL args

const timer = () => {
  const alertBell = () => console.log("\u0007");
  const sortNum = (a, b) => a - b;

  let userInput = process.argv.slice(2); // get user input as array
  userInput.sort(sortNum);

  // sort from smallest to largest
  // loop through a counter that starts from 0 to largest
  // loop through the userInput
  // beep when input === counter
  // else silence??
  console.log(userInput);
  alertBell();
};

timer();