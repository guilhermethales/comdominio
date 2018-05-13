<script>
export default {
  name: 'InserirSolicitacao',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Solicitacao',
      solicitacao: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newSolicitacao', this.solicitacao)
        .then(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Solicitacao inserido com sucesso!!!'})
          this.$router.push('/admin/solicitacao')
          this.$store.dispatch('getSolicitacoes')
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
