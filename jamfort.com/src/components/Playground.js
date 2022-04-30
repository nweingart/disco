import React from 'react';
import ArtistCard from './common/ArtistsCard';

const Playground = () => {
    const artist = 'MGK';
    const popularity = 90;
    const genres = 'punk'



    return (
        <ArtistCard artist={artist} popularity={popularity} genres={genres}/>
    )
};

export default Playground;
