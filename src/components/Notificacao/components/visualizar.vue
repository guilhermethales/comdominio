<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações Notificaçao</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div  >
        <div class="row" style="padding-left:20px;">
          <div class="col col-md-12">
          <h1 class="main-title">Notificacao </h1>

          <p>Titulo:Lembrete inadiplentes	</p>
          <p>Descrição	: Lembre-se de pagar as contas	</p>
          <p>Data Criação	:30/05/2018	 </p>
          

            <a :href="`#/notificacao/editar/${1}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(1)">Excluir</a>
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
