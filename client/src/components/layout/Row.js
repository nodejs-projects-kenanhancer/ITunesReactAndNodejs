import React from "react";
import { RowStyle } from "../styles";

export function Row({ children, ...styles }) {
    return <RowStyle {...styles}>{children}</RowStyle>
}
