<template>
  <div>
    {{ salad }}
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      ...this.$store.state
    }
  },

  methods: {
    ...mapMutations(['addIngredient'])
  },
}
</script>
