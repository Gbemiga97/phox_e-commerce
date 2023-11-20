import { Link } from 'react-router-dom'
import { animations ,data, images } from '../../constriants'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi'
import {FaXTwitter} from 'react-icons/fa6'
import { motion } from 'framer-motion'



const Footer = () => {
  return (
    <footer>
            <div className="footer__img-container">
                {
                    data.footerImg.map(({id, img, x, delay}) => (
                        <motion.div
                        initial='offscreen'
                        whileInView={'onscreen'}
                        variants={animations.productDisplayVariants(x, delay)}
                        viewport={{
                            once: true
                        }}
                         key={id} className="footer__img">
                            <img src={img} alt='logo' />
                        </motion.div>
                    ))
                }
            </div>

            <div className="container footer__permalinks">
                <motion.div
                 initial='offscreen'
                 whileInView={'onscreen'}
                 variants={animations.containerVariants(0.3)}
                 viewport={{
                  once: true
                 }}
                 className="footer__logo">
                    <Link to='/'
                      onClick={ () => {
                        window.scrollTo({top: 0, behavior: 'smooth'})
                      }}
                    >
                    <img src={images.logo} alt="logo" />
                    </Link>
                    <p>There are many variations passages of Lorem Ipsum available, but the majority have</p>
                    <div className="footer__socials">
                        <AiOutlineInstagram />
                        <BiLogoLinkedin />
                        <BiLogoFacebook />
                        <FaXTwitter />
                    </div>
                </motion.div>

                <motion.div 
                 initial='offscreen'
                 whileInView={'onscreen'}
                 variants={animations.containerVariants(0.5)}
                 viewport={{
                  once: true
                 }}
                className="footer__quicklinks">
                    <h6>Quick Links</h6>
                    <ul className='footer__links'>
                        {
                            data.links.map(({link, path}, i) => (
                              <li key={i}>
                              <Link to={path}
                                onClick={ () => {
                                    window.scrollTo({top: 0, behavior: 'smooth'})
                                  }}
                              >
                                    {link}
                                </Link>
                                </li>
                            ))
                        }
                    </ul>
                </motion.div>

                <motion.div 
                 initial='offscreen'
                 whileInView={'onscreen'}
                 variants={animations.containerVariants(0.7)}
                 viewport={{
                  once: true
                 }}
                className="footer__contact">
                    <h6>Contact</h6>
                    <p>+99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
                </motion.div>

                <motion.div 
                 initial='offscreen'
                 whileInView={'onscreen'}
                 variants={animations.containerVariants(0.9)}
                 viewport={{
                  once: true
                 }}
                className="footer__newsletter">
                    <h6>Subscribe To Our Email</h6>
                    <h3>For Latest News & Updates</h3>
                    <div className="footer__email">
                        <input type='email' placeholder='Enter Your Email' />
                        <button>subscribe</button>
                    </div>
                </motion.div>
            </div>

            <div className="footer__copywright">
                <small>© 2023 {new Date().getFullYear()} Digital Shop. All rights reserved.</small>
                <small>Privacy Policy . Term Condition</small>
            </div>
    </footer>
  )
}

export default Footer