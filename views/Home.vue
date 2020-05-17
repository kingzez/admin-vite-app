<template>
  <div>
    <div>Home</div>
    <p>My Data is: {{ someData }}</p>
    <p v-if="waited != null">I waited for {{ waited }}</p>
    toggle: {{ log(toggle) }}
    <p> counter: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, inject, ref, computed } from 'vue'
import { useStore } from 'vuex';
// import { guardSymbol } from '../../src/components/View'

export default defineComponent({
  name: 'Home',
  props: ['waited'],
  data: () => ({
    toggle: false,
  }),

  setup() {
    const me = getCurrentInstance()
    // const registerGuard = inject(guardSymbol)
    // console.log('calling setup in Home')
    // await registerGuard(me)
    // emit('registerGuard', getCurrentInstance())
    const store = useStore()
    const count = computed(() => store.getters.count)

    function increment() {
      store.dispatch('increment')
    }
    function decrement() {
      store.dispatch('decrement')
    }

    function log(value) {
      console.log(value)
      return value
    }

    return {
      log,
      someData: ref(0),
      count,
      increment,
      decrement
    }
  },

  _beforeRouteEnter() {
    this.toggle = true
  },
})
</script>
