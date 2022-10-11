import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabList = [
  {
    title: 'Setup',
    content: 'On Archetype, it can take minutes to integrate and immediately start charging customers based on rate limits, quotas, plans, permissions and more. Analytics into your revenue are updated by minute.',
    image: '/images/phone.png'
  },
  {
    title: 'Endpoint Specific Pricing',
    content: 'On Archetype, it can take minutes to integrate and immediately start charging customers based on rate limits, quotas, plans, permissions and more. Analytics into your revenue are updated by minute.',
    image: '/images/phone.png'
  },
  {
    title: 'Custom billable metrics',
    content: 'On Archetype, it can take minutes to integrate and immediately start charging customers based on rate limits, quotas, plans, permissions and more. Analytics into your revenue are updated by minute.',
    image: '/images/phone.png'
  },
]

const Guide = () => {
  return < section className="section-gap container" >
    <div className="bg-image">
      <Tabs>
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
              <div className="flex flex-col justify-between lg:flex-row">
                <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
                  <h3 className="hidden mb-4 font-semibold text-2xl text-gray lg:block md:mb-6">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-gray md:text-base">
                    {item.content}
                  </p>
                </div>
                <div className="w-full flex justify-center lg:w-1/2">
                  <img className="w-auto" src={item.image} alt='Guide img' />
                </div>
              </div>
            </TabPanel>
          )
        }
      </Tabs>
    </div>
  </section>
}

export default Guide