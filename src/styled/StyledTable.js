import styled from "styled-components";
import { Table, TableBody, TableCell } from "@mui/material";

export const StyledTable = styled(Table)`
    margin-left: auto;
    width: 77%;
    background: #FFFFFF;
    border: none;
    margin-right: 65px;
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
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        color: #393939;
        ` }

        ${(props) => props.typeStyle === "subtitle" && `
        font-size: 0.875rem;
        font-family: "Poppins", sans-serif;
        font-weight: 400; 
        color: #799283;`
    }

`
export const StyledTableCellBody = styled(TableCell)`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400; 
    color: unnamed-color-393939;`