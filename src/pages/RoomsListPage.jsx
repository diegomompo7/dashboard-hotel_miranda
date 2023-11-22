import React, {useState} from "react"
import { Header } from "../components/Header"
import {StyledBody} from "../styled/StyledBody"

export const RoomsListPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <Header setIsOpen={setIsOpen}></Header>
        <StyledBody isOpen={isOpen}></StyledBody>
        </>
        )
}