import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './style.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <main>
          <h1>Nơi thu gom lốp xe cao su không sử dụng nữa!</h1>
          <p>Chúng tôi giúp mọi người thu gom rác thải cao su một cách hiệu quả!</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Đăng ký bán lốp</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;
