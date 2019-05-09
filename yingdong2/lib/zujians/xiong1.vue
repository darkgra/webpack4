<template>
    <div>
        <input type="button" value="增加" @click="jia">
        <input type="button" value="减少" @click="jian">
        <br>
        <input type="text" v-model="$store.state.count">
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        jia(){
            this.$store.commit('add',1)
        },
        jian(){
            this.$store.commit('dda',1)
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
