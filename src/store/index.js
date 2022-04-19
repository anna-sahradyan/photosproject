import {combineReducers} from "redux";
import photos from '../store/photosSlice';
import idItem from '../store/photosSlice';

const rootReducer = combineReducers({
    photos,
    idItem,
    devTools: true,
})
export default rootReducer;