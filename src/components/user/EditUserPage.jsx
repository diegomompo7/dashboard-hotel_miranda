import { StyledButton } from "../common/StyledButton";
import {
  StyledBoxForm,
  StyledFormContainer,
  StyledImgForm,
  StyledInputForm,
  StyledTextAreaForm
} from "../common/StyledForm";
import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
} from "../common/StyledSelect";
import { MenuItem } from "@mui/material";
import logo from "../../assets/img/logo.png";
import { useState, useEffect } from "react";
import {  getChangeData, getNewData, getUsersData, getUsersError, getUsersStatus, updateUser } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromApiTrunk } from "../../features/users/usersTrunk";
import { useNavigate } from "react-router-dom";

export const EditUserPage = () => {

  const url = new URL(window.location.href)
  const id = url.pathname.split("/").slice(2,3).join("")


  const navigate = useNavigate()
  const dispatch = useDispatch();
  const usersListData = useSelector(getUsersData);
  const usersListError = useSelector(getUsersError);
  const usersListStatus = useSelector(getUsersStatus);
  const [spinner, setSpinner] = useState(true);
 let userUpdate= useSelector(getChangeData)

  

  useEffect(
    () => {

      if (usersListStatus === "idle") {
        dispatch(getUsersFromApiTrunk());
      } else if (usersListStatus === "pending") {
        setSpinner(true);
      } else if (usersListStatus === "fulfilled") {
        setSpinner(false)
      }
    },[
    dispatch,
    userUpdate,
    usersListStatus]
  );

  console.log(userUpdate)
  const userId = userUpdate.find((user) => parseInt(user.id) == id)


  const [formData, setFormData] = useState({
    photo: userId.photo,
    fullName: userId.fullName,
    job: userId.job,
    email: userId.email,
    phone: userId.phone,
    startDate: userId.startDate,
    descriptionJob: userId.descriptionJob,
    status: userId.status,
    password: userId.password
  });

  const handleChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    dispatch(updateUser({ id: userId.id, formData: formData }));
    dispatch(getNewData())
  }


  return (
    <StyledBoxForm name="createForm">
      {spinner ? <p>Loading...</p> : <>
      <StyledImgForm src={logo}></StyledImgForm>
      <StyledFormContainer
        name="createForm"
        onChange={(e) => {handleChange(e)}}
      >
        <StyledTextAreaForm
          value={formData.photo}
          placeholder="Photo"
          type="url"
          name="photo"
          rows="1"
        ></StyledTextAreaForm>
        <StyledInputForm
          value={formData.fullName}
          placeholder="Full Name"
          type="text"
          name="fullName"
        ></StyledInputForm>
        <StyledInputForm
        value={formData.job}
          placeholder="Job"
          type="text"
          name="job"
        ></StyledInputForm>
        <StyledInputForm
        value={formData.email}
          placeholder="Email"
          type="email"
          name="email"
        ></StyledInputForm>
        <StyledInputForm
        value={formData.phone}
          placeholder="123-456-789"
          type="tel"
          name="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        ></StyledInputForm>
        <StyledInputForm
        value={formData.startDate}
  
          placeholder="Start Date"
          type="text"
          name="startDate"
        ></StyledInputForm>
        <StyledTextAreaForm
          value={formData.descriptionJob}
          placeholder="Description about job"
          type="text"
          name="descriptionJob"
          rows={2}
        ></StyledTextAreaForm>
        <StyledFormControl name="selectCreate">
          <StyledInputLabel>Status</StyledInputLabel>
          <StyledSelect name= "status" label="status" value={formData.status}>
            <MenuItem value="ACTIVE">ACTIVE</MenuItem>
            <MenuItem value="INACTIVE">INACTIVE</MenuItem>
          </StyledSelect>
        </StyledFormControl>
        <StyledInputForm

          value={formData.password}
          placeholder="Password"
          type="Password"
          name="password"
        ></StyledInputForm>

        <StyledButton name="new" type="submit" onClick={(e) => {handleOnSubmit(e), navigate("/users")}}>
          UPDATE EMPLOYEE
        </StyledButton>
      </StyledFormContainer>
      </>}
    </StyledBoxForm>
  );
};
