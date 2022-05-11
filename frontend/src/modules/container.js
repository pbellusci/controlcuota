import { getAllConfig } from '../services/setup'
import { getAllCategorias } from '../services/categorias'

export default class {

  constructor(store) {
    this.store = store
  }

  async loadSetup() {
    try {
      const config = await getAllConfig()
      this.store.commit('setSetup', config.data)
      console.info('Setup loaded succesfuly')
    } catch(err) {
        alert('No se pudo cargar la configuracion')
        console.log('Error: ', err)
    }
  }

  async loadCategorias() {
    try {
        const config = await getAllCategorias()
        this.store.commit('setCategorias', config.data)
    } catch(err) {
        alert('No se pudieron cargar las categorias')
        console.log('Error: ', err)
    }
  }
}