<script>
export default {
  name: 'InserirServico',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Servico'
    }
  },
  mounted () {
    return this.$store.dispatch('getServico', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateServico', this.servico)
      this.$router.push(`/servico/list/${this.servico.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Servico atualizado com sucesso!!!'})
    }
  },
  computed: {
    servico () {
      return this.$store.state.servico.servicoView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
