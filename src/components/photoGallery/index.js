import React, {useRef, useState} from 'react';
import s from './PhotoGallery.module.scss';
import {motion} from "framer-motion";
import {Button} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const PhotoGallery = (props) => {
    const location = useLocation();
    return (<>

        <motion.div className={s.card} whileHover={{scale: 1.03}}>
            <img src={props.img}/>
            <Link to={`/photo/${props.id}`} className={s.cardItem}><Button variant="outline-primary" className={s.btn} name='show'
                >More About The
                Picture</Button>
            </Link>

        </motion.div>

    </>);
};

export default PhotoGallery;