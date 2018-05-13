import http from 'src/http'

export default {
  getApartamentos (context) {
    http.get('unidade/list')
    .then((response) => {
      context.commit('updateApartamentoList', response.data)
    })
  },
  getApartamento (context, id) {
    http.get(`unidade/list/${id}`)
    .then((response) => {
      context.commit('updateApartamentoView', response.data)
    })
  },
  newApartamento (context, data) {
    http.post('unidade/post', data)
  },
  updateApartamento (context, data) {
    http.put(`unidade/put`, data)
  },
  removeApartamento (context, id) {
    http.delete(`unidade/delete/${id}`)
  }
}
