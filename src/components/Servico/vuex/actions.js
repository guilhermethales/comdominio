import http from 'src/http'

export default {
  getServicos (context) {
    http.get('servico/list')
    .then((response) => {
      context.commit('updateServicoList', response.data)
    })
  },
  getServico (context, id) {
    http.get(`servico/list/${id}`)
    .then((response) => {
      context.commit('updateServicoView', response.data)
    })
  },
  newServico (context, data) {
    http.post('servico/post', data)
  },
  updateServico (context, data) {
    http.put(`servico/put`, data)
  },
  removeServico (context, id) {
    http.delete(`servico/delete/${id}`)
  }
}
