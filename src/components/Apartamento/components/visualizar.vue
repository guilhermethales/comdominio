<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do apartamento</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div >
        <div class="row" style="padding-left:20px;">
          <div class="col col-md-12">
          <h1 class="main-title">Apartamento {{ apartamento.descricao }}</h1>

          <p>Descrição: APT0 103	</p>
          <p>Proprietário: Matheus</p>
          <p>Responsável: Conceição	</p>
          <p>Tipo Unidade : Apartamento</p>

            <a :href="`#/apartamento/editar/${apartamento.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(apartamento.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/apartamento" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="apartamentoSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarApartamento',
    mounted () {
      return this.$store.dispatch('getApartamento', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        apartamentoSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.apartamentoSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeApartamento', this.apartamentoSelecionado)
          .then(() => {
            this.$router.push('/admin/apartamento')
            this.apartamentoSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'apartamento excluído com sucesso!!!'})
            this.$store.dispatch('getApartamento')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      apartamento () {
        return this.$store.state.apartamento.apartamentoView
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
