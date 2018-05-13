import http from 'src/http'

export default {
  getBlocos (context) {
    http.get('grupo/list')
    .then((response) => {
      context.commit('updateBlocoList', response.data)
    })
  },
  getBloco (context, id) {
    http.get(`grupo/list/${id}`)
    .then((response) => {
      context.commit('updateBlocoView', response.data)
    })
  },
  newBloco (context, data) {
    http.post('grupo/post', data)
  },
  updateBloco (context, data) {
    http.put(`grupo/put`, data)
  },
  removeBloco (context, id) {
    http.delete(`grupo/delete/${id}`)
  }
}
