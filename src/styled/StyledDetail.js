import { Text } from "@chakra-ui/react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";


export const StyledDetailContainer = styled(Box)`
    display: flex;

`
export const StyledDetailContent = styled(Box)`
    width: 50%;
    background: #FFFFFF;
    border-radius: 0.75em;
`
export const StyledDetailPhotos = styled(Box)`
    width: 50%;
    background: #C5C5C5;
    border-radius: 0.75em;
`
export const StyledDetailContentPerson = styled.div`
    display: flex;
    padding-left: 4.1%;
    padding-top: 2.5em;
    margin-bottom: 2em;
    
`
export const StyledDetailImg = styled.img`
    width: 9.75em;
    height: 9.75em;
`
export const StyledDetailPersonText = styled(Box)`
    margin-left: 4%;
`
export const StyledDetailText = styled(Text) `

    font-family: "Poppins", sans-serif;

    ${props => props.typeStyle === "semibold" && `
    
        font-size: 1.875rem;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.433em;
        
    `}
    ${props => props.typeStyle === "id" && `
    
    font-size: 0.875rem;
    font-weight: 400;
    color: #799283;
    margin-top: 0;
    margin-bottom: 1.5em;
    
`}
${props => props.typeStyle === "message" && `
    
font-size: 1rem;
font-weight: 500;
color: #FFFFFF;
padding-left: 1.438em;
padding-right: 1.625em;

`}

`

export const StyledDetailActions = styled(Box)`

 display: flex;

`
export const StyledDetailIconPhone = styled(FaPhoneAlt)`
    width: 1.25em;
    width: 1.25em;
    padding: 1.25em 1.25em 1.25em 1.04%;
    color: #135846;
`

export const StyledDetailMessage = styled(Box) `
    background: #135846;
    display: flex;
    border-radius: 0.75em;
    width: 100%
`

export const StyledDetailIconMessage = styled(MdOutlineMessage)`
    color: #FFFFFF;
    width: 1.5em;
    height: 1.5em;
    padding-top: 1.063em;
    padding-left: 1.125em;

`