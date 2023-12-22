<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <button @click="handleClick">
      stop watching
    </button>
  </div>
</template>

<script>
import { ref, computed, watch , watchEffect} from 'vue'

export default {
  name: 'HomeView',
  setup() { 
    const search = ref('')
    const names = ref([
      'luke',
      'jane',
      'donald',
      'david',
      'dennis',
      'illine',
      'dickens'
    ])

    // watch the search ref, and a second arguement which is a function whicjh will fire every time serach ref changes
    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    /*
      watchEffect
       - Runs initially when the setup function run
       - Used to get data from a database
    */
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function run', search.value)
    })

    // using the computed property to return updated value "matchingNames" based on other value "names"
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })


    const handleClick = () => {
      // stop watch and watchEffect from watching
      stopWatch()
      stopEffect()
    }
    
    return { names, search, matchingNames, handleClick }
  }
}
</script>
