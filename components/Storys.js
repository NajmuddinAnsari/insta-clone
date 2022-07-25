import React, { useEffect, useState } from 'react'
import minifaker, { username } from 'minifaker'
import 'minifaker/locales/en'
import Story from './Story';

function Storys() {
    const [storyUsers, setStoryUsers] = useState([]);
    useEffect(() => {
        // const storyUsers = minifaker.array(20, (i) => ({
        //     username: minifaker.username({ locale: 'en' }).toLocaleLowerCase(),
        //     img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        //     id: i,
        // }));

        setStoryUsers(() => minifaker.array(20, (i) => ({
            username: minifaker.username({ locale: 'en' }).toLocaleLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i
        })));
        // console.log(storyUsers);
    }, [])
    return (
        <div className='border-3 flex w-[90%] overflow-x-scroll items-center space-x-1 mt-9 border p-2 bg-white m-auto scrollbar'>

            {storyUsers.map((user) => (
                
                <Story key={ user.id} username={user.username} img={user.img} />
                
            ))}
        </div>
    )
}

export default Storys