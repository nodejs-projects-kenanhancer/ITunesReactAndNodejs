import React from "react";
import { ColumnStyle } from "../styles";

export function Column({ children, ...styles }) {
    return <ColumnStyle {...styles}>{children}</ColumnStyle>
}
