import React from 'react';
import {Box, LoadMoreButton, Column} from './';
import {ITunesContext} from "../contextHooks";

export const LoadMore = () => {
    const {loadAlbums} = React.useContext(ITunesContext);

    return (
        <Column>
            <Box dsPlay="flex" justifyContent="center">
                <LoadMoreButton type="button" onClick={loadAlbums}>Load more albums</LoadMoreButton>
            </Box>
        </Column>
    );
}