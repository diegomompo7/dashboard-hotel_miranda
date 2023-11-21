import styled from "styled-components";
import { Button } from "@mui/material";


export const StyledButton = styled(Button)`
    text-transform: none;
    ${props => props.name==="CONTACT_US" && 
        `
            margin: 0 auto;
            width: 67.8%;
            background: #EBF1EF;
            font-size : 0.875rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            color: #135846;
            padding: 14px 0 13px 0;
            margin-bottom: 2.5em;
        `
    }
    ${props => props.name==="view_notes" && 
    `
       font-size: 1rem;
       background-color: #EEF9F2;
       font-family: 'Poppins', sans-serif;
       font-weight: 500;
       color: #212121;
       border-radius: 12px;
       padding: 13px 35px 12px 36px;

    `}

    ${props => props.name==="Booked" && 
    `
       font-size: 1rem;
       background-color: #E8FFEE;
       font-family: 'Poppins', sans-serif;
       font-weight: 500;
       color: #5AD07A;
       border-radius: 12px;
       padding: 13px 24px 12px 25px;

    `
    }
    ${props => props.name==="Refund" && 
    `
       font-size: 1rem;
       background-color: #FFEDEC;
       font-family: 'Poppins', sans-serif;
       font-weight: 500;
       color: #E23428;
       border-radius: 12px;
       padding: 13px 24px 12px 25px;

    `
    }
    ${props => props.name==="Pending" && 
    `
       font-size: 1rem;
       background-color: #FEFFEB;
       font-family: 'Poppins', sans-serif;
       font-weight: 500;
       color: #909217;
       border-radius: 12px;
       padding: 13px 24px 12px 25px;

    `
    }
`