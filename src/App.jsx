import { useDispatch, useSelector } from "react-redux";

import Counter from "./components/Counter";

import {
    setProjects,
    clearProjects,
    selectProject,
    clearSelectedProject
} from "./store/slices/projectsSlice";

import projects from "./projects";

function App() {

    const dispatch = useDispatch();

    const projectList = useSelector(
        (state) => state.projects.items
    );

    const selectedProject = useSelector(
        (state) => state.projects.selectedProject
    );

    return (
        <div>

            <h1>Redux Toolkit Practice</h1>

            {/* Counter */}
            <Counter />

            <hr />

            {/* Projects */}
            <h2>Projects</h2>

            <button onClick={() => dispatch(setProjects(projects))}>
                Show Projects
            </button>

            <button onClick={() => dispatch(clearProjects())}>
                Hide Projects
            </button>


            {/* THIS IS THE .map() */}
            {projectList.map((project) => (

                <div key={project.id}>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <button
                        onClick={() => dispatch(selectProject(project))}
                    >
                        Select
                    </button>

                </div>

            ))}


            {/* Selected Project */}
            {selectedProject && (

                <div>

                    <h2>Selected Project</h2>

                    <h3>{selectedProject.title}</h3>

                    <p>{selectedProject.description}</p>

                    <button
                        onClick={() => dispatch(clearSelectedProject())}
                    >
                        Clear Selection
                    </button>

                </div>

            )}

        </div>
    );
}

export default App;