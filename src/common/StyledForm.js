import styled from "styled-components";

import { Box} from "@mui/material";

export const StyledBoxForm = styled(Box)`
    box-shadow: 0 0 28px 8px #E23428;
    height: auto;
    width: 26.5em;
    margin: 0 auto;
    transform: translateY(50%);
    text-align: center;

    ${props => props.name="formCreate" && `

        transform: translateY(5%);
        width: 31.25em;

    
    `}
`
export const StyledImgForm = styled.img`
    width: 5.375em;
    height: 6.75em;
    padding-top: 1rem;
    margin-bottom: 3.437em;
`

export const StyledFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0 auto;
    padding-bottom: 3.062em;

    ${props => props.name="formCreate" && `

    flex-direction: row;
    flex-wrap: wrap;
    
    & input {
        margin-right: 2.5em;
    }

`}
`
export const StyledInputForm = styled.input`
    height: 1.687em;
    background: none;
    font-family: "Poppins", sans-serif;
    border-color #135846;
    border: none;
    border-bottom: 1px solid #135846;
    color: #135846;
    margin-bottom: 1.875rem;

    

`