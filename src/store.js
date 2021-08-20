import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [{
        "nombre": "Sekiro",
        "codigo": "0001",
        "stock": 100,
        "precio": 30000,
        "color": "red",
        "destacado": "true"
      },
      {
        "nombre": "Fifa 21",
        "codigo": "0002",
        "stock": 100,
        "precio": 25000,
        "color": "blue",
        "destacado": "false"
      },
      {
        "nombre": "Gears of Wars 4",
        "codigo": "0003",
        "stock": 100,
        "precio": 15000,
        "color": "green",
        "destacado": "true"
      },
      {
        "nombre": "Forza Horizon 4",
        "codigo": "0004",
        "stock": 100,
        "precio": 35000,
        "color": "yellow",
        "destacado": "false"
      },
      {
        "nombre": "Mario Tennis Aces",
        "codigo": "0005",
        "stock": 100,
        "precio": 10000,
        "color": "blue",
        "destacado": "true"
      },
      {
        "nombre": "Bloodborne",
        "codigo": "0006",
        "stock": 100,
        "precio": 20000,
        "color": "red",
        "destacado": "fasle"
      }
    ],
    juegosFiltrado: [],
    ventas: []
  },
  mutations: {
    setJuegoFiltrado(state, payload) {
      state.juegosFiltrado = payload
    },
    setIncrementar(state, payload) {
      state.juegos.stock = payload.stock++;
    },
    setDecrementar(state, payload) {
      state.juegos.stock = payload.stock--;
    },
    setVenta(state, payload) {
      const {
        stock,
        destacado,
        color,
        ...carga
      } = payload
      state.ventas.push(carga)
      console.log(state.ventas)
      console.log(stock, destacado, color);
      console.log(state);
    }
  },
  actions: {
    filtrar({
      commit,
      state
    }, objeto) {
      const filtroCodigo = state.juegos.filter(juego => {
        return juego[objeto.propiedad].includes(objeto.valor)
      })
      commit('setJuegoFiltrado', filtroCodigo)
    },
    venta({
      commit,
      dispatch,
      state
    }, objeto) {
      state.juegos.find(juego => {
        if (juego.codigo === objeto.codigo && objeto.stock > 0) {
          setTimeout(async () => {
            await commit('setDecrementar', objeto)
            await dispatch('mostrarAlerta')
            commit('setVenta', objeto)
          }, 2000)
        }
      })
    },
    mostrarAlerta() {
      alert("venta procesada");
    },
  },
  getters: {
    juegos(state) {
      return state.juegosFiltrado
    },
    totalStock(state) {
      return state.juegos.filter(juego => juego.stock > 0).length;
    },
    totalStockJuegos(state) {
      return state.juegos.reduce((acumulador, juego) => acumulador + juego.stock, 0)
    },
    totalVetas(state) {
      return state.ventas.filter(venta => venta.codigo).length;
    },
    TotalMonto(state) {
      return state.ventas.reduce((acumulador, venta) => acumulador + venta.precio, 0)
    }
  },
});

export default store;