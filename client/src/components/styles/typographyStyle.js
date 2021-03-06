import styled, {css} from "styled-components";

const P = styled.p`
  font-size: ${props => {
    const smallFont = 'calc(12px + (16 - 12) * ((100vw - 320px) / (1700 - 320)))';
    const largeFont = 'calc(14px + (18 - 14) * ((100vw - 320px) / (1700 - 320)))';
    return props.large ? largeFont : smallFont;
}};

  color: ${props => {
    if (props.color) {
        return props.color;
    } else if (props.light) {
        return '#bebebe';
    } else if (props.black) {
        return 'black';
    } else if (props.error) {
        return 'red';
    } else {
        return '#969696';
    }
}};

  text-transform: ${props => {
    if (props.textTransform) {
        return props.textTransform;
    } else {
        return 'uppercase';
    }
}};

  ${props => {
    let sumCSS = ``;

    if (props.mt) {
        sumCSS += `margin-top: ${props.mt};`;
    }

    if (props.textAlign) {
        sumCSS += `text-align: ${props.textAlign};`;
    }

    return css`${sumCSS}`;
}}

  @media (min-width: 1700px) {
    ${props => {
    if (props.large) {
        return css`
          font-size: 18px;
        `;
    } else {
        return css`
          font-size: 16px;
        `;
    }
}};
  }

  @media (max-width: 320px) {
    ${props => {
    if (props.large) {
        return css`
          font-size: 14px;
        `;
    } else {
        return css`
          font-size: 12px;
        `;
    }
}};
  }

  @media (max-width: 575px) {
    ${props => {
    if (props.hideXS) {
        return 'display: none';
    }
}}
  }
`;

const H2 = styled.h2`
 font-size: ${props => {
    const smallFont = 'calc(16px + (22 - 16) * ((100vw - 320px) / (1700 - 320)))';
    const largeFont = 'calc(18px + (24 - 18) * ((100vw - 320px) / (1700 - 320)))';
    return props.large ? largeFont : smallFont;
}};

  @media (min-width: 1700px) {
    ${props => {
    if (props.large) {
        return css`
          font-size: 24px;
        `;
    } else {
        return css`
          font-size: 22px;
        `;
    }
}};
  }

  @media (max-width: 320px) {
    ${props => {
    if (props.large) {
        return css`
          font-size: 18px;
        `;
    } else {
        return css`
          font-size: 16px;
        `;
    }
}};
  }
`;

const SPAN = styled.span`
  text-transform: ${props => {
    if (props.textTransform) {
        return props.textTransform;
    } else {
        return 'uppercase';
    }
}};
`;

export {P, H2, SPAN};