<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do Morador</h1>
    </div>

    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
          <h1 class="main-title">Morador {{ morador.nome }}</h1>

          <p>Nome: {{ morador.nome }}</p>
          <p>CPF: {{ morador.cpfcnpj }}</p>
          <p>Telefone: {{ morador.telefone }}</p>
          <p>Email: {{ morador.email }}</p>
          <p>Email: {{ morador.login }}</p>

            <a :href="`#/morador/editar/${morador.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(morador.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/morador" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="selectedUser" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'

  export default {
    name: 'VisualizarMorador',
    created () {
      return this.$store.dispatch('getMorador', this.$route.params.id)
    },
    components: {
      ModalConfirmacao
    },
    data () {
      return {
        moradorSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.moradorSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeMorador', this.moradorSelecionado)
        this.$router.push('/admin/morador')
        this.moradorSelecionado = null
      }
    },
    computed: {
      morador () {
        return this.$store.state.morador.moradorView
      }
    }
  }
</script>

<style lang="scss">
  .main {
    background-color: #fff;
  }

  .main-title {
    font-size: 20px;
  }
</style>
