<template>
  <div class="song">
    <div
      class="song__entry"
      v-for="(songDatum, index) in songDataArray"
      v-bind:class="{'hide-on-mobile': index > 2}">
      <div class="song__entry__data">
        {{ songDatum }}
      </div>
    </div>
  </div>
</template>

<script>

import FormatSecondsAsTime from '../../../helpers/FormatSecondsAsTime'

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
            if(songKey.name === 'length') {
              return FormatSecondsAsTime(this.song[songKey.name]);
            } else {
              return this.song[songKey.name];
            }
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

