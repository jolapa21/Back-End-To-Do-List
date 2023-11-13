const express = require('express');
const router = express.Router();
const path = require('path');

const {
    getAllTodo, 
    getTodoByID, 
    addTodo, 
    updateTodoByID, 
    deleteTodoByID, 
    deleteAllTodo,
} = require (path.join(__dirname, '../controllers/todo.controller'));

router.get('/', getAllTodo);
router.get('/:id', getTodoByID);
router.post('/', addTodo);
router.put('/:id', updateTodoByID);
router.delete('/:id', deleteTodoByID);
router.delete('/', deleteAllTodo);

module.exports = router;