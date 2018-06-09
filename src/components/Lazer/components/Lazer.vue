<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarLazeres/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarLazeres from './listar'

export default {
  name: 'Lazer',
  components: {
    ListarLazeres
  }

}
</script>

<style lang="scss">

</style>
