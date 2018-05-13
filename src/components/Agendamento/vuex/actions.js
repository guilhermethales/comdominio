import http from 'src/http'

export default {
  getAgendamentos (context) {
    http.get('agendamentolazer/list')
    .then((response) => {
      context.commit('updateAgendamentoList', response.data)
    })
  },
  getAgendamento (context, id) {
    http.get(`agendamentolazer/list/${id}`)
    .then((response) => {
      context.commit('updateAgendamentoView', response.data)
    })
  },
  newAgendamento (context, data) {
    http.post('agendamentolazer/post', data)
  },
  updateAgendamento (context, data) {
    http.put(`agendamentolazer/put`, data)
  },
  removeAgendamento (context, id) {
    http.delete(`agendamentolazer/delete/${id}`)
  }
}
