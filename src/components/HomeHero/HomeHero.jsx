import { useNavigate } from 'react-router-dom'
import { animations, images } from '../../constriants'
import './HomeHero.css'
import { motion } from 'framer-motion'

const HomeHero = () => {


  const navigate = useNavigate()

  return (
    <section className="home__hero">
      <div
      
      className="container home__hero-container">
        <div className="home__hero-content">
       <motion.h3
       initial='offscreen'
       whileInView={'onscreen'}
       variants={animations.tagVariants}
       viewport={{
        once: true
       }}
       >Beats Solo</motion.h3>

       <motion.h2
       initial='offscreen'
       whileInView={'onscreen'}
       variants={animations.secTitleVariants}
       viewport={{
        once: true
       }}
       >Wireless</motion.h2>

       <motion.h1
       initial='offscreen'
       whileInView={'onscreen'}
       variants={animations.titleVariants}
       viewport={{
        once: true
       }}
       >headphone</motion.h1>
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
       >shop by category</motion.button>
       <div className="desc">
        <h6>Description</h6>
        <p>There are many variations passages
            of Lorem Ipsum available, but the
            majority have suffered alteration
        </p>
        </div>
        <motion.div 
          initial='offscreen'
          whileInView={'onscreen'}
          variants={animations.imgVariants}
          viewport={{
           once: true
          }}
        className="img">
        <img src={images.Hero_Headphone} alt="head__phone"/>
        </motion.div>
       </div>
      </div>
    </section>
  )
}

export default HomeHero