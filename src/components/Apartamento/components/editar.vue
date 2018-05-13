<script>
export default {
  name: 'InserirApartamento',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de apartamento'
    }
  },
  mounted () {
    return this.$store.dispatch('getApartamento', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateApartamento', this.apartamento)
      this.$router.push(`/apartamento/list/${this.apartamento.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'apartamento atualizado com sucesso!!!'})
    }
  },
  computed: {
    apartamento () {
      return this.$store.state.apartamento.apartamentoView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
