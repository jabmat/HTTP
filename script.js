// 1. Metoda GET

// a) XMLHttpRequest
// https://jsonplaceholder.typicode.com/todos/
const XMLRequestGET = () => {
	// 1. Stworzenie obiektu requesta
	const request = new XMLHttpRequest();
	// 2. Konfiguracja requesta prz pomocy metody .open()
	// wymagane argumenty metody open:
	// - metoda HTTP (np. GET)
	// - url (endpoint jakiegoś API) z którego chcemy pobrać dane
	request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
	// 3. Wysłanie requesta (metoda .send())
	request.send();
	// 4. Oczekiwanie i reakcja na response
	request.onload = () => {
		// ta funkcja wykona się dopiero kiedy dotrze do nas odpowiedź z serwera
		// console.log(request);
		// console.log(request.responseText);
		const data = JSON.parse(request.responseText);
		console.log(data);
	};
};
// XMLRequestGET(); // wywołanie funkcji

// b) Fetch API + then chain

const fetchRequestGET = () => {
	// 1. Wywołanie funkcji fetch, funkcja fetch domyślnie działa na metodzie GET
	// console.log(fetch('https://jsonplaceholder.typicode.com/todos/'));
	fetch('https://jsonplaceholder.typicode.com/todos/')
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});
};
// .json()
// 1. rs => json
// 2. json => obiekty (JSON.parse)

// fetchRequestGET(); // wywołanie funkcji

// c) Fetch API + async/await

// async function() {

// };
// const fn = async function () { };

const asyncFetchRequestGET = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
	const data = await response.json();
	console.log(response);
};

// asyncFetchRequestGET(); // wywołanie funkcji

// 2. Metoda POST

// a) XMLHttpRequest

const data = JSON.stringify({
	name: 'Andrew',
	age: 30,
});

const XMLRequestPOST = (body) => {
	const request = new XMLHttpRequest();
	request.open('POST', 'https://jsonplaceholder.typicode.com/posts/');
	request.send(body);
	request.onload = function () {
		console.log(request);
		console.log(request.status);
		console.log(request.responseText);
	};

	request.onerror = function () {
		console.error('Something went wrong!');
	};
};
// XMLRequestPOST(data); // wywołanie funkcji

// JSON.parse: json => obj js
// JSON.stringify: obj js => json

// b) Fetch API + then chain

const fetchRequestPOST = () => {
	const options = {
		method: 'POST',
		body: JSON.stringify({
			name: 'Andrew',
			age: 30,
		}),
	};

	fetch('https://jsonplaceholder.typicode.com/posts/', options)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => console.log(data))
		.catch((err) => console.error(err));
};
// fetchRequestPOST(); // wywołanie funkcji

// c) Fetch API + async/await

const asyncFetchRequestPOST = async () => {
	const options = {
		method: 'POST',
		body: JSON.stringify({
			name: 'Andrew',
			age: 30,
		}),
	};
	try {
		const response = await fetch(
			'http://jsonplaceholder.typicode.com/posts/',
			options
		);
		console.log(response);
		console.log(response.status);
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};
// asyncFetchRequestPOST(); // wywołanie funkcji

// 3. Metoda PUT
// POST => tworzy nowe miejsce na dane i je tam wrzuca
// PUT => weźmie komórkę danych, usunie stare dane i wrzuci nowe

// a) XMLHttpRequest

const data2 = JSON.stringify({
	name: 'Matt',
	age: 34,
});

const XMLRequestPUT = (body) => {
	const request = new XMLHttpRequest();
	request.open('PUT', 'https://jsonplaceholder.typicode.com/todos/1');
	request.send(body);
	request.onload = function () {
		console.log(request);
		console.log(request.status);
		console.log(request.responseText);
	};

	request.onerror = function () {
		console.error('Something went wrong!');
	};
};
XMLRequestPUT(data2); // wywołanie funkcji

// b) Fetch API + then chain

const fetchRequestPUT = () => {
	const options = {
		method: 'PUT',
		body: JSON.stringify({
			name: 'Matt',
			age: 34,
		}),
	};

	fetch('https://jsonplaceholder.typicode.com/todos/1', options)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => console.log(data))
		.catch((err) => console.error(err));
};
fetchRequestPUT(); // wywołanie funkcji

// c) Fetch API + async/await

const asyncFetchRequestPUT = async () => {
	const options = {
		method: 'PUT',
		body: JSON.stringify({
			name: 'Matt',
			age: 34,
		}),
	};
	try {
		const response = await fetch(
			'http://jsonplaceholder.typicode.com/todos/1',
			options
		);
		console.log(response);
		console.log(response.status);
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};
asyncFetchRequestPUT(); // wywołanie funkcji
