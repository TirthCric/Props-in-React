
import Cart from './Cart'
import data from '../Data'

function App() {
  return (
    <>
      <div className='p-4'>
        <h2 className='text-purple-500 font-bold text-2xl text-center'>All the card are here</h2>
        <div className='p-4 my-16 grid grid-cols-[repeat(3,minmax(0,max-content))] gap-y-44 justify-around items-center'>
          {
            data.map((cartItem , i) =>(
              <Cart
               cartItem = {cartItem}
               key = {i}
                />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
