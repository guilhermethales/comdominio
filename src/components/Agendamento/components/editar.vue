<script>
export default {
  name: 'InserirAgendamento',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Agendamento'
    }
  },
  mounted () {
    return this.$store.dispatch('getAgendamento', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateAgendamento', this.agendamento)
      this.$router.push(`/agendamento/list/${this.agendamento.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Agendamento atualizado com sucesso!!!'})
    }
  },
  computed: {
    agendamento () {
      return this.$store.state.agendamento.agendamentoView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
