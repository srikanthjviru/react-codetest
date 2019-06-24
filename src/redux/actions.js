// TODO: Complete the actions
import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAIL,
    SET_SELECTED_IMAGE,
    CLEAR_SELECTED_IMAGE
} from "./types";

export function getImages() {
    return async (dispatch, getState) => {
        try {
            await dispatch({ type: GET_IMAGES })

            // I don't have any specific api to fetch images.
            // So I'm using random demo api and truncating to 30 images
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            const data = await response.json();
            const images = data.slice(0, 30).map(x => ({ author: "Image Detail", download_url: x.thumbnailUrl }))
            await dispatch({ type: GET_IMAGES_SUCCESS, payload: images });
        } catch (error) {
            console.log(error);
            await dispatch({ type: GET_IMAGES_FAIL });
        }
    }
}

export function setSelectedImage(image) {
    return (dispatch, getState) => dispatch({ type: SET_SELECTED_IMAGE, payload: image });
}

export function clearSelectedImage() {
    return (dispatch, getState) => dispatch({ type: CLEAR_SELECTED_IMAGE });
}
