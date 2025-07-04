import React from "react";
import Image from "next/image";
import Share from "../../Assets/export (1).png";
import H from "../../Assets/HeroBanner.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-[40px] lg:gap-[152px] px-section py-12 HeroPadding">
      <div className="flex flex-col gap-[24px] sm:gap-[20px] w-full lg:max-w-[50%]">
        <h1 className="text-[24px] sm:text-[40px] md:text-[60px] font-lato font-bold leading-[1.1] tracking-tight">
          Welcome to
        </h1>

     <h2 className="font-lexend rounded-[10px] border-2 border-[#8873EF] px-[15px] py-[10px] text-[#8873EF] text-[14px] sm:text-[15px] md:text-[16px] font-bold w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
  Dr. Serena Blake, PsyD
</h2>


        <h3 className="text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] xl:text-[70px] leading-tight text-black font-lato font-bold">
          Specialist in anxiety relief, relationship healing, and trauma
          recovery
        </h3>

        <p className="font-lato text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-[#757575]">
          Healing from trauma takes time, compassion, and the right support. Our
          approach helps you process past experiences safely, reduce symptoms
          like flashbacks or hypervigilance, and reclaim a sense of peace.
          Together, we’ll build resilience and gently restore your sense of
          self.
        </p>

        <button className="flex gap-[10px] items-center justify-center text-white bg-[#8873EF] hover:bg-[#6f5ad8] px-[20px] py-[12px] rounded-[8px] text-[16px] font-lato font-semibold w-fit button">
          Book an Appointment{" "}
          <Image src={Share} alt="share icon" width={20} height={20} />
        </button>
      </div>

      <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
        <Image
          src={H}
          alt="Hero banner"
          className="w-full h-auto max-w-[500px] md:max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
