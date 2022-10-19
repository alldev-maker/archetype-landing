import { useState } from "react";
import ButtonPrimary from "../shared/ButtonPrimary"
import RequestModal from "../shared/request-modal";

const CallToAction = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleEvent = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  }
  return <>
    <section className="section-gap lg:py-[200px] bg-purple lg:bg-[url('/images/cta-back-img.png')] bg-no-repeat xl:bg-contain bg-right-bottom">
      <div className="container">
        <h2 className="mb-10 text-white font-bold text-4xl lg:text-7xl">Ready to dive in?</h2>
        <div className="flex flex-col md:flex-row md:items-center">
          <ButtonPrimary addClass='!py-4 !px-10 !bg-white text-purple text-lg lg:text-xl' onPress={handleEvent}>
            Request a demo
          </ButtonPrimary>
          <button className="mt-4 text-center text-white text-lg md:mt-0 md:ml-9 md:text-left lg:text-xl" onClick={handleEvent}>Request Sandbox version</button>
        </div>
      </div>
    </section>
    <RequestModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
  </>
}
export default CallToAction