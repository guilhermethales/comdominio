export default {
  updateUltimosLancamentos (state, data) {
    state.ultimosLancamentos = data
  },
  updateConfirmModal (state, data) {
    state.confirmModal.show = data.show
		state.confirmModal.message = data.message
  }
}
