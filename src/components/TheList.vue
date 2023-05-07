<template>
    <div>
        <el-card class="list-card-item" v-for="todoItem in list" :key="todoItem.id" shadow="hover">
            <el-row  type="flex" align="middle">
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
    },
    computed:{
        ...mapState({
            list:state=>state.todo.list
        }),
    },
    methods:{
        ...mapMutations({
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
    margin: 2px 0;
}
.btn-row{
    text-align: end;
}
.content-box{
    display: flex;
}
</style>
