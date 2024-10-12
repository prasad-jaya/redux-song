// Action Creator
export const SelectSong = (song) =>{
    console.log(song)
    //Return an Action
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};