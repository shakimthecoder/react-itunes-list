import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            { title: 'Love on the Brain', duration: '3:40' },
            { title: 'Suge', duration: '4:55' },
            { title: 'Big Ole Freak', duration: '4:44' },
            { title: 'Hello', duration: '5:55' }

        };
    ];

    const selectedSongReducer = (selectedSong=null, action ) {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
   
        };

    export default combineReducers({
        song: songsReducer,
        selectedSong: selectedSongReducer
    });