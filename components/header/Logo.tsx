import React from 'react';
import logo from '../../public/images/keanu-logo.png';
import Image from 'next/image';
import Link from 'next/link';
const Logo = () => {
  return (
    <div>
      <div className="relative h-10 w-10 lg:h-14 lg:w-14">
        <Link href="/">
          <Image
            src={logo}
            alt="keanu Logo"
            fill
            className="object-cover object-center"
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
