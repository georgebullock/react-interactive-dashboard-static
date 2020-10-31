const faker = require('faker');
const fs = require('fs');

// Create containers for JSON server database
const db = {};
const users = [];
const comments = [];
const tags = [];

// Set number of values generated users, comments, and tags
const GENERATED_USERS = 2500;
const GENERATED_COMMENTS = 10000;
const GENERATED_TAGS = 2000;

function generateUsers(number) {
	for (let i = 0; i < number; i++) {
		const obj = {};

		obj['id'] = i;
		obj['username'] = faker.internet.userName();
		obj['email'] = faker.internet.email();
		obj['password'] = faker.internet.password();
		obj['createdDate'] = faker.date
			.between(new Date(2015, 11, 17), new Date())
			.toISOString();

		users.push(obj);
	}
}

function generateComments(number) {
	for (let i = 0; i < number; i++) {
		const obj = {};
		let date;
		obj['id'] = i;
		obj['userId'] = Math.floor(Math.random() * 11);
		obj['body'] = faker.lorem.sentence(
			faker.random.number({ min: 1, max: 10 })
		);

		for (const user of users) {
			if (user.id === obj.userId) {
				date = faker.date.between(user.createdDate, new Date()).toISOString();
			}
		}

		obj['createdDate'] = date;

		comments.push(obj);
	}
}

function generateTags(number) {
	for (let i = 0; i < number; i++) {
		const obj = {};
		obj['id'] = i;
		obj['tag'] = faker.lorem.word();
		obj['createdDate'] = faker.date
			.between(new Date(2015, 11, 17), new Date())
			.toISOString();
		tags.push(obj);
	}
}

function generateDatabase(numberUsers, numberComments, numberTags) {
	generateUsers(numberUsers);
	generateComments(numberComments);
	generateTags(numberTags);

	db['users'] = users;
	db['comments'] = comments;
	db['tags'] = tags;

	try {
		fs.writeFileSync('../src/db/db.json', JSON.stringify(db));
	} catch {
		console.error('Error: JSON Server database generation failed');
	}
}

generateDatabase(GENERATED_USERS, GENERATED_COMMENTS, GENERATED_TAGS);
