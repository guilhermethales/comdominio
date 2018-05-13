<script>
export default {
  name: 'InserirLazer',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Lazer',
      lazer: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newLazer', this.lazer)
        .then(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Lazer inserido com sucesso!!!'})
          this.$router.push('/admin/lazer')
          this.$store.dispatch('getLazeres')
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
