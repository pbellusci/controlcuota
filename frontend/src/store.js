export default {
    state() {
        return {
            current_user: {
                data: {},
                authorization_token: null
            },
            setup: {
                bancos: [],
                tipos_tarjeta: [],
            },
            categorias: [],
            tarjetas: [
                {
                    id: '1231251251254125aa',
                    tipo: 'VISA',
                    descripcion: 'EJEMPLO',
                    banco: 'MACRO'
                }
            ],
            cuotas: [],
            cuotaSelected: {},
            tarjetaSelected: {},
            categoriaSelected: {},
            balance: {
                total: 0,
                totalCuotas: 0
            }
        }
    },
    mutations: {
        setSetup(state, data) {
            state.setup = data
        },
        setCurrentUserData(state, data) {
            state.current_user.data = data
        },
        setCurrentUserAuthorization(state, data) {
            state.current_user.authorization_token = data
        },
        setCategorias(state, data) {
            state.categorias = data
        },
        selectTarjeta(state, data) {
            state.tarjetaSelected = data
        },
        selectCuota(state, data) {
            state.cuotaSelected = data
        },
        selectCategoria(state, data) {
            state.categoriaSelected = data
        },
        pushCuota(state, cuota) {
            state.cuotas.push(cuota)
        },
        pushTarjeta(state, tarjeta) {
            state.tarjetas.push(tarjeta)
        },
        pushCategoria(state, categoria) {
            state.categorias.push(categoria)
        },
        removeCuota(state, cuotaId) {
            const cuotaIndex = state.cuotas.findIndex(cuota => cuota.id === cuotaId)
            state.cuotas.splice(cuotaIndex, 1)
        },
        removeTarjeta(state, tarjetaId) {
            const tarjetaIndex = state.tarjetas.findIndex(tarjeta => tarjeta.id === tarjetaId)
            state.tarjetas.splice(tarjetaIndex, 1)
        },
        removeCategoria(state, categoriaId) {
            const categoriaIndex = state.categorias.findIndex(categoria => categoria.id === categoriaId)
            state.categorias.splice(categoriaIndex, 1)
        }
    },
    getters: {
        cuotas: (state)                     => state.cuotas,
        balance: (state)                    => state.balance,
        cuotaSelected: (state)              => state.cuotaSelected,
        tarjetas: (state)                   => state.tarjetas,
        tarjetaSelected: (state)            => state.tarjetaSelected,
        categorias: (state)                 => state.categorias,
        categoriaSelected: (state)          => state.categoriaSelected,
        getSetup: (state)                   => state.setup,
        currentUserData:(state)             => state.current_user.data,
        currentUserToken:(state)            => state.current_user.authorization_token
    }
}