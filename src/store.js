export default {
    state() {
        return {
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
            balance: {
                total: 0,
                totalCuotas: 0
            }
        }
    },
    mutations: {
        selectTarjeta(state, data) {
            state.tarjetaSelected = data
        },
        selectCuota(state, data) {
            state.cuotaSelected = data
        },
        pushCuota(state, cuota) {
            state.cuotas.push(cuota)
        },
        pushTarjeta(state, tarjeta) {
            state.tarjetas.push(tarjeta)
        },
        removeCuota(state, cuotaId) {
            const cuotaIndex = state.cuotas.findIndex(cuota => cuota.id === cuotaId)
            state.cuotas.splice(cuotaIndex, 1)
        },
        removeTarjeta(state, tarjetaId) {
            const tarjetaIndex = state.tarjetas.findIndex(tarjeta => tarjeta.id === tarjetaId)
            state.tarjetas.splice(tarjetaIndex, 1)
        }
    },
    getters: {
        cuotas: (state)             => state.cuotas,
        balance: (state)            => state.balance,
        cuotaSelected: (state)      => state.cuotaSelected,
        tarjetas: (state)           => state.tarjetas,
        tarjetaSelected: (state)    => state.tarjetaSelected,
    }
}