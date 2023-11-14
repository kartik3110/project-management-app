import noProjectsImage from '../assets/no-projects.png'
import Button from './Button'

export default function NoProject ({handleAddNewProject}) {
    return (
        <div className='w-2/3 text-center mx-12 mt-24'>
            <img src={noProjectsImage} alt="" className='w-16 mx-auto'/>
            <h2 className="my-4 font-bold md:text-xl text-stone-500">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a Project or get started with a new one</p>
            <Button onClick={handleAddNewProject}>Create New Project</Button>
        </div>
    )
}