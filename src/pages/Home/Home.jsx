import { HomeHeader, HomeHero, HomeProducts, ProductDisplay, RecentNews, Services, SummerSale } from '../../components'
import { images } from '../../constriants'
import './Home.css'

const Home = () => {
  return (
    <main className='home__wrapper'>
      <HomeHero />
      <ProductDisplay />
      <Services />
      <SummerSale title='fine smile' name='beats solo air' img={images.headphone2}/>
      <HomeHeader title='best seller products ' desc='There are many variations passages' />
      <HomeProducts />
      <SummerSale title='happy hour' name='smart watch' img={images.watch2} />
      <HomeHeader title='recent news' desc='There are many variations passages'  />
      <RecentNews />
    </main>
  )
}

export default Home