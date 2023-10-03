import Image from 'next/image';

import charity from '../../public/images/charity.jpeg';

function page() {
  return (
    <div className="max-w-5xl mx-auto my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 lg:px-0">
          <div className="relative w-auto h-60 lg:w-[500px] lg:h-80">
            <Image
              src={charity}
              alt="Keanu Reeves charity"
              className="object-fill object-center rounded-md"
              fill
            />
          </div>
          <div>
            <h2 className="text-xl text-gray-800 lg:text-3xl font-semibold mb-4 lg:text-start">
              Every Initiative is an opportunity to make the world a better
              place
            </h2>
            <p>
              Our greatest hope is that we inspire people to activate their
              fullest potential and transform lives in their communities. We
              know that if people use their own power to improve lives, they
              will multiply our impact to far greater scales.
            </p>
          </div>
          <section></section>
        </div>
      </div>
    </div>
  );
}

export default page;
