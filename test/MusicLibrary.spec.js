import Vue from 'vue'

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MusicLibrary from '../src/components/music-library/MusicLibrary.vue'

let testSongsData = [
  {
    id: 'UUID1',
    title: "Apples",
    album: "AlbumName0",
    length: 280,
    artist: "Artist0",
    genre: "Jazz",
    img_src: "https://s3.com",
  },
  {
    id: 'UUID2',
    title: "Oranges",
    album: "AlbumName1",
    length: 160,
    artist: "Artist1",
    genre: "Jazz",
    img_src: "https://s3.com",
  },
  {
    id: 'UUID3',
    title: "Zebras",
    album: "AlbumName2",
    length: 260,
    artist: "Artist2",
    genre: "Jazz",
    img_src: "https://s3.com",
  },
]

describe('MusicLibrary.vue', () => {

	let cmp;

	beforeEach(() => {
		cmp = shallowMount(MusicLibrary);
	});

	it('determine if songsCount is calculated correctly', () => {
		cmp.setData({ mySongs: testSongsData });
		expect(cmp.vm.songsCount).equals(3);
	})

	it('determine if allSongsLength is calculated correctly', () => {
		cmp.setData({ mySongs: testSongsData });
		expect(cmp.vm.allSongsLength).equals('11:40'); //700 seconds formatted as MM:SS
	})

  it('determine if songs are sorted correctly', () => {
    cmp.setData({ mySongs: testSongsData, sortKey: 'title', sortAscending: false }); //sort by title in reverse alphabetical
    expect(cmp.vm.displaySongs[0].id).equals('UUID3');
  })

  it('determine if songs are sorted correctly', () => {
    cmp.setData({ mySongs: testSongsData, searchInput: null}); //sort by title in reverse alphabetical
    cmp.vm.updateSort('title');
    expect(cmp.vm.sortAscending).equals(true);
    cmp.vm.updateSort('title'); //sorting should now reverse
    expect(cmp.vm.sortAscending).equals(false);
  })

  it('determine if clearSearch() works correctly', () => {
    cmp.setData({ mySongs: testSongsData, searchInput: 'Zebr'}); //search for Zebra
    expect(cmp.vm.displaySongs[0].id).equals('UUID3');
    cmp.vm.clearSearch();
    expect(cmp.vm.searchInput).equals(null);
  })

  it('determine if updateSearchInput() works correctly', () => {
    cmp.setData({ mySongs: testSongsData, searchInput: 'Zebr'}); //search for Zebra
    expect(cmp.vm.displaySongs[0].id).equals('UUID3');
    cmp.vm.updateSearchInput('App');
    expect(cmp.vm.displaySongs.length).equals(1);
    expect(cmp.vm.displaySongs[0].id).equals('UUID1');
  })
})