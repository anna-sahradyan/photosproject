import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import PhotosDetails from "./container/PhotosDetails";

const App = () => {

    return (
        <>
            <div className={'wrapper'}>
                <Header/>
                <div className={'main'}>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/photo/:photoId'} element={<PhotosDetails/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default App;