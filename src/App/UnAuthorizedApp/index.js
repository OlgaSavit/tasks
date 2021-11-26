import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const UnAuthorizedApp=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
            <Routes>
                <Route exact path="/signIn" element={<SignIn/>} />
            </Routes>
            <Routes>
                <Route exact path="/signUp" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default UnAuthorizedApp