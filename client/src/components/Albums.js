import React from 'react';

import {Box, Column} from './layout';
import {H2, Img, Link, P} from './styles';
import {ITunesContext} from "../contextHooks";

const errorMessage = error => (
    <Column key={error.message}>
        <P error textAlign="center">{error.message}</P>
    </Column>
);

export function Albums() {
    const {filteredAlbums, loading, error, loadAlbums, selectAlbum} = React.useContext(ITunesContext);

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            sendAlbumDataToPopup(e);
        }
    };

    const handleClick = e => sendAlbumDataToPopup(e);

    const sendAlbumDataToPopup = e => {
        const target = e.target.closest('a');
        const album = target.dataset.album;
        selectAlbum(album);
    };

    const postTemplate = album => (
        <Column md={6} xl={4} pb="20px" key={album.artist + album.name}>
            <Link onClick={handleClick} onKeyPress={handleKeyPress} data-album={JSON.stringify(album)} tabIndex="0">
                <span tabIndex="-1">
                  <Box dsPlay="flex" backgroundColor="white" px="10px" py="10px" borderRadius="5px">
                    <Box wd="170px" hg="170px" maxWd={{xs: "100px"}} maxHg={{xs: "100px"}}>
                      <Img src={album.imgSrc} alt="Album cover"/>
                    </Box>
                    <Box pl="10px" dsPlay="flex" flexDirection="column" justifyContent="flex-start">
                      <H2>{album.name}</H2>
                      <P mt="5px">{album.artist}</P>
                    </Box>
                  </Box>
                </span>
            </Link>
        </Column>
    );

    let results = [];

    if (!error) {
        filteredAlbums.forEach(album => {
            results.push(postTemplate(album));
        });
    } else {
        results.push(errorMessage(error));
    }

    return (
        <React.Fragment>
            {results}
        </React.Fragment>
    );
};