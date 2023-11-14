import Button from "./Button"
export default function ProjectsSidebar({handleAddNewProject, projects, handleShowProject}) {
    return (
        <aside className="w-1/3 px-8 py-16 mt-12 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your projects
            </h2>
            <Button onClick={handleAddNewProject}>
                + Add Project
            </Button>
            <ul className="mt-4 text-stone-400">
                {projects.map(proj => {
                    return <button key={proj.projectId}
                    className="text-left p-2 block rounded-md my-1 hover:text-stone-100 hover:bg-stone-800 w-full" onClick={() => handleShowProject(proj.projectId)}>
                            {proj.projectTitle}
                        </button>
                })}
            </ul>

        </aside>
    )
}