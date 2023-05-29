
const CartItemCounter = ({quanty}) => {
  return (
    <>
    <p className="counter">-</p>
    <p>{quanty}</p>
    <p className="counter">+</p>
    </>
  )
}

export default CartItemCounter