<template>
  <div id="music-library">
    <div class="main__header">
      <div class="main__header__content">
        <div class="main__header__content__left">
          <header class="main__header__content__title">Music Library</header>
          <div class="main__header__content__title__divider"></div>
          <p class="main__header__content__info">{{ songsCount }} Songs</p>
          <p class="main__header__content__info">{{ allSongsLength }} Total Length</p>
        </div>
        <div class="main__header__content__right">
          <Search @updateSearchInput="updateSearchInput" :clearSearch="clearSearchInput" />
        </div>
      </div>
    </div>
    <div class="main__content">
      <SongsList  
        @updateSort="updateSort"
        @clearSearch="clearSearch"
        :songs="displaySongs"
        :songIndexKeys="songIndexKeys"
        :sortKey="sortKey"
        :sortAscending="sortAscending"
        :searchActive="searchIsActive"
        :searchInput="searchInput"
      />
    </div>
  </div>
</template>

<script>

import MySongs from '../../data/MySongs'
import SongsList from './songs/SongsList'
import Search from './search/Search'

export default {
  name: 'MusicLibrary',
  components: {
    SongsList,
    Search
  },
  props: {
  },
  data () {
    return {
      mySongs: MySongs,
      songIndexKeys: [
        {'name': 'title', 'type': 'string'},
        {'name': 'album', 'type': 'string'},
        {'name': 'length', 'type': 'number'},
        {'name': 'artist', 'type': 'string'},
        {'name': 'genre', 'type': 'string'},
      ],
      sortKey: null,
      sortAscending: null,
      searchInput: null,
      clearSearchInput: null
    }
  },
  created() {
  },
  methods: {
    clearSearch() {
      this.searchInput = null;
      this.clearSearchInput = true;
      this.$nextTick(() => {
        this.clearSearchInput = false;
      })
    },
    updateSort(indexKey) {
      if(this.sortKey === indexKey) {
        this.sortAscending = !this.sortAscending;
      } else {
        this.sortKey = indexKey;     
        this.sortAscending = true;  
      }
    },
    applySort(songs, sortKey, ascending = true) {
      let sortType = this.songIndexKeys.find(elem => elem.name === sortKey)['type'];
      if(sortType === 'string') {
        if(this.sortAscending) {
          songs.sort((a,b) => {
            if (a[this.sortKey].toUpperCase() < b[this.sortKey].toUpperCase()) {
              return -1;
            } else {
              return 1;
            }
          });
        } else {
          songs.sort((a,b) => {
            if (b[this.sortKey].toUpperCase() < a[this.sortKey].toUpperCase()) {
              return -1;
            } else {
              return 1;
            }
          });
        }
      } else if (sortType === 'number') {
        this.sortAscending ? songs.sort((a,b) => a[this.sortKey] - b[this.sortKey]) : songs.sort((a,b) => b[this.sortKey] - a[this.sortKey]);
      }

      return songs;
    },
    applySearch(songs) {
      let searchInput = this.searchInput;

      let stringKeys = this.songIndexKeys.filter(elem => {
        return elem.type === 'string'
      });

      return songs.filter(song => {
        for(let i = 0; i < stringKeys.length; i++) {
          let stringKey = stringKeys[i]['name'];
          if(song[stringKey].toLowerCase().includes(searchInput.toLowerCase())) {
            return true;
          }
        }
        
        return false;
      })
    },
    updateSearchInput(_searchInputFromSearchComponent) {
      this.searchInput = _searchInputFromSearchComponent;
    }
  },
  computed: {
    searchIsActive() {
      return (this.searchInput && typeof this.searchInput === 'string' && this.searchInput.length > 0) ? true : false
    },
    songsCount() {
      return this.mySongs.length;
    },
    allSongsLength() {
      return this.mySongs.reduce((total, song) => {
        total += song.length;   
        return total;
      }, 0)
    },
    displaySongs() {
      let _displaySongs = this.mySongs;

      if(this.searchInput) {
        _displaySongs = this.applySearch(_displaySongs);
      }
      if(this.sortKey) {
        _displaySongs = this.applySort(_displaySongs, this.sortKey, this.sortAscending);
      }

      return _displaySongs;
    }
  }
}
</script>
