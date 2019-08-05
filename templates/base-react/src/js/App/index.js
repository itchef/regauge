import React, { PureComponent } from 'react';
import './index.scss';
import logo from '../../assets/images/Logo.png';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app__wrapper">
        <div className="app__header" />
        <div className="app__content">
          <img src={logo} className="logo__wrapper" alt="Logo" />
        </div>
        <div className="app__footer">
              Your app has been created.
          {' '}
          <br />
              To know more visit
          {' '}
          <a href="https://github.com/itchef/regauge">regauge</a>
.
        </div>
      </div>
    );
  }
}
