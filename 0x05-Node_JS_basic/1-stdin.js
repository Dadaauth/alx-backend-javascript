process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');

let data = "";

process.stdin.on('data', (chunk) => {
  data += chunk;
});

process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing');
  process.exit(0);
})

process.stdin.on('end', () => {
  process.stdout.write(`Your name is: ${data}`);
  process.stdout.write('This important software is now closing');
});
