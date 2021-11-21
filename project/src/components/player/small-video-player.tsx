type VideoPlayerProps = {
  previewSrc: string;
}

function VideoPlayer({previewSrc}: VideoPlayerProps): JSX.Element {

  return (
    <video autoPlay muted src={previewSrc} className="player__video"></video>
  );
}

export default VideoPlayer;
