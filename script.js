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
// XMLRequestPUT(data2); // wywołanie funkcji

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
// fetchRequestPUT(); // wywołanie funkcji

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
// asyncFetchRequestPUT(); // wywołanie funkcji

// 4. Metoda PATCH

// PUT usuwa dane i wstawia tam nowe
// PATCH aktualizauje pojedyncze części danych w bazie lub doda nowe - nic nie usuwa, zwraca 200/201
// request PATCH tak samo jak POST i PUT przyjmuje body

// const person = {
// 	name: 'Andrew',
// 	age: 30,
// 	married: true
// }

// person.age = 31
// a) XMLHttpRequest
// const person = JSON.stringify({
// 	name: 'Andrew',
// 	age: 30,
// 	married: true,
// });

const XMLRequestPATCH = () => {
	const body = JSON.stringify({
		name: 'Matt',
		age: 34,
		married: false,
	});

	const request = new XMLHttpRequest();
	request.open('PATCH', 'http://jsonplaceholder.typicode.com/todos/1');
	request.send(body);
	request.onload = function () {
		console.log(request.status);
	};

	request.onerror = function () {
		console.error('Something went wrong, Mate!');
	};
};
// XMLRequestPATCH(); // wywołanie funkcji

// b) Fetch API + then chain

const fetchRequestPATCH = () => {
	const options = {
		method: 'PATCH',
		body: JSON.stringify({
			name: 'Matt',
			age: 34,
			married: false,
		}),
	};

	fetch('http://jsonplaceholder.typicode.com/todos/1', options)
		.then((response) => {
			console.log(response.status);
			return response.json();
		})
		.then((data) => console.log(data))
		.catch((err) => console.error(err));
};
// fetchRequestPATCH(); // wywołanie funkcji

// c) Fetch API + async/await

const asyncFetchRequestPATCH = async () => {
	const options = {
		method: 'PATCH',
		body: JSON.stringify({
			name: 'Matt',
			age: 34,
			married: true,
		}),
	};
	try {
		const response = await fetch(
			'http://jsonplaceholder.typicode.com/todos/2',
			options
		);
		console.log(response.status);
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.error('Something went wrong!', err);
	}
};
// asyncFetchRequestPATCH(); // wywołanie funkcji

// Nie zapominać o error handlingu

// 5. Metoda DELTE

// DELETE usuwa zasoby w bazie danych

// A) error handling dla każdej funkcji
// B) sprawdź co się dzieje, gdy odwołamy się w URLu do całej listy (/posts/), sprawdź co się dziej, gdy odwołamy się do konkretnego obiektu (/posts/1)
// metoda a) przy całej liście zwraca 404, przy obiekcie OK
// metoda b) przy całej liście zwraca 404, przy obiekcie OK
// metoda c) przy całej liście zwraca 404, przy obiekcie OK

// C) odpowiedz sobie na pytanie czy metoda DELETE potrzebuje body
//  metoda a) z body i bez body nadal 200
//  metoda b) wymaga określenia body, ale fetch bez 'options' jest OK
//  metoda c) wymaga określenia body, ale fetch bez 'options' jest OK

// D) sprawdź co dostajemy w response przy metodzie DELETE
// metoda a) jedynie status
// metoda b) status + {[[Prototype]]: Object}
// metoda c) status + {[[Prototype]]: Object}
// ---------------

// 5.a) XMLHttpRequest
// 5.b) Fetch API + then chain
// 5.c) Fetch API + async/await

// 5.DELETE.a) XMLHttpRequest
const XMLRequestDELETE = () => {
	const request = new XMLHttpRequest();
	request.open('DELETE', 'http://jsonplaceholder.typicode.com/todos/2');
	request.send();
	request.onload = function () {
		console.log(request.status);
		const data = JSON.parse(request.responseText);
		console.log(data);
	};

	request.onerror = function () {
		console.error('Somethings wrong');
	};
};
// XMLRequestDELETE(); // wywołanie funkcji

// 5.DELETE.b) Fetch API + then chain

const fetchRequestDELETE = () => {
	const options = {
		method: 'DELETE',
	};

	fetch('http://jsonplaceholder.typicode.com/todos/2', options)
		.then((response) => {
			console.log(response.status);
			return response.json();
		})
		.then((data) => console.log(data))
		.catch((err) => console.error('Somethings wrong', err));
};
// fetchRequestDELETE(); // wywołanie funkcji

// 5.DELETE.c) Fetch API + async/await

const asyncFetchRequestDELETE = async () => {
	try {
		const response = await fetch(
			'http://jsonplaceholder.typicode.com/todos/1',
			{ method: 'DELETE' }
		);
		console.log(response.status);
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.error('Somethings wrong', err);
	}
};
// asyncFetchRequestDELETE(); // wywołanie funkcji

