import React from "react";
import {Input, P} from "./styles";
import {Albums, Popup, Spinner, Box, Row, Column, LoadMore} from "./";
import {ITunesContext} from "../contextHooks";
import {GenrePicker} from "./GenrePicker";

export function Main(){
    const { error, loading, filter} = React.useContext(ITunesContext);

    return (
        <Box as="main" role="main" px="10px" py="20px" backgroundColor="#f7f7f7" borderRadius="5px">
            <Row>
                <Column xs={12} sm={7} md={6} lg={5} xl={4} mt={{ xs: "15px" }} px={{ xs: "0px" }}>
                    <GenrePicker />
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