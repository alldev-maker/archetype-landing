import React from "react";
import Image from "next/image";
import ButtonPrimary from "../shared/ButtonPrimary";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mt-28">
      <div className="md:flex">
        <div className="flex flex-col justify-center items-start w-full lg:max-w-[550px]">
          <h1 className="mb-6 text-gray font-medium text-4xl leading-[44px] xl:font-bold xl:text-[64px] xl:leading-[77px]">
            Revenue Infrastructure for your <span className="font-sora text-purple">API</span>
          </h1>
          <p className="text-gray mb-12 text-center font-light text-xs leading-[19px] md:text-left md:text-lg">
            Archetype helps API companies launch, iterate and scale their businesses with flexible and developer-first infrastructure that works at any size and stage.
          </p>
          <div className="mx-auto text-center md:m-0 md:text-left">
            <ButtonPrimary addClass='mb-2 lg:mb-6 lg:px-10 lg:py-[18px] lg:text-lg lg:font-bold'>Request a demo</ButtonPrimary>
            <Link href='/'>
              <a className="block text-purple text-sm lg:font-light lg:text-lg">
                Request Sandbox version
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex w-full">
          <div className="h-full w-full">
            <Image
              src="/images/hero-img.png"
              alt="Daily Revenue"
              quality={100}
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
