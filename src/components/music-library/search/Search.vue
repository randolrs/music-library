<template>
  <div class="search" v-bind:class="{'active': active}">
    <i class="fas fa-search"></i>
    <input
      class="search__input"
      v-model="searchInput"
      placeholder="Search"
      @focus="updateActive(true)"
      @blur="updateActive(false)"
    />
    <span
      v-if="searchInput && searchInput.length >= 1"
      class="search__clear"
      @click="clearSearchInput()"
    >Clear</span>
  </div>
</template>

<script>

export default {
  name: 'Search',
  props: {
    clearSearch: Boolean
  },
  data () {
    return {
      searchInput: null,
      active: false
    }
  },
  watch: {
    searchInput() {
      this.$emit('updateSearchInput', this.searchInput);
    },
    clearSearch() {
      if(this.clearSearch) {
        this.clearSearchInput();
      }
    }
  },
  computed: {
  },
  methods: {
    updateActive(status) {
      return this.active = status;
    },
    clearSearchInput() {
      this.searchInput = null;
    }
  }

}
</script>

