import { useSearchParams } from 'react-router-dom'
import { PageHeader, Product } from '../../components'
import { data } from '../../constriants'
import './Shop.css'
import {BsSearch} from 'react-icons/bs'
import {MdOutlineNavigateNext, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react'
import { Pagination } from '@mui/material'


const Shop = () => {
    const [showCategories, setShowCategories] = useState(false)


    const [searchParams, setSearchParams] = useSearchParams()

    const categoryFilter = searchParams.get('category')

    const shopProducts = categoryFilter
    ? data.products.filter((product) => product.category.toLowerCase() === categoryFilter)
    : data.products




    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 9

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const  currentProducts = shopProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate  = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <main className="shop__wrapper">
        <PageHeader pagename='Products' />
        <div className="container shop__container">
            <div className="shop__filter">
                <div className="shop__searchbar">
                    <input type="text" placeholder='Search Here' />
                    <button>
                        <BsSearch />
                    </button>
                </div>
                <div className="shop__categories">
                    <div className="shop__categories-head">
                    <h4>Product Categories</h4>
                    <button  onClick={() => setShowCategories(prev => !prev)}>
                    {
                        showCategories ?  <MdOutlineNavigateNext /> : <MdOutlineKeyboardArrowDown />
                    }
                    </button>
                    </div>
                    { showCategories &&
                        <ul className="shop__categories-list scale-in-ver-top ">
                        {
                            data.categories.map(({id, name}) => (
                               <li key={id}>
                                <button
                                className={categoryFilter === name ? 'selected' : ''} 
                                onClick={() => setSearchParams({category: name})}
                                >{name}</button>
                               </li>
                            ))
                        }
                        { categoryFilter &&
                            <li>
                            <button
                            onClick={() => setSearchParams({type: ''})}
                            >Clear Filters</button>
                        </li>}
                    </ul>
                    }
                </div>


            </div>

            <div className='shop'>
                <h3>Shop</h3>
            <div className="shop__products-container">
                {
                    currentProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
            <div className="pagination">
                {
                    shopProducts.length > 9 && 
                    <Pagination
                    color='standard'
                    shape='rounded'
                    defaultPage={1}
                    count={Math.ceil(shopProducts.length / productsPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size='large'
                     />
                }
            </div>
            </div>
        </div>
    </main>
  )
}

export default Shop