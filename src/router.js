import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Busquedas = () => import('./components/Busquedas')
const Total = () => import('./components/Total')
const Ventas = () => import('./components/Ventas')
const NoFound = () => import('./components/NoFound')



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busquedas',
            name: 'busquedas',
            component: Busquedas
        },
        {
            path: '/ventas',
            name: 'ventas',
            component: Ventas
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        },
        {
            path: '*',
            name: '404',
            component: NoFound,
        }
    ]
})