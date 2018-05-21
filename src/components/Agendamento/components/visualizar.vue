<template>
  <div>
    <div class="header">
      <h1 class="title__item">Informações do Agendamento</h1>
			<ModalAction v-if="confirmModal"/>
    </div>

    <div class="main">
      <div >
        <div class="row" style="padding-left:20px;">
          <div class="col col-md-12">
          <h1 class="main-title">Agendamento {{ agendamento.nome }}</h1>

          <p>Inicio: 04/07/2018	</p>
          <p>Fim: 04/07/2018	</p>
          <p>Evento: Festa</p>
          <p>Aprovacao: Sim</p>
          <p>Data Aprovaçâo: 21/05/2018</p>
          <p>Area De Lazer: Salão	</p>
          <p>Condominio: Condominio Serra Verde</p>

            <a :href="`#/agendamento/editar/${agendamento.id}`" class="btn btn-primary" style="margin:0 5px;">Editar</a>
            <a href="" class="btn btn-danger" @click.prevent="confirmDelete(agendamento.id)">Excluir</a>
          </div>
        </div>
        <hr>
          <a href="#/admin/agendamento" class="btn-voltar">Voltar</a>
      </div>
    </div>
    <ModalConfirmacao :user="agendamentoSelecionado" v-if="showModal" @confirm="remove" @cancel="showModal=false"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalConfirmacao from 'components/UIComponents/ModalConfirmacao'
import ModalAction from 'components/UIComponents/ModalAction'

  export default {
    name: 'VisualizarAgendamento',
    mounted () {
      return this.$store.dispatch('getAgendamento', this.$route.params.id)
    },
    components: {
      ModalConfirmacao,
			ModalAction
    },
    data () {
      return {
        agendamentoSelecionado: null,
        showModal: false
      }
    },
    methods: {
      confirmDelete(id) {
        this.agendamentoSelecionado = id
        this.showModal = true
      },
      remove () {
        this.showModal = false
        this.$store.dispatch('removeAgendamento', this.agendamentoSelecionado)
          .then(() => {
            this.$router.push('/admin/agendamento')
            this.agendamentoSelecionado = null
            this.$store.dispatch('getUpdateConfirmModal', {show: true, message: 'Agendamento excluído com sucesso!!!'})
            this.$store.dispatch('getAgendamentos')
          })
      }
    },
    computed: {
			...mapGetters([
      	'confirmModal'
    	]),
      agendamento () {
        return this.$store.state.agendamento.agendamentoView
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
