<template>
  <div id="modal-template">
    <div class="modal-mask">
        <div class="modal-container">
          <div class="modal-body">
            <p class="messageConfirm">{{ messageConfirm }}</p>
          </div>

          <div class="modal-footer">
              <a class="btn btn-success btn-ok" @click="onConfirm">Ok</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'modal',
  props: ["open", "user"],
	methods: {
		onConfirm() {
			this.$store.dispatch('getUpdateConfirmModal', false);
		},
	},
  computed: {
    ...mapGetters([
      'messageConfirm'
    ]),
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
  width: 20%;
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

  .messageConfirm {
    margin: 0 auto;
    font-size: 22px;
  }
}

.modal-footer {
  margin: 1em 0;
  display: flex;
}

.btn-ok {
  margin: 0 auto;
}
</style>
