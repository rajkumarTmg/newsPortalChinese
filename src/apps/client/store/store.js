import { useMemo } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

let store;

function initStore (preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}

export const initializeStore = (preloadedState = {}, actions = []) => {
    const _store = store ?? initStore(preloadedState);

    actions.forEach(action => _store.dispatch(action));

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export function useStore (initialState, actions) {
    const store = useMemo(() => initializeStore(initialState, actions), [initialState, actions]);
    return store;
}
