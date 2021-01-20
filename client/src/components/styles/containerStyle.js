import styled, { css } from "styled-components";

export const ContainerStyle = styled.div`
  padding: 0;

  ${props => (!props.fullWidth && css`
        max-width: 1460px;
        margin: 0 auto;
        padding: 0 10px;
      `)};
`;