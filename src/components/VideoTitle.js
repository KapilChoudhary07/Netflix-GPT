const VideoTitle = ({ title, overview}) => {
  return <div className=" w-screen  aspect-video  md: pt-[25%]  pl-2 md:pl-12 absolute text-white bg-gradient-to-l from-black  ">
    <h1 className=" text-2xl md:text-6xl  font-bold mt-6  md:-mt-6  ">{title}</h1>
    <p className=" hidden md:inline-block text-lg py-5 w-2/4 ">{overview}</p>
    <div className="my-3 md:m-0 ">
      <button className="mx-2 bg-white  py-1 md:py-2 px-1 md:px-10 text-black rounded-md font-mono text-xl  hover:bg-opacity-80">▶Play</button>
      <button className="mx-2 hidden md:inline-block  bg-gray-200 p-2 py-2 px-8 text-white rounded-md font-mono text-xl bg-opacity-30  hover:bg-opacity-40">More Info</button>
    </div>
  </div>;
};

export default VideoTitle;
