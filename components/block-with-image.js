const BlockWithImage = ({ heading, contents, image, background }) => {
  return <section className={`section-gap ${background ? 'purple-gradient' : ''}`}>
    <div className="container">
      <div className={`flex items-center flex-wrap ${background ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="w-full sm:w-1/2">
          <h2 className={`max-w-[730px] mb-6 text-2xl whitespace-pre-line lg:text-5xl lg:font-medium lg:leading-[60px] ${background ? 'text-white' : 'text-gray'}`}>{heading}</h2>
          <ul className="max-w-[600px] list-disc pl-[18px] lg:pl-[23px]">
            {
              contents.map((item, idx) =>
                <li key={idx} className={`font-light text-xs mb-3 lg:text-2xl lg:mb-6 ${background ? 'text-white' : 'text-gray'}`}>
                  {item}
                </li>
              )
            }
          </ul>
        </div>
        <div className="w-full mt-5 sm:w-1/2 sm:mt-0">
          <img src={image} alt='motion' />
        </div>
      </div>
    </div>
  </section>
}

export default BlockWithImage