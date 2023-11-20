import { useShopContext } from '../../Context/ShopContext'
import { PageHeader } from '../../components'
import './Cart.css'
import {MdClose} from 'react-icons/md'
import {IoMdNavigate} from 'react-icons/io'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../constriants'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const {cart, removeFromCart, increaseAmount, decreaseAmount, totalPrice} = useShopContext()
    const [country, setCountry] = useState('')

    const navigate = useNavigate()

    const getCountry = () => {
        axios.get("https://ipapi.co/json/")
        .then(res => {
            let data = res.data;
            setCountry(data.country_name)
        });
    }

    useEffect(() => {
        getCountry();
    }, [])

  return (
    <main className='cart__wrapper'>
        <PageHeader pagename='Cart' />
        <div className="container cart__container">

        { cart.length < 1 &&
                  <div className="empty">
                <img src={images.emptycart} alt="empty cart" />
                <h5>Cart Is Empty</h5>
                </div> }

            { cart.length >= 1 &&
                <div className="cart__items">
                <table>
                    <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    </tr>
                    {
                        cart.map(item => (
                            <tr className='cartitem'>
                                <td>
                                    <div className='remove__item'>
                                    <MdClose
                                    strokeWidth={2}
                                    onClick={() => removeFromCart(item)}
                                    />
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/shop/${item.id}`} className="img__bg">
                                        <img src={item.image} alt={item.name} />
                                    </Link>
                                </td>
                                <td> 
                                    <Link to={`/shop/${item.id}`}>
                                    {item.name}
                                    </Link>
                                    </td>
                                <td>${item.price.toLocaleString()}</td>
                                <td>
                                     <div className="cartitem__input">
                                        <div className="input">
                                        {item.amount}
                                        </div>
                                        <div className="icon">
                                        <button
                                        onClick={() => increaseAmount(item.id)}
                                        ><IoMdNavigate /></button>
                                        <button
                                        onClick={() => decreaseAmount(item.id)}
                                        ><IoMdNavigate /></button>
                                        </div>
                                    </div>
                                </td>
                                <td>${(item.amount * item.price).toLocaleString()}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>}

        { cart.length >= 1 &&
            <div className="cart__totals">
                <h3>Cart Totals</h3>
                <table>
                    <tr>
                        <th>Subtotal</th>
                        <th className='shipping'>Shipping</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>${totalPrice.toLocaleString()}</td>
                        <td className='shipping'>
                            <p>Flat rate: <span> $1,000</span><br />Shipping to <span>{country}</span></p>
                        </td>
                        <td>${(totalPrice + 1000).toLocaleString()}</td>
                    </tr>
                </table>
                <div className="cart__btns">
                <button>Proceed to checkout</button>
                <button
                onClick={() =>{
                     navigate('/shop')
                    window.scrollTo({top: 0, behavior: 'smooth'})
                    }}
                >Continue shopping</button>
                </div>
            </div>}
        </div>
    </main>
  )
}

export default Cart