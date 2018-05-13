<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarAgendamentos/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarAgendamentos from './listar'

export default {
  name: 'Agendamento',
  components: {
    ListarAgendamentos
  }

}
</script>

<style lang="scss">

</style>
