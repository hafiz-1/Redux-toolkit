import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    selectedProject: null,
    status: "idle"
};

const projectsSlice = createSlice({
    name: "projects",

    initialState,

    reducers: {
        setProjects(state, action) {
            state.items = action.payload;
        },
        
        clearProjects(state) {
            state.items = [];
        },

        selectProject(state, action) {
            state.selectedProject = action.payload;
        },

        clearSelectedProject(state) {
            state.selectedProject = null;
        }

    }
});

export const {
    setProjects,
    clearProjects,
    selectProject,
    clearSelectedProject
} = projectsSlice.actions;

export default projectsSlice.reducer;