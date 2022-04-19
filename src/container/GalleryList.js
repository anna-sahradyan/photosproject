import React from 'react';
import {
    fetchPhotos,

    selectPhotos
} from "../store/photosSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "./Gallery.module.scss";
import PhotoGallery from "../components/photoGallery";


const GalleryList = () => {
    const dispatch = useDispatch();
    const photos = useSelector(selectPhotos);


    useEffect(() => {
        dispatch(fetchPhotos());

    }, [dispatch]);

    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.cardList}>
                        { photos.length !== 0 &&(photos.map((item, index) => {
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