//config/routes.js
import TaskController from './../src/controllers/TaskController';

export default (server) => {

  // TASK ROUTES
  server.get(`/api/task`, TaskController.getAll);
  server.post(`/api/task`, TaskController.insert)
  server.put(`/api/task/:id`, TaskController.update);
  server.delete(`/api/task/:id`, TaskController.delete);

}