import http from "@/plugins/http"

export default {
  namespaced: true,
  state: {
      tasks: [
        {
          id: 1,
          name: "add tasks to VueX store",
          status: 3
        }
      ]
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
    }
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
      // console.log('store.getTasks: ',state.tasks)
      return state.tasks
    },
    getTaskById: state => {
      return taskId => {
        return state.tasks.find(_task => _task.id === taskId)
      }
    },
    getTasksInStatus: state => {
      return status => {
        return state.tasks.filter(_task => _task.status == status)
      }
    }
  }
};