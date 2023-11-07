import {
    SET_DOMAIN,
    SET_SIGN_IN_POPUP,
    SET_SIGN_UP_POPUP,
    SET_RESTORE_PASSWORD_POPUP,
    SET_RESET_PASSWORD_POPUP,
    SET_RESTORE_PASSWORD_SUCCESS_POPUP,
    SET_SUBSCRIPTION_SUCCESS_POPUP,
    SET_SUBSCRIPTION_SUCCESS_VERIFIED_POPUP,
    SET_SUBSCRIPTION_POPUP,
    SET_CURRENT_USER,
    SET_AUTHORIZED,
    SET_TOKEN,
    SET_USER_LIKES,
    SET_AUDIO,
    SET_VIEWED_ARTICLES,
    SET_VIEWED_POSTS,
    SET_DRAFT_VOTE,
    SET_DRAFT_LIKE_ARTICLE,
    SET_DRAFT_LIKE_POST,
    SET_DRAFT_COMMENT_ARTICLE,
    SET_DRAFT_COMMENT_POST,
    SET_CONTACT_POPUP,
    SET_SUCCESS_POPUP,
    SET_SUBMIT_ARTICLE_POPUP,
    SET_HEADER_SUBSCRIPTION_POPUP,
    SET_LOADED,
    SET_ARTICLE,
    SET_POST,
    SET_SIGN_UP_SUCCESS_POPUP,
    SET_WEATHER,
    SET_LOCATION
} from '../types/types';

import { DEFAULT_LOCALE } from '../../constants';

const initialState = {
    locale: DEFAULT_LOCALE,
    signInPopup: false,
    signUpPopup: false,
    contactPopup: false,
    restorePasswordPopup: false,
    resetPasswordPopup: false,
    restorePasswordSuccessPopup: false,
    signUpSuccessPopup: false,
    subscriptionSuccessPopup: false,
    subscriptionSuccessVerifiedPopup: false,
    subscriptionPopup: false,
    headerSubscriptionPopup: false,
    successPopup: false,
    submitArticlePopup: false,
    user: null,
    authorised: null,
    token: null,
    likes: {
        articles: [],
        posts: [],
        articlesComments: [],
        postsComments: []
    },
    audio: {
        file: '',
        title: ''
    },
    viewedArticles: [],
    viewedPosts: [],
    draftVote: null, // { voteId: string, variant: string }
    draftLikeArticle: null, // { articleId: string, commentId?: string }
    draftLikePost: null, // { postId: string, commentId?: string }
    draftCommentArticle: null, // { articleId: string, text: string }
    draftCommentPost: null, // { commentId: string, text: string }
    loaded: false,
    article: null,
    post: null,
    weather: undefined,
    location: undefined
};

export default function applicationReducer (state = initialState, action) {
    switch (action.type) {
    case SET_DOMAIN:
        return { ...state, domain: action.payload };
    case SET_SIGN_IN_POPUP:
        return { ...state, signInPopup: action.payload };
    case SET_SIGN_UP_POPUP:
        return { ...state, signUpPopup: action.payload };
    case SET_CONTACT_POPUP:
        return { ...state, contactPopup: action.payload };
    case SET_SUCCESS_POPUP:
        return { ...state, successPopup: action.payload };
    case SET_RESTORE_PASSWORD_POPUP:
        return { ...state, restorePasswordPopup: action.payload };
    case SET_RESET_PASSWORD_POPUP:
        return { ...state, resetPasswordPopup: action.payload };
    case SET_RESTORE_PASSWORD_SUCCESS_POPUP:
        return { ...state, restorePasswordSuccessPopup: action.payload };
    case SET_SIGN_UP_SUCCESS_POPUP:
        return { ...state, signUpSuccessPopup: action.payload };
    case SET_SUBSCRIPTION_SUCCESS_POPUP:
        return { ...state, subscriptionSuccessPopup: action.payload };
    case SET_SUBSCRIPTION_SUCCESS_VERIFIED_POPUP:
        return { ...state, subscriptionSuccessVerifiedPopup: action.payload };
    case SET_SUBSCRIPTION_POPUP:
        return { ...state, subscriptionPopup: action.payload };
    case SET_HEADER_SUBSCRIPTION_POPUP:
        return { ...state, headerSubscriptionPopup: action.payload };
    case SET_SUBMIT_ARTICLE_POPUP:
        return { ...state, submitArticlePopup: action.payload };
    case SET_CURRENT_USER:
        return { ...state, user: action.payload };
    case SET_AUTHORIZED:
        return { ...state, authorised: action.payload };
    case SET_TOKEN:
        return { ...state, token: action.payload };
    case SET_USER_LIKES:
        return { ...state, likes: action.payload };
    case SET_AUDIO:
        return { ...state, audio: action.payload };
    case SET_VIEWED_ARTICLES:
        return { ...state, viewedArticles: action.payload };
    case SET_VIEWED_POSTS:
        return { ...state, viewedPosts: action.payload };
    case SET_DRAFT_VOTE:
        return { ...state, draftVote: action.payload };
    case SET_DRAFT_LIKE_ARTICLE:
        return { ...state, draftLikeArticle: action.payload };
    case SET_DRAFT_LIKE_POST:
        return { ...state, draftLikePost: action.payload };
    case SET_DRAFT_COMMENT_ARTICLE:
        return { ...state, draftCommentArticle: action.payload };
    case SET_DRAFT_COMMENT_POST:
        return { ...state, draftCommentPost: action.payload };
    case SET_LOADED:
        return { ...state, loaded: action.payload };
    case SET_ARTICLE:
        return { ...state, article: action.payload };
    case SET_POST:
        return { ...state, post: action.payload };
    case SET_WEATHER:
        return { ...state, weather: action.payload };
    case SET_LOCATION:
        return { ...state, location: action.payload };
    default:
        return state;
    }
}
