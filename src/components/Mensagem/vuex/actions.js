import http from 'src/http'

export default {
  getMensagens (context) {
    http.get('pessoa/list')
    .then((response) => {
      context.commit('updateMensagemList', response.data)
    })
  },
  getMensagem (context, id) {
    http.get(`pessoa/list/${id}`)
    .then((response) => {
      context.commit('updateMensagensView', response.data)
    })
  },
  newMensagem (context, data) {
    http.post('pessoa/post', data)
  },
  updateMensagem (context, data) {
    http.put(`pessoa/put`, data)
  },
  removeMensagem (context, id) {
    http.delete(`pessoa/delete/${id}`)
  }
}
