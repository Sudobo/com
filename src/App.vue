<template>
  <div id="app">
    <com-example />
    <screen-media></screen-media>
  </div>
</template>

<script>
import comExample from './components/com-example'
import screenMedia from './components/screen-media'
export default {
  name: 'app',
  data: function() {
    return {
      fromApp: ''
    }
  },
  components: {
    comExample,
    screenMedia
  }
}
</script>

<style>

</style>
