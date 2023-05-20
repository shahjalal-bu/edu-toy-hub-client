import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto px-5 sm:px-20">
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-full lg:h-[400px]"
          >
            <img
              src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg"
              className="w-full object-fill rounded"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full lg:h-[400px]"
          >
            <img
              src="https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg"
              className="w-full object-fill  rounded"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide3"
            className="carousel-item relative lg:h-[400px] w-full"
          >
            <img
              src="https://images.pexels.com/photos/8294814/pexels-photo-8294814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover w-full rounded"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
