import React from "react";
import { ContainerStyle } from "../styles";

export function Container({ children, ...styles }) {
    return <ContainerStyle {...styles}>{children}</ContainerStyle>
}
