import { useState, useRef } from 'react';
import Minus from '../public/images/icons/minus.svg'
import Plus from '../public/images/icons/plus.svg'

export const Accordion = ({ question, answer }) => {
  const contentSpace = useRef(null);

  const [expand, setExpand] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-500 ease');

  const toggleAccordion = () => {
    setExpand(!expand);
    setHeight(expand ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      expand
        ? 'transform duration-500 ease'
        : 'transform duration-500 ease rotate-90'
    );
  };

  return (
    <div className="max-w-[1080px] border-t border-[#D9D9D9] py-[17px] px-[10px] xl:pt-4 xl:pb-[19px]">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={toggleAccordion}
      >
        <p className="text-lg text-gray lg:text-xl">
          {question}
        </p>
        <p className={`ml-4 w-10 h-10 flex flex-shrink-0 items-center justify-center border-4 border-[#575757] rounded-[50%]`}>
          {expand ? <Minus /> : <Plus />}
        </p>

      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <p className="py-4 text-gray text-base lg:text-lg">{answer}</p>
      </div>
    </div>
  );
};
