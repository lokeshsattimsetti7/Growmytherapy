"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What kind of therapy does Dr. Serena Blake provide?",
    answer:
      "Dr. Blake specializes in individual therapy, couples counseling, and stress management, using evidence-based approaches such as CBT and mindfulness practices.",
  },
  {
    question: "Do you offer online or virtual therapy?",
    answer:
      "Yes, Dr. Blake offers both in-person and secure virtual sessions, depending on your preference and availability.",
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book a session through the contact form or call us directly using the details provided in the Contact section.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. All therapy sessions are confidential and follow ethical and legal privacy standards.",
  },
  {
    question: "What should I expect in my first session?",
    answer:
      "During your first session, Dr. Blake will take time to understand your concerns, goals, and background. It's a comfortable space to begin building a therapeutic relationship.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We do not currently accept insurance, but we can provide you with a superbill for reimbursement if your provider covers out-of-network mental health services.",
  },
  {
    question: "How long is each therapy session?",
    answer:
      "Each session typically lasts 50 minutes. Extended sessions may be available upon request.",
  },
  {
    question: "How often should I attend therapy?",
    answer:
      "Therapy frequency depends on your needs. Many clients start with weekly sessions, and adjust as progress is made.",
  },
  {
    question: "What age groups do you work with?",
    answer:
      "Dr. Blake works primarily with adults and adolescents aged 16 and above.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel with at least 24 hours' notice. Cancellations made less than 24 hours in advance may incur a fee.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const contentRefs = useRef([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col px-[20px] md:px-[60px] lg:px-[100px] py-[80px] gap-[60px] font-[lato] Padding items-center">
      <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[40px] leading-[1.2] text-center text-black">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-[25px] w-full max-w-[1000px] mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-100 transition"
            >
              <span className="font-inter font-semibold text-[18px] sm:text-[22px] md:text-[24px] text-[#8873EF]">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight:
                  openIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
              }}
              className="px-5 overflow-hidden transition-all duration-500 ease-in-out"
            >
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#757575] py-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
