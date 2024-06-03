import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSlice'
import cacheReducer from './cacheSlice'
import chatSlice from "./chatSlice";


const appstore = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        searchCache: cacheReducer,
        chat:chatSlice,
    }
      
})

export default appstore;