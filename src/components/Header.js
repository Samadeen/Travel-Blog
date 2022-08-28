import Globe from '../assets/Globe.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Globe} alt={'globe icon'} />
        <p>My Travel Blog</p>
      </nav>
    </header>
  );
};

export default Header;
