import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <header
      className={`w-[1198px] flex flex-wrap items-center justify-between max-w-full text-left text-8xs-2 text-black font-plus-jakarta-sans ${className}`}
    >
      <div className=" flex flex-col md:flex-row items-center justify-between gap-[20px] max-w-full">
        <div className="flex flex-col items-center justify-start px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[40px] max-w-full mq450:gap-[20px]">
            <div className="flex cursor-pointer items-center justify-start px-0 pb-0">
              <img
                className="w-[34px] h-[34px] z-[8]"
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <img
                className="w-[65.8px] h-[29.3px] z-[8]"
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
              <b className="relative font-extrabold inline-block min-w-[9px] z-[8]">
                TM
              </b>
            </div>
            <nav className="m-0 flex-1 flex flex-row flex-wrap items-center justify-start gap-[24px] max-w-full text-left text-xl text-black font-clash-display">
              <a className="[text-decoration:none] cursor-pointer relative leading-[26px] capitalize font-bold text-tomato inline-block min-w-[60px] z-[8]">
                home
              </a>
              <a className="[text-decoration:none] cursor-pointer flex-1 relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[89px] whitespace-nowrap z-[8]">
                about us
              </a>
              <a className="[text-decoration:none] cursor-pointer relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[68px] z-[8]">
                pricing
              </a>
              <a className="[text-decoration:none] cursor-pointer flex-1 relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[89px] z-[8]">
                features
              </a>
            </nav>
          </div>
        </div>
      </div>
      <button className="cursor-pointer mq1050:mt-8 w-[180px] [border:none] py-4 px-[46px] bg-black rounded flex flex-row items-start justify-end mq1050:mx-auto z-30 hover:bg-darkslategray">
        <div className="h-[60px] w-[180px] relative rounded bg-black hidden" />
        <a className="[text-decoration:none] relative text-lg leading-[28px] capitalize font-medium font-clash-display text-white text-left inline-block min-w-[88px] z-[1]">
          download
        </a>
      </button>
    </header>
  );
};

export default FrameComponent3;
