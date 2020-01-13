import { createStore, applyMiddleware, compose } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from "./Reducers";
const initialState = {};

const persistConfig = {
    key: 'primary',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['numberOfQuestionReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancer(applyMiddleware())
);
export default store;