<script>
export default {
  name: 'InserirNotificacao',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Notificacao',
      notificacao: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newNotificacao', this.notificacao)
        .then(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Notificacao inserido com sucesso!!!'})
          this.$router.push('/admin/notificacao')
          this.$store.dispatch('getNotificacoes')
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
