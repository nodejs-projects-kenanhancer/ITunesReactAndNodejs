import React from "react";
import { H1, Input, P } from "./styles";
import { Box, Row, Column } from "./layout";
import { ITunesContext } from "../contextHooks";

export function Header() {
    const { limit, filter, setFilter } = React.useContext(ITunesContext);

    const handleInputText = (e) => setFilter(e.target.value.toLowerCase());

    return (
        <Box px={{ xs: "0px", sm: "10px" }} py="30px">
            <Row>
                <Column xs={12} sm={5} md={6} lg={7} xl={8} px={{ xs: "0px" }}>
                    <Box as="header" role="banner">
                        <H1>Albums list</H1>
                        <P mt="5px">Top{limit} (USA)</P>
                    </Box>
                </Column>
                <Column xs={12} sm={7} md={6} lg={5} xl={4} mt={{ xs: "15px" }} px={{ xs: "0px" }}>
                    <Input type="text" placeholder="Filter results by keyword" onChange={handleInputText} value={filter} />
                </Column>
            </Row>
        </Box>
    );
}