var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []


rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
	var s = lines.join(' ')
	if(palindrome(s) === s ){
		console.log('True')
	}else{
		console.log('False')
	}

}

function palindrome(s){
	var result = ''
	for(var i=s.length-1; i>=0; i--){
		result += s.charAt(i)
	}
	return result
}