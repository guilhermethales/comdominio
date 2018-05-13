<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do solicitacao</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
          <h1 class="main-title">solicitacao {{ solicitacao.nome }}</h1>

          <p>Nome: {{ solicitacao.nome }}</p>
          <p>CPF: {{ solicitacao.cpfcnpj }}</p>
          <p>Telefone: {{ solicitacao.telefone }}</p>
          <p>Email: {{ solicitacao.email }}</p>
          <p>Login: {{ solicitacao.login }}</p>

            <a :href="`#/solicitacao/editar/${solicitacao.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(solicitacao.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/solicitacao" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="solicitacaoSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarSolicitacao',
    mounted () {
      return this.$store.dispatch('getSolicitacao', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        solicitacaoSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.solicitacaoSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeSolicitacao', this.solicitacaoSelecionado)
          .then(() => {
            this.$router.push('/admin/solicitacao')
            this.solicitacaoSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Solicitacao excluído com sucesso!!!'})
            this.$store.dispatch('getSolicitacoes')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      solicitacao () {
        return this.$store.state.solicitacao.solicitacaoView
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
