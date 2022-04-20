import React from 'react';
import s from './About.module.scss';
import {Card,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
const About = () => {
    return (
        <>
            <div className={s.contactDiv}>
                <div className={s.content}>
                    <div className={s.card}>
                    <Card style={{ width: '35rem',height:"35rem" }}>

                        <Card.Body>
                            <Card.Img variant="top" src='/images/userWoman.png'style={{ width: '2.5rem',height:"2.5rem" }}/>
                            <Card.Title style={{ marginLeft:'200px' }}>ABOUT ME</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.  Some quick example text to build on the card title and make up the bulk of
                                the card's   Some quick example text to build on the card title and make up the bulk of
                                the card's content.<content className=""></content>
                            </Card.Text>
                            <Link to={'/'}><Button variant="outline-primary" className={s.btn}
                            >Go To  The Gallery</Button></Link>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;