import './SummerSale.css'
import { motion } from 'framer-motion'
import {animations} from '../../constriants'
import { useNavigate } from 'react-router-dom'

const SummerSale = ({title, name, img}) => {
  const navigate = useNavigate()


  return (
    <section className="summersale__wrapper">
       <div className={`container summersale__container ${name}`}>
        <div className="summersale__title">
            <motion.small
             initial='offscreen'
             whileInView={'onscreen'}
             variants={animations.tagVariants}
             viewport={{
              once: true
             }}
            >20 % OFF</motion.small>
            <motion.h2
             initial='offscreen'
             whileInView={'onscreen'}
             variants={animations.titleVariants}
             viewport={{
              once: true
             }}
            >{title}</motion.h2>
            <motion.small
             initial='offscreen'
             whileInView={'onscreen'}
             variants={animations.tagVariants}
             viewport={{
              once: true
             }}
            >15 Nov To 7 Dec</motion.small>
        </div>

        <motion.div
         initial='offscreen'
         whileInView={'onscreen'}
         variants={animations.tagVariants}
         viewport={{
          once: true
         }}
        className="summersale__img">
            <img src={img} alt={name} />
        </motion.div>
        <div className="summersale__content">
            <motion.h6
             initial='offscreen'
             whileInView={'onscreen'}
             variants={animations.titleVariants}
             viewport={{
              once: true
             }}
            >{name}</motion.h6>
            <motion.h3
             initial='offscreen'
             whileInView={'onscreen'}
             variants={animations.secTitleVariants}
             viewport={{
              once: true
             }}
            >summer sale</motion.h3>
            <motion.p
             initial='offscreen'
             whileInView={'onscreen'}
             variants={animations.tagVariants}
             viewport={{
              once: true
             }}
            >Company that’s grown from 270 to 480
            employees in the last 12 months.</motion.p>
            <motion.button
             initial='offscreen'
             whileInView={'onscreen'}
             variants={animations.btnVariants}
             viewport={{
              once: true
             }}
             onClick={() => {
              navigate('/shop')
              window.scrollTo({top: 0, behaviour: 'smooth'})
            }}
            >Shop</motion.button>
        </div>
       </div>
    </section>
  )
}

export default SummerSale