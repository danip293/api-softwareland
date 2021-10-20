"use strict";

const express = require("express");
const todoList = require("../controllers/todoListController");

const router = express.Router();

// todoList Routes
router
  .route("/tasks")
  .get(todoList.list_all_tasks)
  .post(todoList.create_a_task);

router
  .route("/tasks/:taskId")
  .get(todoList.read_a_task)
  .put(todoList.update_a_task)
  .delete(todoList.delete_a_task);

module.exports = router;
