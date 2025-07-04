"use client";
import { useState } from "react";
import Image from "next/image";
import phone from "../../Assets/bxs_phone-call.png";
import location from "../../Assets/ic_sharp-email (1).png";
import Mail from "../../Assets/carbon_location-filled.png";
import X from "../../Assets/Group 1000001749.png";
import insta from "../../Assets/Group 1000001750.png";
import circle from "../../Assets/Frame 110.png";
import facebook from "../../Assets/Frame 109.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferred_time: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      payload.append(key, value)
    );

    try {
      const response = await fetch("https://formspree.io/f/xovwbzzd", {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          preferred_time: "",
          consent: false,
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

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
        {submitted ? (
          <div className="bg-white p-6 rounded shadow text-center text-green-600 text-xl font-semibold">
            ✅ Thank you! Your message has been submitted successfully.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[20px] w-full"
          >
            <input
              name="name"
              type="text"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
            />
            <textarea
              name="message"
              placeholder="What brings you here?"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[160px] sm:h-[190px] px-[15px] py-[10px] bg-white rounded shadow-sm outline-none resize-none"
            />
            <input
              name="preferred_time"
              type="text"
              placeholder="Preferred time to reach you"
              value={formData.preferred_time}
              onChange={handleChange}
              className="w-full h-[60px] sm:h-[70px] px-[15px] bg-white rounded shadow-sm outline-none"
            />

            <label className="flex items-center sm:items-center gap-3 text-[#757575] text-[16px] sm:text-[18px]">
              <input
                name="consent"
                type="checkbox"
                required
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 sm:mt-0"
              />
              I agree to be contacted
            </label>

            <button
              type="submit"
              disabled={loading}
              className="button w-full sm:w-[200px] bg-[#8873EF] text-white py-[12px] rounded hover:opacity-90 transition font-semibold text-[16px]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
