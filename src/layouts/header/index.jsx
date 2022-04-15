import React from 'react';
import './styles.sass';

function Header() {
  return (
    <header className="header d-lg-block d-none">
      <div className="row align-items-center">
        <div className="col-lg-10 col-xl-8">
          <img className="header__logo" src="/images/logo.png" alt="Mario Party Super Star Logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;