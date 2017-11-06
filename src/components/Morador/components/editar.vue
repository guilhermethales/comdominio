<script>
export default {
  name: 'InserirMorador',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Morador'
    }
  },
  created () {
    return this.$store.dispatch('getMorador', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateMorador', this.morador)
      .then(() => {
        this.$router.push('/morador')
      })
    }
  },
  computed: {
    morador () {
      return this.$store.state.morador.moradorView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
