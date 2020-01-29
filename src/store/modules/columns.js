import http from "@/plugins/http"

export default {
  namespaced: true,
  state: {
      columns: []
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
    }
  },
  actions: {
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
    // getSucess: state => {
    //   if (!state.success) return false;
    //   return state.success;
    // }
  }
};
