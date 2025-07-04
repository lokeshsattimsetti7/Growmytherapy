import React from "react";
import Image from "next/image";
import Star from "../../Assets/star.svg";
import One from "../../Assets/ReviewOne.png";
import Two from "../../Assets/ReviewTwo.png";
import Three from "../../Assets/ReviewThree.png";
import Four from "../../Assets/ReviewFour.png";
import Five from "../../Assets/ReviewSix.png";

const Testmonial = () => {
  return (
    <div className="flex flex-col Padding bg-[#EEEEEE] gap-[40px]">
      <h1 className="font-bold font-[lato] text-[24px] sm:text-[30px] leading-tight tracking-normal text-center">
        What our great customers say <br />
        about <span className="text-[#5BF0AF]">Dr Serena Blake</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        <div className="flex flex-col bg-white p-[20px] rounded-md font-[lato] shadow-sm service">
          <div className="flex items-center gap-[15px] mb-[10px]">
            <Image src={One} alt="reviewer one" />
            <div>
              <h1 className="font-inter font-bold text-[16px] sm:text-[18px]">
                Maria Gonzales
              </h1>
              <span className="text-[#5BF0AF] text-[14px]">Barcelona</span>
            </div>
            <div className="ml-auto flex items-center gap-[4px]">
              <Image src={Star} alt="star" />
              <span className="text-[#5BF0AF] font-semibold text-[14px]">
                4.8
              </span>
            </div>
          </div>
          <p className="text-[14px] text-[#757575] text-center leading-[1.5] service">
            Dr. Blake helped me manage my anxiety with compassion and expertise.
            I feel like I have my life back!
          </p>
        </div>

        <div className="flex flex-col bg-white p-[20px] rounded-md font-[lato] shadow-sm service">
          <div className="flex items-center gap-[15px] mb-[10px]">
            <Image src={Two} alt="reviewer two" />
            <div>
              <h1 className="font-inter font-bold text-[16px] sm:text-[18px]">
                Jeremy Wilson
              </h1>
              <span className="text-[#5BF0AF] text-[14px]">Toronto</span>
            </div>
            <div className="ml-auto flex items-center gap-[4px]">
              <Image src={Star} alt="star" />
              <span className="text-[#5BF0AF] font-semibold text-[14px]">
                4.6
              </span>
            </div>
          </div>
          <p className="text-[14px] text-[#757575] text-center leading-[1.5] service">
            I’ve seen several therapists over the years, but none as
            understanding and insightful as Dr. Serena.
          </p>
        </div>

        <div className="flex flex-col bg-white p-[20px] rounded-md font-[lato] shadow-sm service">
          <div className="flex items-center gap-[15px] mb-[10px]">
            <Image src={Five} alt="reviewer three" />
            <div>
              <h1 className="font-inter font-bold text-[16px] sm:text-[18px]">
                Ayesha Malik
              </h1>
              <span className="text-[#5BF0AF] text-[14px]">Dubai</span>
            </div>
            <div className="ml-auto flex items-center gap-[4px]">
              <Image src={Star} alt="star" />
              <span className="text-[#5BF0AF] font-semibold text-[14px]">
                5.0
              </span>
            </div>
          </div>
          <p className="text-[14px] text-[#757575] text-center leading-[1.5] service">
            Her sessions are incredibly helpful and calming. I always leave with
            more clarity and peace of mind.
          </p>
        </div>

        <div className="flex flex-col bg-white p-[20px] rounded-md font-[lato] shadow-sm service">
          <div className="flex items-center gap-[15px] mb-[10px]">
            <Image src={Four} alt="reviewer four" />
            <div>
              <h1 className="font-inter font-bold text-[16px] sm:text-[18px]">
                Nathan Kim
              </h1>
              <span className="text-[#5BF0AF] text-[14px]">Seoul</span>
            </div>
            <div className="ml-auto flex items-center gap-[4px]">
              <Image src={Star} alt="star" />
              <span className="text-[#5BF0AF] font-semibold text-[14px]">
                4.7
              </span>
            </div>
          </div>
          <p className="text-[14px] text-[#757575] text-center leading-[1.5] service">
            Thanks to Dr. Blake’s guidance, I’ve made real progress in my mental
            health journey. Highly recommend!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
