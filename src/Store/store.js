import { configureStore, compose } from "@reduxjs/toolkit";
import notificationReducer from "./NotificationSlice";
import authReducer from "./AuthSlice";
import patternReducer from "./PatternSlice";
import stockReducer from "./StockSlice";
// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
    reducer: {
        pattern: patternReducer,
        notification: notificationReducer,
        auth: authReducer,
        stock: stockReducer,
    },

});

export default store;

