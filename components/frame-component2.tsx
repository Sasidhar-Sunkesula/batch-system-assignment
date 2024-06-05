import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 w-[618px] flex flex-col justify-center pt-0 px-0 box-border gap-[24px] max-w-full text-left text-lg text-black font-clash-display mq750:box-border ${className}`}
    >
      <h1 className="m-0 w-[618px] mq1050:text-center relative text-45xl leading-[64px] capitalize font-bold font-inherit inline-block max-w-full z-[8] mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">
        make the best financial decisions
      </h1>
      <p data-animate-on-scroll className="m-0 self-stretch mq1050:text-center relative leading-[28px] capitalize font-medium text-gray-500 z-[8]">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
      <div className="w-[374px] flex flex-row justify-between items-center max-w-full gap-[20px] mq450:flex-wrap">
        <button className="cursor-pointer [border:none] py-4 px-[23px] bg-black rounded flex flex-row items-start justify-start gap-[6px] z-[8]">
          <div className="h-[60px] w-[180px] relative rounded bg-black hidden" />
          <div data-animate-on-scroll className="relative text-lg leading-[28px] capitalize font-medium font-clash-display text-white text-left inline-block min-w-[104px] whitespace-nowrap z-[1]">
            get started
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
            <img
              className="w-6 h-[7.4px] relative z-[1]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </button>
        <div className="flex items-center gap-x-2 justify-center px-0 pb-0">
          <img data-animate-on-scroll className=" w-[29px] h-[29px] z-[8]" alt="" src="/group-3.svg" />
          <div data-animate-on-scroll className="leading-[28px] capitalize font-medium inline-block min-w-[111px] z-[8]">
            watch video
          </div>
        </div>
      </div>
      <img src="badge.png" data-animate-on-scroll className="w-[540px] mq1050:w-full" alt="badge" />
    </div>
  );
};

export default FrameComponent2;
