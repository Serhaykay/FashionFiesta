import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import womanShopping from '../Img/woman-shopping.jpg';
import watches from '../Img/watches.jpg';
import atmcard from '../Img/Atm-card.jpg';



const HomeHero = () => {
const[current, setCurrent] = useState(0);
let history = useHistory();

    const handleSelect = (selectedIndex, e) => {
        setCurrent(selectedIndex);
    }

const handleWears = () =>  {
  history.push("/wears");
}
const handleWatches = () =>  {
    history.push("/watches");
  }

    return(
<div>
<section className="hero-section">

<div className="hero-slider">
        <Carousel activeIndex={current} onSelect={handleSelect}>
            <Carousel.Item>
            <img className = 'd-block' src={womanShopping} alt="FF" />
            <Carousel.Caption>
            <div className='col-sm-12 col-md-6 col-lg-6 hero-text'>
        <h2>Your One Stop Shop!</h2>
        <p>Sed voluptatem accusantium ncncd vbbxx uturr sjdcdd vounnt gigoood cobbn teegh eaque ipsa Sed voluptatem accusantium doloremque eaque ipsa
        Sed voluptatem accusantium doloremque eaque ipsa
        </p>
        <button type='button' className="hero-button" onClick={handleWears}>Shop Now</button>
          </div>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img className = 'd-block' src={atmcard} alt="FF" />
            <Carousel.Caption>
            <div className="hero-text">
            <div className='col-sm-12 col-md-6 col-lg-6 hero-text'>
        <h2>Get 20% off with your Visa Card</h2>
        <p>Sed voluptatem accusantium ncncd vbbxx uturr sjdcdd vounnt gigoood cobbn teegh eaque ipsa Sed voluptatem accusantium doloremque eaque ipsa
        Sed voluptatem accusantium doloremque eaque ipsa
        </p>
          </div>
            </div>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img className = 'd-block' src={watches} alt="FF" />
            <Carousel.Caption>
            <div className='col-sm-12 col-md-6 col-lg-6 hero-text'>
        <h2>Your One Stop Shop!</h2>
        <p>Sed voluptatem accusantium ncncd vbbxx uturr sjdcdd vounnt gigoood cobbn teegh eaque ipsa Sed voluptatem accusantium doloremque eaque ipsa
        Sed voluptatem accusantium doloremque eaque ipsa
        </p>
        <button type='button' className="hero-button" onClick={handleWatches}>Shop Now</button>
          </div>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

  </div>
    {/*
   <div className="hero-wrapper">
       <div className="row home-bg">
       <div className='col-sm-12 col-md-6 col-lg-6'>
    <img src={womanShopping} className="home-img-bg" alt="white-girl" />
    </div>
       </div>
   </div>
    */}
</section>
</div>
    )
}

export default HomeHero;