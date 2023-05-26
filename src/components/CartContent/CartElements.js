import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import './CartElements.css'

const CartElements = () => {
  const images = require.context("../../img", true)
  const {cart} = useContext(dataContext)
  return cart.map((product) => {
      return (
        <div className="cartElements" key={product.id}>
          <img src={images(`./${product.image}.jpg`)} alt={product.name} className="cartElements__img"/>
          <h3 className="cartElements__name">{product.name}</h3>
          <h4 className="cartElements__price">$ {product.price}</h4>
        </div>
      )
    })
  }

export default CartElements