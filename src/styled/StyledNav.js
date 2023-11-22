import styled from "styled-components";
import { Text } from "@chakra-ui/react";

export const StyledNav = styled.nav `
    display: flex;
    align-self: center;
    width: 51%;
    margin-bottom:35px;
    border-bottom: 1px solid #D4D4D4;
    word-wrap: break-all;
    margin-right: 130px;
`
export const StyledNavText = styled(Text) `
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    padding-right: 11%;
    text-align: center;
    color: #6E6E6E;

    ${ (props => props.name === "progress" && `padding-right: 0;`)}
`

