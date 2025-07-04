import React from "react";
import Image from "next/image";
import Anxiety from "../../Assets/Anxiety.png";
import Relation from "../../Assets/communications_13089933 (1).png";
import Trauma from "../../Assets/substance-abuse_18560365.png";

const Services = () => {
  return (
    <div className="flex flex-col Padding gap-[40px] sm:gap-[50px]">
      <h1 className="font-bold font-[lato] text-[24px] sm:text-[30px] leading-[1] tracking-[0] text-black text-center">
        <span>Our </span>
        <span className="text-[#8873EF]"> Main Services</span>
      </h1>
      <h2 className="font-bold font-[lato] text-[20px] sm:text-[30px] leading-[1] tracking-[0] text-black text-center">
        Categories
      </h2>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center gap-[30px] sm:gap-[40px] md:gap-[70px] font-[lato] ">
        <div className="group flex gap-[25px] flex-col bg-[#ffff] rounded-[10px] items-center p-[20px] transition-all duration-300 hover:bg-[#8873EF] w-full sm:w-[47%] lg:w-[30%] service  ">
          <Image src={Anxiety} alt="anxiety" className="w-40" />
          <h1 className="font-bold text-[20px] leading-[1] tracking-[0] text-black group-hover:text-white mb-[10px] transition-all duration-300 text-center">
            Anxiety & Stress Management
          </h1>
          <p className="text-[14px] leading-[20px] tracking-[0] text-[#757575] group-hover:text-white mb-[10px] transition-all duration-300 text-center">
            Learn practical tools to calm your mind, manage stress, and regain
            <br />
            control. Sessions help you identify triggers and
            <br />
            build simple coping strategies.
          </p>
        </div>

        <div className="group flex gap-[25px] flex-col bg-[#ffff] rounded-[10px] items-center p-[20px] transition-all duration-300 hover:bg-[#8873EF] w-full sm:w-[47%] lg:w-[30%] service ">
          <Image src={Relation} alt="relationship" className="w-40" />
          <h1 className="font-bold text-[20px] leading-[1] tracking-[0] text-black group-hover:text-white mb-[10px] transition-all duration-300 text-center">
            Relationship Counseling
          </h1>
          <p className="text-[14px] leading-[20px] tracking-[0] text-[#757575] group-hover:text-white mb-[10px] transition-all duration-300 text-center ">
            Improve communication and rebuild trust with your
            <br />
            partner. Therapy offers a safe space to explore patterns
            <br />
            and strengthen emotional connection.
          </p>
        </div>

        <div className="group flex gap-[25px] flex-col bg-[#ffff] rounded-[10px] items-center p-[20px] transition-all duration-300 hover:bg-[#8873EF] w-full sm:w-[47%] lg:w-[30%] service ">
          <Image src={Trauma} alt="trauma" className="w-40" />
          <h1 className="font-bold text-[20px] leading-[1] tracking-[0] text-black group-hover:text-white mb-[10px] transition-all duration-300 text-center">
            Trauma Recovery
          </h1>
          <p className="text-[14px] leading-[20px] tracking-[0] text-[#757575] group-hover:text-white mb-[10px] transition-all duration-300 text-center">
            Heal from trauma through a safe, supportive approach.
            <br />
            Reduce symptoms like flashbacks and restore peace and
            <br />
            resilience at your own pace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
