import styled from "styled-components";

export const StyledBody = styled.div `
    ${(props) => props.isOpen === true && `
        margin-left: 17.5%;
        width: 77%;
        transform: translateY(-110%);
    `}

    ${(props) => props.typeBody === "contact" && `
    
`}

    margin-top: 50px;
    padding: 0 30px;
`