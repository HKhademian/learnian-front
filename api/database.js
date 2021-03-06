const path = require('path');
const fs = require('fs');
const defaults = require('../src/common/defaults');

const PATH_BASE = path.join(__dirname, './database/');
const PATH_USERS = path.join(PATH_BASE, './users.json');
const PATH_CLASSES = path.join(PATH_BASE, './classes.json');
const PATH_QUIZZES = path.join(PATH_BASE, './quizzes.json');

const readUsers = () => {
	// console.log('loadUsers');
	if (!fs.existsSync(PATH_USERS)) {
		console.log('write default Users');
		writeUsers(defaults.users);
	}
	const raw = fs.readFileSync(PATH_USERS);
	return JSON.parse(raw);
}

const readClasses = () => {
	// console.log('loadClasses');
	if (!fs.existsSync(PATH_CLASSES)) {
		console.log('write default Classes');
		writeClasses(defaults.classes);
	}
	const raw = fs.readFileSync(PATH_CLASSES);
	return JSON.parse(raw);
};

const readQuizzes = () => {
	// console.log('loadQuizzes');
	if (!fs.existsSync(PATH_QUIZZES)) {
		console.log('write default Quizzes');
		writeQuizzes(defaults.quizzes);
	}
	const raw = fs.readFileSync(PATH_QUIZZES);
	return JSON.parse(raw);
};


const writeUsers = (items) => {
	console.log('saveUsers');
	let raw = JSON.stringify(items, null, 2);
	return fs.writeFileSync(PATH_USERS, raw);
}

const writeClasses = (items) => {
	// console.log('saveClasses');
	let raw = JSON.stringify(items, null, 0);
	return fs.writeFileSync(PATH_CLASSES, raw);
}

const writeQuizzes = (items) => {
	// console.log('saveQuizzes');
	let raw = JSON.stringify(items, null, 0);
	return fs.writeFileSync(PATH_QUIZZES, raw);
}

const load = (db) => {
	// console.log('load database');
	if (!fs.existsSync(PATH_BASE)) {
		fs.mkdirSync(PATH_BASE, {recursive: true});
	}
	db.users = readUsers();
	db.classes = readClasses();
	db.quizzes = readQuizzes();
	// console.log('database loaded!', db);
};

const save = (db) => {
	// console.log('save database',db);
	writeUsers(db.users);
	writeClasses(db.classes);
	writeQuizzes(db.quizzes);
	// console.log('database saved!');
};

module.exports = (req, res, next) => {
	req.database = {
		users: [],
		classes: [],
		quizzes: [],
		changed: false,
		// load: () => load(req.database),
		// save: () => save(req.database),
	};
	load(req.database);
	next();
	req.database.changed && save(req.database);
};
