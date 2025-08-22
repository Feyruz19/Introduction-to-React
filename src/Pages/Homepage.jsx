import React from 'react'
import Card from '../components/Card'

const homepage = () => {
const cardData = [
    {
        title: 'Card 1',
        content: 'This is the content of card 1.',
        id: 1
    },
    {
        title: 'Card 2',
        content: 'This is the content of card 2.',
        id: 2
    },
    {
        title: 'Card 3',
        content: 'This is the content of card 3.',
        id: 3
    },
    {
        title: 'Card 4',
        content: 'This is the content of card 4.',
        id: 4
    },
    {
        title: 'Card 5',
        content: 'This is the content of card 5.',
        id: 5
    },
    {
        title: 'Card 6',
        content: 'This is the content of card 6.',
        id: 6
    },
    {
        title: 'Card 7',
        content: 'This is the content of card 7.',
        id: 7
    },
    {
        title: 'Card 8',
        content: 'This is the content of card 8.',
        id: 8
    }
]

    return (
        <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-cyan-300 gap-6 p-6'>
            {cardData.map(item => <Card key={item.id} item = {item}/>)}
        </div>
    )
}

export default homepage