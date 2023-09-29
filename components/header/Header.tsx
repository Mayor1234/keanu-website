import Logo from './Logo';
import MenuItems from './MenuItems';

const Header = () => {
  return (
    <header className="h-20 w-full sticky top-0 left-0 z-50  bg-black">
      <nav className="max-w-7xl mx-auto h-full w-full flex justify-between items-center px-5 lg:px-0">
        <Logo />

        <MenuItems />
      </nav>
    </header>
  );
};

export default Header;
