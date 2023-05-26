import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const {cart} =useContext(dataContext);

    const total = cart.reduce((acc,elem)=> acc + elem.price, 0)
  return (
    <div style={{textAlign: "center"}}>
        <h3>Total: ${total}</h3>
    </div>
  )
}

export default CartTotal