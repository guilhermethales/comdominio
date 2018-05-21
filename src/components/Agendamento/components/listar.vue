<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do agendamento">
          </div>
          <div class="col col-md-3">
            <a href="#/agendamento/novo" class="btn btn-warning">Novo Agendamento</a>
          </div>
        </div>
      </slot>
      <ModalAction v-if="confirmModal"/>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Area de Lazer</th>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Aprovação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="agendamento in agendamento">
            <td>{{ agendamento.evento }}</td>
            <td>{{ agendamento.inicio }}</td>
            <td>{{ agendamento.fim }}</td>
            <td>{{ agendamento.areaDeLazer.descricao}}</td>
            <td><a :href="`#/agendamento/list/${agendamento.id}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/agendamento/editar/${agendamento.id}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Festa</td>
            <td>Salão</td>
            <td>04/07/2018</td>
            <td>04/07/2018</td>
            <td>Sim</td>
             <td><a :href="`#/agendamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/agendamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Festa</td>
            <td>Salão</td>
            <td>04/07/2018</td>
            <td>04/07/2018</td>
            <td>Sim</td>
             <td><a :href="`#/agendamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/agendamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Festa</td>
            <td>Salão</td>
            <td>04/07/2018</td>
            <td>04/07/2018</td>
            <td>Sim</td>
             <td><a :href="`#/agendamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/agendamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Festa</td>
            <td>Salão</td>
            <td>04/07/2018</td>
            <td>04/07/2018</td>
            <td>Sim</td>
             <td><a :href="`#/agendamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/agendamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Festa</td>
            <td>Salão</td>
            <td>04/07/2018</td>
            <td>04/07/2018</td>
            <td>Sim</td>
             <td><a :href="`#/agendamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/agendamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Festa</td>
            <td>Salão</td>
            <td>04/07/2018</td>
            <td>04/07/2018</td>
            <td>Sim</td>
             <td><a :href="`#/agendamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/agendamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import ModalAction from 'components/UIComponents/ModalAction'

export default {
  data () {
    return {
      configs: {
        order: 'asc',
        orderBy: 'nome',
        filter: ''
      }
    }
  },
  components: {
    ModalAction
  },
  mounted () {
    this.$store.dispatch('getAgendamentos')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    agendamentos () {
      return this.$store.state.agendamento.agendamentosList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.agendamentos, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, agendamento => agendamento.nome.indexOf(filter) >= 0)
    }
  }
}
</script>

<style lang="scss">

  .form-control.border-input {
    &::-webkit-input-placeholder {
      color: #bbb;
    }
    &:-moz-placeholder {
      color: #000;
    }
  }
</style>
