const readline = require('readline');
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startTimer = (input) => {

  const printInstructions = () => {
    console.log('---TO START A TIMER---');
    console.log('enter a number from 1 to 9 to set a timer (in seconds)');
    console.log('a beep will sound when the timer counts down to 0');
    console.log('---TO SOUND A BEEP----');
    console.log('press b to sound a beep right away');
    console.log('---TO EXIT------------');
    console.log('press "Ctrl + C"');
  };

  const soundBell = () => process.stdout.write("\u0007");
    
  const askForInput = (input) => {
    rl.question(input , (answer) => {
      if (answer > 0 && answer < 10) {
        // check input is between 1 to 9
        console.log(`Setting timer for ${answer} seconds...`);
        setTimeout(() => {
          // start a timer based on input
          soundBell();
          askForInput('Enter a number from 1 to 9: '); // after bell sounds, ask for input again
        }, answer * 1000);
      } else {
        // all other input will reprompt user for a valid input
        askForInput('Invalid entry.\nEnter a number from 1 to 9: '); // recursive case
      }
    });
  };
  
  printInstructions();
  
  stdin.on('data', (key) => {
    if (key === 'b') {
      // check for b keypress to sound beep right away
      process.stdout.write("\u0007");
    }
    if (key === '\u0003') {
      // check for CTRL + C to exit
      console.log('\nThanks for using me. Ciao!');
      process.exit();
    }
  });
  
  askForInput(input); // ask for number from 1 to 9
};

startTimer(`Enter a number from 1 to 9: `);