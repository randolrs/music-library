# Music Library

> A Vue.js project

## Overview
The purpose of this project is to create a front-end music library with the following features:
* Display songs
* Sort songs by album name, song title, and other attributes
* Search by song title and other search criteria

## Technology
The primary technologies used for this application include:
* webpack;
* the javascript library, VUEJS;
* the CSS preprocessor, SASS; and
* the testing library Karma (with Chai).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Testing
```
#run karma unit tests
npm run test
```
I acheieved pretty good test coverage for a small project (on the order of 70-80%). Most unit testing was related to sorting and searches, and various reset methods in the UI.
***Full disclosure, I started with a mostly configured webpack/VueJS/Karma setup avaialble here: https://github.com/eddyerburgh/vue-test-utils-karma-example

## Architecture
I principally employed a top down component architecture where the state of the music library was store, managed, and updated almost entirely in the parent <MusicLibrary> component. For the purposes of rendering UI elements, the data is passed down from the parent component to the appropriate children (e.g. <SongsList>, <Song>) as props.

I also took a more dynamic approach to displaying data about the songs in an index.  As opposed to hard-coding the song data fields (i.e. "title", "artist", "album"), I stored an array in the <MusicLibrary> component that describes the data fields to display for songs ("songIndexKeys").  This approach takes longer to setup than the hard-coding approach; however, it has numerous advantages once setup including:
	* easier to update the data field that will be displayed for a song (and much easier to update depending on the user-context);
	* much easier to consider all song data fields when searching the library by simply iterating over all data fields contained in the songIndexKeys; and
	* easier to deal with sorting by data fields since the "type" of the data field is stored in the songIndexKeys array.


## Limitations
Given the limited scope of this project, I want to take the opportunity to outline some of the limitations of this solution that I am aware of (as well as my proposed solutions if this project had a greater scope):

### Fuzzy Search
I would have implemented fuzzy search (versus the much simplet JS .includes() method) to "cast a wider net" on search results that would give the user more lee-way in terms of how accurate their search query must be.

### Lodash for Search
My reactive search implementation does not have any meaningful performance issues with a small, local data source, however, if the search needed to interact with a server I would at least wait until the user finished input for a non-zero time interval before initiating the search procedure (versus immediately updating for each keystroke). Lodash has a function called "Debounce" that is perfect for this delayed execution strategy.

### More Mobile Considerations
I made some (including small fonts, spacing in the layouts as well as abbreviated song data on small screens). If the scope of this project were greater I would commit more time to making the search function in particular easier to use on mobile-sized screens (although the existing solution works pretty well).

### udio Playing Functionality
If extended, this scope of this project should include as a major feature the ability to index and play audio from real audio files, either store locally or in the cloud. This would necessitate the creation of (at least one) Vuejs component related to the "current playing" audio as well as other audio tracking libraries.