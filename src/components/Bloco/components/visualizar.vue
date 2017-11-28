<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do Bloco</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
          <h1 class="main-title">Bloco {{ bloco.nome }}</h1>

          <p>Nome: {{ bloco.nome }}</p>
          <p>CPF: {{ bloco.cpfcnpj }}</p>
          <p>Telefone: {{ bloco.telefone }}</p>
          <p>Email: {{ bloco.email }}</p>
          <p>Login: {{ bloco.login }}</p>

            <a :href="`#/bloco/editar/${bloco.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(bloco.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/bloco" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="blocoSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarBloco',
    mounted () {
      return this.$store.dispatch('getBloco', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        blocoSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.blocoSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeBloco', this.blocoSelecionado)
          .then(() => {
            this.$router.push('/admin/bloco')
            this.blocoSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Bloco excluído com sucesso!!!'})
            this.$store.dispatch('getBlocos')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      bloco () {
        return this.$store.state.bloco.blocoView
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
