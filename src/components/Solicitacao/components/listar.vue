<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-12">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do solicitacao">
          </div>
          
        </div>
      </slot>
      <ModalAction v-if="confirmModal"/>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <tr>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Evento</th>
            <th>Area</th>
            <th>Pessoa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="solicitacao in solicitacao">
            <td>{{ solicitacao.nome }}</td>
            <td>{{ solicitacao.cpfcnpj }}</td>
            <td>{{ solicitacao.telefone }}</td>
            <td>{{ solicitacao.email }}</td>
            <td><a :href="`#/solicitacao/list/${solicitacao.id}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/solicitacao/editar/${solicitacao.id}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr> -->
          <tr>
            <td>04/07/2018</td>
            <td>08/07/2018</td>
            <td>Festa Junina</td>
            <td>23</td>
            <td>Matheus</td>
            <td><input type="checkbox"></td>
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
    this.$store.dispatch('getSolicitacoes')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    solicitacoes () {
      return this.$store.state.solicitacao.solicitacoesList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.solicitacoes, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, solicitacao => solicitacao.nome.indexOf(filter) >= 0)
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
