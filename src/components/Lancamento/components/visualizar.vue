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
              <p>Valor Total: {{ lancamento.valortotal }}</p>
              <p>Tipo de Lançamento: {{ lancamento.tipoLancamento.descricao }}</p>
                <a href="" id="show-modal" class="btn btn-warning" @click.prevent="showModal = true">Adicionar Itens</a>
                <a :href="`#/lancamento/editar/${lancamento.id}`" class="btn btn-primary" style="margin:0 5px;">Editar Lançamento</a>
                <a href="" class="btn btn-danger" @click.prevent="remove(lancamento.id)">Excluir</a>
              </div>
            </div>
            <hr>
              <a href="#/admin/lancamento" class="btn-voltar">Voltar</a>

              <modal v-if="showModal" @close="showModal = false">
              </modal>
        </div>
      </div>

      <div class="col col-md-6">
        <div class="card">
          <div class="header">
            <h4 class="title">Itens do Lançamento {{ lancamento.id }}</h4>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from './modalItem';

  export default {
    name: 'VisualizarLancamento',
    props: ['showModal'],
    created() {
      return this.$store.dispatch('getLancamento', this.$route.params.id);
    },
    components: {
      modal
    },
    methods: {
      remove(id) {
        this.$store.dispatch('removeLancamento', id)
        .then(() => {
          this.$router.push('/lancamento');
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
