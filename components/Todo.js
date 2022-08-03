import { async } from '@firebase/util';
// import { deleteDoc } from 'firebase/firestore';
import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
// import doc from 'firebase/firestore'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

import { db } from '../firebase';


function Todo(props) {
    const style = {
        todo: `bg-red-400 p-2 mt-3`,
        completed: `bg-green-200 p-2 mt-3`,
    }
    async function deleteTodo() {
        const docToUpdate = doc(db, 'todos', props.id);
        await deleteDoc(docToUpdate).then((response) => alert('todo being removed')).catch((error) => console.log(error.message));
    }
    // console.log(id);
    return (
        <div className={props.completed ? style.completed : style.todo}>
            <form className='flex items-center justify-between' >
                <div className='flex items-center gap-3'>
                    <input checked={props.completed ? 'checked' : ''} onChange={() => props.onCheked(props.id)} type="checkbox" className='' />
                    <h1>{props.title} {props.work}</h1>
                </div>
                <FaRegTrashAlt className='mr-3 cursor-pointer' onClick={deleteTodo} />
            </form>
        </div>
    )
}

export default Todo 