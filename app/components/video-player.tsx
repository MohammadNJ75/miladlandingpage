"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set up Intersection Observer to detect when video is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log("Autoplay prevented:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the video is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-lg overflow-hidden shadow-xl"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        loop
        playsInline
        controls
        preload="auto"
      >
        <source src="/film.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
