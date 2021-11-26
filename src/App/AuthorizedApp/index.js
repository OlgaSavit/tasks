import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from "react";
import Profile from "./pages/Profile";

 const AuthorizedApp=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AuthorizedApp