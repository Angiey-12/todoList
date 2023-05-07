/* eslint-disable */
import { request } from "../../../assets/js/request";
export default {
    namespaced: true,
    state: {
        list:[]
    },
    mutations: {
        // get todo list from json
        INIT_LIST(state, list) {
            list.map(i => {
                i.isEdit = false
            })
            state.list = list
        },
        DELETE_TODOITEM(state, id) {
            const i = state.list.findIndex(item => item.id === id);
            if (i > -1) {
                state.list.splice(i, 1);
            }
        },
        UPDATE_TODOITEM(state,{id,text}){
            state.list.forEach(i => {
                if(i.id === id) i.text = text;
            })
        },
        CHECK_TODOITEM(state,id){
            state.list.forEach(i => {
                if(i.id === id) i.isfinish = !i.isfinish;
            })          
        },
        ADD_TODOITEM(state, text){
            const obj = {
                id: state.list.length,
                text: text,
                isfinish: false
            }
            state.list.push(obj) 
        },
    },
    actions:{
        setList(conText,payload){
            request('/mockdata.json').then(res=>{
                conText.commit('INIT_LIST', res.data);
            })
        }
    }
}