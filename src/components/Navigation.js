import { NavLink } from 'react-router-dom';
import NavCSS from './Navigation.module.css';

const navigation = () => (
  <nav className={NavCSS.nav}>
    <h2>
      <NavLink className={NavCSS.logo} to="/">Math-Magicians</NavLink>
    </h2>
    <ul className={NavCSS.ul}>
      <li>
        <NavLink className={NavCSS.navlink} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={NavCSS.navlink} to="/calculator">Calculate</NavLink>
      </li>
      <li>
        <NavLink className={NavCSS.navlink} to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default navigation;
