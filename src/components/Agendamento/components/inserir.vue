<script>
export default {
  name: 'InserirAgendamento',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Agendamento',
      agendamento: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newAgendamento', this.agendamento)
        .then(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Agendamento inserido com sucesso!!!'})
          this.$router.push('/admin/agendamento')
          this.$store.dispatch('getAgendamentos')
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
