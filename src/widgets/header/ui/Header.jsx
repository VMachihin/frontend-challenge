import { Nav } from '../../nav/ui/Nav';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Nav />
      </div>
    </header>
  );
};
