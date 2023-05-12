<template>
    <div class="list-input">
    <!-- <input
        class="add-input"
        placeholder="enter the item, then click rentrn to add"
        v-model="input"
        @keyup.enter="add" /> -->
         <b-input-group>
            <template v-slot:append>
                <b-button squared variant="outline-secondary" @click="addbyBtn(input)"><b-icon icon="check"></b-icon></b-button>
            </template>
            <b-form-input
                placeholder="enter the item, then click rentrn to add"
                v-model="input"
                @keyup.enter="add" 
            ></b-form-input>
        </b-input-group>
    </div>
</template>
<script>
import { mapMutations} from 'vuex';
export default {
    name:'TheHeader',
    data() {
        return {
            input:null
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
                this.input = null
            }
        },
        addbyBtn(text){
            if(text) {
                this.addItem(text)
                this.input = null               
            } else {
                alert("cann't be empty!")
            }
        }
    }
}
</script>
<style scoped>
.add-input{
    width: 100%;
    margin: 2px 0;
}
</style>>