<template>
  <div id="app">
    <com-example />
    <google-map-api />
    <google-map-iframe />
  </div>
</template>

<script>
import comExample from './components/com-example'
import googleMapApi from './components/google-map-api'
import googleMapIframe from './components/google-map-iframe'

export default {
  name: 'app',
  data: function() {
    return {
      fromApp: ''
    }
  },
  components: {
    comExample,
    googleMapApi,
    googleMapIframe
  }
}
</script>

<style>

</style>
