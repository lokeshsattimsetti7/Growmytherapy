import React from "react";
import Image from "next/image";
import AboutImage from "../../Assets/Hero.png";
import logo from "../../Assets/medal-star.png";
import Share from "../../Assets/export (1).png";

const Hero = () => {
  return (
    <div className="flex Padding flex-col-reverse lg:flex-row w-full items-center justify-between gap-[40px] lg:gap-[164px] px-[20px] sm:px-[40px] md:px-[60px] py-[100px] lg:py-[200px] bg-[#EEEEEE]">
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
        <Image
          src={AboutImage}
          alt="Image"
          className="w-full h-auto max-w-[500px]"
        />
      </div>
      <div className="flex flex-col gap-[20px] max-w-full lg:max-w-[50%]">
        <h1 className="flex items-center text-[24px] sm:text-[30px] md:text-[35px] leading-[1.2] tracking-tight font-bold font-lato gap-[10px]">
          Dr. Serena Blake{" "}
          <Image src={logo} alt="logo" width={28} height={28} />
        </h1>

        <p className="font-lato text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[1.6] text-[#757575]">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
          Los Angeles, CA, with eight years of experience and over 500 client
          sessions. She blends evidence-based approaches—like
          cognitive-behavioral therapy and mindfulness—with{" "}
        </p>

        <p className="font-lato text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[1.6] text-[#757575]">
          compassionate, personalized care to help you overcome anxiety,
          strengthen relationships, and heal from trauma. Whether you meet in
          her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
          committed to creating a safe, supportive space for you to thrive.
        </p>

        <button className="flex gap-[10px] items-center justify-center bg-[#8873EF] hover:bg-[#6f5ad8] text-white px-[20px] py-[10px] rounded-[8px] w-fit font-lato text-[16px] font-semibold button">
          Learn More{" "}
          <Image src={Share} alt="share icon" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
