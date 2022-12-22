import Head from 'next/head'
import { useEffect, useState } from 'react'
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { async } from '@firebase/util';
import { db } from '../firebase';
import { query } from "firebase/firestore";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";




export default function Home() {
  const [todos, setTods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      console.log("file: index.js ~ line 20 ~ unsubscribe ~ todosArr", todosArr);
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTods(todosArr);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function addTodo(newTodo) {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const transformedData = [];
    querySnapshot.forEach((doc) => {
      transformedData.push({ id: doc.id, ...doc.data() });
    });
    console.log(transformedData);
    setTods(transformedData);
  }
  const completedTodo = async (id) => {
    const docToUpdate = doc(db, 'todos', id)
    await updateDoc(docToUpdate, {
      completed: true,
    }).then((response) => alert('congratulations work completed')).catch((error) => console.log(error.message));
    console.log("file: index.js ~ line 41 ~ completedTodo ~ id", id);

  }
  return (
    <div className='h-screen w-screen bg-red-200 relative'>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='  absolute  w-[50%] left-72 top-16'>
        <AddTodo onAddTodo={addTodo} />

        <div className=''>
          {isLoading ? <p>loading...</p> : <Todos todos={todos} remainingworkd={todos.length} onCheked={completedTodo} />}
        </div>
      </main>

      {/* <footer></footer> */}
    </div>
  )
}