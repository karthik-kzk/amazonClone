import React from 'react';
import homeImage from './images/homeImage.jpg'
import './Home.css';
import Product from './Product';
import leanStartup from './images/leanStartup.jpg';

function Home() {
    return (
        <div className='home'>   
            <div className="home__container">
                <img src={homeImage} 
                alt="homeImage" 
                className="home__image"
                /> 
                
            
            <div className="home__row">
                <Product id="1" title='A wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser'
                   price={199.99}
                   image={leanStartup}
                   rating={3}
                   />
                 <Product id="2"title='A wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser'
                   price={399.99}
                   image={leanStartup}
                   rating={4}
                   />
            </div> 
            <div className="home__row">
            <Product id="3"
                   title='A wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser'
                   price={199.99}
                   image={leanStartup}
                   rating={3}
                   />
                 <Product id="4"
                   title='A wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser'
                   price={199.99}
                   image={leanStartup}
                   rating={3}
                   />
                 <Product 
                   id="5"
                   title='A wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser'
                   price={199.99}
                   image={leanStartup}
                   rating={3}
                   />
            </div>   
            <div className="home__row">
            <Product 
                   id ="6"
                   title='A wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser'
                   price={199.99}
                   image={leanStartup}
                   rating={3}
                   />
                
            </div> 
            </div>      
        </div>
    )
}

export default Home
