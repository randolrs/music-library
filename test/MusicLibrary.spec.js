import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MusicLibrary from '../src/components/music-library/MusicLibrary.vue'


let testSongsData = [
  {
    id: 'UUID1',
    title: "Title0",
    album: "AlbumName0",
    length: 280,
    artist: "Artist0",
    genre: "Jazz",
    img_src: "https://s3.com",
  },
  {
    id: 'UUID2',
    title: "Title1",
    album: "AlbumName1",
    length: 160,
    artist: "Artist1",
    genre: "Jazz",
    img_src: "https://s3.com",
  },
  {
    id: 'UUID3',
    title: "Title2",
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
		expect(cmp.vm.allSongsLength).equals(700);
	})

  it('determine if allSongsLength is calculated correctly', () => {
    cmp.setData({ sortKey: 'title', sortAscending: false });
    expect(cmp.vm.displaySongs.id).equals('UUID3');
  })
})