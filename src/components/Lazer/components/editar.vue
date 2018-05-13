<script>
export default {
  name: 'InserirLazer',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Lazer'
    }
  },
  mounted () {
    return this.$store.dispatch('getLazer', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateLazer', this.lazer)
      this.$router.push(`/lazer/list/${this.lazer.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Lazer atualizado com sucesso!!!'})
    }
  },
  computed: {
    lazer () {
      return this.$store.state.lazer.lazerView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
