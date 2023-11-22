import styled from "styled-components";

export const StyledBody = styled.div `
    ${(props) => props.isOpen === true && `
        background: red;
        margin-left: 20.5%;
        width: 77%;
        margin-bottom: 0;
    `}
`