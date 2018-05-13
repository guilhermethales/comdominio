<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarSolicitacoes/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarSolicitacoes from './listar'

export default {
  name: 'Solicitacao',
  components: {
    ListarSolicitacoes
  }

}
</script>

<style lang="scss">

</style>
