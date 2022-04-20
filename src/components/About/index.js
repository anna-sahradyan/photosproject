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
                               <i><b>Hello!
                                   My name is Anahit Paruryan.
                                   As a nurse, I changed careers and enrolled in online programming courses, I enjoy every aspect of it and I am eager to get started.<br/>
                                   You can find detailed information about me here:
                                   <hr/>
                                   GitHub: https://github.com/anna-sahradyan
                                   <hr/>
                                   Resume:https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e1a19f2a-6aaf-4da0-83ab-3af3f3f94cc2
                                   <hr/>
                                   Thanks in advance!
                                   Sincerely,
                                   Anna (This is how you may address me)

                               </b></i> <content className=""></content>
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