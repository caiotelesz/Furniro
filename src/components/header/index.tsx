import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
import './index.scss';

export function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <div className='logo-header'>
              <img src="../assets/logo.png" alt="" />
              <li>
                <a href="#">
                  <span>Furniro</span>
                </a>
              </li>
            </div>
            <div className='content-header'>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </div>
            <div className='icons-header'>
              <li>
                <a href='#'>
                  <UserRound className='icon'/>
                </a>
              </li>
              <li>
                <a href="#">
                  <Search className='icon'/>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heart className='icon'/>
                </a>
              </li>
              <li>
                <a href="#">
                  <ShoppingCart className='icon'/>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

