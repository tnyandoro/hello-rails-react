import { createStore } from 'redux/store';

import thunk from 'redux-thunk';

const initialState = { 
    greetings: [
        {
            name: 'test',
            guid: '123'
        }
    ]    
};

function rootReducer(state = initialState, action) {
    console.log('action', action);
    switch (action.type) {
        case 'GET_GREETINGS_SUCCESS':
            return { greetings: action.json.greetings };
    }
    return state;
}

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
        applyMiddleware(
            thunk,
            ),
        ),
    );
    return store;
}