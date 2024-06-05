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

const AppLandingPage: NextPage = () => {
  return (
    <div className="w-full relative rounded-[50px] bg-white overflow-hidden flex flex-col items-start justify-start pt-10 pb-[41.3px] pr-[25px] pl-[175px] box-border gap-[80px] leading-[normal] tracking-[normal] text-left text-lg text-black font-clash-display mq750:gap-[57px] mq750:px-[10px] mq750:box-border mq450:gap-[29px] mq450:pl-5 mq450:box-border">
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FullyCustomizable />
      <TestimonialComponent />
      <FAQComponent />
      <div className="w-[1090px] mx-auto flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full z-20">
        <SeventhPage />
        <img
          src="image.png"
          className="mq1050:w-full w-0 mq1050:h-5/6 mq1050:pl-0"
          alt=""
        />
      </div>
      <Main />
      <div className="w-[1091px] mx-auto flex flex-col items-end justify-start gap-[92px] max-w-full lg:gap-[46px] mq750:gap-[23px]">
        <FrameComponent />
        <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full text-left text-base text-black font-clash-display">
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
