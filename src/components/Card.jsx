import React from 'react'

const Card = ({item}) => {
    return (
        <div className='w-full h-full border-[1px] border-gray-400 rounded-lg p-5 shadow-lg shadow-purple-400'>
            <h2 className='text-2xl font-bold mb-2'>{item.title}</h2>
            <p>{item.content}</p>
        </div>
    )
}

export default Card