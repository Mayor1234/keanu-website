import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const YoutubePlayers = ({ id }: { id: string }) => {
  // const onReady = (event: any) => {
  //     // Access the player instance
  //     const player = event.target;

  //     // For example, you can automatically play the video
  //     player.playVideo();
  //   };

  //   const onError = (error: any) => {
  //     console.error('YouTube Player Error:', error);
  //   };

  return (
    <>
      <LiteYouTubeEmbed
        id={id}
        title="The Arch Motocyle Story"
        aspectWidth={16}
        aspectHeight={9}
        playerClass="lty-playbtn"
        poster="hqdefault"
      />
    </>
  );
};

export default YoutubePlayers;
