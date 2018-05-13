<script>
export default {
  name: 'InserirSolicitacao',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Solicitacao'
    }
  },
  mounted () {
    return this.$store.dispatch('getSolicitacao', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateSolicitacaor', this.solicitacao)
      this.$router.push(`/solicitacao/list/${this.solicitacao.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Solicitacao atualizado com sucesso!!!'})
    }
  },
  computed: {
    solicitacao () {
      return this.$store.state.solicitacao.solicitacaoView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
