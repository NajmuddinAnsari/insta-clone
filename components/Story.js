import React from 'react'

function Story({ username, img }) {
  // console.log("file: Story.js ~ line 4 ~ Story ~ username", username);

  return (
    <div className=' w-14'>
      <img src={img} alt={username} className='w-16 rounded-full p-1 border-2 border-red-500 hover:scale-125 transition-transform ease-out cursor-pointer' />
      <p className='text-xs truncate '>{username}</p>

    </div>
  )
}

export default Story