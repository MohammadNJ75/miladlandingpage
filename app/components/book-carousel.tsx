"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Orb from "@/app/orb";
import bookPic from "@/app/assets/book.JPG";

export default function BookCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const items = carousel.querySelectorAll(".carousel-item");

    const updateZIndex = () => {
      // Get the current rotation of the carousel
      const transform = getComputedStyle(carousel).transform;
      const matrix = new DOMMatrix(transform);
      let angle = Math.atan2(matrix.m32, matrix.m33) * (180 / Math.PI);

      // Normalize angle to 0-360
      angle = (angle + 360) % 360;

      items.forEach((item, index) => {
        // Calculate each item's current position in the rotation
        // Each item is positioned 45 degrees apart
        let itemAngle = (index * 45 - angle) % 360;
        if (itemAngle < 0) itemAngle += 360;

        // If the item is in front (between 315 and 45 degrees), give it higher z-index
        if (itemAngle > 315 || itemAngle < 45) {
          item.classList.add("front");
        } else {
          item.classList.remove("front");
        }
      });
    };

    // Update z-index periodically
    const interval = setInterval(updateZIndex, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene">
      <div style={{ width: "100%", height: "150%", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-item">ویدیوی آموزشی</div>
        <div className="carousel-item">کاربردی</div>
        <div className="carousel-item">پشتیبانی</div>
        <div className="carousel-item"> RouterOS v7 مناسب</div>
      </div>
      <div className="book">
        <Image
          src={bookPic}
          width={300}
          height={400}
          alt="Book Cover"
          className="rounded-md shadow-2xl"
        />
      </div>
    </div>
  );
}
