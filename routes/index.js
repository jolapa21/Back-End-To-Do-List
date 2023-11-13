const express = require('express');
const router = express.Router();
const path = require('path');

const {
    authenticateToken,
} = require (path.join(__dirname, '../middleware/verifyToken'));

const todo = require(path.join(__dirname, 'todo.route'));
const users = require(path.join(__dirname, 'user.route'));

router.use('/todos', authenticateToken, todo);
router.use('/users', users);

module.exports = router;