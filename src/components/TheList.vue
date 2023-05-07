<template>
    <div>
        <transition-group name="slide">
            <el-card class="list-card-item" v-for="todoItem in list" :key="todoItem.id" shadow="hover">
                <p class="timetext"><i class="el-icon-time"></i> Add time: {{todoItem.time}}</p>
                <el-row type="flex" align="middle">
                        <!--pc view-->
                        <el-col class="content-box" :xl="18" :xs="22">
                            <input type="checkbox" :checked="todoItem.isfinish" @change="handleChange(todoItem.id)" />
                            <span v-show="!todoItem.isEdit">{{todoItem.text}}</span>
                            <el-input type="text" v-show="todoItem.isEdit" v-model="todoItem.text" @keyup.enter.native="handleBlur(todoItem,$event)" ref="inputTitle"/>
                        </el-col>
                        <el-col :span="6" class="btn-row hidden-sm-and-down">
                            <el-button-group>
                                <el-button type="primary" icon="el-icon-edit" @click="editRow(todoItem)"></el-button>
                                <el-button type="primary" icon="el-icon-delete" @click="deleteRow(todoItem.id)"></el-button>
                        </el-button-group>
                        </el-col>
                        <!--mobile view-->
                        <el-col :xs="2" class="btn-row hidden-sm-and-up">
                            <el-button-group>
                                <el-button size="mini" type="text" icon="el-icon-delete" @click="deleteRow(todoItem.id)"></el-button>
                            </el-button-group>
                        </el-col>
                    </el-row>
            </el-card>
        </transition-group>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';

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
        ...mapState({
            list:state=>state.todo.list,
        }),
    },
    methods:{
        ...mapMutations({
            dateTime:'todo/INIT_DATETIME',
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
            console.log(this.dateTime)
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
    margin: 2px 0;
}
.btn-row{
    text-align: end;
}
.content-box{
    display: flex;
}
.timetext {
    margin: 0;
    font-size: 12px;
    color: #909399;
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
