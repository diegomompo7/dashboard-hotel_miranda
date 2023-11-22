import styled from "styled-components";
import { Table, TableBody, TableCell } from "@mui/material";

export const StyledTable = styled(Table)`
    background: #FFFFFF;
    border: none;

`
export const StyledTableBody = styled(TableBody)`
    border: none;
`
export const StyledTableCellRow = styled(TableCell)`
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
`

export const StyledTableCellBodyText = styled.p`


        ${(props) => props.typeStyle === "title" && `
        font-weight: 500;
        color: #393939;
        margin: 0;
        ` }

        ${(props) => props.typeStyle === "titleSemiBold" && `
        font-weight: 600;
        color: #393939;
        padding-right: 0.25em;
        margin: 0;
        ` }

        ${(props) => props.typeStyle === "id" && `
        font-size: 0.875rem;
        color: #799283;
        margin: 0;`
    }

    ${(props) => props.typeStyle === "subtitle" && `
    font-size: 0.875rem;
    color: #393939;
    margin: 0;`
    }

    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;

`
export const StyledTableCellBody = styled(TableCell)`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400; 
    color: unnamed-color-393939;
    height: 92px;
    margin: 0 auto;

    ${props => props.typeStyle === "message" && `
        
    `}

    `


export const StyledTableCellBodyImg = styled.img `

    ${(props) => props.typeImg === "booking" && `
        width: 2.813em;
        height: 2.813em;
        padding-right: 0.375em
    `}
    ${(props) => props.typeImg === "rooms" && `
    width: 9.375em;
    height: 4.813em;
    border-radius: 0.5em;
    padding-right: 1.75em
`}

`