<script>
export default {
  name: 'InserirApartamento',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastro de Apartamento',
      apartamento: {
        tipoPessoa: { id: 2 }
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newApartamento', this.apartamento)
        .then(() => {
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'apartamento inserido com sucesso!!!'})
          this.$router.push('/admin/apartamento')
          this.$store.dispatch('getApartamentos')
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
