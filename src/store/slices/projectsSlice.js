import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    selectedProject: null,
    status: "idle",
    error: null
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
        },
        
        setProjectsFromApi(state, action) {
            state.items = action.payload;
            state.status = "success";
            state.error = null;
        },

        setLoading(state) {
            state.status = "loading";
            state.error = null;
        },


        setApiError(state, action) {
            state.status = "error";
            state.error = action.payload;
        }

    }
});

export const {
    setProjects,
    clearProjects,
    selectProject,
    clearSelectedProject,
    setProjectsFromApi,
    setLoading,
    setApiError
} = projectsSlice.actions;

export default projectsSlice.reducer;