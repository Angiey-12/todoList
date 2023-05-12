/* eslint-disable */
import { request } from "../../../assets/js/request";
export default {
    namespaced: true,
    state: {
        list: [],
        dateTime: '',
        status: 'all'
    },
    getters: {
        getSatusList(state) {
            switch (state.status) {
                case 'all':
                    return state.list
                case 'unfinish':
                    return state.list.filter(item => !item.isfinish) 
                case 'finish':
                    return state.list.filter(item => item.isfinish) 
                default:
                    break;
                }
            }
    },
    mutations: {
        // get todo list from json
        INIT_LIST(state, list) {
            list.map(i => {
                i.isEdit = false
            })
            state.list = list
        },
        INIT_DATETIME(state) {
            const nowDate = new Date();
            const date = {
                year: nowDate.getFullYear(),
                month: nowDate.getMonth() + 1,
                date: nowDate.getDate(),
                hours: nowDate.getHours(),
                minutes: nowDate.getMinutes(),
                seconds: nowDate.getSeconds(),
            };
            const newmonth = date.month > 10 ? date.month : "0" + date.month;
            const newday = date.date > 10 ? date.date : "0" + date.date;
            const newminutes = date.minutes > 10 ? date.minutes : "0" + date.minutes;
            const newseconds = date.seconds > 10 ? date.seconds : "0" + date.seconds;
            state.dateTime = date.year + "-" + newmonth + "-" + newday + " " + date.hours + ":" + newminutes + ":" + newseconds;
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
                isfinish: false,
                time: state.dateTime
            }
            state.list.push(obj) 
        },
        SET_ITEMSTATUS(state, status) {
            state.status = status
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