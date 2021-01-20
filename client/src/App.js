import React from "react";
import {Container, GlobalStyle, Header, Main} from "./components";
import {ITunesContextProvider} from "./contextHooks/ITunesContext";

export default function App() {

    return <ITunesContextProvider>
        <GlobalStyle/>
        <Container>
            <Header/>
            <Main/>
        </Container>
    </ITunesContextProvider>;
}
