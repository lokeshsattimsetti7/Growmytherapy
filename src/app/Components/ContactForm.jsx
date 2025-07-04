"use client";
import Image from "next/image";
import phone from "../../Assets/bxs_phone-call.png";
import location from "../../Assets/ic_sharp-email (1).png";
import Mail from "../../Assets/carbon_location-filled.png";
import X from "../../Assets/Group 1000001749.png";
import insta from "../../Assets/Group 1000001750.png";
import circle from "../../Assets/Frame 110.png";
import facebook from "../../Assets/Frame 109.png";

const ContactForm = () => {
  return (
    <div className="Padding flex flex-col lg:flex-row justify-between gap-[60px] bg-[#EEEEEE] font-[lato]">
      {/* Left Section */}
      <div className="flex flex-col gap-[30px] w-full lg:max-w-[50%]">
        <h1 className="font-bold text-[36px] sm:text-[50px] lg:text-[80px] leading-tight">
          Get in Touch
        </h1>
        <h2 className="font-bold text-[28px] sm:text-[40px] lg:text-[60px] leading-snug">
          Have any questions?
        </h2>
        <h3 className="font-bold text-[24px] sm:text-[36px] lg:text-[50px] leading-snug text-[#8873EF]">
          Just write us a message!
        </h3>

        <div className="flex flex-col gap-[16px] mt-[10px]">
          <p className="flex items-center gap-[12px] text-[#757575] text-[16px] sm:text-[20px] lg:text-[24px]">
            <Image src={phone} alt="phone" /> (323) 555-0192
          </p>
          <p className="flex items-center gap-[12px] text-[#757575] text-[16px] sm:text-[20px] lg:text-[24px]">
            <Image src={location} alt="email" /> serena@blakepsychology.com
          </p>
          <p className="flex items-center gap-[12px] text-[#757575] text-[16px] sm:text-[20px] lg:text-[24px]">
            <Image src={Mail} alt="location" /> 1287 Maplewood Drive, Los
            Angeles, CA 90026
          </p>
        </div>

        <div className="flex gap-[20px] mt-[20px]">
          <Image src={X} alt="X" width={32} height={32} />
          <Image src={insta} alt="Instagram" width={32} height={32} />
          <Image src={circle} alt="Circle" width={32} height={32} />
          <Image src={facebook} alt="Facebook" width={32} height={32} />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:max-w-[50%]">
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSd-1Dh4-wg9LbXqGeuY44Uvi6x6Ia2QGttGycrq2ipVpT7OLA/formResponse"
          method="POST"
          target="_blank"
          className="flex flex-col gap-[20px] w-full"
        >
          <input
            name="entry.1055094210"
            type="text"
            placeholder="Full name"
            required
            className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
          />
          <input
            name="entry.1589330120"
            type="tel"
            placeholder="Phone number"
            required
            className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
          />
          <input
            name="entry.31582027"
            type="email"
            placeholder="Email"
            required
            className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
          />
          <textarea
            name="entry.889202189"
            placeholder="What brings you here?"
            rows={5}
            required
            className="w-full h-[160px] sm:h-[190px] px-[15px] py-[10px] bg-white rounded shadow-sm outline-none resize-none"
          />
          <input
            name="entry.244831634"
            type="text"
            placeholder="Preferred time to reach you"
            className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
          />

          <label className="flex items-start sm:items-center gap-3 text-[#757575] text-[16px] sm:text-[18px]">
            <input
              name="entry.1501888128"
              type="checkbox"
              className="mt-1 sm:mt-0"
              required
            />
            I agree to be contacted
          </label>

          <button
            type="submit"
            className="button w-full sm:w-[200px] bg-[#8873EF] text-white py-[12px] rounded hover:opacity-90 transition font-semibold text-[16px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
