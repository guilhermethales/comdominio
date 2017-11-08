<script>
export default {
  name: 'EditarLancamento',
  template: require('./form.html'),
  data() {
    return {
      sub_title: 'Edição de Lançamento',
      itemLancamento: {}
    }
  },
  created() {
    return this.$store.dispatch('getLancamento', this.$route.params.id);
  },
  methods: {
    save() {
      this.$store.dispatch('updateLancamento', this.lancamento)
      .then(() => {
        this.$router.push(`/lancamento/list/${this.lancamento.id}`);
      });
    },
    saveItem () {
      const item = this.itemLancamento
      const obj = { descricao: item.descricao, valorUnit: item.valorUnit, quantidade: item.quantidade }
      return this.$store.state.lancamento.itensLancamento.push(obj)
    },
    calcularValorTotal () {
      const itens = this.$store.state.lancamento.itensLancamento
      let totalGeral = 0
      itens.map((item) => {
        const totalItem = item.valorUnit * item.quantidade
        totalGeral = totalGeral + totalItem
      })
      return totalGeral
    }
  },
  computed: {
    lancamento() {
      return this.$store.state.lancamento.lancamentoView;
    },
    itensLancamento () {
      return this.$store.state.lancamento.itensLancamento
    },
    calcularTotal() {
      return this.lancamento.valortotal = this.calcularValorTotal();
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
