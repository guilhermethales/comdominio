<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <ListarLancamentos/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from 'src/http';
import ListarLancamentos from './listar';

export default {
  name: 'Lancamento',
  components: {
    ListarLancamentos
  }

};
</script>

<style lang="scss">

</style>

