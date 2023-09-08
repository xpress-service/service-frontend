import React from "react";
import pageicon1 from "../../icons/pageicon1.svg";
import pageicon2 from "../../icons/pageicon2.svg";
import pageicon3 from "../../icons/pageicon3.svg";
import pageicon4 from "../../icons/pageicon4.svg";
import pageicon5 from "../../icons/pageicon5.svg";

const HowWeWork = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-full">
      <h1 className="w-[347px] text-lg font-bold text-center">How we work</h1>
      <p className="w-[1191px] text-center">
        Get to know the policy about our services, and the brief narration on
        how it help to solve societal problem
      </p>
      <div className="flex flex-row justify-between items-center mt-8">
        <div>
          <div className="w-[104px] h-[104px] justify-center items-cente">
            <img src={pageicon1} alt="" width={80} />
          </div>
          <h3 className="w-[270px] text-md font-bold mt-2 mb-2">
            Connect your Store
          </h3>
          <p className="w-[222px]">
            It s a business model that enables the buying and selling of goods
            and services over the internet.
          </p>
        </div>
        <div>
          <div className="w-[104px] h-[104px] justify-center items-cente">
            <img src={pageicon2} alt="" width={80} />
          </div>
          <h3 className="w-[222px] text-md font-bold mt-2 mb-2">
            Sell Product/Render Service/Render Service
          </h3>
          <p className="w-[201px]">
            A business model that enables the buying and selling of goods and
            services over the internet.
          </p>
        </div>
        <div>
          <div className="w-[104px] h-[104px] justify-center items-cente">
            <img src={pageicon3} alt="" width={80} />
          </div>
          <h3 className="w-[222px] text-md font-bold mt-2 mb-2">Book/Order</h3>
          <p className="w-[178px]">
            Web based mechanism that facilitates Ordering by Customer
          </p>
        </div>
        <div>
          <div className="w-[104px] h-[104px] justify-center items-cente">
            <img src={pageicon4} alt="" width={80} />
          </div>
          <h3 className="w-[222px] text-md font-bold mt-2 mb-2">
            Order Complete
          </h3>
          <p className="w-[172px]">
            the clarify that the order is completed in process line.
          </p>
        </div>
        <div>
          <div className="w-[104px] h-[104px] justify-center items-center">
            <img src={pageicon5} alt="" width={80} />
          </div>
          <h3 className="w-[222px] text-md font-bold mt-2 mb-2">
            Wait for delivery
          </h3>
          <p className="w-[222px]">
            It express that the request made from order will be deliver soon, as
            it await to get delivered.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HowWeWork;
