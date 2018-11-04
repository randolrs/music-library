<template>
  <div class="song">
    <div
      class="song__entry"
      v-for="songDatum in songDataArray">
      <div class="song__entry__data">
        {{ songDatum }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Song',
  props: {
    song: Object,
    songIndexKeys: Array
  },
  data () {
    return {
    }
  },
  computed: {
    songDataArray() {
      if(this.songIndexKeys) {
        return this.songIndexKeys.map(songKey => {
          if(this.song[songKey.name]) {
            return this.song[songKey.name];
          } else {
            return null;
          }
        });
      } else {
        return null;
      }
    }
  }
}
</script>

