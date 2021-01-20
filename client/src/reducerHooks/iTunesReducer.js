export const iTunesActions = {
    SET_LIMIT: "SET_LIMIT",
    SET_FILTER: "SET_FILTER",
    SET_ALBUMS: "SET_ALBUMS",
    SET_FILTERED_ALBUMS: "SET_FILTERED_ALBUMS",
    SET_GENRE: "SET_GENRE",
    OPEN_POPUP: "OPEN_POPUP",
    POPUP_OPENED: "POPUP_OPENED",
    CLOSE_POPUP: "CLOSE_POPUP",
    POPUP_CLOSED: "POPUP_CLOSED",
    LOADING: "LOADING"
};

const filterAlbums = (albums, filter) => {
    let filteredAlbums = albums;

    filteredAlbums = Object.entries(albums).reduce((acc, cur) => {
        const [key, value] = cur;

        const albumName = value['im:name'].label.toLowerCase();
        const artistName = value['im:artist'].label.toLowerCase();

        if (albumName.includes(filter) || artistName.includes(filter)) {
            return {...acc, [key]: value};
        }

        return {...acc};
    }, {});

    const results = Object.entries(filteredAlbums).map(([key, value]) => {
        const mappedData = mapDataFromAlbum(value);

        return mappedData;
    });

    return results;
};

const mapDataFromAlbum = data => {
    const mappedData = {};

    mappedData.imgSrc = data['im:image'][2] ? data['im:image'][2].label : data['im:image'][1].label;
    mappedData.fullTitle = data.title ? data.title.label : '';
    mappedData.name = data['im:name'] ? data['im:name'].label : '';
    mappedData.url = data['link'].attributes ? data['link'].attributes.href : '';
    mappedData.artist = data['im:artist'] ? data['im:artist'].label : '';
    mappedData.artistUrl = data['im:artist'].attributes ? data['im:artist'].attributes.href : '';
    mappedData.price = data['im:price'] ? data['im:price'].label : '';
    mappedData.releaseDate = data['im:releaseDate'].attributes ? data['im:releaseDate'].attributes.label : '';
    mappedData.rights = data['rights'] ? data['rights'].label : '';

    return mappedData;
};

export function iTunesReducer(state, action) {
    const {type, ...rest} = action;

    switch (type) {
        case iTunesActions.SET_LIMIT:
            return {...state, limit: rest.limit};
        case iTunesActions.LOADING:
            return {...state, limit: state.limit + 10, loading: true, error: null};
        case iTunesActions.SET_FILTER:
            let filteredAlbums = filterAlbums(state.albums, rest.filter);

            return {...state, filter: rest.filter, filteredAlbums};
        case iTunesActions.SET_ALBUMS:
            if (!(action.albums instanceof Error)) {
                let filteredAlbums = filterAlbums(action.albums, state.filter);

                return {...state, albums: {...state.albums, ...action.albums}, filteredAlbums, loading: false};
            } else {
                return {...state, error: action.albums, loading: false};
            }
        case iTunesActions.SET_GENRE:
            return {...state, genre: rest.genre};
        case iTunesActions.OPEN_POPUP:
            return {
                ...state,
                selectedAlbum: action.selectedAlbum,
                popupState: {...state.popupState, popupOpen: true, transStarting: true}
            };
        case iTunesActions.POPUP_OPENED:
            return {
                ...state,
                popupState: {...state.popupState, transStarting: false}
            };
        case iTunesActions.CLOSE_POPUP:
            return {...state, popupState: {...state.popupState, popupOpen: false, transClosing: true}};
        case iTunesActions.POPUP_CLOSED:
            return {...state, popupState: {...state.popupState, transClosing: false}};
        default:
            throw new Error();
    }
}
