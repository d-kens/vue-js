<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me 
    </div>
</template>


<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null, // store a setInterval
            reactionTime: 0 // Track the amount of time it takes for the user to click the square
        }
    },
    mounted() {
        console.log('mounted')
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        }, 
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end', this.reactionTime)
        }
    }
}

</script>
 

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px;
        margin: 40px auto;
    }

</style>