<template>
  <div id="app">
    <com-example />
  </div>
</template>

<script>
import comExample from './components/com-example'
export default {
  name: 'app',
  data: function() {
    return {
      fromApp: ''
    }
  },
  components: {
    comExample
  }
}
</script>

<style>

</style>
