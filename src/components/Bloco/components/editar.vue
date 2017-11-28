<script>
export default {
  name: 'InserirBloco',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Edição de Bloco'
    }
  },
  mounted () {
    return this.$store.dispatch('getBloco', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateBloco', this.bloco)
      this.$router.push(`/bloco/list/${this.bloco.id}`)
			this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Bloco atualizado com sucesso!!!'})
    }
  },
  computed: {
    bloco () {
      return this.$store.state.bloco.blocoView
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
