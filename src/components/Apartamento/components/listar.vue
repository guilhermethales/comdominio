<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do apartamento">
          </div>
          <div class="col col-md-3">
            <a href="#/apartamento/novo" class="btn btn-warning">Novo apartamento</a>
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
            <th>Proprietário</th>
            <th>Responsável</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>APT0 103</td>
            <td>Matheus</td>
            <td>Conceição</td>
             <td><a :href="`#/apartamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/apartamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>APT0 104</td>
            <td>Ana</td>
            <td>Maria</td>
             <td><a :href="`#/apartamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/apartamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>APT0 104</td>
            <td>Beatriz</td>
            <td>Erica</td>
             <td><a :href="`#/apartamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/apartamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>APT0 105</td>
            <td>Amanda</td>
            <td>Ingrid</td>
             <td><a :href="`#/apartamento/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/apartamento/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
    this.$store.dispatch('getApartamentos')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    apartamento () {
      return this.$store.state.apartamento.apartamentosList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.apartamentos, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, apartamento => apartamento.nome.indexOf(filter) >= 0)
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
