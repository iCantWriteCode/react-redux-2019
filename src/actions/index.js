// Action Creator
export const selectSong = (song) => {
    return {                    // Every Action creator should return a JavaScript Object. type is required, payload is optional
        type: 'SONG_SELECTED',  // required
        payload: song           // optional
    }
}

