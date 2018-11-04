<template>
  <div id="app">
    <Nav />
    <div class="main">
      <MusicLibrary />
    </div>
    <Footer />
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
    }
  }
}
</script>

<style lang="sass">
  @import './assets/sass/main.sass'
</style>
