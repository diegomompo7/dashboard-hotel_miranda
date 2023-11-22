import styled from "styled-components";

export const StyledBody = styled.div `
    ${(props) => props.isOpen === true && `
        margin-left: 20.5%;
        width: 77%;
        transform: translateY(-114%);
    `}

    margin-top: 50px;
    padding: 0 30px;
`