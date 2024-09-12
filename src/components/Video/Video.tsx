type HomeTemplateProps = {
    VideoSource: string;
  };
import "./Video.css"
const Video = ({
    VideoSource,
  }: HomeTemplateProps) => {
  return (
    <div>
      <div className="lg:basis-1/2 basis-full relative">
          <video
            width="100%"
            height="auto"
            muted
            autoPlay
            playsInline
            loop
            preload="metadata"
          >
            <source src={VideoSource} className="z-50" type="video/mp4" />
            {/* You can add additional source elements for different video formats */}
          </video>
          <div className="glow-bg lg:w-[500px] lg:h-[500px] h-[450px] w-[350px]"></div>
        </div>
    </div>
  )
}

export default Video
