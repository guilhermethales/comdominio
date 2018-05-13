<script>
export default {
  name: 'InserirNotificacao',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Notificacao'
    }
  },
  mounted () {
    return this.$store.dispatch('getNotificacao', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateNotificacao', this.notificacao)
      this.$router.push(`/notificacao/list/${this.notificacao.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Notificacao atualizado com sucesso!!!'})
    }
  },
  computed: {
    notificacao () {
      return this.$store.state.notificacao.notificacaoView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
