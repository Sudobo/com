<template>
  <div id="app">
    <com-example />
    <google-map-api />
  </div>
</template>

<script>
import comExample from './components/com-example'
import googleMapApi from './components/google-map-api'

export default {
  name: 'app',
  data: function() {
    return {
      fromApp: ''
    }
  },
  components: {
    comExample,
    googleMapApi
  }
}
</script>

<style>

</style>
