<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarNotificacoes/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarNotificacoes from './listar'

export default {
  name: 'Notificacao',
  components: {
    ListarNotificacoes
  }

}
</script>

<style lang="scss">

</style>
