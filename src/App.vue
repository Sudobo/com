<template>
  <div id="app">
    <com-example />
    <google-map-api />
    <search-animation />
    <google-map-iframe />
  </div>
</template>

<script>
import comExample from './components/com-example'
import googleMapApi from './components/google-map-api'
import googleMapIframe from './components/google-map-iframe'
import searchAnimation from './components/search-animation'

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
    googleMapIframe,
    searchAnimation
  }
}
</script>

<style>

</style>
