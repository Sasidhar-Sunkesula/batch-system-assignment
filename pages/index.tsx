
import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import SeventhPage from "../components/seventh-page";
import FrameComponent from "../components/frame-component";
import { FAQComponent } from "../components/FAQComponent";
import { TestimonialComponent } from "../components/TestimonalComponent";
import { FullyCustomizable } from "../components/FullyCustomizable";
import { Main } from "../components/Main";
import { useEffect } from "react";

const AppLandingPage: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn", "animate-pop");
          } else {
            entry.target.classList.remove("animate-fadeIn", "animate-pop");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    scrollAnimElements.forEach((elem) => observer.observe(elem));

    return () => {
      scrollAnimElements.forEach((elem) => observer.unobserve(elem));
    };
  }, []);
  return (
    <div data-animate-on-scroll className="w-full animate-fadeIn animate-pop [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] relative rounded-[50px] bg-white overflow-hidden flex flex-col items-start justify-start pt-10 pb-[41.3px] pr-[25px] pl-[175px] box-border gap-[60px] leading-[normal] tracking-[normal] text-left text-lg text-black font-clash-display mq750:gap-[57px] mq750:px-[10px] mq750:box-border mq450:gap-[29px] mq450:pl-5 mq450:box-border">
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FullyCustomizable />
      <TestimonialComponent />
      <FAQComponent />
      <div data-animate-on-scroll className="w-[1090px] mx-auto flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full z-20">
        <SeventhPage />
        <img
          src="image.png"
          className="mq1050:w-full w-0 mq1050:h-5/6 mq1050:pl-0"
          alt=""
        />
      </div>
      <Main />
      <div data-animate-on-scroll className="w-[1091px] mx-auto flex flex-col items-end justify-start gap-[92px] max-w-full lg:gap-[46px] mq750:gap-[23px]">
        <FrameComponent />
        <footer data-animate-on-scroll className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full text-left text-base text-black font-clash-display">
          <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-center pt-[37px] pb-[39px] pr-5 pl-6 max-w-full z-[8] border-t-[1px] border-solid border-gray-600">
            <div className="relative leading-[26px] capitalize font-medium">
              Copyright 2022 uifry.com all rights reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppLandingPage;
