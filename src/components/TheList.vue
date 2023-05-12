<template>
    <div>
        
            <!-- <el-card class="list-card-item" v-for="todoItem in list" :key="todoItem.id" shadow="hover">
                <p class="timetext"><i class="el-icon-time"></i> Add time: {{todoItem.time}}</p>
                <el-row type="flex" align="middle">
                        <el-col class="content-box" :xl="18" :xs="22">
                            <input type="checkbox" :checked="todoItem.isfinish" @change="handleChange(todoItem.id)" />
                            <span v-show="!todoItem.isEdit">{{todoItem.text}}</span>
                            <el-input type="text" v-show="todoItem.isEdit" v-model="todoItem.text" @keyup.enter.native="handleBlur(todoItem,$event)" ref="inputTitle"/>
                        </el-col>
                        <el-col :span="6" class="btn-row hidden-sm-and-down">
                            <el-button-group>
                                <el-button type="primary" icon="el-icon-edit" @click="editRow(todoItem)" :disabled="todoItem.isfinish"></el-button>
                                <el-button type="primary" icon="el-icon-delete" @click="deleteRow(todoItem.id)" :disabled="todoItem.isfinish"></el-button>
                            </el-button-group>
                        </el-col>
                        <el-col :xs="2" class="btn-row hidden-sm-and-up">
                            <el-button-group>
                                <el-button size="mini" type="text" icon="el-icon-delete" @click="deleteRow(todoItem.id)"></el-button>
                            </el-button-group>
                        </el-col>
                    </el-row>
            </el-card> -->
        <b-list-group>
            <transition-group name="slide">
                <b-list-group-item v-for="todoItem in list" :key="todoItem.id" class="list-card-item flex-column align-items-start">
                    <b-container fluid>
                        <b-row class="justify-content-between align-items-center content-row">
                        <p class="timetext"><i class="el-icon-time"></i> Add time: {{todoItem.time}}</p>
                            <b-col md="1" cols="1" class="textright"><input type="checkbox" :checked="todoItem.isfinish" @change="handleChange(todoItem.id)" /></b-col>
                            <b-col md="10" cols="8">
                                <span v-show="!todoItem.isEdit">{{todoItem.text}}</span>
                                <b-form-input type="text" v-show="todoItem.isEdit" v-model="todoItem.text" @keyup.enter="handleBlur(todoItem,$event)" ref="inputTitle"/>
                            </b-col>
                            <b-col md="1" cols="3" class="textright">
                                <b-button-group>
                                    <b-button squared variant="outline-primary" @click="editRow(todoItem)" :disabled="todoItem.isfinish"><b-icon icon="pencil"></b-icon></b-button>
                                    <b-button squared variant="outline-danger" @click="deleteRow(todoItem.id)" :disabled="todoItem.isfinish"><b-icon icon="trash"></b-icon></b-button>
                                </b-button-group>
                            </b-col>
                        </b-row> 
                    </b-container>
                </b-list-group-item>
            </transition-group>
        </b-list-group>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
    name: 'TheList',
     data() {
        return {
        }
    },
    created(){
        // get todo list from json
        this.setList()
        this.dateTime()
    },
    computed:{
        // ...mapState({
        //     list:state=>state.todo.list,
        // }),
        ...mapGetters({
            list:"todo/getSatusList"
        })
    },
    methods:{
        ...mapMutations({
            dateTime:"todo/INIT_DATETIME",
            delItem:"todo/DELETE_TODOITEM",
            editItem:"todo/UPDATE_TODOITEM",
            checkItem:"todo/CHECK_TODOITEM"
        }),
        ...mapActions({
            setList:"todo/setList"
        }),
        // set isfinish 
        handleChange(id){
            this.checkItem(id)
        },
        // edit context && change to input
        editRow(item){
            this.$set(item,"isEdit",true);
        },
        handleBlur(item,event){
            if(!event.target.value.trim()){
                alert("cann't be empty!");
            } else {
                this.editItem({id:item.id,text:event.target.value});
                item.isEdit = false;
            }  
        },
        // delete item
        deleteRow(id){
            this.delItem(id)
        },
    }
}
</script>
<style scoped>
.list-card-item {
    margin: 5px 0;
}
.textright{
    text-align: center;
}
.timetext {
    margin: 0 10px;
    font-size: 12px;
    color: #909399;
}
.content-row {
    padding: 0 30px 0 0;
}
.slide-enter-active {
    animation: slide-in 2s ease-out;
}
.slide-leave-active {
    display: none;
    animation: slide-out 0.5s ease;
    position: absolute;
}
.slide-move {
    transition: all 2s;
}

@keyframes slide-in {
from {
    transform: translateY(50px)
}
to {
    transform: translateY(0)
}
}
@keyframes slide-out {
from {
    transform: translateY(0)
}
to {
    transform: translateY(50px)
}
}
</style>
