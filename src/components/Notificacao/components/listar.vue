<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do notificacao">
          </div>
          <div class="col col-md-3">
            <a href="#/notificacao/novo" class="btn btn-warning">Novo notificacao</a>
          </div>
        </div>
      </slot>
      <ModalAction v-if="confirmModal"/>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Data Criação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="notificacao in notificacao">
            <td>{{ notificacao.nome }}</td>
            <td>{{ notificacao.cpfcnpj }}</td>
            <td>{{ notificacao.telefone }}</td>
            <td>{{ notificacao.email }}</td>
            <td><a :href="`#/notificacao/list/${notificacao.id}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/notificacao/editar/${notificacao.id}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>  
            <td>Lembrete inadiplentes</td>
            <td>Lembre-se de pagar as contas</td>
            <td>30/05/2018</td>
            <td><a :href="`#/notificacao/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/notificacao/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
           <tr>  
            <td>Lembrete inadiplentes</td>
            <td>Lembre-se de pagar as contas</td>
            <td>30/05/2018</td>
            <td><a :href="`#/notificacao/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/notificacao/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
           <tr>  
            <td>Lembrete inadiplentes</td>
            <td>Lembre-se de pagar as contas</td>
            <td>30/05/2018</td>
            <td><a :href="`#/notificacao/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/notificacao/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
           <tr>  
            <td>Lembrete inadiplentes</td>
            <td>Lembre-se de pagar as contas</td>
            <td>30/05/2018</td>
            <td><a :href="`#/notificacao/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/notificacao/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
    this.$store.dispatch('getNotificacoes')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    notificacoes () {
      return this.$store.state.notificacao.notificacoesList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.notificacoes, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, notificacao => notificacao.nome.indexOf(filter) >= 0)
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
