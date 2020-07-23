const faker = require('faker');
const fs = require('fs');

const db = {};
const users = [];
const comments = [];
const tags = [];

function generateUsers(number) {
	for (let i = 0; i < number; i++) {
		const obj = {};

		obj['id'] = i;
		obj['username'] = faker.internet.userName();
		obj['email'] = faker.internet.email();
		obj['password'] = faker.internet.password();
		obj['created_at'] = faker.date
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
				date = faker.date.between(user.created_at, new Date()).toISOString();
			}
		}

		obj['created_at'] = date;

		comments.push(obj);
	}
}

function generateTags(number) {
	for (let i = 0; i < number; i++) {
		const obj = {};
		obj['id'] = i;
		obj['tag'] = faker.lorem.word();
		obj['created_at'] = obj['created_at'] = faker.date
			.between(new Date(2015, 11, 17), new Date())
			.toISOString();
		tags.push(obj);
	}
}

function generateDatabase(intUsers, intComments, intTags) {
	generateUsers(intUsers);
	generateComments(intComments);
	generateTags(intTags);

	db['users'] = users;
	db['comments'] = comments;
	db['tags'] = tags;

	console.log('db: ', JSON.stringify(db));

	fs.writeFileSync('db.json', JSON.stringify(db));
}

generateDatabase(10, 20, 5);
