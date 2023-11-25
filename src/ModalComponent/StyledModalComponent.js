import styled from "styled-components";
import { Box } from "@mui/material";
import { IoClose } from "react-icons/io5";

export const StyledBoxModal = styled(Box)`
    background: #F8F8F8;
    width: 500px;
    height: auto;
    margin: 0 auto;
    transform: translatey(25%)
`
export const StyledTextModal = styled.p`
    font-size: 1.25rem;
    text-align:center;
    padding:80px 50px;
    color: #135846;
`

export const StyledIconModal = styled(IoClose)`
    color: #E23428;
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-left: 90%;
`