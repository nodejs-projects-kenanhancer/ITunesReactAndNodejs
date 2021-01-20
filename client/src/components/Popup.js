import React from 'react';
import {Box, Column, Row} from './layout';
import {Animate, Button, H2, Img, Link, P} from './styles';
import {ITunesContext} from "../contextHooks";

export const Popup = (styles) => {
    const {
        popupState,
        selectedAlbum,
        closePopup
    } = React.useContext(ITunesContext);

    const {popupOpen, transStarting, transClosing} = popupState;

    const {width, maxWidth, background, px, py, borderRadius} = styles;

    return (
        <Animate show={popupOpen} transClosing={transClosing} transStarting={transStarting} pos="fixed" top="0" left="0"
                 wd="100%" hg="100%">
            <Box pos="fixed" background={background} wd={width} maxWd={maxWidth} px={px} py={py}
                 borderRadius={borderRadius} hg="auto" top="50%" left="50%" transf="translate(-50%,-50%)">
                <Box pos="absolute" top="10px" right="10px">
                    <Button type="button" onClick={closePopup} autoFocus>&#10005;</Button>
                </Box>
                <Row mb="15px">
                    <Column xs={11} px="0">
                        <H2 large>{selectedAlbum.fullTitle}</H2>
                    </Column>
                </Row>
                <Row>
                    <Column px="0">
                        <Box dsPlay="flex" backgroundColor="white" borderRadius="5px">
                            <Box wd="300px" hg="300px" maxWd={{xs: "140px"}} maxHg={{xs: "140px"}}>
                                <Img src={selectedAlbum.imgSrc} alt="Album cover" large/>
                            </Box>
                            <Box pl="10px" dsPlay="flex" flexDirection="column" justifyContent="space-between">
                                <Box>
                                    <P large>{selectedAlbum.price}</P>
                                    {selectedAlbum.url ?
                                        <P mt="5px" textTransform="inherit" large black>
                                            Play the&nbsp;
                                            <Link href={selectedAlbum.url} target="_blank"
                                                  rel="noopener noreferrer">tracks</Link>
                                        </P> : null
                                    }
                                    {selectedAlbum.artistUrl ?
                                        <P mt="5px" textTransform="inherit" large black>
                                            More by&nbsp;
                                            <Link href={selectedAlbum.artistUrl} target="_blank"
                                                  rel="noopener noreferrer">{selectedAlbum.artist}</Link>
                                        </P> : null
                                    }
                                </Box>
                                <Box mt="20px">
                                    <P textTransform="inherit" large>{selectedAlbum.releaseDate}</P>
                                    <P mt="5px" textTransform="inherit" hideXS large>{selectedAlbum.rights}</P>
                                </Box>
                            </Box>
                        </Box>
                    </Column>
                </Row>
            </Box>
        </Animate>
    );
};