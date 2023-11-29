import styled from "styled-components";

export const StyledBody = styled.div `
    ${(props) => props.isOpen === true && `
        margin-left: 17.5%;
    `}

    margin-top: 50px;
    padding-left: 1.875em;
    padding-right: 1.56%
`