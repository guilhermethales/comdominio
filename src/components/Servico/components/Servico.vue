<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarServicos/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarServicos from './listar'

export default {
  name: 'Servico',
  components: {
    ListarServicos
  }

}
</script>

<style lang="scss">

</style>
