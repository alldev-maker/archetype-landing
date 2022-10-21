import React, { useState } from "react";
import ButtonPrimary from "../shared/ButtonPrimary";
import RequestModal from "../shared/request-modal";

const Hero = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleEvent = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <>
      <section className="container mt-28">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center items-start w-full lg:max-w-[435px]">
            <h1 className="mb-6 text-gray font-medium text-3xl lg:font-bold lg:text-5xl">
              Revenue Infrastructure for your <span className="font-sora text-purple">API</span>
            </h1>
            <p className="text-gray mb-12 text-center font-light text-sm leading-[19px] md:text-left md:text-lg">
              Archetype helps API companies launch, iterate and scale their businesses with flexible and developer-first infrastructure that works at any size and stage.
            </p>
            <div className="mx-auto text-center md:m-0 md:text-left">
              <ButtonPrimary addClass='mb-2 lg:mb-6 lg:px-10 lg:py-[18px] lg:text-lg lg:font-bold' onPress={handleEvent}>Request a demo</ButtonPrimary>
              <button className="block text-purple text-sm lg:font-light lg:text-lg" onClick={handleEvent}>
                Request Sandbox version
              </button>
            </div>
          </div>
          <div className="hidden lg:flex w-full">
            <div className="h-full w-full">
              <img
                src="/images/hero-img.svg"
                alt="Daily Revenue"
              />
            </div>
          </div>
        </div>
      </section>
      <RequestModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>

  );
};

export default Hero;
