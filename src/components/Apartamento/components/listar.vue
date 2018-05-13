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
          <tr v-for="apartamento in apartamento">
            <td>{{apartamento.descricao }}</td>
            <td>{{apartamento.pessoaProprietario.nome}}</td>
            <td>{{apartamento.pessoaResponsavel.nome }}</td>
            <td><a :href="`#/apartamento/list/${apartamento.id}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/apartamento/editar/${apartamento.id}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
