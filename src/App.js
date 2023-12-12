import './App.css';

import heroImage from "./images/illustration-hero.svg"
import musicIcon from  "./images/icon-music.svg"


function App() {
  return (
    <div className="App">
      <main>
        <img src={heroImage} alt='hero' />
        <section>
          <header className='header-element'>
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>
          </header>
          <div className='plan-items-container'>
            <img src={musicIcon} alt='icon' />
            <div className='product-info-wrapper'>
              <span className='product-name'>Annual Plan</span>
              <span className='product-price'>$59.99/Year</span>
            </div>
            <a href='#' className='change-element'>Change</a>
          </div>
          <div className='options-container'>
            <button className='proceed-button'>Proceed to Payment</button>
            <span className='cancel-order'>Cancel Order</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
