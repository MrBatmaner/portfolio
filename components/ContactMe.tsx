import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import pageInfo from "@/schemaTypes/pageInfo";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) `;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {" "}
      <h3 className="absolute top-20 uppercase text-gray-500 tracking-[10px] md:tracking-[20px] lg:tracking-[20px] xl:tracking-[20px] text-xl md:text-2xl lg:text-2xl xl:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-2 md:space-y-10 lg:space-y-10 xl:space-y-10">
        <h4 className="text-xl md:text-4xl xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-5 md:space-y-10 lg:space-y-10 xl:space-y-10">
          <div className="flex items-center space-x-2 md:space-x-5 lg:space-x-5 xl:space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl xl:text-2xl">
              {pageInfo.phoneNumber}
            </p>
          </div>

          <div className="flex items-center space-x-2 md:space-x-5 lg:space-x-5 xl:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl xl:text-2xl">
              {pageInfo.email}
            </p>
          </div>

          <div className="flex items-center space-x-2 md:space-x-5 lg:space-x-5 xl:space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl xl:text-2xl">
              {pageInfo.address}
            </p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-3">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
