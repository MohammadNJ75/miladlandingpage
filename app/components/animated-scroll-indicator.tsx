"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function AnimatedScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    const section2 = document.getElementById("section-2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={indicatorRef}
      onClick={scrollToSection}
      className="flex flex-col items-center cursor-pointer animate-bounce absolute top-full mt-10"
    >
      <p className="text-[#778DA9]-600 font-medium mb-2">جزئیات بیشتر</p>
      <ChevronDown className="h-6 w-6 text-[#778DA9]-600" />
    </div>
  );
}
