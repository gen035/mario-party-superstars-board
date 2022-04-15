import React from 'react';
import './styles.sass';

function Header() {
  return (
    <header className="header">
      <div className="row">
        <div className="col-md-12">
          <img className="header__logo" src="/images/logo.png" alt="Mario Party Super Star Logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;