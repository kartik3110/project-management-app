import Tasks from "./Tasks";
const DeleteIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pb-1 inline">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>


export default function ProjectInfo({ tasks,onAddTask, project, handleDelete, handleDeleteTask}) {
    const formattedDate = new Date(project.projectDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  
    return (
      <div className="w-[35rem] mt-28 ml-8">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {project.projectTitle}
            </h1>
            <button className="text-stone-600 hover:text-stone-950" onClick={handleDelete}>
              {DeleteIcon} Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          {/* whitespace prewrap makes so that any line breaks are kept. */}
          <p className="text-stone-600 whitespace-pre-wrap">
            {project.projectDescription}
          </p>
        </header>
        <Tasks tasks={tasks} onAddTask={onAddTask} handleDeleteTask={handleDeleteTask}/>
      </div>
    );
  }