function reverse(str) {
  var newstr = []
  var a = str.length
  for (var i = str.length-1; i >= 0; i--){
  	newstr[i] = str[i + a - 2 * (i)]
  }
  newstr.push(str[0])
  newstr = newstr.join('')
  console.log(newstr)
}

reverse('hello');
