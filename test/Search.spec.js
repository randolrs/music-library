import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Search from '../src/components/music-library/search/Search.vue'

describe('Song.vue', () => {

	let cmp;

	beforeEach(() => {
		cmp = shallowMount(Search);
	});

	it('determine if clearSearch() works as expected', () => {
		cmp.setData({ searchInput: 'xyz' });
		cmp.vm.clearSearchInput();
		expect(cmp.vm.searchInput).equals(null);
	})

	it('determine if search active works', () => {
		cmp.setData({ active: true });
		cmp.vm.updateActive(false);
		expect(cmp.vm.active).equals(false);
	})
})