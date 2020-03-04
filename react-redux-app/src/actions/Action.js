import Axios from "axios";

export const FETCHING_IMAGE_START = "FETCHING_IMAGE_START";
export const FETCHING_IMAGE_SUCCESS = "FETCHING_IMAGE_SUCCESS";
export const FETCHING_IMAGE_FAILURE = "FETCHING_IMAGE_FAILURE";

export const getImage = () => dispatch => {
    dispatch({ type: FETCHING_IMAGE_START});

    Axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        console.log('res', res);
        dispatch({ type: FETCHING_IMAGE_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
        console.log('err', err)
        dispatch({ type: FETCHING_IMAGE_FAILURE, payload: `${err.response.message} with response code ${err.response.code}` })
    })
};