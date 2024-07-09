import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage(){
    return (
        <>
            <div className = 'container'>
                <nav className='navbar'>
                    <ul className='landingpage-ul'>
                        <li>
                            <img src = './Assets/menu_icon.png' alt = 'menu icon'/>
                        </li>
                        <li>
                            <span className = 'iceland-regular'>DR</span> 
                            <div className = 'drops-logo'></div>
                            <span className = 'iceland-regular' >PS</span>
                        </li>
                        <li>
                            <img src = './Assets/notification_icon.png' alt = 'notification icon'/>
                        </li>
                    </ul>
                    <div className='search-bar'>
                        <img src='./Assets/search_icon.svg' alt = 'search icon'/>
                        <input placeholder = 'serach for your drops...' className='roboto-medium'/>
                    </div>
                    <div className='location'>
                        <div className='address'>
                        <img src ='./Assets/location-icon.png' alt='location icon'/>
                        <p>
                            <span> ship to </span>
                            Abesan Estate, Block 3, no 27 estate
                         </p>
                         </div>
                         <img src ='./Assets/Vector.svg' alt='next icon'/>
                    </div>
                </nav>
                <div className='logos'>
                    <div className='logo'>
                        <img src='./Assets/addidas-logo.png' alt='Addidas logo'/>     
                    </div>
                    <div className='logo'>
                        <img src='./Assets/Vans_logo.png' alt='Vans logo'/>
                    </div>
                    <div className='logo'>
                        <img src='./Assets/NB-logo.png' alt='New Balance logo'/>
                    </div>
                    <div className='logo'>
                        <img src='./Assets/Nike_logo.png' alt='Nike logo'/>
                    </div>
                </div>
                <div className='analytic'>
                    <div className='analytic-img'>
                        <img 
                            src ='./Assets/NB_one_pair.png' 
                            alt='New Balance one pair image' 
                            className = 'image1'
                        />
                        <img 
                            src ='./Assets/Nike_one_pair.png' 
                            alt='Nike one pair image'
                           className = 'image2'
                        />
                        <img 
                            src ='./Assets/Adidas_one_pair.png' 
                            alt='Adidas one pair image'
                            className = 'image3'
                        />
                    </div>
                    <div className='analytic-text'>
                        <p className='analytic-text-header'>Year- End Sale</p>
                        <p className='analytic-text-percentage'>Up to 90%</p>
                        <button className='analytic-text-btn'> Shop Now </button>
                    </div>
                </div>
                <div className='product'>
                    <p>New Arrival</p>
                    <div className='product-list row'>
                        <div className='col-6'>
                            <div className='item'>
                                <div className='Ellipse'>
                                    <img 
                                        src ='./Assets/heart_icon.svg' 
                                        alt='heart icon' 
                                        className='heart'
                                    />
                                </div>
                                <Link to ='/details'>
                                    <img 
                                        src='./Assets/Lebron20_Basketball_Shoes.png' 
                                        alt = 'Lebron20 Basketball Shoes image'
                                        className='shoe_img' 
                                    />
                                </Link>
                                
                            
                            </div>
                            <div className='desc'>
                                <p>LeBron 20 Basketball Shoes</p>
                                <span className='price'>$200</span>
                            </div>
                            
                        </div>
                        <div className='col-6'>
                            <div className ='item'>
                                <div className='Ellipse'>
                                    <img 
                                        src ='./Assets/heart-icon-red.svg' 
                                        alt='heart icon' 
                                        className='heart'
                                    />
                            </div>
                            <Link to ='/details'>
                                <img 
                                    src='./Assets/Runfalcon3_Cloudfoam.png' 
                                    alt = 'Runfalcon3 Cloudfoam image'
                                    className='shoe_img' 
                                />
                            </Link>
                            </div>
                            <div className='desc'>
                                <p>RUNFALCON 3 CLOUDFOAM LOW RUNNING SHOES</p>
                                <span className='price'>$65</span>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className = 'item'>
                                <div className='Ellipse'>
                                    <img 
                                        src ='./Assets/heart-icon-red.svg' 
                                        alt='heart icon' 
                                        className='heart'
                                    />
                                </div>
                                <Link to='/details'>
                                    <img 
                                        src='./Assets/New_Balance_327.png' 
                                        alt = 'New Balance 327 image'
                                        className='shoe_img' 
                                    />
                                </Link>   
                            </div>  
                        </div>
                        <div className='col-6'>
                            <div className='item'>
                                <div className='Ellipse'>
                                    <img 
                                        src ='./Assets/heart_icon.svg' 
                                        alt='heart icon' 
                                        className='heart'
                                    />
                                </div>
                                <Link to='/details'>
                                    <img 
                                        src='./Assets/JJJound_Vans.png' 
                                        alt='JJJound Vans image'
                                        className='shoe_img'
                                    />
                                </Link>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

//