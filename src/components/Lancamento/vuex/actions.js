import http from 'src/http'

export default {
  getLancamentos (context) {
    http.get('lancamento/list')
      .then((response) => {
        context.commit('updateLancamentoList', response.data)
      })
  },
  getLancamento (context, id) {
    http.get(`lancamento/list/${id}`)
      .then((response) => {
        context.commit('updateLancamentoView', response.data)
      })
      .then(() => {
        http.get(`itemlancamento/lancamento/${id}`)
      .then((xobi) => {
        context.commit('updateItensLancamento', xobi.data)
      })
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
  getUltimoLancamento (context, idLancamento) {
    http.get(`lancamento/last/`)
      .then((response) => {
        context.commit('updateLancamentoView', response.data)
      })
  },
  getItensLancamento (context, id) {
    console.log(id)
    http.get(`itemlancamento/lancamento/${id}`)
      .then((response) => {
        context.commit('updateItensLancamento', response.data)
      })
  },
  saveItensLancamento (context, data) {
    http.post('itemlancamento/postmany', data)
  },
  updateItensLancamento (context, data) {
    http.put('itemlancamento/put', data)
  },
  removeItemLancamento (context, idItem) {
    http.delete(`itemlancamento/delete/${idItem}`)
  }
}
