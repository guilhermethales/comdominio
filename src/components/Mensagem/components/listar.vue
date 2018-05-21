<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do mensagem">
          </div>
          <div class="col col-md-3">
            <a href="#/mensagem/novo" class="btn btn-warning">Novo Mensagem</a>
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
          <tr>
            <td>Lixo</td>
            <td>Descarte seu lixo corretamente</td>
            <td>01/01/2018</td>
            <td><a :href="`#/mensagem/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/mensagem/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Lixo</td>
            <td>Descarte seu lixo corretamente</td>
            <td>01/01/2018</td>
            <td><a :href="`#/mensagem/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/mensagem/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Lixo</td>
            <td>Descarte seu lixo corretamente</td>
            <td>01/01/2018</td>
            <td><a :href="`#/mensagem/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/mensagem/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>Lixo</td>
            <td>Descarte seu lixo corretamente</td>
            <td>01/01/2018</td>
            <td><a :href="`#/mensagem/list/${1}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/mensagem/editar/${1}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
    this.$store.dispatch('getMensagens')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    mensagens () {
      return this.$store.state.mensagem.mensagensList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.mensagens, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, mensagem => mensagem.nome.indexOf(filter) >= 0)
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
