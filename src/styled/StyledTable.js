import styled from "styled-components";
import { Table, TableBody, TableCell, TableContainer } from "@mui/material";

export const StyledTableContainer= styled(TableContainer) `
    ${(props) => props.isOpen === true && `
        width: 100%;
        max-height: 45rem;
    `}
`

export const StyledTable = styled(Table)`
    background: #FFFFFF;

`
export const StyledTableBody = styled(TableBody)`
    border: none;
    table-layout: auto;
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
  

`
export const StyledTableCellBody = styled(TableCell)`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400; 
    color: #393939;
    height: 5.75em;
    margin: 0 auto;

    ${props => props.typeStyle === "description" && `
        max-width: 40rem;
    `}
    ${props => props.typeStyle === "message" && `
        max-width: 40rem;
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
${(props) => props.typeImg === "users" && `
width: 5.5em;
height: 5.5em;
border-radius: 0.5em;

`}

`