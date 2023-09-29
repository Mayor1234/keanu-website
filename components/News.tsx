'use client';
import React from 'react';

import YoutubePlayers from './YoutubePlayer';
import getYouTubeID from 'get-youtube-id';

const News = () => {
  const id = getYouTubeID(
    'https://youtu.be/2Qj1X1eJkqs?si=7UzpSyGnd8kxUtUX'
  ) as string;

  //youtu.be/L2vS_050c-M
  https: return (
    <div className="max-w-5xl mx-auto my-20">
      <div>
        <h2 className="text-2xl text-center lg:text-start lg:text-3xl font-semibold pb-5 tracking-wide text-gray-800">
          Latest News
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="w-full px-4 lg:w-1/2 lg:px-0 leading-[2]">
            <p className="text-gray-700">
              Gard Hollinger and i first met in 2007 when i was looking into
              customizing a bike. The idea of Arch Motorcycle Company (often
              stylized as ARCH) came into fruition with my collaboration with
              Gard Hollinger, a custom motorcycle builder. I have always had a
              passion for motorcycles and i have been riding them for many
              years.
              <br />
              <br />
              The company is known for producing high-end, custom-built
              motorcycles, and the first model was the Arch KRGT-1. This
              motorcycle was designed to reflect both Gard Hollinger&apos;s and
              i preferences and ideas for a high-performance, custom motorcycle.
              Here is the story:
            </p>
          </div>
          <div className="relative px-4 py-5 h-auto w-full80 lg:w-1/2 lg:h-[400px] lg:px-0">
            <YoutubePlayers id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
