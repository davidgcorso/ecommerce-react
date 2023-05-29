import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
const CartItemCounter = ({product}) => {
  const {cart, setCart, buyProducts} = useContext(dataContext)

  const decrease = () => {
    const repeated = cart.find((item) => item.id === product.id)
    
    repeated.quanty !== 1 && setCart(cart.map((item) =>item.id ===product.id ? {...product, quanty: repeated.quanty -1} : item))
  }
  return (
    <>
    <p className="counter" onClick={()=>decrease(product)}>-</p>
    <p>{product.quanty}</p>
    <p className="counter" onClick={()=>buyProducts(product)}>+</p>
    </>
  )
}

export default CartItemCounter