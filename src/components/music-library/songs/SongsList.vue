<template>
  <div class="songs-list">
    <template v-if="songs && songs.length > 0">
      <p class="songs-list__search-label" v-if="searchActive">
        <span>Showing</span>
        <span>{{ songs.length }}</span>
        <span>results for</span>
        <span>"{{ searchInput }}"</span>
      </p>
      <div class="songs-list__header">
        <div
          v-for="(indexKey, index) in songIndexKeys"
          class="songs-list__header__entry"
          v-bind:class="{'hide-on-mobile': index > 2}"
        >
          <div
            class="songs-list__header__entry__data"
            v-bind:class="{'active': indexKey.name === sortKey}"
            @click="updateSort(indexKey.name)"
          >
            <span class="songs-list__header__entry__data--text">{{ indexKey.name }}</span>
            <i
              class="fas fa-angle-up"
              v-bind:class="{'invisible': sortKey !== indexKey.name, 'inverted': sortAscending}"></i>
          </div>
        </div>
      </div>
      <Song
        v-for="song in songs"
        :song="song"
        :songIndexKeys="songIndexKeys"
        v-bind:key="song.id"
      />
    </template>
    <template v-else>
      <div class="songs-list__empty">
        <template v-if="searchActive">
          <p>No Search Results</p>
          <div class="btn btn__clear-search" @click="clearSearch()">
            <span>Clear Search</span>
          </div>
        </template>
        <template v-else>
          <span>Your Library is Empty</span>
        </template>
      </div>
    </template>
  </div>
</template>

<script>

import Song from './Song'

export default {
  name: 'SongsList',
  components: {
    Song
  },
  props: {
    songs: Array,
    songIndexKeys: Array,
    sortKey: String,
    sortAscending: Boolean,
    searchActive: Boolean,
    searchInput: String
  },
  data () {
    return {
    }
  },
  methods: {
    updateSort(indexKey) {
      this.$emit('updateSort', indexKey);
    },
    clearSearch() {
      this.$emit('clearSearch')
    }
  }
}
</script>