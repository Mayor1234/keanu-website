// import HeroBtn from './HeroButton';
import Image from 'next/image';
import heroImage from '../../public/images/hero-image2.png';

import { Roboto_Serif } from 'next/font/google';

const tangerine = Roboto_Serif({ subsets: ['latin'], weight: '400' });

const Hero = () => {
  return (
    <div className="relative top-0 h-[450px] lg:h-[600px] w-screen hero-bg bg-no-repeat bg-cover bg-center bg-blend-overlay bg-neutral-700">
      <div className="absolute left-10 bottom-0 top-10 lg:top-20 lg:left-20  flex  items-center justify-center lg:justify-start z-20 max-w-sm lg:max-w-7xl mx-auto overflow-hidden">
        <div className="relative mx-auto w-[280px] lg:right-10 h-[400px] lg:w-80 overflow-hidden">
          <Image
            src={heroImage}
            alt="hero image"
            fill
            className="object-cover object-center block"
          />
        </div>
        <div className="text-lg absolute left-0 right-0 bottom-28 lg:bottom-44 text-center lg:text-start">
          <div className="text-pry rounded-sm text-base pb-3">
            <span>Actor</span>
            <span className='before:content-["\a·\a"]'>Producer</span>
            <span className='before:content-["\a·\a"]'>Musician</span>
          </div>
          <div>
            <h2
              className={`${tangerine.className} text-2xl lg:text-4xl font-semibold text-[#f7f8f9] tracking-wider uppercase`}
            >
              Keanu Reeves
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
