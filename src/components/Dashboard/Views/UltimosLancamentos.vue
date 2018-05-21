<template>
  <div class="card">
    <div class="header lancamento">
      <h4 class="title">Últimos Lançamentos</h4>
    </div>

    <div class="content">
      <table class="table table-responsive table-full-width" :class="tableClass">
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Valor Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lancamento in ultimosLancamentos">
            <td>{{ lancamento.id }}</td>
            <td>{{ lancamento.descricao }}</td>
            <td>{{ lancamento.valortotal }}</td>
            <td><a :href="`#/lancamento/list/${lancamento.id}`" class="btn btn-sm btn-default btn-small">Visualizar</a><a :href="`#/lancamento/editar/${lancamento.id}`" class="btn btn-sm btn-primary btn-small" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Energia Eletrica Abril</td>
            <td>300</td>
            <td><a :href="`#/lancamento/list/${1}`" class="btn btn-sm btn-default btn-small">Visualizar</a><a :href="`#/lancamento/editar/${1}`" class="btn btn-sm btn-primary btn-small" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Energia Eletrica Maio</td>
            <td>400</td>
            <td><a :href="`#/lancamento/list/${1}`" class="btn btn-sm btn-default btn-small">Visualizar</a><a :href="`#/lancamento/editar/${1}`" class="btn btn-sm btn-primary btn-small" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Energia Eletrica Julho</td>
            <td>300</td>
            <td><a :href="`#/lancamento/list/${1}`" class="btn btn-sm btn-default btn-small">Visualizar</a><a :href="`#/lancamento/editar/${1}`" class="btn btn-sm btn-primary btn-small" style="margin:0 5px;">Editar</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Energia Eletrica Julho</td>
            <td>600</td>
            <td><a :href="`#/lancamento/list/${1}`" class="btn btn-sm btn-default btn-small">Visualizar</a><a :href="`#/lancamento/editar/${1}`" class="btn btn-sm btn-primary btn-small" style="margin:0 5px;">Editar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UltimosLancamentos',
  mounted () {
    this.$store.dispatch('getUltimosLancamentos')
  },
  computed: {
    tableClass () {
      return `table-${this.type}`
    },
    ultimosLancamentos() {
      return this.$store.state.ultimosLancamentos.ultimosLancamentos
    }
  }
}
</script>

<style lang="scss">
  .header.lancamento {
    background-color: #41b883;
    padding-bottom: 10px !important;
  }

  .header.lancamento h4 {
    color: white;

  }

  .btn-small {
    font-size: 10px !important;
  }
</style>
