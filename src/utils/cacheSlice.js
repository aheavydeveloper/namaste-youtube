import { createSlice } from "@reduxjs/toolkit";


const cacheSlice = createSlice({

    name: 'cache',
    
    initialState: {

    },

    reducers: {
        setSerchText: (state, action) => {
            Object.assign(state, action.payload)
        }
    }
    
    
})

export const { setSerchText } = cacheSlice.actions
export default cacheSlice.reducer