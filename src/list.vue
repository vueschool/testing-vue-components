<template>
  <div>
    <ul>
      <ListItem
        :key="index"
        v-for="(movie, index) in marvelMovies"
        :movie="movie"
      />
    </ul>
  </div>
</template>

<script>
  import ListItem from './components/list-item'

  export default {

    components: {
      ListItem
    },

    data() {
      return {
        marvelMovies: [
          'Iron Man',
          'Avengers',
          'Infinity War',
        ]
      }
    }//end data()

  }
</script>

<style scoped>

</style>
