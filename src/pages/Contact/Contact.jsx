import './Contact.css'
import { PageHeader } from '../../components'
import { animations, data, images } from '../../constriants'
import { delay, motion } from 'framer-motion'

const Contact = () => {
  return (
    <main className="contact__wrapper">
        <PageHeader pagename='Contact Us' />
        <div className="container contact__container">
          <motion.div
          initial='offscreen'
          whileInView={'onscreen'}
          variants={animations.secVariants}
          viewport={{
              once: true
             }}
          className="contact__content">
          <h5>Contact Us</h5>
          <h3>Get In Touch</h3>
          <p>When, while lovely valley teems with vapour around meand <br /> meridian the upper impenetrable.</p>

        <form action="">

          <input type="email" placeholder='Your E-mail' />
          <input type="number" placeholder='Phone number' />
          <textarea  id=""  placeholder='Your Message Here'>
          </textarea>
        </form>

        <button className='btn'>Submit</button>
        </motion.div>


        <motion.div 
        initial='offscreen'
        whileInView={'onscreen'}
        variants={animations.imgVariants}
        viewport={{
            once: true
           }}
        className="contact__map">
          <img src={images.contactmap} alt="map" />
        </motion.div>
        </div>

        <div className="contact__infos">
          {
            data.contact.map(({icon, title, content, sndcontent, x, delay}, i) => (
              <motion.article
              initial='offscreen'
              whileInView={'onscreen'}
              variants={animations.productDisplayVariants(x, delay)}
              viewport={{
                  once: true
                }}
              key={i} className="contact__info">
                <div className="contact__info-icon">
                  <img src={icon} alt={title} />
                </div>
                <div className="contact__info-content">
                  <div className='title' >
                    <h6>{title}:</h6>
                    <p>{content}</p>
                  </div>
                  <p>{sndcontent}</p>
                </div>
              </motion.article>
            ))
          }
        </div>
    </main>
  )
}

export default Contact