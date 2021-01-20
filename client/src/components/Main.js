import React from "react";
import {P} from "./styles";
import {Albums, Popup, Spinner, Box, Row, Column, LoadMore} from "./";
import {ITunesContext} from "../contextHooks";

export function Main(){
    const { error, loading, filter} = React.useContext(ITunesContext);

    return (
        <Box as="main" role="main" px="10px" py="20px" backgroundColor="#f7f7f7" borderRadius="5px">
            <Row>
                <Column>
                    <P light>All</P>
                </Column>
            </Row>
            <Row mt="20px">
                <Albums />
                <Popup width="95%" maxWidth="700px" background="white" px={{xs: "10px", sm: "20px"}} py={{xs: "10px", sm: "20px"}} borderRadius="5px"/>
            </Row>
            <Row mt="10px">
                {(error || loading || filter.length>0) ? null :
                    <LoadMore />
                }
                <Spinner show={loading}/>
            </Row>
        </Box>
    );
}