<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações Mensagem</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div >
        <div class="row" style="padding-left:20px;">
          <div class="col col-md-12">
          <h1 class="main-title">Mensagem </h1>

          <p>Titulo: Lixo	</p>
          <p>Descrição:Descarte seu lixo corretamente	 </p>
          <p>Data criação: 01/01/2018	</p>
          

            <a :href="`#/mensagem/editar/${1}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
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
