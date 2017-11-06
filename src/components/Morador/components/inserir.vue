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
        this.$router.push('/morador')
      })
    }
  }

}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
