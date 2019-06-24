import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
  SET_SELECTED_IMAGE,
  CLEAR_SELECTED_IMAGE
} from "./types";

const initState = {
  images: [],
  selectedImage: null,
  loading: true,
  loadingFailed: false,
}

const reducer = (state = initState, action) => {
  // TODO: Create reducer logic
  switch(action.type) {
    case GET_IMAGES:
      return {
        ...state,
        loading: true,
        loadingFailed: false,
        images: [],
        selectedImage: null,
      }
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    case GET_IMAGES_FAIL:
      return {
        ...state,
        loading: false,
        loadingFailed: true,
      };
    case SET_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };
    case CLEAR_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: null,
      };
    default:
      return state;
  }
};

export default reducer;
