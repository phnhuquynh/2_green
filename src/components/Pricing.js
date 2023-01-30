import Card from './elements/Card'
import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full h-screen bg-pricing-bg bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4 '>
        <Card imageText='Sydney' h1Text='see more' bgImage='bg-hotel1'/>
        <Card imageText='Los Angeles' h1Text='see more' bgImage='bg-hotel2'/>
        <Card imageText='Dubai' h1Text='see more' bgImage='bg-hotel3'/>
        <Card imageText='Paris' h1Text='see more' bgImage='bg-hotel4'/>
    </div>
  )
}

export default Pricing