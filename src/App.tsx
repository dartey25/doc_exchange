import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'antd/dist/antd.css';

import 'core'
import './styles/global.scss';
import BaseLayout from "./containers/BaseLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import ProtectedRoute from "./containers/ProtectedRoute";
import Chat from "./pages/Chat";
import HomeMui from "./pages/HomeMui";


function App() {
    //
    const [user, setUser] = useState();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" /*component={Home}*/ element={<BaseLayout/>}>
                    <Route index element={
                    <ProtectedRoute user={user}>
                        <Home/>
                    </ProtectedRoute>
                    }/>
                    <Route path="login" element={<Login setUser={setUser}/>}/>
                    <Route path="mui" element={
                        <ProtectedRoute user={user}>
                            <HomeMui/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/:documentId" element={<Chat/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
);
}

export default App;
