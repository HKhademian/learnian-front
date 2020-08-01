const express = require('express');
const cors = require('cors');
const database = require('../database');

const router = express.Router();
module.exports = {api: router};

router.use(cors({origin: 'http://localhost:3000', credentials: true}));

router.use((req, res, next) => {
	console.log('enter api section');

	res.apiSuccess = (result, message = undefined) =>
		res.json({status: 'success', result, message});

	res.apiError = (message = undefined, result = undefined) =>
		res.json({status: 'error', result, message});

	return next();
});
router.use(database);

const {account} = require('./account')
router.use('/account', account);

const {users} = require('./users')
router.use('/users', users);

const {classes} = require('./classes')
router.use('/classes', classes);

const {quizzes} = require('./quizzes')
router.use('/quizzes', quizzes);
