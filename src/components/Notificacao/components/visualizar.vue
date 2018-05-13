<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do Notificacao</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
          <h1 class="main-title">Notificacao {{ notificacao.nome }}</h1>

          <p>Nome: {{ notificacao.nome }}</p>
          <p>CPF: {{ notificacao.cpfcnpj }}</p>
          <p>Telefone: {{ notificacao.telefone }}</p>
          <p>Email: {{ notificacao.email }}</p>
          <p>Login: {{ notificacao.login }}</p>

            <a :href="`#/notificacao/editar/${notificacao.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(notificacao.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/notificacao" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="notificacaoSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarNotificacao',
    mounted () {
      return this.$store.dispatch('getNotificacao', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        notificacaoSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.notificacaoSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeNotificacao', this.notificacaoSelecionado)
          .then(() => {
            this.$router.push('/admin/notificacao')
            this.notificacaoSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Notificacao excluído com sucesso!!!'})
            this.$store.dispatch('getNotificacoes')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      notificacao () {
        return this.$store.state.notificacao.notificacaoView
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
