const spinnerHands = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|' ]
let timeout = 100;
for (const hand of spinnerHands) { 
  setTimeout(() => {
      process.stdout.write(`'\r${hand}   `);
  }, timeout);
  timeout += 200;
}