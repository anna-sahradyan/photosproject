import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import PhotosDetails from "./container/PhotosDetails";
import About from "./components/About";

const App = () => {

    return (
        <>
            <div className={'wrapper'}>
                <Header/>
                <div className={'main'}>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/photo/:photoId'} element={<PhotosDetails/>}/>
                        <Route path={'/about'} element={<About/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default App;