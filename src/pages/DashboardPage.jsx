import { Header } from "../components/Header";
import contact from "../data/contact.json";
import { StyledBody } from "../styled/StyledBody";
import { useState } from "react";
import { CardContact } from "../components/CardContact";
import { CardKpi } from "../components/CardKpi";
export const DashboardPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header setIsOpen={setIsOpen} title="Dashboard"></Header>
      <StyledBody isOpen={isOpen} name="dashboard">

        <CardKpi></CardKpi>
       <CardContact contact={contact}></CardContact> 

      </StyledBody>
    </>
  );
};