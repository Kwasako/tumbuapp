import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailsPage(){
    return (
            <div className = 'container'>
                <div className='details'>
                    <ul className='detailpage-ul'>
                        <li>
                            <Link to ='/'>
                                <img src='./Assets/back_arrow.svg' alt = 'back arrow icon'/>
                            </Link>
                        </li>
                        <li className='sneaker_details'>Sneakers Detail</li>
                        <li>
                            <img src='./Assets/menu.svg' alt = 'menu icon'/>
                        </li>
                    </ul>
                    <img src='./Assets/Lebron20_BB_Shoes.png' alt = 'Lebron 20 Basketball shoes'/>
                    <div className='circle'></div>
                </div>
                <div className='preview'>
                    <div className='picture'>
                        <img src='./Assets/Lebron20_preview.png' alt='vertical-view'/>
                    </div>
                    <div className='picture'>
                        <img src='./Assets/lebron20_top_view.png' alt='top-view'/>
                    </div>
                    <div className='picture'>
                        <img src='./Assets/lebron20_back_preview.png' alt='back-view'/>
                    </div>
                    <div className='picture'>
                        <img src='./Assets/lebron20_bottom_preview.png' alt='bottom-view'/>
                    </div>
                </div>
                <div className='preview-desc-div'>
                    <p className='preview-desc'>LeBron 20 Basketball Shoes</p>
                    <p className='preview-price'>$200</p>
                </div>
                <div className='rating'>
                    <div className='pair_left'>
                        <p><span>5</span> Pair left</p>
                    </div>        
                    <div className='pair_left'>
                        <p>Sold<span>50</span></p> 
                    </div>
                    <div className='reviews'>
                        <img src='./Assets/star.svg' alt ='star'/>
                        <div>
                            <p> <span className='rating-number'>4.8</span> (<span>87</span> reviews)</p>
                        </div>
                    </div>
                </div>
                <button className='add_favourite_btn'>Added to favourites</button>
                <div className='cart'>
                    <div className='cart-icon'>
                        <img src='Assets/Cart_icon.svg' alt='cart icon '/>
                        <p>Add to Cart</p>
                    </div>
                    <img src='./Assets/home_icon.svg' alt='home icon'/>
                    <button className='buy_now'>Buy Now</button>
                </div>
            </div>
    )
}

// \back_arrow.svg\menu.svg\Lebron20_BB_Shoes.png\Lebron20_BB_Shoes.png\Lebron20_preview.png