<script>
import http from 'src/http';

export default {
  name: 'InserirLancamento',
  //created() {
  //  http.get('itemlancamento/list')
  //    .then(response => {
  //      this.itensLancamento = response.data;
  //    });
  //},
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastrar Lançamento',
      lancamento: {
        valortotal: `R$ ${this.calcularValorTotal()}`,
        tipoLancamento: { id:79 }
      },
      itemLancamento: {}
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newLancamento', this.lancamento)
      .then(() => {
        //  this.$store.dispatch('getUltimoLancamento')
        this.$router.push('/admin/lancamento')
      })
    },
    saveItem () {
      var item = this.itemLancamento
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
.form {
  display: flex;
  flex-direction: column;
}

.itens {
  width: 100%;
  display: block;

  .itens-title {
    font-size: 2em;
    padding-bottom: .5em;
  }
}
  .btn-salvar {
    margin: 0 1em;
  }
</style>
