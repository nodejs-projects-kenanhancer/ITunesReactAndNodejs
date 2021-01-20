import React from "react";
import {iTunesActions, iTunesReducer} from "../reducerHooks/iTunesReducer";
import {executeAsync} from "../httpRequestHandler";

const genreIds = {
    // genre IDs for iTunes queries
    all: -1,
    alternative: 20,
    blues: 2,
    country: 6,
    pop: 14,
    rock: 21,
    rb: 15,
    hipHop: 18
};

const initialState = {
    limit: parseInt(process.env.REACT_APP_LIMIT, 10),
    filter: "",
    genre: "all",
    genres: genreIds,
    albums: {},
    filteredAlbums: [],
    selectedAlbum: {},
    popupState: {popupOpen: false, transStarting: false, transClosing: false},
    loading: false,
    error: null
};

export const ITunesContext = React.createContext({});

export const ITunesContextConsumer = ITunesContext.Consumer;

const Env = {
    PORT: parseInt(process.env.PORT, 10),
    TOP_ALBUMS_URL: (limit, genre) => `${process.env.REACT_APP_TOP_ALBUMS_URL}/limit=${limit}${(genre && `/genre=${genre}`) || ''}/json`,
    TOP_SONGS_URL: (limit, genre) => `${process.env.REACT_APP_TOP_SONGS_URL}/limit=${limit}${(genre && `/genre=${genre}`) || ''}/json`
};

const loadAlbumsFromDownstream = async (limit, genre, albumSetter) => {
    const url = Env.TOP_ALBUMS_URL(limit, genre);

    const requestArgs = {
        method: "GET",
        url,
        payload: undefined,
        headers: {}
    };

    const albums = await executeAsync(requestArgs);

    albumSetter(albums.feed.entry);
};

export const ITunesContextProvider = ({children}) => {
    const [itunesState, dispatchITunes] = React.useReducer(iTunesReducer, initialState);

    const loadAlbums = () => dispatchITunes({type: iTunesActions.LOADING});

    const setFilter = (filter) => dispatchITunes({type: iTunesActions.SET_FILTER, filter});

    const setGenre = (genre) => {
        dispatchITunes({type: iTunesActions.SET_GENRE, genre});
    }

    const selectAlbum = (albumJson) => {
        dispatchITunes({type: iTunesActions.OPEN_POPUP, selectedAlbum: JSON.parse(albumJson)});

        setTimeout(() => dispatchITunes({type: iTunesActions.POPUP_OPENED}), 500);
    }

    const closePopup = () => {
        dispatchITunes({type: iTunesActions.CLOSE_POPUP});

        setTimeout(() => dispatchITunes({type: iTunesActions.POPUP_CLOSED}), 500);
    }

    React.useLayoutEffect(() => {
        const albumSetter = (albums) => dispatchITunes({type: iTunesActions.SET_ALBUMS, albums});

        loadAlbumsFromDownstream(itunesState.limit, itunesState.genres[itunesState.genre], albumSetter);

    }, [itunesState.loading, itunesState.limit, itunesState.genre]);


    return <ITunesContext.Provider value={{
        filter: itunesState.filter,
        limit: itunesState.limit,
        albums: itunesState.albums,
        filteredAlbums: itunesState.filteredAlbums,
        selectedAlbum: itunesState.selectedAlbum,
        loading: itunesState.loading,
        error: itunesState.error,
        popupState: itunesState.popupState,
        genre: itunesState.genre,
        genres: itunesState.genres,
        selectAlbum,
        closePopup,
        setFilter,
        setGenre,
        loadAlbums
    }}>{children}</ITunesContext.Provider>;
};