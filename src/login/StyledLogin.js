import styled from "styled-components";

import { Box, TextField } from "@mui/material";

export const StyledBoxLogin = styled(Box)`
    box-shadow: 0 0 28px 8px #E23428;
    height: auto;
    width: 424px;
    margin: 0 auto;
    transform: translateY(50%);
    text-align: center;
`
export const StyledImgLogin = styled.img`
    width: 86px;
    height: 108px;
    padding-top: 1rem;
    margin-bottom: 55px;
`

export const StyledFormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0 auto;
    padding-bottom: 49px
`
export const StyledInputLogin = styled.input`
    height: 27px;
    background: none;
    font-family: "Poppins", sans-serif;
    border-color #135846;
    border: none;
    border-bottom: 1px solid #135846;
    color: #135846;
    margin-bottom: 55px;

`