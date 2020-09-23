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


const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// // TESTING KEY PRESS. Play beep if b is pressed
// stdin.on('data', (key) => {
//   // console.log(key);
//   if (key === 'b') {
//     process.stdout.write("\u0007");
//   }
//   if (key === '\u0003') {
//     process.exit();
//   }
// });


const timer = (input) => {
  const printInstructions = () => {
    console.log('How to use Timer');
    console.log('----------------');
    console.log('Enter a number from 1 to 9 to start a timer. A beep will sound once the timer counts down to 0');
    console.log('Press "b" to sound an beep right away');
    console.log('Press "Ctrl + C" to exit the program');
  }
  const soundBell = () => process.stdout.write("\u0007");
  
  
  const askForInput = (input) => {
    rl.question(input , (answer) => {
      if (answer > 0 && answer < 10) {
        // check input is between 1 to 9
        console.log(`Setting timer for ${answer} seconds...`);
        setTimeout(() => {
          // start a timer based on input
          soundBell();
          askForInput('Enter a number from 1 to 9: '); // after bell sounds, ask for another input
        }, answer * 1000)
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

  // rl.question('Input: ', (answer) => {
  //   if (answer === 'b') {
  //     soundBell();
  //   } else if (answer > 0 || answer < 10) {
  //     console.log(`Setting timer for ${answer} seconds...`);
  //     setTimeout(() => {
  //       soundBell();
  //     }, answer * 1000)
  //   } 
  // });

timer(`Enter a number from 1 to 9: `);