import http from 'src/http'

export default {
  getNotificacoes (context) {
    http.get('pessoa/list')
    .then((response) => {
      context.commit('updateNotificacaoList', response.data)
    })
  },
  getNotificacao (context, id) {
    http.get(`pessoa/list/${id}`)
    .then((response) => {
      context.commit('updateNotificacaoView', response.data)
    })
  },
  newNotificacao (context, data) {
    http.post('pessoa/post', data)
  },
  updateNotificacao (context, data) {
    http.put(`pessoa/put`, data)
  },
  removeNotificacao (context, id) {
    http.delete(`pessoa/delete/${id}`)
  }
}
