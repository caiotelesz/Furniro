import { Header } from '../components/header';
import { Product } from '../components/Product';
import { RangeType } from '../components/rangetype';
import './index.scss';

export function Home() {
  return (
    <div className="home">
      <Header />

      <section className='section1-home'>
        <img src="../assets/home_section1.png" alt="" />

        <div className='text-overlay'>
          <h1>New Arrival</h1>
          <h2>Discover Our <br /> New Collection</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
          <a href='#'>BUY NOW</a>
        </div>
      </section>

      <section className='section2-home'>
        <div className='card1_section2'>
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div>
            <RangeType img="/assets/img-dining.png" title="Dining" />
            <RangeType img="/assets/img-living.png" title="Living" />
            <RangeType img="/assets/img-bedroom.png"  title="Bedroom" />
          </div>
        </div>
      </section>

      <section className='section3-home'>
        <div className='card1_section3'>
          <h1>Our Products</h1>

          <div>
            <Product
              img="/assets/products/syltherine.png"
              name="Syltherine"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              originalPrice="Rp 3.500.000"
              discount="-30%"
            />
            <Product
              img="/assets/products/syltherine.png"
              name="Syltherine"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              originalPrice="Rp 3.500.000"
              discount="-30%"
            />
            <Product
              img="/assets/products/syltherine.png"
              name="Syltherine"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              originalPrice="Rp 3.500.000"
              discount="-30%"
            />
            <Product
              img="/assets/products/leviosa.png"
              name="Leviosa"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              isNew
            />
            <Product
              img="/assets/products/syltherine.png"
              name="Syltherine"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              originalPrice="Rp 3.500.000"
              discount="-30%"
            />
            <Product
              img="/assets/products/syltherine.png"
              name="Syltherine"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              originalPrice="Rp 3.500.000"
              discount="-30%"
            />
            <Product
              img="/assets/products/syltherine.png"
              name="Syltherine"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              originalPrice="Rp 3.500.000"
              discount="-30%"
            />
            <Product
              img="/assets/products/leviosa.png"
              name="Leviosa"
              description="Stylish cafe chair"
              currentPrice="Rp 2.500.000"
              isNew
            />  
          </div>
        </div>
      </section>
    </div>
  )
}
