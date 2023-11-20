import { data } from '../../constriants'
import { Product } from "../../components"

import './HomeProducts.css'

const HomeProducts = () => {
  return (
    <section className="homeproducts__wrapper">
        <div className="container homeproducts__container">
            {
                data.products.slice(0, 8).map((product) => (
                   <Product key={product.id} product={product} />
                ))
            }
        </div>
      
    </section>
  )
}

export default HomeProducts