import http from 'src/http'

export default {
  getLancamentos (context) {
    http.get('lancamento/list')
    .then((response) => {
      context.commit('updateLancamentoList', response.data);
    })
  },
  getLancamento (context, id) {
    http.get(`lancamento/list/${id}`)
    .then((response) => {
      context.commit('updateLancamentoView', response.data);
    })
  },
  newLancamento (context, data) {
    http.post('lancamento/post', data)
  },
  updateLancamento (context, data) {
    http.put(`lancamento/put`, data)
  },
  removeLancamento (context, id) {
    http.delete(`lancamento/delete/${id}`)
  },
  getUltimoLancamento (context) {
    http.get(`lancamento/last/`)
    .then((response) => {
      context.commit('updateLancamentoView', response.data)
    })
  },
  saveItensLancamento (context, data) {
    http.post('itemlancamento/post', data)
  }
}
