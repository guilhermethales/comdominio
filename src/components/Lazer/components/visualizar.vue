<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do Lazer</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col col-md-12">
          <h1 class="main-title">lazer {{ lazer.nome }}</h1>

          <p>Nome: {{ lazer.descricao }}</p>
          <p>CPF: {{ lazer.area }}</p>
          <p>Telefone: {{ lazer.tipoArea.descricao }}</p>
         

            <a :href="`#/lazer/editar/${lazer.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(lazer.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/lazer" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="lazerSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarLazer',
    mounted () {
      return this.$store.dispatch('getLazer', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        lazerSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.lazerSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeLazer', this.lazerSelecionado)
          .then(() => {
            this.$router.push('/admin/lazer')
            this.lazerSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Lazer excluído com sucesso!!!'})
            this.$store.dispatch('getLazeres')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      lazer () {
        return this.$store.state.lazer.lazerView
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
