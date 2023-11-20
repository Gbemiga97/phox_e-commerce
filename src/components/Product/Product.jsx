import { useNavigate } from 'react-router-dom'
import { animations } from '../../constriants'
import './Product.css'
import { motion } from 'framer-motion'
import { useShopContext } from '../../Context/ShopContext'



const Product = ({product}) => {
  const { id, name, price, image,} = product
  const {addToCart,} = useShopContext()
  const navigate = useNavigate()

  return (
    <article
    key={id} className={`product ${name}`}>
      <div 
       className="img__bg"
       onClick={() => {
        navigate(`/shop/${id}`)
        window.scrollTo({top: 0, behaviour: 'smooth'})
      }}
       >
        <img src={image} alt={name} />
      </div>
        <p>{name}</p>
        <div className="btn__price">

        <button
          // initial="offscreen"
          // whileInView={"onscreen"}
          // variants={animations.priceBtnVariants}
          onClick={() => addToCart(product ,id)}
         >
          Add To Cart
          </button>

        <motion.h4
        initial="offscreen"
        whileInView={"onscreen"}
        variants={animations.priceBtnVariants}
        >
          ${price.toLocaleString('en-US')}
          </motion.h4>
      </div>
    </article>
  )
}

export default Product