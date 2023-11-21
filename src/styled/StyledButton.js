import styled from "styled-components";
import { Button } from "@mui/material";


export const StyledButton = styled(Button)`
    text-transform: none;
    ${props => props.name==="CONTACT_US" && 
        `
            margin: 0 auto;
            width: 67.8%;
            background: #EBF1EF;
            font-size : 0.87rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            color: #135846;
            padding: 14px 0 13px 0;
            margin-bottom: 2.5em;
        `
    }
`