<script>
export default {
  name: 'InserirMorador',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Morador',
      morador: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newMorador', this.morador)
      .then(() => {
        setTimeout(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Morador inserido com sucesso!!!'})
          this.$router.push('/admin/morador')
        }, 500);
      })
    }
  },
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
