var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin
});

var lines = []

rl.on('line', function(line) {
	lines.push(line)
});

rl.on('close', function() {
	solve(lines)
})


function solve(lines){
	var n = Number(lines[0])
	for(var i = 1; i <= n; i++){
		if (isPrime(Number(lines[i]))){
			console.log('Prime')
		}else{
			console.log('Composite')
		}

	}

}

function isPrime(num){
	if (num === 1) return false

	for (var i = 2; i < num; i++){
		if (num % i === 0){
			return false
		}
	}
	return true
}
