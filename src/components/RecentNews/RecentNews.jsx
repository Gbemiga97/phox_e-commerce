import { data } from '../../constriants'
import './RecentNews.css'
import { NewsCard } from '../../components'

const RecentNews = () => {
  return (
    <section className="recentnews__wrapper">
        <div className="container recentnews__container">
            {
                data.newsData.slice(0, 3).map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))
            }
        </div>
    </section>
  )
}

export default RecentNews