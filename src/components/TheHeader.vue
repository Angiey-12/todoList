<template>
    <div class="list-input">
    <el-input
        placeholder="enter the item, then click rentrn to add"
        v-model="input"
        @keyup.enter.native="add"
        clearable>
    </el-input>
    </div>
</template>
<script>
import { mapMutations} from 'vuex';
export default {
    name:'TheHeader',
    data() {
        return {
            input:''
        }
    },
    methods:{
        ...mapMutations({
            addItem:"todo/ADD_TODOITEM",
        }),
        // add new item
        add(e){
            if(!e.target.value.trim()) {
                alert("cann't be empty!")
            } else {
                this.addItem(e.target.value)
                this.input = ''
            }
        }
    }
}
</script>