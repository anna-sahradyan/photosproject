import React from 'react';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';
import s from './Card.module.scss';
const Card = (props) => {
    return (
        <>

            <motion.div className={s.card} whileHover={{scale: 1.03}}>
                <Link to={`/photo/${props.booksId}`} className={s.cardItem}><img src={props.img} alt={props.title}/>

                </Link>
            </motion.div>

        </>
    );
};

export default Card;