"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookCarousel from "@/app/components/book-carousel";
import VideoPlayer from "@/app/components/video-player";
import BookChapters from "@/app/components/book-chapters";
import AnimatedScrollIndicator from "@/app/components/animated-scroll-indicator";
import PreOrderModal from "@/app/components/pre-order-modal";
import DiscountBadge from "@/app/components/discount-badge";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Book Section with Animated Background Shapes */}
        <section className="w-full h-auto py-12 md:py-24 lg:py-32 xl:py-36 flex items-center justify-center relative overflow-hidden">
          {/* Background Animated Shapes */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            {/* Circle 1 */}
            <motion.svg
              className="absolute floating-shape delay-1 top-1"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              initial={{ x: -100, y: -50 }}
              animate={{
                x: [-100, -80, -110, -100],
                y: [-50, -30, -60, -50],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <defs>
                <radialGradient
                  id="gradient1"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#FF7F50", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#FF1493", stopOpacity: 1 }}
                  />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
            </motion.svg>

            {/* Circle 2 */}
            <motion.svg
              className="absolute floating-shape delay-5 right-5"
              width="180"
              height="180"
              viewBox="0 0 180 180"
              initial={{ x: -150, y: -150, rotate: 0 }}
              animate={{
                x: [-150, -130, -170, -150],
                y: [-150, -130, -160, -150],
                rotate: [0, 10, -5, 0],
              }}
              transition={{
                duration: 11,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <defs>
                <linearGradient
                  id="blobGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#20BDFF", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#A5FECB", stopOpacity: 0.8 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M86.5,1.5 C116.5,1.5 180,41.5 180,90.5 C180,139.5 116.5,179.5 86.5,179.5 C56.5,179.5 1,139.5 1,90.5 C1,41.5 56.5,1.5 86.5,1.5 Z"
                fill="url(#blobGradient)"
              />
            </motion.svg>

            {/* Curvy Shape 1 */}
            <motion.svg
              className="absolute floating-shape delay-3 left-10"
              width="300"
              height="200"
              viewBox="0 0 300 200"
              initial={{ x: -50, y: 100, rotate: 0 }}
              animate={{
                x: [-50, -30, -70, -50],
                y: [100, 120, 90, 100],
                rotate: [0, 5, -3, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <defs>
                <linearGradient
                  id="curvyGradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#FFD700", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#FF4500", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M0,100 Q150,0 300,100 Q150,200 0,100 Z"
                fill="url(#curvyGradient1)"
              />
            </motion.svg>

            {/* Curvy Shape 2 */}
            <motion.svg
              className="absolute pulsing-shape delay-4 bottom-10"
              width="250"
              height="200"
              viewBox="0 0 250 200"
              initial={{ x: 80, y: -120, rotate: 0 }}
              animate={{
                x: [80, 100, 60, 80],
                y: [-120, -100, -130, -120],
                rotate: [0, -5, 3, 0],
              }}
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <defs>
                <linearGradient
                  id="curvyGradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#6A5ACD", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#8A2BE2", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M0,100 C100,0 150,200 250,100 C200,0 0,200 0,100 Z"
                fill="url(#curvyGradient2)"
              />
            </motion.svg>

            {/* New Blob Shape */}

            {/* New Triangle Shape */}
            <motion.svg
              className="absolute pulsing-shape delay-1 top-1 left-52"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ x: 180, y: 150, rotate: 0 }}
              animate={{
                x: [180, 200, 170, 180],
                y: [150, 170, 140, 150],
                rotate: [0, 15, -10, 0],
              }}
              transition={{
                duration: 13,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <defs>
                <linearGradient
                  id="triangleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#FF9A8B", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#FF6A88", stopOpacity: 0.8 }}
                  />
                </linearGradient>
              </defs>
              <polygon
                points="60,10 110,110 10,110"
                fill="url(#triangleGradient)"
              />
            </motion.svg>
          </div>

          <div className="relative z-10">
            <DiscountBadge />
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center">
                <BookCarousel />

                <div className=" text-center space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl border-b-2 border-gray-300 pb-2 mb-4 transition-all duration-300 hover:border-blue-500">
                    نویسنده : میلاد احمدی
                  </h1>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl text-slate-900">
                    کاربردی ترین کتاب میکروتیکی که تهیه می کنید
                  </p>
                  <div className="flex flex-col items-center space-y-3 pt-2">
                    {/* Original Price - Crossed Out */}
                    <div
                      className="flex items-center space-x-2 gap-3 bg-gradient-to-r from-[#283048] to-[#859398] p-1 rounded-md"
                      dir="rtl"
                    >
                      <span className="text-2xl md:text-3xl  text-gray-900 font-semibold  dark:text-green-400">
                        750,۰۰۰ تومان
                      </span>
                      <span className="text-xl md:text-2xl  font-thin text-gray-400 line-through decoration-gray-500 decoration-2">
                        1,500,۰۰۰ تومان
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-6 items-center">
                    <Button
                      className="bg-[#0D1B2A] hover:bg-[#415A77] w-[100%] sm:w-[125%]  text-white font-semibold py-2 px-4 rounded transition-all duration-200 "
                      onClick={() => setIsModalOpen(true)}
                    >
                      ثبت سفارش
                    </Button>
                    <AnimatedScrollIndicator />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Video and Chapters */}
        <section
          id="section-2"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            {/* First div: Video and paragraph */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="h-[400px]">
                <VideoPlayer />
              </div>
              <div className="flex flex-col justify-center" dir="auto">
                <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">
                  چرا باید این کتاب رو تهیه کنید؟
                </h2>
                <p className="text-muted-foreground mb-4 text-right" dir="auto">
                  این کتاب در ۷ فصل و با پوشش ۱۵۳ موضوع تخصصی نوشته شده تا یه
                  منبع کامل و کاربردی برای کار با RouterOS ورژن ۷ باشه. نوشتن
                  این کتاب دو دلیل مهم داشت:
                </p>
                <p className="text-muted-foreground mb-4 text-right" dir="auto">
                  اول، اینکه تو دنیای شبکه، مخصوصاً توی میکروتیک، همیشه یه کمبود
                  جدی برای منابع فارسی بوده و خیلی از مطالب یا قدیمی بودن یا از
                  دید مهندسی شبکه درست بررسی نشده بودن برای همین خواستم این خلا
                  رو پر کنم و یه مرجع درست و حسابی برای بچه‌های شبکه بسازم.
                </p>
                <p className="text-muted-foreground text-right" dir="auto">
                  دوم، اینکه مسیر تألیف کتابای تخصصی تو حوزه شبکه برای بقیه
                  هموارتر بشه که اگر این کتاب بتونه باعث بشه بقیه متخصص‌ها هم
                  وارد این مسیر بشن و توی زمینه‌های مختلف منابع فارسی قوی‌تری
                  داشته باشیم، یعنی رسالتم رو درست انجام دادم.
                </p>
              </div>
            </div>

            {/* Second div: Accordion for chapters */}
            <div className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tighter mb-2">
                  فصل های کتاب
                </h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto">
                  با خواندن این کتاب چه چیزی یاد میگیریم؟
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <BookChapters />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-10">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#1B263B] flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-lg font-bold">MiladAhmadi</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025
            <a
              href="https://www.instagram.com/nejatifrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:text-red-500 transition-colors duration-300"
            >
              Designed By NejatiTech.
            </a>
            All rights reserved.
          </p>
        </div>
      </footer>
      {/* Pre-order Modal */}
      <PreOrderModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
