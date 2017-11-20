<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do lançamento">
          </div>
          <div class="col col-md-3">
            <a href="#/lancamento/novo" class="btn btn-lancamento">Novo Lançamento</a>
          </div>
        </div>
      </slot>
      <ModalAction v-if="confirmModal"/>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Valor Total</th>
            <th>Tipo Lançamento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lancamento in lista">
            <td>{{ lancamento.id }}</td>
            <td>{{ lancamento.descricao }}</td>
            <td>R${{ lancamento.valortotal }}</td>
            <td>{{ lancamento.tipoLancamento.descricao }}</td>
            <td><a :href="`#/lancamento/list/${lancamento.id}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/lancamento/editar/${lancamento.id}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
    data(){
      return {
        configs: {
          order: 'desc',
          orderBy: 'id',
          filter: ''
        }
      };
    },
    components: {
      ModalAction
    },
    mounted () {
      this.$store.dispatch('getLancamentos');
    },
    computed: {
      ...mapGetters([
        'confirmModal'
      ]),
      tableClass () {
        return `table-${this.type}`
      },
      lancamentos () {
        return this.$store.state.lancamento.lancamentosList;
      },
      lista () {
        const filter = this.configs.filter;
        const list = _.orderBy(this.lancamentos, this.configs.orderBy, this.configs.order);

        if (_.isEmpty(filter)) {
          return list;
        }

        return _.filter(list, lancamento => lancamento.descricao.indexOf(filter) >= 0);
      }
    }
  }
</script>

<style lang="scss">
$btn-lancamento: #b635b6;

.form-control.border-input {
    &::-webkit-input-placeholder {
      color: #bbb;
    }
    &:-moz-placeholder {
      color: #000;
    }
  }

  .header .btn-lancamento {
    border: 1px solid $btn-lancamento;
    color: $btn-lancamento;
    &:hover{
      color: white;
      background-color: darken($btn-lancamento, 10%);
    }
  }
</style>
