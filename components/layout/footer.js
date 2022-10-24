import React from "react";
import Logo from "../../public/images/footer-logo.svg";
import Twitter from "../../public/images/icons/twitter.svg";
import Linkedin from "../../public/images/icons/linkedin.svg";
import Mail from "../../public/images/icons/mail.svg";
import Link from "next/link";

const footer_menu = [
  {
    name: 'Docs',
    to: 'http://docs.archetype.dev/'
  },
  {
    name: 'Blogs',
    to: 'blog'
  },
]

const Footer = () => {
  return (
    <footer className="container pt-20 pb-4">
      <div className="lg:flex lg:justify-between">
        <Logo className="mb-16" />
        {/* <div className="lg:max-w-[653px]">
          <p className="mb-[50px] font-sora font-light text-xl leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et.
          </p>
          <div className="md:d-flex md:items-center">
            <input type="text" className="mr-6 mb-3 w-full md:w-[380px] lg:w-full xl:w-[380px] h-16 px-3 py-2 bg-white border border-gray rounded-[9px] text-xl shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
            <ButtonPrimary addClass='h-16 w-full md:mt-0 md:w-[247px] lg:w-full xl:w-[247px] text-xl'>Get Started</ButtonPrimary>
          </div>
        </div> */}
        <div className="mt-10 lg:text-end lg:mt-0">
          <div className="flex justify-around md:block">
            <ul className="md:flex md:justify-end md:mb-11">
              {
                footer_menu.map((item, idx) =>
                  <li key={idx}>
                    <Link href={item.to}>
                      <a className="font-sora text-lg text-gray pl-10">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                )
              }
            </ul>
            <div className="text-end">
              <p><a className="font-sora font-light text-xl text-gray mb-1" href="tel:+120345678901">+12 034 567 89 01</a></p>
              <p className="flex items-center justify-end">
                <Mail className='mr-4' />
                <a href="mailto:info@archetype.com" className="font-sora font-light text-xl text-gray ">
                  info@archetype.com
                </a>
              </p>
              <div className="flex items-center justify-end mt-[55px]">
                <Link href='https://twitter.com/getarchetype'>
                  <a className="mr-6">
                    <Twitter />
                  </a>
                </Link>
                {/* <Link href='/'>
                  <a className="mx-6">
                    <Facebook />
                  </a>
                </Link> */}
                <Link href='http://linkedin.com/company/getarchetype'>
                  <a>
                    <Linkedin />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-20 text-black text-center font-light">©{new Date().getFullYear()} Archetype</p>

    </footer>
  );
};

export default Footer;
