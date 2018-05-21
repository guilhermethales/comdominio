<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do bloco">
          </div>
          <div class="col col-md-3">
            <a href="#/bloco/novo" class="btn btn-warning">Novo Bloco</a>
          </div>
        </div>
      </slot>
      <ModalAction v-if="confirmModal"/>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <tr>
            <th>Bloco</th>
            <th>Sindico</th>
            <th>Subsindico</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
             <td>Bloco 1 </td>
             <td>Matheus</td>
             <td>Carlos</td>
             <td><a :href="`#/bloco/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/bloco/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
             <td>Bloco 2 </td>
             <td>Maria</td>
             <td>Ana</td>
             <td><a :href="`#/bloco/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/bloco/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
             <td>Bloco 3 </td>
             <td>Beto</td>
             <td>Ricardo</td>
             <td><a :href="`#/bloco/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/bloco/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
             <td>Bloco 4 </td>
             <td>Amanda</td>
             <td>Aline</td>
             <td><a :href="`#/bloco/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/bloco/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
    this.$store.dispatch('getBlocos')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    blocos () {
      return this.$store.state.bloco.blocosList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.blocos, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, bloco => bloco.nome.indexOf(filter) >= 0)
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
