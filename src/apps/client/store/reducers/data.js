import {
    SET_ARTICLE_CATEGORIES,
    SET_AUTHORS,
    SET_PAGES
} from '../types/types';

const initialState = {
    categories: [],
    authors: [],
    pages: []
};

export default function applicationReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ARTICLE_CATEGORIES:
        return { ...state, categories: action.payload };
    case SET_AUTHORS:
        return { ...state, authors: action.payload };
    case SET_PAGES:
        return { ...state, pages: action.payload };
    default:
        return state;
    }
}
