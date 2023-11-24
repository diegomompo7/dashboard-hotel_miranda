import { Outlet } from "react-router-dom"
import { useState } from "react";
import {Header} from "../header/Header"
import { StyledBellIcon } from "../common/StyledIcons";
import { StyledBody } from "./StyledBody";

export const Root = () =>  {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div style={{position: "relative", flexDirection: "column", background: 'lime',  height: "100%"}}>
        <Header setIsOpen={setIsOpen}></Header>
        <StyledBody isOpen={isOpen}>
            <Outlet />
        </StyledBody>
    </div>
    )

}