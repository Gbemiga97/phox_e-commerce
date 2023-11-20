import { animations, data } from '../../constriants'
import './Services.css'
import { motion } from 'framer-motion'



const Services = () => {
  return (
    <section className="services__wrapper">
        <div className="container services__container">
            {
                data.services.map(({img, title, desc, x, delay}, i) => (
                    <motion.article
                    initial='offscreen'
                    whileInView={'onscreen'}
                    variants={animations.productDisplayVariants(x, delay)}
                    viewport={{
                       once: true
                      }}
                    key={i} className="service">
                        <div  className="service__img">
                            <img src={img} alt={title} />
                        </div>
                        <div className="service__desc">
                        <h6>{title}</h6>
                        <p>{desc}</p>
                        </div>
                    </motion.article>
                ))
            }
        </div>
    </section>
  )
}

export default Services