<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarMensagens/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarMensagens from './listar'

export default {
  name: 'Mensagem',
  components: {
    ListarMensagens
  }

}
</script>

<style lang="scss">

</style>
