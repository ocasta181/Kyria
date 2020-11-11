import http from "@/plugins/http"

export default {
  namespaced: true,
  state: {
      loaded: false,
      tasks: null
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task)
    },
    UPDATE_TASK(state, task) {
      state.tasks = [...state.tasks.filter(_task => _task.id !== task.id), task]
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(_task => _task.id != taskId)
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks
      state.loaded = true
    },
  },
  actions: {
    fetchTasks({ commit }) {
      return http.get("/task").then(res => {
        commit("SET_TASKS", res.data)
        return res
      })
    },
    addTask({ commit }, payload) {
      return http.post("/task", payload).then(res => {
        commit("ADD_TASK", payload)
        return res
      })
    },
    updateTask({ commit }, {taskId, payload}) {
      return http.patch(`/task/${taskId}`, payload).then(res => {
        commit("UPDATE_TASK", payload)
        return res
      })
    },
    deleteTask({ commit}, taskId) {
      return http.delete(`/task/${taskId}`).then(res => {
        commit("DELETE_TASK",taskId)
        return res
      })
    }
  },
  getters: {
    getTasks: state => {
      if (!state.tasks) return [];
      return state.tasks
    },
    getTaskById: state => {
      if (!state.tasks) return null;
      return taskId => {
        return state.tasks.find(_task => _task.id === taskId)
      }
    },
    getTasksInStatus: state => {
      return status => {
        if (!state.tasks) return [];
        // eslint-disable-next-line no-console
        console.log("state.tasks: ",state.tasks)
        return state.tasks.filter(_task => _task.status == status)
      }
    }
  }
};