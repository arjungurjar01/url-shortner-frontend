import {configureStore} from '@reduxjs/toolkit' ;
import authReducer from './slice/authSlice';
import userUrlsReducer from './slice/userUrlSlice';

export const store = configureStore({
     reducer : {
        auth : authReducer,
        userUrls : userUrlsReducer
     } ,
})