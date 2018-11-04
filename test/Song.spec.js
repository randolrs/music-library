import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Song from '../src/components/music-library/songs/Song.vue'


let testSongData = {
    id: 'UUID1',
    title: "Title0",
    album: "AlbumName0",
    length: 280,
    artist: "Artist0",
    genre: "Jazz",
    img_src: "https://s3.com",
};

let testSongKeys = ['title', 'album', 'length', 'artist', 'genre'];

describe('Song.vue', () => {

	let cmp;

	beforeEach(() => {
		cmp = shallowMount(Song);
	});

	it('determine if song data is parsed/ordered correctly', () => {
		cmp.setProps({ songIndexKeys: testSongKeys, song: testSongData });
		expect(cmp.vm.songDataArray.length).equals(testSongKeys.length);
		expect(cmp.vm.songDataArray[0]).equals(testSongData[testSongKeys[0]]);
	})
})