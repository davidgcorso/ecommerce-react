import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import './CartElements.css'
import CartItemCounter from './CartItemCounter'

const CartElements = () => {
  const images = require.context("../../img", true)
  const {cart, setCart} = useContext(dataContext)
  const deleteProduct = (id) => {
    const foundId =cart.find((element) => element.id === id)
    const newCart =cart.filter((element) => {
      return element !== foundId
    })
    setCart(newCart)
  }
  return cart.map((product) => {
      return (
        <>
        <div className="cartElements" key={product.id}>
          <h3 className='cartElements__delete' onClick={()=> deleteProduct(product.id)}>❌</h3>
          <img src={images(`./${product.image}.jpg`)} alt={product.name} className="cartElements__img"/>
          <h3 className="cartElements__name">{product.name}</h3>
          <CartItemCounter product={product} quanty={product.quanty} />
          <h4 className="cartElements__price">$ {(product.price * product.quanty).toFixed(2)}</h4>
        </div>
        </>
      )
    })
  }

export default CartElements