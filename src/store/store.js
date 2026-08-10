import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";
import projectsReducer from "./slices/projectsSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        projects: projectsReducer
    }
});