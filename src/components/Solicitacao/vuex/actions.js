import http from 'src/http'

export default {
  getSolicitacoes (context) {
    http.get('pessoa/list')
    .then((response) => {
      context.commit('updateSolicitacaoList', response.data)
    })
  },
  getSolicitacao (context, id) {
    http.get(`pessoa/list/${id}`)
    .then((response) => {
      context.commit('updateSolicitacaoView', response.data)
    })
  },
  newSolicitacao (context, data) {
    http.post('pessoa/post', data)
  },
  updateSolicitacao (context, data) {
    http.put(`pessoa/put`, data)
  },
  removeSolicitacao (context, id) {
    http.delete(`pessoa/delete/${id}`)
  }
}
