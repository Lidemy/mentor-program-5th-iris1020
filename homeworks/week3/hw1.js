var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  let N = Number(lines[0])
  printStar(N)

}

function printStar(n) {
  let star = ''
  for (let i = 0; i < n; i++) {
    star += '*'
    console.log(star)
  }
}