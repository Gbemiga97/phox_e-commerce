import { useParams } from 'react-router-dom'
import { data } from '../../constriants'
import './BlogDetail.css'
import { PageHeader } from '../../components'



const BlogDetail = () => {

    let { id } = useParams()
    
    const news = data.newsData.find(news => String(news.id) === id)



    
  return (
    <main className="blogdetail__wrapper">
        <PageHeader pagename='Blog' />
        <section key={news.id} className="container blogdetail__container">
            <div className="blogdetail">
                <div className="blogdetail__img">
                    <img src={news.img} alt="img" />
                </div>
                <div className="blogdetail__info">
           <p> <span>Octopber 5, 2019</span> - By Paul</p>
           <p>{news.desc}</p>

           <div className="blogdetail__comment">
            <h5>Leave A Comment</h5>
            <form action="">
            <input type="text" placeholder='Email (required)' />
            <input type="text" placeholder='Website' />
            <textarea name="" placeholder='Comment'
            ></textarea>
            </form>
            <button className='btn'>Submit</button>
           </div>
           </div>
           </div>
        </section>
    </main>
  )
}

export default BlogDetail