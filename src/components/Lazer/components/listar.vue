<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do lazer">
          </div>
          <div class="col col-md-3">
            <a href="#/lazer/novo" class="btn btn-warning">Novo Lazer</a>
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
            <th>Area</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lazer in lista">
            <td>{{ lazer.descricao }}</td>
            <td>{{ lazer.tipoArea.descricao }}</td>
            <td>{{ lazer.area }}</td>
            <td><a :href="`#/lazer/list/${lazer.id}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/lazer/editar/${lazer.id}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
    this.$store.dispatch('getLazeres')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    lazeres () {
      return this.$store.state.lazer.lazeresList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.lazeres, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, lazer => lazer.nome.indexOf(filter) >= 0)
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
