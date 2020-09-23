// user can press b and it should beep right away
// user can input any number from 1-9
  // immediately output "Setting timer for x seconds..."
  // beep after x seconds has passed
// user can CTRL + C to exit
  // say "Thanks for using me, ciao!" before terminating

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const timer = () => {
  const printInstructions = () => {
    console.log('How to use Timer');
    console.log('----------------');
    console.log('Enter a number from 1 to 9 to start a timer. A beep will sound once the timer counts down to 0');
    console.log('Press "b" to sound an beep immediately');
    console.log('Press "Ctrl + C" to exit the program');
  }
  const alertBell = () => process.stdout.write("\u0007");

  printInstructions();

  rl.question('Input: ', (answer) => {
    if (answer === 'b') {
      alertBell();
    } else if (answer > 0 || answer < 10) {
      console.log(`Setting timer for ${answer} seconds...`);
      setTimeout(() => {
        alertBell();
      }, answer * 1000)
    } 
  });

  rl.on('SIGINT', () => {
    console.log('Thanks for using me. Ciao!');
    rl.close();
  });

};

timer();