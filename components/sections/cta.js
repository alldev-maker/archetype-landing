import ButtonPrimary from "../shared/ButtonPrimary"

const CallToAction = () => <section className="section-gap lg:py-[200px] bg-purple lg:bg-[url('/images/cta-back-img.png')] bg-no-repeat xl:bg-contain bg-right-bottom">
  <div className="container">
    <h2 className="mb-10 text-white font-bold text-4xl lg:text-7xl">Ready to dive in?</h2>
    <div className="flex flex-col md:flex-row md:items-center">
      <ButtonPrimary addClass='!py-4 !px-10 !bg-white text-purple text-lg lg:text-xl'>Ready to dive in?</ButtonPrimary>
      <a href="/" className="mt-4 text-center text-white text-lg md:mt-0 md:ml-9 md:text-left lg:text-xl">Request Sandbox version</a>
    </div>
  </div>
</section>

export default CallToAction