<script>
export default {
  name: 'InserirBloco',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Bloco',
      bloco: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newBloco', this.bloco)
        .then(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Bloco inserido com sucesso!!!'})
          this.$router.push('/admin/bloco')
          this.$store.dispatch('getBlocos')
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
