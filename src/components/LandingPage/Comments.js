import React, { useState } from "react";
import coment1 from "../../icons/coment1.svg";
import coment2 from "../../icons/coment2.svg";
import coment3 from "../../icons/coment3.svg";

const Comments = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: coment1, left: "60%", top: "5%" },
    { src: coment1, left: "2%", top: "35%" },
    { src: coment1, left: "10%", top: "100%" },
    { src: coment2, left: "65%", top: "120%" },
    { src: coment3, left: "100%", top: "45%" },
    // Add more images as needed
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2
        className="w-[650px] font-semibold font-size-50px text-center text-4xl mb-5 font-sans"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        Comment from past users
      </h2>
      <p
        className="w-[962px] text-center font-sans mb-5"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        An expression of opinion either in speech or writing The most frequent
        comment was that service was fast, A comment is a remark or observation
        that expresses a person's observation or criticism. To comment is to
        make such a remark.
      </p>
      <div className="flex flex-row gap-20 mt-5 w-[800px] justify-between mb-20">
        <div className="relative w-48 h-48 mt-5 w-[400px] justify-start">
          {/* <div className="absolute inset-0 flex justify-center items-center">
    <img
      src={coment1}
      alt=""
      className="rounded-full h-16 w-16 absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: '50%', top: '5%' }}
    />
    <img
      src={coment1}
      alt=""
      className="rounded-full h-16 w-16 absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: '5%', top: '35%' }}
    />
    <img
      src={coment1}
      alt=""
      className="rounded-full h-16 w-16 absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: '7%', top: '85%' }}
    />
    <img
      src={coment2}
      alt=""
      className="rounded-full h-16 w-16 absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: '65%', top: '95%' }}
     
    />

    <img
      src={coment3}
      alt=""
      className="rounded-full h-16 w-16 absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: '100%', top: '45%' }}
    />
  </div> */}

          <div className="absolute inset-0 flex justify-center items-center gap-40px">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt=""
                className={`rounded-full h-16 w-16 absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                  activeIndex === index
                    ? "w-24 h-24 border-4 border-[#ECEDEF]"
                    : ""
                }`}
                style={{ left: image.left, top: image.top }}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#CDFFA6" />
            </svg>

            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="7.5" fill="#FCC99A" />
            </svg>
          </div>

          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-4 mt-8">
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#6599FF" />
              </svg>

              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#6599FF" />
              </svg>

              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#6599FF" />
              </svg>

              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="5" fill="#6599FF" />
              </svg>

              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#6599FF" />
              </svg>

              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#6599FF" />
              </svg>

              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#6599FF" />
              </svg>
            </div>

            <div className="flex flex-col">
              <h3 className="w-[190px] font-bold text-xl">Godwin George</h3>
              <h6 className="w-[66px] text-[#3177FF]">Farmer</h6>
              <p className="w-[243px] text-color-#726E6E">
                ServiceXpress is a productive website, which has help me to get
                quick access to car repairer when my car broke down at the
                middle of a journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#FF9B05] w-[1250px] rounded-3xl h-[556px] mb-32 items-center justify-center mt-10">
        <div className="flex flex-row justify-between w-[900px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#FC9A9A" />
          </svg>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="#FCC99A" />
          </svg>
        </div>
        <h2
          className="w-[497px] text-white font-bold text-center text-4xl mb-5 font-sans"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Try it for free, join now
        </h2>
        <p className="w-[593px] text-center font-size-15px mb-10px text-white">
          Try it for free and get access to unlimited Task and Event management
          with stress free, a special platform where you can trace your project
          with no impediment,
        </p>

        <div className="flex w-[1100px] justify-end">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#9AFCA4" />
          </svg>
        </div>
        <div className="relative flex items-center">
          <svg
            className="absolute left-0 w-[3px2] h-[32px] ml-3 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="M19 24H4L3.997 8.906L15.431 16.822C15.5982 16.9377 15.7967 16.9997 16 16.9997C16.2033 16.9997 16.4018 16.9377 16.569 16.822L28 8.91V18H30V8C29.9992 7.46981 29.7882 6.96156 29.4133 6.58666C29.0384 6.21176 28.5302 6.00079 28 6H4C3.46973 6.00053 2.96133 6.21141 2.58637 6.58637C2.21141 6.96133 2.00053 7.46973 2 8V24C2.00079 24.5302 2.21176 25.0384 2.58666 25.4133C2.96156 25.7882 3.46981 25.9992 4 26H19V24ZM25.799 8L16 14.784L6.201 8H25.799Z"
              fill="#969292"
            />
          </svg>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-3 py-3 rounded-xl w-[661px] h-[115px] items-center content-center text-center"
          />
          <button className="absolute top-0 right-0 bg-[#FF9B05] text-white py-3 px-6 rounded-3xl w-[204px] h-[85px] mr-8 mt-4 font-25px">
            Subscribe Subscribe to our Newsletter
          </button>
        </div>
        <div className="flex w-[380px] justify-end">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="#FCC99A" />
          </svg>
        </div>
        <div className="flex flex-row w-[900px] justify-start">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#FC9A9A" />
          </svg>
        </div>
        <div className="flex flex-row w-[1100px] justify-start mt-5">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#9AFCA4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Comments;
