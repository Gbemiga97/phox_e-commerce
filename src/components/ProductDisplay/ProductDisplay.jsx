import { useNavigate } from 'react-router-dom'
import { animations, data } from '../../constriants'
import './ProductDisplay.css'
import { motion } from 'framer-motion'

const ProductDisplay = () => {

    const navigate = useNavigate()


  return (
   <section className="productdisplay__wrapper">
    <div className="container productdisplay__container">
        <div className="first__productdisplay">
        {
            data.productDisplay.slice(0, 3).map(({tag, secTitle, title, img, x, delay}, i) => (
                <motion.div 
                initial='offscreen'
                whileInView={'onscreen'}
                variants={animations.productDisplayVariants(x, delay)}
                viewport={{
                    once: true
                   }}
                key={i} 
                className={`productdisplay ${tag}`}>
                    <h4>{tag}</h4>
                    <h3>{secTitle}</h3>
                    <h2>{title}</h2>
                    <button
                     onClick={() => {
                        navigate('/shop')
                        window.scrollTo({top: 0, behaviour: 'smooth'})
                      }}
                    >Browse</button>
                    <img src={img} alt={title} />
                </motion.div>
            ))
        }
        </div>
        <div className="second__productdisplay">
        {
            data.productDisplay.slice(3, 6).map(({tag, secTitle, title, img, x}, i) => (
                <motion.div 
                initial='offscreen'
                whileInView={'onscreen'}
                variants={animations.productDisplayVariants(x)}
                viewport={{
                    once: true
                   }}
                 key={i} 
                 className={`productdisplay ${tag}`}>
                    <h4>{tag}</h4>
                    <h3>{secTitle}</h3>
                    <h2>{title}</h2>
                    <button
                      onClick={() => {
                        navigate('/shop')
                        window.scrollTo({top: 0, behaviour: 'smooth'})
                      }}
                    >Browse</button>
                    <img src={img} alt={title} />
                </motion.div>
            ))
        }
        </div>
       
    </div>
   </section>
  )
}

export default ProductDisplay