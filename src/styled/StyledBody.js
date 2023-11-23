import styled from "styled-components";

export const StyledBody = styled.div `
    ${(props) => props.isOpen === true && `
        position: static;
        margin-left: 17.5%;
        transform: translateY(-100%);
        max-height: 55rem;

    `}
    ${(props) => props.name === "dashboard" && `
        height: 55rem;

`}

    ${(props) => props.isOpen === true ? `
    margin-top: 0px;` : `margin-top: 50px;`}
    padding-left: 1.875em;
    padding-right: 1.56%
`