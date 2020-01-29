import http from "@/plugins/http"

export default {
  namespaced: true,
  state: {
      columns: [
        {
          id: 1,
          name: "backlog",
          order: 1
        },
        {
          id: 2,
          name: "in sprint",
          order: 2
        },
        {
          id: 3,
          name: "in test",
          order: 4
        },
        {
          id: 4,
          name: "in progress",
          order: 3
        },
        {
          id: 5,
          name: "done",
          order: 5
        }
      ]
  },
  mutations: {
    ADD_COLUMN(state, column) {
      state.columns.push(column)
    },
    UPDATE_COLUMN(state, column) {
      state.columns = [...state.columns.filter(_column => _column.id !== column.id), column]
    },
    DELETE_COLUMN(state, columnId) {
      state.columns = state.columns.filter(_column => _column.id != columnId)
    },
    SET_COLUMNS(state, columns) {
      state.columns = columns
    }
  },
  actions: {
    fetchColumns({ commit }) {
      return http.get("/column").then(res => {
        commit("SET_COLUMNS", res.data)
        return res
      })
    },
    addColumn({ commit }, payload) {
      return http.post("/column", payload).then(res => {
        commit("ADD_COLUMN", payload)
        return res
      })
    },
    updateColumn({ commit }, {columnId, payload}) {
      return http.patch(`/column/${columnId}`, payload).then(res => {
        commit("UPDATE_COLUMN", payload)
        return res
      })
    },
    deleteColumn({ commit}, columnId) {
      return http.delete(`/column/${columnId}`).then(res => {
        commit("DELETE_COLUMN",columnId)
        return res
      })
    }
  },
  getters: {
    getColumns(state) {
      // console.log('store.getColumns: ',state.columns)
      return state.columns
    },
    getColumn(state, columnId) {
      return state.columns.find(_column => _column.id === columnId)
    }
  }
};