import { data } from '../../constriants'
import { NewsCard, PageHeader } from '../../components'
import './Blog.css'

const Blog = () => {
  return (
    <main className='blog__wrapper'>
       <PageHeader pagename='Blog' />
        <div className="container blog__container">
            {
                data.newsData.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))
            }
        </div>
    </main>
  )
}

export default Blog