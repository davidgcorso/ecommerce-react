import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import CartElements from './CartElements'
import './CartContent.css'
import CartTotal from './CartTotal'

const CartContent = () => {
  const {cart} = useContext(dataContext)
  
  return (
  
    cart.length > 0 ? (
      <>
    <div className='cartContent'>
    <CartElements />
    </div>
    
    <CartTotal /></>
    ) : (<h2 className='cartContent--empty'>No items selected</h2>
  )
  
  )
}

export default CartContent