<script>
export default {
  name: 'EditarLancamento',
  template: require('./form.html'),
  data() {
    return {
      sub_title: 'Edição de Lançamento',
      fieldsItem: {},
    }
  },
  mounted() {
    return this.$store.dispatch('getLancamento', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('updateLancamento', this.lancamento)
      .then(() => {
        setTimeout(() => {
          this.$store.dispatch('getUltimoLancamento')
        }, 1000)
      })
      .then(() => {
        setTimeout(() =>{
          const listaItens = this.$store.state.lancamento.itensLancamento
          listaItens.map((item) => {
            item.lancamento = { id: this.$store.state.lancamento.lancamentoView.id }
          })
          setTimeout(() => {
            this.$store.dispatch('saveItensLancamento', listaItens)
          }, 2000)
          this.$router.push(`/lancamento/list/${this.$route.params.id}`)
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Lançamento atualizado com sucesso!!!'})
        },2000)
      })
    },
    saveItem () {
      const item = this.fieldsItem
      const obj = { descricao: item.descricao, valorUnit: item.valorUnit, quantidade: item.quantidade }
      item.descricao = ""
      item.valorUnit = ""
      item.quantidade = ""
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
    },
    remove (idItem) {
      this.$store.dispatch('removeItemLancamento', idItem)
      .then(() =>  this.$store.dispatch('getItensLancamento', this.$route.params.id))
    }
  },
  computed: {
    lancamento () {
      return this.$store.state.lancamento.lancamentoView
    },
    itensLancamento () {
      return this.$store.state.lancamento.itensLancamento
    },
    calcularTotal() {
      return this.lancamento.valortotal = this.calcularValorTotal()
    }
  }
}
</script>

<style lang="scss">
  .btn-salvar {
    margin: 0 1em;
  }
</style>
