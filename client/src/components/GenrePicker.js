import React from "react";
import {ITunesContext} from "../contextHooks";
import {Select} from "./styles";

export function GenrePicker() {
    const {genres, genre, setGenre} = React.useContext(ITunesContext);

    const handleSelect = (e)=> {
        e.preventDefault();

        setGenre(e.target.value);
    }

    return (
        <Select value={genre} onChange={handleSelect}>
            {
                Object.entries(genres).map(([key, value]) => <option key={key} value={key}>{key}</option>)
            }
        </Select>);
}