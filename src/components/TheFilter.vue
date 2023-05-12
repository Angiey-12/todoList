<template>
    <div class="footer-contianer">
        <b-button-group size="sm">
            <b-button squared variant="outline-primary" :class="{'active': status == 'all'}" @click="setStatus('all')">Show All</b-button>
            <b-button squared variant="outline-primary" :class="{'active': status == 'unfinish'}" @click="setStatus('unfinish')">Show Unfinished</b-button>
            <b-button squared variant="outline-primary"  :class="{'active': status == 'finish'}" @click="setStatus('finish')">Show Finshed</b-button>
        </b-button-group>
    </div>
</template>
<script>
import { mapState, mapMutations} from 'vuex';
export default {
    name:'TheFilter',
    data() {
        return {
        }
    },
    computed:{
        ...mapState({
            status:state=>state.todo.status
        })
    },
    methods:{
        ...mapMutations({
            setStatus:'todo/SET_ITEMSTATUS',
        }),
    }
}
</script>
<style scoped>
.footer-contianer{
    /*border: rgba(0, 0, 0, 0.125) 1px solid;
    padding: 10px;*/
    margin-top:5px ;
    text-align: end;
}
</style>>