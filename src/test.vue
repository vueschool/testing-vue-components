<template>
  <div>
    <h1>Hello {{ value }}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: 'Test'
      }
    }
  }
</script>
