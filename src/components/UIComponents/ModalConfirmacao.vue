<template>
  <div id="modal-template">
    <div class="modal-mask">
        <div class="modal-container">

          <div class="modal-header">
              <h1 class="modal-title">Excluir Registro</h1>
          </div>

          <div class="modal-body">
            <p>Tem certeza que deseja excluir este registro?</p>
          </div>

          <div class="modal-footer">
              <a class="btn btn-danger" @click="onConfirm">Excluir</a>
              <a class="btn btn-cancel" @click="onCancel">Cancelar</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ["open", "user"],
	methods: {
		onConfirm() {
			this.$emit("confirm");
		},
		onCancel() {
			this.$emit("cancel");
		}
	}

}
</script>

<style lang="scss">
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .3s ease;
}

.modal-container {
  width: 40%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-title {
  font-size: 2em;
}

.modal-body {
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
}

.modal-footer {
  margin: 1em 0;
  display: flex;
}
</style>
