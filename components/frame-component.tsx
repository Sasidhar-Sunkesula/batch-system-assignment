import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1059px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-black font-clash-display mq1050:gap-x-9 lg:flex-wrap ${className}`}
    >
      <div className="w-[141px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-8xs-2 text-gray-300">
        <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex items-center justify-center">
              <img
                className=" w-[2.125rem] h-[2.125rem] overflow-hidden z-[8]"
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <img
                className="ml-1 w-[4.113rem] pt-1 h-[1.831rem] z-[8]"
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
              TM
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-base text-black">
            <div className="flex items-center gap-x-2 leading-[26px] capitalize font-medium whitespace-nowrap z-[8]">
              <img
                className="w-6 h-6 overflow-hidden z-[8]"
                loading="lazy"
                alt=""
                src="/frame-2.svg"
              />
              help@frybix.com
            </div>
            <div className="flex items-center gap-x-2 leading-[26px] capitalize font-medium whitespace-nowrap z-[8]">
              <img
                className="w-6 h-6 overflow-hidden z-[8]"
                loading="lazy"
                alt=""
                src="/frame-3.svg"
              />
              +1 234 456 678 89
            </div>
          </div>
        </div>
      </div>
      <div className="w-[82px] flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 self-stretch relative text-13xl leading-[42px] capitalize font-medium font-inherit text-center inline-block min-w-[82px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          links
        </h2>
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[47px] z-[8]">
            home
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-[3px]">
          <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
            about us
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-[3px]">
          <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
            bookings
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[34px] z-[8]">
            blog
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block min-w-[83px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          legal
        </h2>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[107px] z-[8]">
          terms of use
        </div>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[108px] z-[8]">
          privacy policy
        </div>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[102px] z-[8]">
          cookie policy
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block min-w-[128px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          product
        </h2>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[80px] z-[8]">
          take tour
        </div>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
          live chat
        </div>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[66px] z-[8]">
          reveiws
        </div>
      </div>
      <div className="w-[340px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <h2 className="m-0 relative text-13xl leading-[42px] capitalize font-medium font-inherit z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          Newsletter
        </h2>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[126px] z-[8]">
          Stay up to date
        </div>
        <div className="self-stretch shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white flex flex-row items-start justify-between py-2.5 pr-2.5 pl-6 box-border max-w-full gap-[20px] z-[8] text-gray-200 mq450:flex-wrap">
          <div className="h-[81px] w-[340px] relative shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
            <div className="relative leading-[26px] font-medium inline-block min-w-[83px] z-[1]">{`Your email `}</div>
          </div>
          <button className="cursor-pointer [border:none] pt-[18px] px-10 pb-[17px] bg-black rounded flex flex-row items-start justify-start z-[1] hover:bg-darkslategray">
            <div className="h-[61px] w-40 relative rounded bg-black hidden" />
            <div className="relative text-base leading-[26px] capitalize font-medium font-clash-display text-white text-left inline-block min-w-[80px] z-[1]">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
