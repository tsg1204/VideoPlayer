import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StylePlaylist from '../styles/StyledPlaylist';

const Playlist = props => (
    <>
        <StylePlaylist>
            <NightMode/>
            <PlaylistHeader />
            <PlaylistItems />
        </StylePlaylist>
    </>

)

export default Playlist;