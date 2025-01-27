'use client'
import arrowLeft from '@/public/images/arrowLeft.svg'
import React, { useEffect, useState } from "react"
import classNames from 'classnames';
import { createTask, getTasksById, updateTask } from "@/app/services/tasksService"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from 'next/image';

interface Props {
    id?: string;
}

export default function AddOrEditTask({ id }: Props) {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('')
    const [colorError, setColorError] = useState(false)
    const [titleError, setTitleError] = useState(false)
    const router = useRouter()

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        if (e.target.value)
            setTitleError(false)
    };

    const handleColorSelection = (selectedColor: string) => {
        setColor(selectedColor);
        setColorError(false)
    };

    const handleSaveTask = async () => {
        if (title && color) {
            try {
                let response;
                if (id) {
                    console.log("Id from edit or save Task", id)
                    response = await updateTask(id,
                        {
                            title,
                            color
                        });
                } else {
                    response = await createTask({
                        title,
                        color
                    });
                }
                if (response) {
                    router.push('/')
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        } else {
            if (!title) {
                setTitleError(true)
            }
            if (!color) {
                setColorError(true)
            }
        }
    };

    const fetchTask = async (taskId: number) => {
        try {
            const response = await getTasksById(taskId);
            if (response?.status) {
                setTitle(response?.data?.title || '')
                setColor(response?.data?.color || '')
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchTask(parseInt(id));
        }
    }, [id]);

    return (<div className="pt-20">
        <div>
            <Link href={"/"} >
                <Image src={arrowLeft.src} width={24} height={24} alt="left " />
            </Link>
        </div>
        <h1 className="text-allTasks font-bold mt-8">Title</h1>
        <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Ex. Brush your teeth"
            className="bg-counterText mt-3 w-full h-10 px-3 text-white rounded-md border-none"
        />
        {titleError && <div className="text-red-500 ml-2" >Please provide title for the task!</div>}
        <h1 className="text-allTasks font-bold mt-6">Color</h1>
        <div className="flex gap-3 mt-3">
            {['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'].map((colorName, index) => (
                <button
                    key={index}
                    onClick={() => { handleColorSelection(colorName) }}
                    className={`${classNames(
                        'w-12 h-12 rounded-full',
                        `bg-${colorName}-500`)} ${color === colorName ? 'border-2 border-white' : ''}`
                    }
                />
            ))}
        </div >
        {colorError && <div className="text-red-500 ml-2" >Please provide color for the task!</div>}
        <div className="bg-taskButton p-3 grid rounded-md w-full mt-10 bg">
            <button
                onClick={handleSaveTask}
                className="text-white flex justify-center text-center gap-2">
                {(title && color) ? (
                    <>
                        Save
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </>
                ) : (
                    <>
                        Add Task
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </>
                )}
            </button>
        </div>
    </div>);
}
