'use client';
import { useRouter } from 'next/navigation';

const HeroBtn = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="uppercase py-3 px-6 bg-nude5 text-[#f2f2f2]  rounded-[50px] text-sm font-medium transition duration-300 ease-in-out hover:bg-nude4 hover:text-[#f7f8f9] lg:text-base lg:px-8 lg:py-4"
      onClick={() => router.push('/explore/styles')}
    >
      Read more...
    </button>
  );
};

export default HeroBtn;
