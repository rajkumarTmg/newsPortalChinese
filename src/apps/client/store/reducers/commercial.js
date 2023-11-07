import {
    SET_MAIN_PAGE_COMMERCIAL,
    SET_CATEGORIES_COMMERCIAL,
    SET_SUBCATEGORIES_COMMERCIAL,
    SET_MULTIMEDIA_PAGE_COMMERCIAL,
    SET_ARTICLE_PAGE_COMMERCIAL
} from '../types/types';

const initialState = {
    mainPageCommercial: [],
    categoriesCommercial: [],
    subCategoriesCommercial: [],
    multimediaPageCommercial: [],
    articlePageCommercial: []
};

export default function applicationReducer (state = initialState, action) {
    switch (action.type) {
    case SET_MAIN_PAGE_COMMERCIAL:
        return { ...state, mainPageCommercial: action.payload };
    case SET_CATEGORIES_COMMERCIAL:
        return { ...state, categoriesCommercial: action.payload };
    case SET_SUBCATEGORIES_COMMERCIAL:
        return { ...state, subCategoriesCommercial: action.payload };
    case SET_MULTIMEDIA_PAGE_COMMERCIAL:
        return { ...state, multimediaPageCommercial: action.payload };
    case SET_ARTICLE_PAGE_COMMERCIAL:
        return { ...state, articlePageCommercial: action.payload };
    default:
        return state;
    }
}
