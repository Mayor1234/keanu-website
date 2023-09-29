import Link from 'next/link';

import { BsArrowReturnLeft } from 'react-icons/bs';

function StudioNavbar(props: any) {
  return (
    <div className="flex flex-col bg-gray-800">
      <Link href="/">
        <div className=" flex items-center text-[#fff] p-5 hover:text-[#1890ff] ">
          <BsArrowReturnLeft className="h-4 mr-2" />
          Back To Website
        </div>
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
