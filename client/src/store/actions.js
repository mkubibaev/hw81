import axios from '../axios-api';

export const ADD_URL_SUCCESS = 'ADD_SHORT_URL_SUCCESS';

export const addUrlSuccess = url => ({type: ADD_URL_SUCCESS, url});

export const addUrl = urlData => {
    return dispatch => {
        axios.post('/links', urlData).then(
            response => dispatch(addUrlSuccess(response.data.shortUrl)),
            error => console.log(error),
        );
    }
};
