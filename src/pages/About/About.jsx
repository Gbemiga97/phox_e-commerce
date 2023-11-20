import { Link } from 'react-router-dom'
import { PageHeader } from '../../components'
import './About.css'
import { images } from '../../constriants'
import{ animations }from '../../constriants'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <main className="about__wrapper">
        <PageHeader pagename="About Us" />
        <div className="container about__container">
            <motion.div 
            initial='offscreen'
            whileInView={'onscreen'}
            variants={animations.secVariants}
            viewport={{
                once: true
               }}
            className="about__content">
                <h5>welcome to phlox</h5>
                <h2>who we are ?</h2>
                <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray</p>
                <p>gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me .<br />
                when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence .
                </p>
                <Link to='/contact'>
                Contact Us
                </Link>
            </motion.div>

            <motion.div 
            initial='offscreen'
            whileInView={'onscreen'}
            variants={animations.imgVariants}
            viewport={{
                once: true
               }}
            className="about__img">
                <img src={images.aboutImg} alt="about__img" />
            </motion.div>
        </div>
    </main>
  )
}



export default About