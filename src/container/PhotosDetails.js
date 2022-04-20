import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotosId, removeList, selectPhotosId} from "../store/photosSlice";
import s from './Gallery.module.scss';
import Loading from "../components/Loading";
import {Card,Button} from 'react-bootstrap';

const PhotosDetails = () => {

    let {photoId} = useParams();
    const dispatch = useDispatch();
    const photo = useSelector(selectPhotosId);
    let img = [];
    let description = [];
    let author = [];
    let user = [];
    console.log(photo)
   Object.values(photo).map((item) => {
        return img = item.urls.small, description = item.description,author = item.user.name ,user=item.user.bio
    })

    useEffect(() => {
        if(photoId &&photoId){
            dispatch(fetchPhotosId(photoId));
        }
        return()=>{
            dispatch(removeList());
        }
    }, [dispatch, photoId]);
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
                    <div className={s.cardPart}>
                    {photo.length===0 && isLoading?
                        (<Loading/>) : (<>
                                <div className={s.title}> <Card.Header as="h2">{description}</Card.Header>
                                    <div style={{width:'400px',marginTop:"170px"}}>
                                        <Card.Header as="h3">{user}</Card.Header>
                                    </div>
                                </div>
                                <div className={s.description}>
                                    <div className={s.poster}>
                                    <Card style={{width: '33rem'}}>
                                        <Card.Img variant="top" src={img}/>
                                        <Card.Body>
                                            <Card.Title>Author</Card.Title>
                                            <Card.Text>
                                                <i>{author}</i>
                                            </Card.Text>
                                            <Button variant="primary"><Link to={'/'}>Go Gallery</Link></Button>
                                        </Card.Body>
                                    </Card>

                                </div>
                               </div>


                            </>
                        )}
                    </div>
                </div>


            </div>
        </>
    );
};

export default PhotosDetails;