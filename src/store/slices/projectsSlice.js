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
    selectProject,
    clearSelectedProject
} = projectsSlice.actions;

export default projectsSlice.reducer;