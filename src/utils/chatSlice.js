import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({

    name: "chat",
    
    initialState: {
        message:[]
    },

    reducers: {
        addMessage: (state, action) => {
            state.message.splice(10, 1);
            state.message.unshift(action.payload);
        },
        clearMessages: (state) => {
            console.log(state.message.length)
            state.message=[]
        }
    }
})

export const { addMessage ,clearMessages } = chatSlice.actions;
export default chatSlice.reducer