// 08.09.2022 HTTP dzień 4 - zadania x1h:
console.log('08.09.2022 HTTP dzień 4 - zadania x1h:');
// 17:40 zadanie 1:
console.log('17:40 zadanie 1:');
// Zad 1.
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=twojapikey
// a) Wykonaj GET request do podanego URLa bez parametru apikey, zanotuj co się dzieje
// b) użyj async/await i fetch()
// c) wykonaj console.log(response), response.status
// d) metoda .json() i console.log(data)

const asyncFetchAlphaRequestGET = async () => {
	const response = await fetch(
		'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=G9Z8K54FKBUFGQ1J'
	);
	const data = await response.json();
	// console.log(response);
	console.log(response.status);
	console.log(data);
	// const tS = console.log(data['Times Series (5min)']);
	const tS = data['Time Series (5min)'];
	// const tSN = Number(tS);
	console.log(tS, typeof tS);
	// console.log(tSN, typeof tSN);
	// lista keys + values:
	// for (const [key, value] of Object.entries(tS)) {
	// 	console.log(`${key}: ${value}`);
	// }
	// deklaracja funkcji z keys (rozbicie)
	// for (const [key] of Object.entries(tS)) {
	// 	console.log('key:', `${key}`);
	// }
	// deklaracja funkcji z value (rozbicie)
	// for (const [key, value] of Object.entries(tS)) {
	// 	console.log('value:', `${value}`);
	// }
	const tSK = console.log(Object.keys(tS));
	const tSV = console.log(Object.values(tS));
};
// asyncFetchAlphaRequestGET(); // wywołanie funkcji

// Zad2
// a) wyciągnij z otrzymanego obiektu obiekt 'Time Series (5min)
// (bracket notations js)

// b) rozbij ten obiekt na 2 listy: klucze i wartości (Object.entries(), Object.values(), Object.keys())
// c) z listy wartości powyciągaj wartości low (pole '3. low') (konwersja do liczby( Number())) .map()!!!
// d) odszukaj z tej listy najmniejszą wartość i wyświetl ją do konsoli
// e) z listy wartości powyciągaj wartości high (pole '2. high')
// f) odszukaj z tej listy największą wartość i wyświetl ją do konsoli
// g) oblicz amplitude tych wartości (różnica między wartością najwięszką a najmniejszą)

// 20:40 zadanie 2, 3:
console.log('20:40 zadanie 2, 3:');
// Zad 3.

// a) znajdź i wypisz nazwę rozgrywek
// b) znajdź i wypisz sezon jako string (format np. 'Sezon 1977/78', 'Sezon 2001/2002'), można to zrobić przy pomocy daty rozpoczęcia i zakończenia sezonu (.slice())
// c) wypisz ile jest grup w tym sezonie
// d) wypisz liderów z każdej grupy

// const fetchFootballData = async () => {
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-Auth-Token': '7e95e30581f0463fa9f837971ba1d7cc',
// 		},
// 	};

// 	const response = await fetch(
// 		'https://api.football-data.org/v2/competitions/CL/standings',
// 		options
// 	);

// 	console.log(response);
// 	console.log(response.status);
// 	const data = await response.json();
// 	console.log(data);
// };
// fetchFootballData(); // wywołanie funkcji

const fetchFootballData = async () => {
	const options = {
		method: 'GET',
		headers: {
			'X-Auth-Token': '7e95e30581f0463fa9f837971ba1d7cc',
		},
	};

	const response = await fetch(
		'https://api.football-data.org/v2/competitions/CL/standings',
		options
	);

	// console.log(response);
	console.log(response.status);
	const data = await response.json();
	console.log(data);
	const comp = Object.entries(data['competition']);
	console.log(comp);
	const compName = comp[2];
	// const compName = comp.map((el) => el[0]);
	console.log(compName, typeof compName);
	const compName2 = compName[1];
	console.log('Nazwa rozgrywek:', compName2, ', typ:' + typeof compName2);
	// b)
	const seasonStartYear = +data.season.startDate.slice(0, 4);
	// console.log(seasonStartYear);
	const seasonEndYear = +data.season.endDate.slice(0, 4);
	// console.log(seasonEndYear);
	const season = `Sezon ${seasonStartYear}/${seasonEndYear}`;
	console.log(season);
	// c)
	const groupCount = data.standings.length;
	console.log(`W tym sezonie jest ${groupCount}grup.`);
	// d)
	// ['AFC AJAX', 'Bayern Munich']
	const groupLeaders = data.standings.map((group) => group.table[0].team.name);
	console.log(groupLeaders);
	console.log('Liderzy grup: ');
	groupLeaders.forEach((groupLeader) => console.log(groupLeader));
};
fetchFootballData(); // wywołanie funkcji

// przykład działania funkcji map
const mx = [
	{
		name: '123',
	},
	{
		name: '312',
	},
	{
		name: '789',
	},
];

const newList = mx.map((obj) => obj.name);
// console.log('12.09 18:00, trening funkcji map, newList:', newList);

const my = [1, 2, 3, 4];
const newList2 = my.map((number) => number * 2);
// console.log(newList2);
