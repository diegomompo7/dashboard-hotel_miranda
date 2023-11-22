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
    color: unnamed-color-393939;`

export const StyledTableCellBodyImg = styled.img `

    ${(props) => props.typeImg === "booking" && `
        width: 45px;
        height: 45px;
        padding-right: 0.375em;
    `}

`