import React, { useRef } from 'react'
// import AiOutlinePlusSquare from 'react-icons/fa'
// import AiFillDelete from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import app from '../firebase';
import { db } from '../firebase';
import { async } from '@firebase/util';


function AddTodo(props) {
    const inputRef = useRef();
    async function formHandler(event) {
        event.preventDefault();
        const enteredInput = inputRef.current.value;
        const newTodo = { title: enteredInput, completed: false };
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                ...newTodo
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        props.onAddTodo(newTodo);

    }
    return (

        <form className='flex items-center gap-3' onSubmit={formHandler}>
            <input  placeholder='Add Todo' type="text" className='w-[95%] p-2 focus-within:outline-none' ref={inputRef} />
            {/* <AiOutlinePlusSquare /> */}
            <AiOutlinePlus className='tex-red-400 w-10 h-auto  bg-red-500  text-white ' />
            {/* <FaRegTrashAlt /> */}
            {/* <AiFillDelete /> */}

        </form>

    )
}

export default AddTodo