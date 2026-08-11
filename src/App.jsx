import { useDispatch, useSelector } from "react-redux";

import Counter from "./components/Counter";

import ApiTest from "./components/ApiTest";

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
        <div className="app">

            <h1>Redux Toolkit Practice</h1>

            {/* Counter Section */}
            <section className="section">

                <Counter />

            </section>

            {/* API Test Section */}
            <section className="section">

                <ApiTest />

            </section>


            {/* Projects Section */}
            <div className="projects-layout">

                {/* Projects List */}
                <div className="projects-container">

                    <h2>Projects</h2>

                    <button
                        onClick={() => dispatch(setProjects(projects))}
                    >
                        Show Projects
                    </button>

                    <button
                        onClick={() => dispatch(clearProjects())}
                    >
                        Hide Projects
                    </button>


                    <div className="project-list">

                        {projectList.map((project) => (

                            <div
                                className="project"
                                key={project.id}
                            >

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <button
                                    onClick={() =>
                                        dispatch(selectProject(project))
                                    }
                                >
                                    Select
                                </button>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Selected Project */}
                <div className="selected-container">

                    {selectedProject ? (

                        <div className="selected-project">

                            <h2>Selected Project</h2>

                            <h3>{selectedProject.title}</h3>

                            <p>
                                {selectedProject.description}
                            </p>

                            <button
                                onClick={() =>
                                    dispatch(clearSelectedProject())
                                }
                            >
                                Clear Selection
                            </button>

                        </div>

                    ) : (

                        <div className="selected-project empty">

                            <h2>Selected Project</h2>

                            <p>
                                Select a project to see its details.
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default App;