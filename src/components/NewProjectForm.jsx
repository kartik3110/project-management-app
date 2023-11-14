import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
export default function NewProjectForm({ handleCreateProject, handleCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    return (
        <div className="w-[35rem]">
            <div className="mx-8 mt-12 pt-12 w-full">
                <div className="flex justify-end gap-4">
                    <button className="text-black hover:text-stone-600 text-lg" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className="bg-stone-800 text-stone-50 p-2 px-6 rounded-md hover:bg-stone-950 text-lg"
                        onClick={() => handleCreateProject({
                            projectTitle: titleRef.current.value,
                            projectDescription: descriptionRef.current.value,
                            projectDate: dateRef.current.value,
                        })}>
                        Save
                    </button>
                </div>
                <Input ref={titleRef} label="title" autoFocus/>
                <Input ref={descriptionRef} label="description" textarea={true} />
                <Input ref={dateRef} label="due Date" type="date" />
            </div>
        </div>
    )
}