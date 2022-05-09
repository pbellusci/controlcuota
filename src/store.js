export default {
    state() {
        return {
            cuotas: [],
            cuotaSelected: {},
            balance: {
                total: 0,
                totalCuotas: 0
            }
        }
    },
    mutations: {
        selectCuota(state, data) {
            state.cuotaSelected = data
        },
        pushCuota(state, cuota) {
            state.cuotas.push(cuota)
        },
        removeCuota(state, cuotaId) {
            const cuotaIndex = state.cuotas.findIndex(cuota => cuota.id === cuotaId)
            state.cuotas.splice(cuotaIndex, 1)
        }
    },
    getters: {
        cuotas: (state)         => state.cuotas,
        balance: (state)        => state.balance,
        cuotaSelected: (state)  => state.cuotaSelected
    }
}