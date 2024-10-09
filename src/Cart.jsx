import React from 'react'

function Cart(props) {
    const cartItem = props.cartItem;
    // console.log(cartItem);
    
  return (
    <>
    <div className='flex flex-col px-16 py-16 items-center  gap-4 relative w-72 h-72 rounded-xl bg-black before:content-[""] before:absolute before:w-full before:h-full before:left-1/2 before:top-1/2 before:rounded-lg before:-z-10 before:blur-md before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gradient-to-br before:from-yellow-400 before:via-orange-500  before:via-green-500  before:via-blue-300  before:via-purple-500  before:via-pink-500  before:via-purple-800  before:via-red-500 before:to-blue-600 before:bg-[length:400%] before:animate-gradient '>
        <img src={cartItem.image} alt="" className='w-24 h-24 ' />
        <h2 className='text-purple-500 text-center'>{cartItem.title}</h2>
        <p className='text-purple-400 text-center'>{cartItem.description}</p>
    </div>
    </>
  )
}

export default Cart

// 
