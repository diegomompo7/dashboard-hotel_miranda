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
            padding: 1em 0 0.929em 0;
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
       border-radius:  0.75em;
       padding: 0.813em 2.188em 0.75em 2.25em;

    `}

    ${props => props.name==="Check In" && 
    `
       font-size: 1rem;
       background-color: #E8FFEE;
       font-family: 'Poppins', sans-serif;
       font-weight: 500;
       color: #5AD07A;
       border-radius:  0.75em;
       padding: 0.813em 1.5em 0.75em 1.563em;
    `
    }
    ${props => props.name==="Check Out" && 
    `
       font-size: 1rem;
       background-color: #FFEDEC;
       font-family: 'Poppins', sans-serif;
       font-weight: 500;
       color: #E23428;
       border-radius:  0.75em;
       padding: 0.813em 1.5em 0.75em 1.563em;

    `
    }
    ${props => props.name==="In Progress" && 
    `
       font-size: 1rem;
       background-color: #FEFFEB;
       font-family: 'Poppins', sans-serif;
       font-weight: 500;
       color: #909217;
       border-radius: 0.75em;
       padding: 0.813em 1.5em 0.75em 1.563em;

    `
    }
    ${props => (props.name==="Prev" || props.name==="Next") && 
    `
       font-size: 1rem;
       text-align: center;
       background-color: #FFFFFF;
       color: #135846;
       border: 1px solid #135846;
       font-family: 'Poppins', sans-serif;
       font-weight: 400;
       border-radius: 0.75em;
       padding: 0.938em 1.75em 0.875em 1.813em;
    `
    }
   ${props => props.name==="Prev" && `margin-right:0.25em`}

   
           ${props => props.name==="Available" && 
           `
              font-size: 1rem;
              background-color: #5AD07A;
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
              color: #FFFFFF;
              border-radius:  0.75em;
              padding: 0.813em 1.5em 0.75em 1.563em;
       
           `
           }
           ${props => props.name==="Booked" && 
           `
              font-size: 1rem;
              background-color: #E23428;
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
              color: #FFFFFF;
              border-radius:  0.75em;
              padding: 0.813em 1.5em 0.75em 1.563em;
       
           `
           }
           ${props => props.name==="archived" && 
           `
              font-size: 1rem;
   
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
              color:#E23428;
              border-radius:  0.75em;
              padding: 0.813em 1.5em 0.75em 1.563em;
       
           `
           }


   `