import { Header } from '../components/header';
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
          <a>BUY NOW</a>
        </div>
      </section>

      <section className='section2-home'>
        <div>
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div>
            <RangeType />
            <RangeType />
            <RangeType />
          </div>
        </div>
      </section>
    </div>
  )
}
