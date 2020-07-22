import * as faker from 'faker';
import * as fs from 'fs';

const db = {};
const users: User[] = [];
const comments: Comment[] = [];
const tags: Tag[] = [];

type User = {
	id: number;
	username: string;
	email: string;
	password: string;
	created_at: string;
};

type Comment = {
	id: number;
	userId: number;
	body: string;
	created_at: string;
};

type Tag = {
	id: number;
	tag: string;
	created_at: string;
};

function generateUsers(number: number): void {
	for (let i = 0; i < number; i++) {
		const obj = {} as User;

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

function generateComments(number: number): void {
	for (let i = 0; i < number; i++) {
		const obj = {} as Comment;
		let date: string;
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

function generateTags(number: number): void {
	for (let i = 0; i < number; i++) {
		const obj = {} as Tag;
		obj['id'] = i;
		obj['tag'] = faker.lorem.word();
		obj['created_at'] = obj['created_at'] = faker.date
			.between(new Date(2015, 11, 17), new Date())
			.toISOString();
		tags.push(obj);
	}
}

function generateDatabase(
	intUsers: number,
	intComments: number,
	intTags: number
): void {
	generateUsers(intUsers);
	generateComments(intComments);
	generateTags(intTags);

	db['users'] = users;
	db['comments'] = comments;
	db['tags'] = tags;

	console.log('db: ', JSON.stringify(db));

	fs.writeFileSync('./../db/db.json', JSON.stringify(db));
}

generateDatabase(10, 20, 5);
