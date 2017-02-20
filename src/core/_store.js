import { createStore, combineReducers, compose } from 'redux';
import { persistState } from 'redux-devtools';

// Import all reducers
import * as reducers from '../reducers';

// Create function to initialize a redux store
export function configureStore(DevTools, initialState) {

    const enhancer = compose(
        DevTools.instrument(),
        persistState(
            window.location.href.match(
                /[?&]debug_session=([^&#]+)\b/
            )
        )
    );

    const store = createStore(
        combineReducers(reducers),
        initialState,
        enhancer
    );

    if (module.hot) {
        module.hot.accept('../reducers.js', () => {
            const newReducers = require('../reducers.js');
            store.replaceReducer(combineReducers(newReducers));
        });
    }

    return store;
}