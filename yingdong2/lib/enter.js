import Vue from 'vue/dist/vue';

import rou from 'vue-router';
Vue.use(rou);
import router from './router.js';

import mi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(mi);

import './mui/css/mui.min.css';
import './mui/css/icons-extra.css';

import gen from './app.vue';

import res from 'vue-resource';
Vue.use(res);

import Vuex from 'vuex';
Vue.use(Vuex);

var count = parseInt(JSON.parse(localStorage.getItem('count')||0))
var co = JSON.parse(localStorage.getItem('carx')||'[]')//这个该死的carx以后还是取名一样的好

var store = new Vuex.Store({
    state:{
        count:count,
        carx:co,
        tog:false
    },
    mutations:{
        add(state,b){
            state.count+=b
        },
        dda(state,c){
            state.count-=c
        },
        tocar(state,cardx){
            if(state.carx.length==0){
                state.carx.push(cardx);
            }
            
            localStorage.setItem('count',JSON.stringify(state.count));
            localStorage.setItem('cardx',JSON.stringify(state.carx))
        }
        
    },
    getters:{
        fanghui:function(state){
            return '当前最新的数据是:'+state.count
        }
    }
})

var vm =  new Vue({
    el:'#app',
    render: h => h(gen),
    router:router,
    store:store,

})