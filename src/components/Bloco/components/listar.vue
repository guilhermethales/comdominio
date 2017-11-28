<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="row">
          <div class="col col-md-9">
            <input type="text" v-model="configs.filter" class="form-control border-input" placeholder="Pesquise pelo nome do bloco">
          </div>
          <div class="col col-md-3">
            <a href="#/bloco/novo" class="btn btn-warning">Novo Bloco</a>
          </div>
        </div>
      </slot>
      <ModalAction v-if="confirmModal"/>
    </div>
    <div class="content table-responsive table-full-width">
      <div class="content-blocos">
        <div v-for="bloco in blocos" class="bloco">
          <div class="bloco-header">
            <h3 class="bloco-title">{{ bloco.nome }}</h3>
          </div>

          <div class="bloco-content">
            {{ bloco.quantidadeApartamentos }} apartamentos
          </div>

					<div class="bloco-footer">
						<a href="">Editar</a>
					</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import ModalAction from 'components/UIComponents/ModalAction'

export default {
  data () {
    return {
      configs: {
        order: 'asc',
        orderBy: 'nome',
        filter: ''
      },
      blocos: [
        { id: 1, nome: 'Bloco 01', quantidadeApartamentos: 20 },
        { id: 2, nome: 'Bloco 02', quantidadeApartamentos: 30 },
        { id: 3, nome: 'Bloco 03', quantidadeApartamentos: 25 },
        { id: 4, nome: 'Bloco 04', quantidadeApartamentos: 30 },
        { id: 5, nome: 'Bloco 05', quantidadeApartamentos: 25 },
				{ id: 6, nome: 'Bloco 06', quantidadeApartamentos: 25 }
      ]
    }
  },
  components: {
    ModalAction
  },
  mounted () {
    this.$store.dispatch('getBlocos')
  },
  computed: {
    ...mapGetters([
      'confirmModal'
    ]),
    tableClass () {
      return `table-${this.type}`
    },
    blocos () {
      return this.$store.state.bloco.blocosList
    },
    lista () {
      const filter = this.configs.filter
      const list = _.orderBy(this.blocos, this.configs.orderBy, this.configs.order)

      if (_.isEmpty(filter)) {
        return list
      }

      return _.filter(list, bloco => bloco.nome.indexOf(filter) >= 0)
    }
  }
}
</script>

<style lang="scss">

  .form-control.border-input {
    &::-webkit-input-placeholder {
      color: #bbb;
    }
    &:-moz-placeholder {
      color: #000;
    }
  }

  .content-blocos {
    display: flex;
		flex-wrap: wrap;
  }

	.card .content {
		width: 100%;
	}

  .bloco {
		width: 20%;
    background-color: #fff;
    margin: 5px;
    box-shadow: 1px 1px 1px 1px #ccc;

    .bloco-header {
      background-color: #1a1ab1;
      padding: 1em;
    }

    .bloco-title {
      color: #fff;
      font-size: 18px;
      margin: 0;
      text-align: center;
    }

    .bloco-content {
      padding-top: 10px;
    }

		.bloco-footer {
			padding: 10px;
		}
  }
</style>
