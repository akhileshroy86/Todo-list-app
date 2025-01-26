"use client";
import trash from "@/public/images/trash.svg";
import edit from "@/public/images/edit.svg";
import Checkbox from "@mui/material/Checkbox";
import { Task } from "@/app/models/task";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface Props {
    handleDelete: (id: string) => void;
    handleStatusChange: (id: string, event: boolean) => void;
    tasks: Task[];
    deletingId: number | null;
}

export default function TaskList({ handleDelete, handleStatusChange, tasks }: Props) {
    const router = useRouter()
    return (
        <div className="mt-5">
            {tasks.map(({ _id, title, completed }) => (<div
                key={_id}
                className="flex gap-2 items-center rounded-md border border-gray-800 bg-counterText px-2 mb-4 border-t-[1px] justify-between"
            >
                <Checkbox
                    checked={completed}
                    onChange={(e) => { handleStatusChange(_id, e.target.checked) }}
                    className=""
                />
                <p className={` text-sm p-4  ${completed ? "line-through text-emptyText" : "text-taskText"} flex-grow `}>
                    {title}
                </p>
                <button className="ml-auto" onClick={() => {
                    router.push(`/edit/${_id}`)
                }}  >
                    <Image src={edit.src} width={16} height={16} alt="edit" />
                </button>
                <button className="ml-auto" onClick={() => { handleDelete(_id) }}  >
                    <Image src={trash.src} width={24} height={24} alt="delete" />
                </button>


            </div>
            ))}
        </div>
    );
}
