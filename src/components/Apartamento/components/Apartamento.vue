<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarApartamentos/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarApartamentos from './listar'

export default {
  name: 'Apartamento',
  components: {
    ListarApartamentos
  }

}
</script>

<style lang="scss">

</style>
