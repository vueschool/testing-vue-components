<template>
  <div>
    <h1>Fruit Basket</h1>
    <input type="text" v-model="fruit">
    <button @click="addToBasket">Add Fruit</button>
    <ul class="fruits">
      <li v-for="fruit in basket" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        basket: [],
        fruit: ''
      }
    },

    methods: {
      addToBasket() {
        if (this.fruit.trim().length <= 0) return
        this.basket.push(this.fruit)
        this.fruit = ''
      }
    }
  }
</script>
