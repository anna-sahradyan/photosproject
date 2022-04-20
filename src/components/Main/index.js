import React from 'react';
import GalleryList from "../../container/GalleryList";
import s from '../photoGallery/PhotoGallery.module.scss';
const Main = () => {


    return (
        <>
            <div className={s.error}>

            </div>
            <GalleryList/>

        </>
    );
};

export default Main;