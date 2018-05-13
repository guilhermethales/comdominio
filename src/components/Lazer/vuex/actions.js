import http from 'src/http'

export default {
  getLazeres (context) {
    http.get('arealazer/list')
    .then((response) => {
      context.commit('updateLazerList', response.data)
    })
  },
  getLazer (context, id) {
    http.get(`arealazer/list/${id}`)
    .then((response) => {
      context.commit('updateLazerView', response.data)
    })
  },
  newLazer (context, data) {
    http.post('arealazer/post', data)
  },
  updateLazer (context, data) {
    http.put(`arealazer/put`, data)
  },
  removeLazer (context, id) {
    http.delete(`arealazer/delete/${id}`)
  }
}
