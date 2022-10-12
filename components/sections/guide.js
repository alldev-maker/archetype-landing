import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabList = [
  {
    title: "Dedicated Support",
    content: "You won’t be left alone on a island. 24/7 support offered for select customers.",
    image: "/images/phone.png"
  },
  {
    title: "Integrations",
    content: "Playing telephone between data sources slows the process and results in inevitable mistakes. With Archetype, your customer usage and billing logic live in one platform and can be synced to your CRM and accounting software suite.",
    image: '/images/tool.png'
  },
  {
    title: "Empower your Sales Team",
    content: "Playing telephone between data sources slows the process and results in inevitable mistakes. With Archetype, your customer usage and billing logic live in one platform and can be synced to your CRM and accounting software suite.",
    image: '/images/flash.png'
  },
  {
    title: "15 Minute Integration",
    content: "Let engineers spend time focusing on your core product and growth. An Archetype integration takes less than 15 minutes and allows you to turn on revenue today. No need to slot this in your roadmap.",
    image: '/images/explorer.png'
  },
]

const Guide = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return < section className="guide-bg container w-[calc(100%_-_40px)] my-10 bg-[#f1f1f1] lg:bg-opacity-80 shadow-[0_0_40px_rgba(0,0,0,0.25)] rounded-[20px] py-16 px-6 lg:py-[85px] lg:px-[60px] lg:shadow-[0_0_80px_rgba(0,0,0,0.25)] xl:w-full xl:mt-32 xl:mb-48" >
    <div className="hidden justify-between items-center lg:flex xl:items-start">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {
            tabList.map((item, idx) =>
              <Tab key={idx}>{item.title}</Tab>
            )
          }
        </TabList>
        {
          tabList.map((item, idx) =>
            <TabPanel key={idx}>
              <h3 className="mb-4 font-semibold text-3xl text-gray">
                {item.title}
              </h3>
              <p className="max-w-[635px] text-xl font-light text-gray">
                {item.content}
              </p>
            </TabPanel>
          )
        }
      </Tabs>
      <div className="flex justify-center items-center shrink-0 bg-[url('/images/frost.png')] bg-no-repeat bg-contain bg-center w-1/3 h-full xl:w-[510px] xl:h-[580px]">
        <img className="w-auto" src={tabList[tabIndex].image} alt='Guide img' />
      </div>
    </div>
    <div className="lg:hidden">
      {
        tabList.map((item, idx) =>
          <div className="mb-10 last:mb-0" key={idx}>
            <div className="flex justify-center items-center bg-[url('/images/frost-m.png')] bg-no-repeat bg-contain bg-center m-auto w-[250px] h-[250px] mb-9">
              <img className="w-auto" src={item.image} alt='Guide img' />
            </div>
            <h3 className="mb-4 font-semibold text-lg text-gray text-center">
              {item.title}
            </h3>
            <p className="text-sm font-light text-gray text-center">
              {item.content}
            </p>
          </div>
        )
      }
    </div>
  </section>
}

export default Guide