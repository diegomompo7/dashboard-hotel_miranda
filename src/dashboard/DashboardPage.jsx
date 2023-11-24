import contact from "../data/contact.json";
import { useState } from "react";
import { CardContact } from "../contact/CardContact";
import { CardKpi } from "./CardKpi";
export const DashboardPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <CardKpi></CardKpi>
       <CardContact contact={contact}></CardContact> 
    </>
  );
};