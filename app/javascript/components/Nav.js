import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul className="links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/greetings">
          <li>Greetings</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
