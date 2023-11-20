import './HomeHeader.css'
import { animations } from '../../constriants'
import { motion } from 'framer-motion'



const HomeHeader = ({title, desc}) => {
  return (
    <div className="home__header">
        <motion.h3
         initial='offscreen'
         whileInView={'onscreen'}
         variants={animations.titleVariants}
         viewport={{
          once: true
         }}
        >{title}</motion.h3>
        <motion.p
         initial='offscreen'
         whileInView={'onscreen'}
         variants={animations.tagVariants}
         viewport={{
          once: true
         }}
        >{desc}</motion.p>
    </div>
  )
}

export default HomeHeader