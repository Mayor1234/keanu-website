import Link from 'next/link';
import { menuItems } from '../constant';

const Menu = () => {
  return (
    <>
      {menuItems.map((menu, index) => (
        <Link href={`${menu.url}`} key={index}>
          <li className="h-full py-4 border-b-2 border-gray-200 text-[#f7f8f9] items-center uppercase text-base hover:text-pry transition-all delay-150 duration-300 ease-in-out lg:border-none">
            {menu.title}
          </li>
        </Link>
      ))}
    </>
  );
};

export default Menu;
