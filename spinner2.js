const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let delay = 100;
spinner.forEach(elm => {
  setTimeout(() => {
    process.stdout.write(`\r${elm}`);
  }, delay);
  delay += 200;
});