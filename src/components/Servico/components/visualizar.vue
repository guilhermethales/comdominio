<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do Servico</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
          <h1 class="main-title">Servico {{ servico.nome }}</h1>

          <p>Nome: {{ servico.nome }}</p>
          <p>CPF: {{ servico.cpfcnpj }}</p>
          <p>Telefone: {{ servico.telefone }}</p>
          <p>Email: {{ servico.email }}</p>
          <p>Login: {{ servico.login }}</p>

            <a :href="`#/servico/editar/${servico.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(servico.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/servico" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="servicoSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarServico',
    mounted () {
      return this.$store.dispatch('getServico', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        servicoSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.servicoSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeServico', this.servicoSelecionado)
          .then(() => {
            this.$router.push('/admin/servico')
            this.servicoSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Servico excluído com sucesso!!!'})
            this.$store.dispatch('getServicos')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      servico () {
        return this.$store.state.servico.servicoView
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
