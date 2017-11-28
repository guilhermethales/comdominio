import http from 'src/http'

export default {
  getBlocos (context) {
    http.get('bloco/list')
    .then((response) => {
      context.commit('updateBlocoList', response.data)
    })
  },
  getBloco (context, id) {
    http.get(`bloco/list/${id}`)
    .then((response) => {
      context.commit('updateBlocoView', response.data)
    })
  },
  newBloco (context, data) {
    http.post('bloco/post', data)
  },
  updateBloco (context, data) {
    http.put(`bloco/put`, data)
  },
  removeBloco (context, id) {
    http.delete(`bloco/delete/${id}`)
  }
}
