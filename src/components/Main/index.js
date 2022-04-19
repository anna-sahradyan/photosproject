import React from 'react';
import GalleryList from "../../container/GalleryList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Loading from "../../Loading";
import s from '../photoGallery/PhotoGallery.module.scss';
const Main = () => {
    // const [isLoading, setIsLoading] = useState(false)
    // const {status, error} = useSelector(state => state.photos);
    // useEffect(() => {
    //     if (status) {
    //         setIsLoading(true)
    //     }
    //
    //     if (!status) {
    //         setTimeout(() => {
    //             setIsLoading(false)
    //         }, 1000)
    //     }
    // }, [status])

    return (
        <>
            <div className={s.error}>
                {/*{isLoading  &&*/}
                {/*    <Loading/>*/}
                {/*}*/}
                {/*{error && <h2>An Error occurred:{error}</h2>}*/}
            </div>
            <GalleryList/>

        </>
    );
};

export default Main;