import Link from 'next/link';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../header/Logo';

const data = [
  {
    title: 'Contact',
    url: '/contact',
  },
  {
    title: 'Terms of Use',
    url: '/terms-of-use',
  },
  {
    title: 'Privacy Policy',
    url: '/privacy-policy',
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto my-10 lg:my-20">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="self-center lg:self-start">
          <Logo />
        </div>
        <div className="text-gray-500 self-center">
          <div>
            <p className="text-sm">
              &copy; {year} Keanu Reeves. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
