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
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lancamento in ultimosLancamentos">
            <td>{{ lancamento.id }}</td>
            <td>{{ lancamento.descricao }}</td>
            <td>{{ lancamento.valortotal }}</td>
            <td>{{ lancamento.tipoLancamento.descricao }}</td>
            <td><a :href="`#/lancamento/list/${lancamento.id}`" class="btn btn-sm btn-default">Visualizar</a><a :href="`#/lancamento/editar/${lancamento.id}`" class="btn btn-sm btn-primary" style="margin:0 5px;">Editar</a></td>
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
      const ultimosLancamentos = this.$store.state.ultimosLancamentos.ultimosLancamentos
      const obj = []
      for(let i = 0; i < 5; i++) {
        obj.push(ultimosLancamentos[i])
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
  .header.lancamento {
    background-color: #41b883;
    padding-bottom: 10px !important;
  }
</style>
