import React from "react";
import {iTunesActions, iTunesReducer} from "../reducerHooks/iTunesReducer";
import {executeAsync} from "../httpRequestHandler";

const initialState = {
    limit: parseInt(process.env.REACT_APP_LIMIT, 10),
    filter: "",
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
    TOP_ALBUMS_URL: (limit) => `${process.env.REACT_APP_TOP_ALBUMS_URL}/limit=${limit}/json`,
    TOP_SONGS_URL: (limit) => `${process.env.REACT_APP_TOP_SONGS_URL}/limit=${limit}/json`
};

const loadAlbumsFromDownstream = async (limit, albumSetter) => {
    const url = Env.TOP_ALBUMS_URL(limit);

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

        loadAlbumsFromDownstream(itunesState.limit, albumSetter);

    }, [itunesState.loading, itunesState.limit]);


    return <ITunesContext.Provider value={{
        filter: itunesState.filter,
        limit: itunesState.limit,
        albums: itunesState.albums,
        filteredAlbums: itunesState.filteredAlbums,
        selectedAlbum: itunesState.selectedAlbum,
        loading: itunesState.loading,
        error: itunesState.error,
        popupState: itunesState.popupState,
        selectAlbum,
        closePopup,
        setFilter,
        loadAlbums
    }}>{children}</ITunesContext.Provider>;
};