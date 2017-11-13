<template>
  <div>
    <div class="header">
      <h1 class="title__item">Detalhes do Lançamento</h1>
    </div>

    <div class="row">
      <div class="col col-md-6">
        <div class="main">
            <div class="row">
              <div class="col col-md-12">
              <h1 class="main-title">Lançamento {{ lancamento.descricao }}</h1>
              <p>ID: {{ lancamento.id }}</p>
              <p>Descrição: {{ lancamento.descricao }}</p>
              <p><strong>Valor Total: R${{ lancamento.valortotal }}</strong></p>
              <p>Tipo de Lançamento: {{ lancamento.tipoLancamento.descricao }}</p>
                <a :href="`#/lancamento/editar/${lancamento.id}`" class="btn btn-primary" style="margin:0 5px;">Editar Lançamento</a>
                <a href="" class="btn btn-danger" @click.prevent="confirmDelete(lancamento.id)">Excluir</a>
              </div>
            </div>
            <hr>
              <a href="#/admin/lancamento" class="btn-voltar">Voltar</a>
        </div>
      </div>

      <div class="col col-md-6">
        <div class="card">
          <div class="header">
            <h4 class="title">Itens do Lançamento {{ lancamento.id }}</h4>

          </div>
          <div class="content">
            <table class="table table-responsive table-full-width">
              <thead>
                <tr>
                  <th>Id Item</th>
                  <th>Descrição</th>
                  <th>Valor Unitário</th>
                  <th>Qtd</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in itensLancamento">
                  <td>{{ item.id }}</td>
                  <td>{{ item.descricao }}</td>
                  <td>R${{ item.valorUnit }}</td>
                  <td>{{ item.quantidade }}</td>
                  <td><a :href="`#/lancamento/list/${lancamento.id}`" class="btn btn-sm btn-primary btn-small">Editar</a><a href="" @click.prevent="confirmDelete(item.id)" class="btn btn-sm btn-danger btn-small" style="margin:0 5px;">Excluir</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ModalConfirmacao :user="selectedUser" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'

  export default {
    name: 'VisualizarLancamento',
    props: ['showModal'],
    created() {
      return this.$store.dispatch('getLancamento', this.$route.params.id)
    },
    mounted () {
      return this.$store.dispatch('getItensLancamento', this.$route.params.id)
    },
    components: {
      ModalConfirmacao
    },
    data () {
      return {
        lancamentoSelecionado: null,
      }
    },
    methods: {
      confirmDelete(id) {
        this.lancamentoSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeLancamento', this.lancamentoSelecionado)
        this.$router.push('/admin/lancamento')
        this.lancamentoSelecionado = null
      }
    },
    computed: {
      lancamento() {
        return this.$store.state.lancamento.lancamentoView
      },
      itensLancamento () {
        return this.$store.state.lancamento.itensLancamento
      }
    }
  }
</script>

<style lang="scss">
  .main {
    background-color: #fff;
    margin: 5px;
  }

  .main-title {
    font-size: 20px;
  }

  .itens-title {
    font-size: 2em;
  }
</style>
