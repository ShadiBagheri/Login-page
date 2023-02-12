import React from 'react';
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { Route, Routes ,Navigate} from "react-router-dom";


const App = () => {
    return (
        <div>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/" element={<Navigate to="/signup" />} />
                </Routes>
        </div>
    );
};

export default App;