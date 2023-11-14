
import ProjectInfo from "./components/ProjectInfo";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProjectForm from "./components/NewProjectForm";
import NoProject from "./components/NoProject";
import Modal from "./components/Modal";

import { useRef, useState } from "react";
function App() {
  const modalRef = useRef()
  const [projectsState, setProjectsState] = useState({
    projectId: undefined,
    projects: [],
    tasks: []
  })

  const handleCancel = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projectId: undefined
      }
    })
  }

  const handleSaveProject = (projectData) => {
    if (projectData.projectTitle.trim() === '' || projectData.projectDescription.trim() === '' || projectData.projectDate.trim() === '') {
      modalRef.current.open();
      return;
    }
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        projectId: Math.random()
      }
      return {
        ...prevState,
        // projectId: undefined,
        projectId: newProject.projectId,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleAddNewProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projectId: null,
      }
    })
  }

  const handleShowProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projectId: id
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectsState(prevState => {

      return {
        ...prevState,
        projectId: undefined,
        projects: [...prevState.projects.filter(el => el.projectId !== prevState.projectId)]
      }
    })
  }

  const handleAddTask = (taskText) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks : [...prevState.tasks, {
          text: taskText, 
          taskId : Math.random(),
          parentProjectId : prevState.projectId
        }]
      }
    })
  }

  const handleDeleteTask = (id) => {
    setProjectsState(prevState => {

      return {
        ...prevState,
        tasks: [...prevState.tasks.filter(el => el.taskId !== id)]
      }
    })
  }


  let content;
  if (projectsState.projectId === null)
    content = <NewProjectForm handleCreateProject={handleSaveProject} handleCancel={handleCancel} />
  else if (projectsState.projectId === undefined)
    content = <NoProject handleAddNewProject={handleAddNewProject} />;
  else
    content = <ProjectInfo onAddTask={handleAddTask} tasks={projectsState.tasks.filter(task => task.parentProjectId === projectsState.projectId)} project={projectsState.projects.find(el => el.projectId === projectsState.projectId)} handleDelete={handleDeleteProject} handleDeleteTask={handleDeleteTask}/>


  return (
    <div className="flex h-screen">
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Error!</h2>
        <p className="text-stone-600 mb-4">
          Invalid and/or Missing Data.
        </p>
        <p className="text-stone-600 mb-4">
          Plase enter a valid value for all input fields.
        </p>
      </Modal>
      
      <ProjectsSidebar handleAddNewProject={handleAddNewProject} projects={projectsState.projects} handleShowProject={handleShowProject} />
      {content}

    </div>
  );
}

export default App;
