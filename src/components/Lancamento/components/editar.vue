<script>
export default {
  name: 'InserirLancamento',
  template: require('./form.html'),
  data() {
    return {
      sub_title: 'Edição de Lançamento',
    }
  },
  created() {
    return this.$store.dispatch('getLancamento', this.$route.params.id);
  },
  methods: {
    save() {
      this.$store.dispatch('updateLancamento', this.lancamento)
      .then(() => {
        this.$router.push('/admin/lancamento');
      });
    }
  },
  computed: {
    lancamento() {
      return this.$store.state.lancamento.lancamentoView;
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
