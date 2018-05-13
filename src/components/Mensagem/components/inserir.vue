<script>
export default {
  name: 'InserirMensagem',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Mensagem',
      mensagem: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newMensagem', this.mensagem)
        .then(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Mensagem inserido com sucesso!!!'})
          this.$router.push('/admin/mensagem')
          this.$store.dispatch('getMensagens')
        })
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
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
