<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do mensagem</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
          <h1 class="main-title">mensagem {{ mensagem.nome }}</h1>

          <p>Nome: {{ mensagem.nome }}</p>
          <p>CPF: {{ mensagem.cpfcnpj }}</p>
          <p>Telefone: {{ mensagem.telefone }}</p>
          <p>Email: {{ mensagem.email }}</p>
          <p>Login: {{ mensagem.login }}</p>

            <a :href="`#/mensagem/editar/${mensagem.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(mensagem.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/mensagem" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="mensagemSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarMensagem',
    mounted () {
      return this.$store.dispatch('getMensagem', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        mensagemSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.mensagemSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeMensagem', this.mensagemSelecionado)
          .then(() => {
            this.$router.push('/admin/mensagem')
            this.mensagemSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Mensagem excluído com sucesso!!!'})
            this.$store.dispatch('getMensagens')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      mensagem () {
        return this.$store.state.mensagem.mensagemView
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
