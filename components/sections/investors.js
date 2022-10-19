const Investors = () =>
  <section className="mx-auto section-gap">
    <div className="container px-5 mx-auto lg:px-24 ">
      <p className="text-gray text-2xl text-center font-semibold lg:text-[32px] lg:leading-[38px] lg:font-bold">
        Backed By:
      </p>
      <div className="grid grid-cols-2 gap-8 my-[30px] text-center lg:my-11 lg:grid-cols-4">
        <div className="flex items-center justify-center">
          <img
            src="/images/mac.svg"
            alt="mac"
            className="block object-contain "
          ></img>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/magic-fund.svg"
            alt="Magic Fund"
            className="block object-contain "
          ></img>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/soma-capital.svg"
            alt="Soma Capital"
            className="block object-contain "
          ></img>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/hustle-fund.svg"
            alt="Hustle Fund"
            className="block object-contain "
          ></img>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray text-lg font-bold lg:text-[35px] lg:leading-[42px] lg:font-bold">
          angel investors from:
        </p>
        <img className="px-4" src='images/google.svg' alt='Google' />
        <img className="pl-4" src='images/a16z.svg' alt='a16z' />
      </div>
    </div>
  </section>

export default Investors