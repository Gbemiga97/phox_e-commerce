import { NavLink, Outlet, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { data } from '../../constriants'
import { useShopContext } from '../../Context/ShopContext'

const ProductDetail = () => {
const { id } = useParams()
const {addToCart} = useShopContext()

const product = data.products.find((item) => String(item.id) === id )






  return (
    <main className='productdetail__wrapper'>
        <section className="container productdetail__container">
          <div key={product.id} className="productdetail">
            <div className="productdetail__img-bg">
            <img src={product.image} alt={product.name} />
            </div>
           <div className="productdetail__content">
            <h3>{product.name}</h3>
            <h3>${product.price.toLocaleString()}</h3>
            <p>{product.description.length > 40 && (product.description.substring(0, 200) +  "" )}</p>
            <div className="productdetail__addtocart">
              <button className="btn"
              onClick={() => addToCart(product, product.id)}
              >Add to cart</button>
            </div>
            <p>Category: <span>{product.category}</span></p>
           </div>
          </div>
          <div className="productdetail__desc-review">
            <nav>
              <NavLink 
              className={({isActive}) => isActive ? 'activeP' : ''}
              end
              to='.'>Description</NavLink>
              <NavLink 
              className={({isActive}) => isActive ? 'activeP' : ''}
              to='review'>Reviews</NavLink>
            </nav>
            <Outlet context={[product]} />
            {/* <div className="productcategories__container">
              <h3>Related Products</h3>
              <div className="productcategories">
                {relatedProducts}
              </div>
            </div> */}
          </div>

         
        </section>
    </main>
  )
}

export default ProductDetail