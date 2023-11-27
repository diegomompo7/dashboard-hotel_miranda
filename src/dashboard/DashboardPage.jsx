import { useState, useEffect } from "react";
import { CardContact } from "../contact/CardContact";
import { CardKpi } from "./CardKpi";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactData,
  getContactError,
  getContactStatus,
} from "../features/contact/contactSlice";
import { getContactFromApiTrunk } from "../features/contact/contactTrunk";


export const DashboardPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch();
  const contactListData = useSelector(getContactData);
  const contactListError = useSelector(getContactError);
  const contactListStatus = useSelector(getContactStatus);
  const [spinner, setSpinner] = useState(true);
  const [contactList, setContactList] = useState([]);

  useEffect(
    () => {

      if (contactListStatus === "idle") {
        dispatch(getContactFromApiTrunk());
      } else if (contactListStatus === "pending") {
        setSpinner(true);
      } else if (contactListStatus === "fulfilled") {
        setSpinner(false)
      }
    },
    [dispatch,
    contactListData,
    contactListStatus]
  );
  


  return (
    <> 
        <CardKpi></CardKpi>
      {spinner ? <p>Loading</p>:  <CardContact contact={contactListData}></CardContact>}
    </>
  );
};