<script>
import http from 'src/http';
import { mapGetters } from 'vuex'

export default {
  name: 'InserirLancamento',
  template: require('./form.html'),
  data () {
    return {
      sub_title: 'Cadastrar Lançamento',
      lancamento: {
        tipoLancamento: { id:79 },
        valortotal: 0
      },
      fieldsItem: {}
    }
  },
  methods: {
    save () {
      this.$store.dispatch('newLancamento', this.lancamento)
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
          this.$router.push('/admin/lancamento')
          this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Lançamento inserido com sucesso!!!'})
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
    }
  },
  computed: {
    itensLancamento () {
      return this.$store.state.lancamento.itensLancamento
    },
    calcularTotal () {
      return this.lancamento.valortotal = this.calcularValorTotal()
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
