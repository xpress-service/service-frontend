import React from "react";
import man from "../../icons/images/man.svg";
import service from "../../icons/images/service.svg";
import tutor from "../../icons/images/tutor.svg";
import hair from "../../icons/images/hair.svg";
import vert from "../../icons/images/vert.svg";
import order from "../../icons/images/order.svg";
import dryclean from "../../icons/images/dryclean.svg";

const Services = () => {
  return (
    <div className="bg-amber-50 justify-center items-center px-8">
        <h1 className="text-center font-bold text-xl mt-16">
        Order service anywhere
      </h1>
      <div className="flex flex-row gap-x-40">
      <div>
        <img src={man} alt="" />
      </div>
      <div className="flex flex-row mt-8 gap-40">
        <div className="flex flex-col">
          <div>
            <div>
              <img src={service} alt="" />
            </div>
            <p className="w-[145px] mt-4 font-bold">Find A Mechanic</p>
            <p className="w-[268px] mt-3">
              Access a skilled worker who repairs and maintains vehicle engines
              and other machinery.
            </p>
          </div>

          <div>
            <div>
              <img src={dryclean} alt="" />
            </div>
            <p className="w-[183px] mt-4 font-bold">Dry Cleaning Service</p>
            <p className="w-[266px] mt-3 mb-3">
              the washing of clothing and other textiles, and, more broadly,
              their drying and ironing as well.
            </p>
          </div>

          <div>
            <div>
              <img src={tutor} alt="" />
            </div>
            <p className="w-[112] font-bold mt-4">Home Tutors</p>
            <p className="w-[266px] mt-3 mb-3">
              it is a form of tutoring that occurs in the home
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div>
            <div>
              <img src={order} alt="" />
            </div>
            <p className="w-[140px] font-bold mt-4">Order Fast Food</p>
            <p className="w-[297px] mt-3 mb-3">
              Order easily prepared processed food served in snack bars and
              restaurants as a quick meal or to be taken away.
            </p>
          </div>

          <div>
            <div>
              <img src={hair} alt="" />
            </div>
            <p className="w-[118px] font-bold mt-4">Hair Dressing</p>
            <p className="w-[284px] mt-3 mb-3">
              Having access to a person who cuts and styles hair as an
              occupation.
            </p>
          </div>

          <div>
            <div>
              <img src={vert} alt="" />
            </div>
            <p className="w-[162px] font-bold mt-4">Veterinary Service</p>
            <p className="w-[278px] mt-3 mb-3">
              relating to the diseases, injuries, and treatment of farm and
              domestic animals.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
