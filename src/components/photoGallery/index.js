import React from 'react';
import s from './PhotoGallery.module.scss';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
const PhotoGallery = (props) => {
    return (
        <>

            <motion.div className={s.card} whileHover={{scale: 1.03}}>
                <Link to={`/photo/${props.id}`} className={s.cardItem}><img src={props.img} />
                </Link>
            </motion.div>

        </>
    );
};

export default PhotoGallery;