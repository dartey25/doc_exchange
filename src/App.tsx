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
import Chat from "./containers/Chat";
import HomeMui from "./pages/HomeMui";
import MainLayout from "./containers/MainLayout";
import Documents from "./containers/Documents";


function App() {
    //
    const [user, setUser] = useState({username: 'sfsfsf', password: ''});
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/doc_exchange" /*component={Home}*/ element={<BaseLayout/>}>
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
                    <Route path="main" element={<MainLayout/>}>
                        <Route index element={
                            <ProtectedRoute user={user}>
                                <Documents/>
                            </ProtectedRoute>
                        }/>
                        <Route path=":id" element={
                            <ProtectedRoute user={user}>
                                <Chat/>
                            </ProtectedRoute>
                        }/>
                    </Route>
                    <Route path="mui/:documentId" element={<Chat/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
