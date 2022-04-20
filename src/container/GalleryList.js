import React from 'react';
import {fetchPhotos, selectPhotos} from "../store/photosSlice";
import {useDispatch, useSelector} from "react-redux";
import s from "./Gallery.module.scss";
import PhotoGallery from "../components/photoGallery";
import {useEffect, useState} from "react";
import Loading from "../components/Loading";
import {Button} from "react-bootstrap";

const GalleryList = () => {
    const dispatch = useDispatch();
    const photos = useSelector(selectPhotos);

    useEffect(() => {
        dispatch(fetchPhotos());

    }, [dispatch]);
    const [isLoading, setIsLoading] = useState(false)
    const {status, error} = useSelector(state => state.photos);
    useEffect(() => {
        if (status) {
            setIsLoading(true)
        }

        if (!status) {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }, [status])

    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.cardList}>
                        { photos.length === 0 && isLoading?(<Loading/>):(photos.map((item, index) => {
                            return <PhotoGallery key={`${item}_${index}`} img={item.urls.small} id={item.id}/>
                        }))
                        }


                    </div>

                </div>

            </div>
        </>
    );
};

export default GalleryList;