import { Link } from 'react-router-dom'
import './NewsCard.css'
import {animations} from '../../constriants'
import { motion } from 'framer-motion'

const NewsCard = ({news: {id, img, desc}}) => {
  return (
    <motion.article
    initial='offscreen'
    whileInView={'onscreen'}
    variants={animations.containerVariants(0.1)}
    viewport={{
     once: true
    }}
    key={id} className="newscard">
      <Link to={`/blog/${id}`}
      onClick={ () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }}
      >
        <img src={img} alt="news" />
        </Link>
        <p>October 5, 2019  -  by Paul</p>
        <h4>How to choose perfect gadgets</h4>
        <p>
            {
                desc.length > 40 && (desc.substr(0, 98)) + '...'
            }
        </p>
    </motion.article>
  )
}

export default NewsCard