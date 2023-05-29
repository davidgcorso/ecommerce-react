import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './CartItemCounter.css'

const CartItemCounter = ({product}) => {
  const {cart, setCart, buyProducts} = useContext(dataContext)

  const decrease = () => {
    const repeated = cart.find((item) => item.id === product.id)
    
    repeated.quanty !== 1 && setCart(cart.map((item) =>item.id ===product.id ? {...product, quanty: repeated.quanty -1} : item))
  }
  return (
    <div className="container__counter">
    <p className="button__counter" onClick={()=>decrease(product)}>-</p>
    <p>{product.quanty}</p>
    <p className="button__counter" onClick={()=>buyProducts(product)}>+</p>
    </div>
  )
}

export default CartItemCounter