import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    
    initialState: {
        showSideBar:true
    },

    reducers: {
        show_hide: (state) => {
            state.showSideBar = !state.showSideBar
        }
    }
})

export default sidebarSlice.reducer
export  const{show_hide} = sidebarSlice.actions