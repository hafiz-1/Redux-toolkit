import { useDispatch, useSelector } from "react-redux";

import Counter from "./components/Counter";

import {
  setProjects,
  clearProjects
} from "./store/slices/projectsSlice";

import projects from "./projects";

function App() {

  const dispatch = useDispatch();

  const projectList = useSelector(
    (state) => state.projects.items
  );

  return (
    <div>

      <h1>Redux Toolkit Practice</h1>

      {/* Counter Redux */}
      <Counter />

      <hr />

      {/* Projects Redux */}

      <h2>Projects</h2>

      <button onClick={() => dispatch(setProjects(projects))}>
        Show Projects
      </button>

      {projectList.map((project) => (
        <div key={project.id}>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

        </div>
      ))}

      
      <button onClick={() => dispatch(clearProjects())}>
        Hide Projects
      </button>

    </div>
  );
}

export default App;