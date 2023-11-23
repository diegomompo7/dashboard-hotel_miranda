import styled from "styled-components";
import { Text } from "@chakra-ui/react";

export const StyledNav = styled.nav `
    display: flex;
    width: 34%;
    min-width: 500px;
    margin-bottom:2.188em;
    border-bottom: 1px solid #D4D4D4;
  
`
export const StyledNavText = styled(Text) `
    white-space: nowrap;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-right: auto;
    text-align: center;
    color: #6E6E6E;

    ${props => props.name==="last" && `margin-right: 0`}
`

