<template>
  <div>
    {{ salad }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      ...this.$store.state
    }
  },

  methods: {
    ...mapActions(['addIngredient'])
  },
}
</script>
