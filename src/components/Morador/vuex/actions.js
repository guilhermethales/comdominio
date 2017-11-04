import http from 'src/http'

export default {
  getMoradores (context) {
    http.get('pessoa/list')
    .then((response) => {
      context.commit('updateMoradorList', response.data)
    })
  },
  getMorador (context, id) {
    http.get(`pessoa/list/${id}`)
    .then((response) => {
      context.commit('updateMoradorView', response.data)
    })
  },
  newMorador (context, data) {
    http.post('pessoa/post', data)
  },
  updateMorador (context, data) {
    http.put(`pessoa/put`, data)
  },
  removeMorador (context, id) {
    http.delete(`pessoa/delete/${id}`)
  }
}
