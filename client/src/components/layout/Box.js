import React from "react";
import { BoxStyle } from "../styles";

export function Box({ children, ...styles }) {
    return <BoxStyle {...styles}>{children}</BoxStyle>
}
