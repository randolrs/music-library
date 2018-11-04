<template>
  <div id="app" v-bind:class="{'night-mode': nightMode}">
    <Nav :nightMode="nightMode" />
    <div class="main">
      <MusicLibrary :nightMode="nightMode" />
    </div>
    <Footer :nightMode="nightMode" />
  </div>
</template>

<script>

import Nav from './components/layouts/Nav'
import MusicLibrary from './components/music-library/MusicLibrary'
import Footer from './components/layouts/Footer'

export default {
  name: 'app',
  components: {
    Nav,
    MusicLibrary,
    Footer
  },
  data () {
    return {
      nightMode: true
    }
  }
}
</script>

<style lang="sass">
  @import './assets/sass/main.sass'
</style>
