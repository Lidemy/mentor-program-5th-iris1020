const request = require('request');
const action = process.argv[2]
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

if (action === 'list') {
	listBooks()
} else if (action === 'read') {
	readBook(process.argv[3])		
} else if (action === 'delete') {
	deleteBook(process.argv[3])
} else if (action === 'create') {
	createBook(process.argv[3])
} else if (action === 'update') {
	updateBook(process.argv[3], process.argv[4])
} else {
	console.log('unknown action')
}

function listBooks(){
	request('https://lidemy-book-store.herokuapp.com/books?_limit=20', function (err, response, body) {
	  if (err) {
	  	console.log('err', err)
	  	return
	  }

	  let books
	  try {
	  	books = JSON.parse(body)
	  } catch(err) {
	  	console.log(err)
	  	return
	  }
	  
	  for (let i = 0; i < books.length; i++) {
	  console.log(`${books[i].id} ${books[i].name}`)
	  }
	});

}

function readBook(id){
	request('https://lidemy-book-store.herokuapp.com/books/' + id, function (err, response, body) {
	  if (err) {
	  	console.log('err', err)
	  	return
	  }

	  let book
	  try {
	  	book = JSON.parse(body)
	  } catch(err) {
	  	console.log(err)
	  	return
	  }
	  
	  console.log(book)
	  });
	}

function deleteBook(id){
	request.delete('https://lidemy-book-store.herokuapp.com/books/' + id, function (err, response, body) {
	  if (err) {
	  	console.log('err', err)
	  	return
	  }

	  let book
	  try {
	  	book = JSON.parse(body)
	  } catch(err) {
	  	console.log(err)
	  	return
	  }
	  
	  console.log(book)
	  });

}


function createBook(name){
	request.post({
		url: `${API_ENDPOINT}/books`,
		form: {
			name
		}
	}, (err, res) => {
		if (err) {
			return console.log('新增失敗', err);
		}
		console.log('新增成功!');
	})

}

function updateBook(id, newName){
	request.patch({
		url: `${API_ENDPOINT}/books/${id}`,
		form:{
			name
		}
	}, (err, res) => {
		if (err) {
			return console.log('更新失敗', err);
		}
		console.log('更新成功!');
	})
}
