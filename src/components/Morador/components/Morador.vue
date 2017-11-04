<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarMoradores/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarMoradores from './listar'

export default {
  name: 'Morador',
  components: {
    ListarMoradores
  }

}
</script>

<style lang="scss">

</style>
