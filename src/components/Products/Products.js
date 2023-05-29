import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css"

const Products = () => {
    const {data, cart, setCart} = useContext(dataContext)
    const images = require.context("../../img", true)
    const buyProducts = (product) => {
      const repeated = cart.find((item) => item.id === product.id)
      if(repeated) {
        setCart(cart.map((item) =>item.id ===product.id ? {...product, quanty: repeated.quanty +1} : item))
      } else {
        setCart([...cart, product])
      }
    }
  return data.map((product)=> {
    return (
        <div className='card' key={product.id}>
                <img src={images(`./${product.image}.jpg`)} alt={product.name} className='card__image' />
                <h3>{product.name}</h3>
                <h4 className='card__price'>$ {product.price}</h4>
                <button className='card__button' onClick={()=>buyProducts(product)}>Add item to cart</button>
            </div>
    )
  })
}

export default Products