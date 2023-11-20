import { useRef, useState } from 'react'
import { data, images } from '../../constriants'
import './NavBar.css'
import { BsSearch, BsHandbag } from 'react-icons/bs'
import { RiMenu3Fill } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { useShopContext } from '../../Context/ShopContext'
import {IoIosCloseCircle} from 'react-icons/io'
import { FaRegTrashCan } from 'react-icons/fa6'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const { cart, removeFromCart, clearCart, itemAmount, totalPrice } = useShopContext()


  const navigate = useNavigate()
  const cartRef = useRef()

  return (
    <nav>
        <div className="container nav__container">
          <Link 
          to='/'
          onClick={() => setShowMenu(false)}
          className="nav__logo">
           <img src={images.logo} alt="logo" />
          </Link>
          <ul className={`nav__links scale-up-center ${showMenu ? 'show_menu' : 'hide_menu'}`}>
            {
              data.links.map(({link, path}, i) => (
                <li key={i}>
                  <NavLink
                  to={path}
                  onClick={() => setShowMenu(prev => !prev)}
                  className={({isActive}) => isActive ? 'active' : ''} 
                  >{link}</NavLink></li>
              ))
            }
          </ul>
          <div className="nav__login">
            <p className='login'>login</p>
            <BsSearch />
            <div className="shopping__bag"
            >
               <BsHandbag
               className='big__screen'
               onMouseEnter={() => setShowCart(true)}
               onClick={() => setShowCart(prev => !prev)}
               /> <span>{itemAmount}</span>
                 <BsHandbag
                 className='small__screen'
               onClick={() => setShowCart(true)}
               /> <span>{itemAmount}</span>
               {showCart &&
               <div className={`nav__cart scale-up-center-cart    ${showCart ? 'slide-in-left' : 'hide_nav'}`} 
               ref={cartRef}
               onMouseLeave={() => setShowCart(false)}
               >
                <div className="close__cart">
                  <p>Shopping Cart</p>
                  <GrClose onClick={() => setShowCart(false)} />
                </div>
                { cart.length < 1 &&
                  <div className="empty">
                <img src={images.emptycart} alt="empty cart" />
                <h5>Cart Is Empty</h5>
                </div> }

                {
                  cart.length > 0 &&
                
                <div className="items">
                  {
                    cart.map((item) => (
                      <div className="cartitem">
                        <div className="img_bg">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="desc">
                          <p>{item.name}</p>
                          <h5>{item.amount}<GrClose />${item.price.toLocaleString()}</h5>
                        </div>
                        <div className='remove_item'>
                        <IoIosCloseCircle
                        onClick={() => removeFromCart(item.id)}
                        />
                        </div>
                      </div>
                    )
                     )
                  }
                </div>
                }

                {cart.length > 0 &&
                <div className="checkout">
                  <div className="subtotal">
                    <div>
                    <p>SubTotal:</p>
                    <h5>${(totalPrice.toLocaleString())}</h5>
                    </div>
                    <div>
                    <FaRegTrashCan 
                    onClick={() => clearCart()}
                    />
                    </div>
                  </div>
                  <div className="checkout__btn">
                    <button>Proceed to checkout</button>
                    <button
                     onClick={() => {
                      navigate('cart')
                      setShowCart(false)
                    }}
                    >View Cart</button>
                  </div>
                </div>
                }
               </div>
}
            </div>
          </div>
              


          <div className="nav__menu-btn">
            <button
            className='scale-up-center'
            onClick={() => setShowMenu(prev => !prev)}
            >
             { !showMenu ?
              <RiMenu3Fill />
              : <GrClose />
              }
            </button>
          </div>
        </div>
    </nav>
  )
}

export default NavBar