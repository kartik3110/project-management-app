import { useState } from "react"
import Modal from "./Modal"

const addTask = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


export default function Tasks({ onAddTask, tasks, handleDeleteTask }) {
    const [inputText, setInputText] = useState('')
    const handleChange = e => {
        setInputText(e.target.value)
    }
    const handleAdd = () => {
            if(inputText.trim() === '')    return; 
            setInputText('')    // this is the reason didnt use refs (dont manipulate dom using a ref.)
            onAddTask(inputText)
    }
    return (
        <div>
            <h1 className="font-bold">TASKS</h1>
            <div className="mt-4">
            <input placeholder="Add Task..." type="text" className="bg-stone-200 p-2 rounded-md w-1/2" value={inputText} onChange={handleChange}/>
            <button className="absolute ml-4 p-1" onClick={handleAdd}>{addTask}</button>
            </div>
            {tasks && (
                <ul className="mt-6">
                {tasks.map(task => {
                    return (
                        <span className="flex mt-2 p-3  bg-slate-100" key={task.taskId}>
                            <li className="w-full rounded-lg">{task.text}</li>
                            <button className="ml-12 underline text-stone-600 hover:text-black" onClick={()=>handleDeleteTask(task.taskId)}>Clear</button>
                        </span>
                    )
                })}
            </ul>
            )}
        </div>
    )
}