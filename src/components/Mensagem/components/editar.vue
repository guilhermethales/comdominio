<script>
export default {
  name: 'InserirMensagem',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Mensagem'
    }
  },
  mounted () {
    return this.$store.dispatch('getMensagem', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateMensagem', this.mensagem)
      this.$router.push(`/mensagem/list/${this.mensagem.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Mensagem atualizado com sucesso!!!'})
    },
		validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          return this.save();
        }
      });
    }
  },
  computed: {
    mensagem () {
      return this.$store.state.mensagem.mensagemView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
