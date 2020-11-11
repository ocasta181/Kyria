//src/controllers/TaskController.js

import Controller from  './Controller';
import TaskService from  "./../services/TaskService";
import Task from  "./../models/Task";
const taskService = new TaskService(
  new Task().getInstance()
);

class TaskController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new TaskController(taskService);