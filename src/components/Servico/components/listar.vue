<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do serviço">
          </div>
          <div class="col col-md-3">
            <a href="#/servico/novo" class="btn btn-warning">Novo servico</a>
          </div>
        </div>
      </slot>
      <ModalAction v-if="confirmModal"/>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cortar Grama</td>
            <td>Jardinagem</td>
            <td><a :href="`#/servico/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/servico/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Limpeza</td>
            <td>Limpeza Piscina</td>
            <td><a :href="`#/servico/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/servico/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Construção</td>
            <td>Pedreiro</td>
            <td><a :href="`#/servico/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/servico/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
    this.$store.dispatch('getServicos')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    servicos () {
      return this.$store.state.servico.servicosList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.servicos, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, servico => servico.nome.indexOf(filter) >= 0)
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
