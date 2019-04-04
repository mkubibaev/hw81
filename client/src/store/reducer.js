import {ADD_URL_SUCCESS} from "./actions";

const initialState = {
    shortUrl: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_URL_SUCCESS:
            return {
                ...state,
                shortUrl: action.url
            };

        default:
            return state;
    }

};

export default rootReducer;
