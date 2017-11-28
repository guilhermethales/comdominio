<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarBlocos/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarBlocos from './listar'

export default {
  name: 'Bloco',
  components: {
    ListarBlocos
  }

}
</script>

<style lang="scss">

</style>
